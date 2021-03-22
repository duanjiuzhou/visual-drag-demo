import { useCallback } from 'react'

// stores
import { useDesigner } from '../../../stores'

// type
import { IComponentInstance } from '@src/designer/types'

// utils
// import throttle from 'lodash-es/throttle'

interface ShapeProps {
  children: React.ReactNode
  id: string
  index: number
  box: IComponentInstance['box']
  // children: React.ReactElement
  // children: JSX.Element
}

function Shape(props: ShapeProps) {
  const { children, box, id, index } = props
  const { top, left, width, height, zIndex, rotate = 0 } = box
  const { updateComponent, setIsClickComponent, setActiveComponentIndex } = useDesigner()

  const handleMouseDownOnShape = useCallback(
    (e) => {
      setIsClickComponent(true)
      e.stopPropagation()
      setActiveComponentIndex(index)
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

        // 修改当前组件样式
        // updateComponent(id, {
        //   box: pos,
        // })
        // 等更新完当前组件的样式并绘制到屏幕后再判断是否需要吸附
        // 如果不使用 $nextTick，吸附后将无法移动
        // this.$nextTick(() => {
        //   // 触发元素移动事件，用于显示标线、吸附功能
        //   // 后面两个参数代表鼠标移动方向
        //   // curY - startY > 0 true 表示向下移动 false 表示向上移动
        //   // curX - startX > 0 true 表示向右移动 false 表示向左移动
        //   eventBus.$emit('move', curY - startY > 0, curX - startX > 0)
        // })
      }

      const up = () => {
        // 修改当前组件样式
        updateComponent(id, {
          box: pos,
        })
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    },
    [box, id, index, setActiveComponentIndex, setIsClickComponent, updateComponent]
  )

  return (
    <div
      onMouseDown={handleMouseDownOnShape}
      style={{
        position: 'absolute',
        top,
        left,
        width,
        height,
        zIndex,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </div>
  )
}

export default Shape
