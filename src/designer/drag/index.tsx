import { useCallback, useEffect, useRef, useState } from 'react'

// utils
import { mod360 } from './utils/translate'
import calculateComponentPositonAndSize from './utils/calculateComponentPositonAndSize'

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
  /**
   * @description 画布元素或者画布id (Canvas element or canvas id)
   * @default
   */
  container: string
  /**
   * @description 是否处于激活状态，将开启拉伸、旋转功能
   * @default false
   */
  isActive?: boolean
  /**
   * @description 是否禁止拖拽
   * @default false
   */
  isStatic?: boolean
  /**
   * @description 盒子布局样式
   * @default
   */
  box: boxProps
  /**
   * @description 子节点
   * @default
   */
  children: React.ReactNode // React.ReactElement JSX.Element
  /**
   * @description 拖拽开始事件钩子
   * @default
   */
  onDragStart?: (box: boxProps) => void
  /**
   * @description 拖拽中事件钩子
   * @default
   */
  onDrag?: (box: boxProps) => void
  /**
   * @description 拖拽结束事件钩子
   * @default
   */
  onDragEnd?: (box: boxProps) => void
}

function Drag(props: DragProps) {
  const {
    children,
    box,
    isActive,
    container,
    onDrag,
    onDragStart,
    onDragEnd,
  } = props
  const [boxStyle, setBoxStyle] = useState({
    width: box.width,
    height: box.height,
  })
  const [cursors, setCursors] = useState<Record<string, string>>({})
  const shapeEl = useRef<HTMLDivElement>(null)

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
      e.stopPropagation()
      e.preventDefault()

      const style = { ...box }

      // 组件宽高比
      const proportion = style.width / style.height

      // 组件中心点
      const center = {
        x: style.left + style.width / 2,
        y: style.top + style.height / 2,
      }

      // 获取画布位移信息
      const editorRectInfo = document
        .querySelector(container)
        ?.getBoundingClientRect()

      if (!editorRectInfo) {
        throw new Error('container属性为空，或者获取画布dom失败')
        // return
      }

      // 当前点击坐标
      const curPoint = {
        x: e.clientX - editorRectInfo.left,
        y: e.clientY - editorRectInfo.top,
      }

      // 获取对称点的坐标
      const symmetricPoint = {
        x: center.x - (curPoint.x - center.x),
        y: center.y - (curPoint.y - center.y),
      }

      const needLockProportion = false

      let isFirst = true

      const move = (moveEvent: MouseEvent) => {
        // 第一次点击时也会触发 move，所以会有“刚点击组件但未移动，组件的大小却改变了”的情况发生
        // 因此第一次点击时不触发 move 事件
        if (isFirst) {
          isFirst = false
          return
        }

        const curPositon = {
          x: moveEvent.clientX - editorRectInfo.left,
          y: moveEvent.clientY - editorRectInfo.top,
        }

        calculateComponentPositonAndSize(
          point,
          style,
          curPositon,
          proportion,
          needLockProportion,
          {
            center,
            curPoint,
            symmetricPoint,
          }
        )

        if (shapeEl.current) {
          const shapeElStyle = shapeEl.current.style
          shapeElStyle.top = `${style.top}px`
          shapeElStyle.left = `${style.left}px`
          shapeElStyle.width = `${style.width}px`
          shapeElStyle.height = `${style.height}px`
        }

        setBoxStyle({ width: style.width, height: style.height })
        onDrag && onDrag(style)
      }

      const up = () => {
        // 修改当前组件样式
        onDragEnd && onDragEnd(style)

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    [box, container, onDrag, onDragEnd, onDragStart]
  )

  const handleRotate = useCallback(
    (e) => {
      onDragStart && onDragStart(box)
      e.stopPropagation()
      e.preventDefault()

      // 初始坐标和初始角度
      const pos = { ...box }
      const startY = e.clientY
      const startX = e.clientX
      const startRotate = pos.rotate

      // 获取元素中心点位置
      const rect = shapeEl.current!.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // 旋转前的角度
      const rotateDegreeBefore =
        Math.atan2(startY - centerY, startX - centerX) / (Math.PI / 180)

      const move = (moveEvent: MouseEvent) => {
        const curX = moveEvent.clientX
        const curY = moveEvent.clientY
        // 旋转后的角度
        const rotateDegreeAfter =
          Math.atan2(curY - centerY, curX - centerX) / (Math.PI / 180)
        // 获取旋转的角度值
        pos.rotate = Math.round(
          startRotate + rotateDegreeAfter - rotateDegreeBefore
        )

        // 修改当前组件样式
        if (shapeEl.current) {
          const shapeElStyle = shapeEl.current.style
          shapeElStyle.transform = `rotate(${pos.rotate}deg)`
        }
        onDrag && onDrag(pos)
      }

      const up = () => {
        // 修改当前组件样式
        onDragEnd && onDragEnd(pos)
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
        // setCursors(getCursor()) // 根据旋转角度获取光标位置
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    [box, onDrag, onDragEnd, onDragStart]
  )

  const handleMouseDownOnShape = useCallback(
    (e) => {
      if (e.target.dataset.index === dataIndex) {
        return
      }
      onDragStart && onDragStart(box)
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
    if (isActive) {
      setCursors(getCursor())
    }
  }, [isActive, getCursor])

  return (
    <div
      className="drag-shape-wrap"
      onMouseDown={handleMouseDownOnShape}
      ref={shapeEl}
      style={{
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: box.zIndex,
        transform: `rotate(${box.rotate}deg)`,
        outline: isActive ? '1px solid #70c0ff' : 'none',
      }}
    >
      {isActive && (
        <>
          <span>
            <svg
              onMouseDown={handleRotate}
              data-index={dataIndex}
              className="drag-shape-rotate"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3070"
            >
              <path
                d="M512 957.671444c-237.936053 0-431.558986-193.622933-431.558986-431.558985S274.063947 94.553473 512 94.553473c86.368247 0 169.914002 25.402426 241.323043 73.667034 14.112459 9.596472 18.063947 28.789416 8.467475 43.184124-9.596472 14.112459-28.789416 18.063947-43.184123 8.467475-60.965821-41.208379-132.657111-63.223815-206.606395-63.223815-203.783903 0-369.464168 165.680265-369.464168 369.464168s165.680265 369.464168 369.464168 369.464167c98.787211 0 191.364939-38.385888 261.362734-108.101433s108.101433-162.575524 108.101434-261.362734c0-17.2172 13.830209-31.047409 31.047409-31.047409s31.047409 13.830209 31.047409 31.047409c0 115.157663-44.877619 223.541345-126.44763 305.111356s-189.953693 126.44763-305.111356 126.447629z"
                p-id="3071"
              ></path>
              <path
                d="M822.191841 257.693495c-16.652701 8.185226-36.974642 1.411246-45.442117-15.241455l-77.054024-154.108049c-8.185226-16.652701-1.411246-36.974642 15.241455-45.442117 16.652701-8.185226 36.974642-1.411246 45.442117 15.241456l77.054025 154.108048c8.185226 16.652701 1.411246 36.974642-15.241456 45.442117z"
                p-id="3072"
              ></path>
              <path
                d="M622.641676 319.506064c-8.185226-16.652701-1.411246-36.974642 15.241455-45.442117l154.108049-77.054024c16.652701-8.185226 36.974642-1.411246 45.442117 15.241455 8.185226 16.652701 1.411246 36.974642-15.241456 45.442117l-154.108048 77.054024c-16.93495 8.185226-37.256891 1.411246-45.442117-15.241455z"
                p-id="3073"
              ></path>
            </svg>
          </span>
          {pointList.map((item) => (
            <div
              className="drag-shape-point"
              key={item}
              style={getPointStyle(item)}
              data-index={dataIndex}
              onMouseDown={handleMouseDownOnPoint.bind(null, item)}
            ></div>
          ))}
        </>
      )}
      {children}
    </div>
  )
}

export default Drag
