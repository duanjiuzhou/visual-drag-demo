import { useRef, useState } from 'react'

// css
import './style.scss'

const lines = ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']

interface IShapeStyleType {
  width: number
  height: number
  left: number
  top: number
  zIndex: number
  rotate: number
}

interface IMarkLineProps {
  /**
   * @description 相距像素距离，满足该距离将自动吸附，单位为 px
   * @default 3
   */
  diff?: number
  /**
   * @description 触发显示
   * @default
   */
  isShow?: boolean
  /**
   * @description 激活组件的索引
   * @default
   */
  activeComponentIndex: number
  /**
   * @description 当前激活组件的样式
   * @default
   */
  curComponentStyle: IShapeStyleType
  /**
   * @description 全部组件的样式列表
   * @default []
   */
  allComponentStyle: IShapeStyleType[]
  /**
   * @description 当前激活组件移动方向是否向下，true 表示向下移动 false 表示向上移动。 计算公式：curY - startY > 0
   * @default
   */
  isDownward: boolean
  /**
   * @description 当前激活组件移动方向是否向右，true 表示向右移动 false 表示向左移动。计算公式：curX - startX > 0
   * @default
   */
  isRightward: boolean
}

const MarkLine = (props: IMarkLineProps) => {
  const { diff = 3 } = props
  const linesRef = useRef<Record<string, HTMLDivElement | null>>({})
  const [lineStatus, setLineStatus] = useState({
    xt: false,
    xc: false,
    xb: false,
    yl: false,
    yc: false,
    yr: false,
  })

  setLineStatus
  diff

  return (
    <div className="drag-mark-line ">
      {lines.map((item) => (
        <div
          key={item}
          className={`line ${item.includes('x') ? 'x-line' : 'y-line'}`}
          ref={(e) => {
            linesRef.current[item] = e
          }}
          style={{ display: lineStatus[item] ? 'block' : 'none' }}
        ></div>
      ))}
    </div>
  )
}

export default MarkLine
