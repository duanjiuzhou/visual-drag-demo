import { useCallback, useEffect, useRef, useState } from 'react'

// utils
import { mod360 } from './utils/translate'

// css
import './style.scss'

// 点的八个角度
const pointList = ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']
// 每个点对应的初始角度
const initialAngle = {
  lt: 0,
  t: 45,
  rt: 90,
  r: 135,
  rb: 180,
  b: 225,
  lb: 270,
  l: 315,
}
// 每个范围的角度对应的光标
const angleToCursor = [
  { start: 338, end: 23, cursor: 'nw' },
  { start: 23, end: 68, cursor: 'n' },
  { start: 68, end: 113, cursor: 'ne' },
  { start: 113, end: 158, cursor: 'e' },
  { start: 158, end: 203, cursor: 'se' },
  { start: 203, end: 248, cursor: 's' },
  { start: 248, end: 293, cursor: 'sw' },
  { start: 293, end: 338, cursor: 'w' },
]
const dataIndex = 'drag-shape-point'

interface boxProps {
  width: number
  height: number
  left: number
  top: number
  zIndex: number
  rotate: number
}

interface DragProps {
  children: React.ReactNode // React.ReactElement JSX.Element
  id?: string
  index?: number
  active: boolean
  box: boxProps
  onDragStart?: (box: boxProps) => void
  onDrag?: (box: boxProps) => void
  onDragEnd?: (box: boxProps) => void
}

function Drag(props: DragProps) {
  const { children, box, active, onDrag, onDragStart, onDragEnd } = props
  const [boxStyle, setBoxStyle] = useState({
    width: box.width,
    height: box.height,
  })
  const [cursors, setCursors] = useState<Record<string, string>>({})
  const shapeEl = useRef<any>()

  const getPointStyle = useCallback(
    (point: string) => {
      const { width, height } = boxStyle
      const hasT = /t/.test(point)
      const hasB = /b/.test(point)
      const hasL = /l/.test(point)
      const hasR = /r/.test(point)
      let newLeft = 0
      let newTop = 0

      // 四个角的点
      if (point.length === 2) {
        newLeft = hasL ? 0 : width
        newTop = hasT ? 0 : height
      } else {
        // 上下两点的点，宽度居中
        if (hasT || hasB) {
          newLeft = width / 2
          newTop = hasT ? 0 : height
        }

        // 左右两边的点，高度居中
        if (hasL || hasR) {
          newLeft = hasL ? 0 : width
          newTop = Math.floor(height / 2)
        }
      }

      const style = {
        marginLeft: hasR ? '-4px' : '-4px',
        marginTop: '-4px',
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: cursors[point],
      }

      return style
    },
    [boxStyle, cursors]
  )

  const getCursor = useCallback(() => {
    const _rotate = mod360(box.rotate) // 取余 360
    const result: Record<string, string> = {}
    let lastMatchIndex = -1 // 从上一个命中的角度的索引开始匹配下一个，降低时间复杂度

    pointList.forEach((point) => {
      const angle = mod360(initialAngle[point] + _rotate)
      const len = angleToCursor.length
      // eslint-disable-next-line no-constant-condition
      while (true) {
        lastMatchIndex = (lastMatchIndex + 1) % len
        const angleLimit = angleToCursor[lastMatchIndex]
        if (angle < 23 || angle >= 338) {
          result[point] = 'nw-resize'

          return
        }

        if (angleLimit.start <= angle && angle < angleLimit.end) {
          result[point] = `${angleLimit.cursor}-resize`

          return
        }
      }
    })

    return result
  }, [box.rotate])

  const handleMouseDownOnPoint = useCallback(
    (point: string, e) => {
      onDragStart && onDragStart(box)
      // setIsClickComponent(true)
      e.stopPropagation()
      e.preventDefault()

      const pos = { ...box }
      const _height = Number(pos.height)
      const _width = Number(pos.width)
      const _top = Number(pos.top)
      const _left = Number(pos.left)
      const startX = e.clientX
      const startY = e.clientY

      let isFirst = true

      const move = (moveEvent: MouseEvent) => {
        // 第一次点击时也会触发 move，所以会有“刚点击组件但未移动，组件的大小却改变了”的情况发生
        // 因此第一次点击时不触发 move 事件
        if (isFirst) {
          isFirst = false
          return
        }

        const currX = moveEvent.clientX
        const currY = moveEvent.clientY
        const disY = currY - startY
        const disX = currX - startX
        const hasT = /t/.test(point)
        const hasB = /b/.test(point)
        const hasL = /l/.test(point)
        const hasR = /r/.test(point)
        const newHeight = _height + (hasT ? -disY : hasB ? disY : 0)
        const newWidth = _width + (hasL ? -disX : hasR ? disX : 0)
        pos.height = newHeight > 0 ? newHeight : 0
        pos.width = newWidth > 0 ? newWidth : 0
        pos.left = _left + (hasL ? disX : 0)
        pos.top = _top + (hasT ? disY : 0)

        const shapeElStyle = shapeEl.current.target.style
        shapeElStyle.top = `${pos.top}px`
        shapeElStyle.left = `${pos.left}px`
        shapeElStyle.width = `${pos.width}px`
        shapeElStyle.height = `${pos.height}px`

        setBoxStyle({ width: pos.width, height: pos.height })
        onDrag && onDrag(pos)
      }

      const up = () => {
        // 修改当前组件样式
        // updateComponent(id, {
        //   box: pos,
        // })
        onDragEnd && onDragEnd(pos)

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    [box, onDrag, onDragEnd, onDragStart]
  )

  const handleMouseDownOnShape = useCallback(
    (e) => {
      shapeEl.current = e
      if (e.target.dataset.index === dataIndex) {
        return
      }
      onDragStart && onDragStart(box)
      // setIsClickComponent(true)
      // setActiveComponentIndex(index)

      e.stopPropagation()
      const pos = { ...box }
      const startY = e.clientY
      const startX = e.clientX

      // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
      const startTop = Number(pos.top)
      const startLeft = Number(pos.left)

      const move = (moveEvent: MouseEvent) => {
        const curX = moveEvent.clientX
        const curY = moveEvent.clientY
        pos.top = curY - startY + startTop
        pos.left = curX - startX + startLeft
        const style = e.target.style
        style.top = `${pos.top}px`
        style.left = `${pos.left}px`
        onDrag && onDrag(pos)
      }

      const up = () => {
        // 修改当前组件样式
        // updateComponent(id, {
        //   box: pos,
        // })
        onDragEnd && onDragEnd(pos)

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    [box, onDrag, onDragEnd, onDragStart]
  )

  useEffect(() => {
    setBoxStyle({ width: box.width, height: box.height })
  }, [box.height, box.width])

  useEffect(() => {
    if (active) {
      setCursors(getCursor())
    }
  }, [active, getCursor])

  return (
    <div
      className="drag-shape-wrap"
      onMouseDown={handleMouseDownOnShape}
      style={{
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: box.zIndex,
        transform: `rotate(${box.rotate}deg)`,
        outline: active ? '1px solid #70c0ff' : 'none',
      }}
    >
      {active &&
        pointList.map((item) => (
          <div
            className="drag-shape-point"
            key={item}
            style={getPointStyle(item)}
            data-index={dataIndex}
            onMouseDown={handleMouseDownOnPoint.bind(null, item)}
          ></div>
        ))}
      {children}
    </div>
  )
}

export default Drag
