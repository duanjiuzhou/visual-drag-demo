import { useEffect, useRef, useState, useCallback } from 'react'

// utils
import { getComponentRotatedStyle } from './utils/style'

// css
import './style.scss'

const lines = ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']

export interface IShapeStyleType {
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
   * @description 当前激活组件移动方向是否向下，true 表示向下移动 false 表示向上移动。 计算公式：curY - startY > 0
   * @default
   */
  isDownward: boolean
  /**
   * @description 当前激活组件移动方向是否向右，true 表示向右移动 false 表示向左移动。计算公式：curX - startX > 0
   * @default
   */
  isRightward: boolean
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
  allComponentStyleList: IShapeStyleType[]
  /**
   * @description 获取组件偏移
   * @default
   */
  getShapeOffset?: (
    key: 'left' | 'top',
    value: number,
    box: IShapeStyleType
  ) => void
}

const defaultLineStatus = {
  xt: false,
  xc: false,
  xb: false,
  yl: false,
  yc: false,
  yr: false,
}

const MarkLine = (props: IMarkLineProps) => {
  const {
    diff = 3,
    isShow,
    isDownward,
    isRightward,
    allComponentStyleList,
    activeComponentIndex,
    curComponentStyle: _curComponentStyle,
    getShapeOffset,
  } = props
  const linesRef = useRef<Record<string, HTMLDivElement | null>>({})
  const [lineStatus, setLineStatus] = useState(defaultLineStatus)

  const isNearly = useCallback(
    (dragValue: number, targetValue: number) => {
      return Math.abs(dragValue - targetValue) <= diff
    },
    [diff]
  )

  const translateCurComponentShift = useCallback(
    (key, condition, curComponentStyle) => {
      const { width, height } = _curComponentStyle
      if (key === 'top') {
        return Math.round(
          condition.dragShift - (height - curComponentStyle.height) / 2
        )
      }

      return Math.round(
        condition.dragShift - (width - curComponentStyle.width) / 2
      )
    },
    [_curComponentStyle]
  )

  const chooseTheHorizontalLine = useCallback(
    (needToShow) => {
      const _lineStatus = { ...lineStatus }
      // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
      // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示
      if (isRightward) {
        if (needToShow.includes('yr')) {
          _lineStatus.yr = true
        } else if (needToShow.includes('yc')) {
          _lineStatus.yc = true
        } else if (needToShow.includes('yl')) {
          _lineStatus.yl = true
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (needToShow.includes('yl')) {
          _lineStatus.yl = true
        } else if (needToShow.includes('yc')) {
          _lineStatus.yc = true
        } else if (needToShow.includes('yr')) {
          _lineStatus.yr = true
        }
      }

      if (isDownward) {
        if (needToShow.includes('xb')) {
          _lineStatus.xb = true
        } else if (needToShow.includes('xc')) {
          _lineStatus.xc = true
        } else if (needToShow.includes('xt')) {
          _lineStatus.xt = true
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (needToShow.includes('xt')) {
          _lineStatus.xt = true
        } else if (needToShow.includes('xc')) {
          _lineStatus.xc = true
        } else if (needToShow.includes('xb')) {
          _lineStatus.xb = true
        }
      }
      setLineStatus(_lineStatus)
    },
    [isDownward, isRightward, lineStatus]
  )

  const hideLine = useCallback(() => {
    setLineStatus(defaultLineStatus)
  }, [])

  const showLine = useCallback(() => {
    const curComponentStyle = getComponentRotatedStyle(_curComponentStyle)
    const curComponentHalfWidth = Math.round(curComponentStyle.width / 2)
    const curComponentHalfHeight = Math.round(curComponentStyle.height / 2)

    hideLine()
    allComponentStyleList.forEach((component, index) => {
      if (activeComponentIndex === index) {
        return
      }
      const componentStyle = getComponentRotatedStyle(component)
      const { top, left, bottom, right } = componentStyle
      const componentHalfWidth = Math.round(componentStyle.width / 2)
      const componentHalfHeight = Math.round(componentStyle.height / 2)

      const conditions = {
        top: [
          {
            isNearly: isNearly(curComponentStyle.top, top),
            lineNode: linesRef.current['xt']!, // xt
            line: 'xt',
            dragShift: top,
            lineShift: top,
          },
          {
            isNearly: isNearly(curComponentStyle.bottom, top),
            lineNode: linesRef.current['xt']!, // xt
            line: 'xt',
            dragShift: top - curComponentStyle.height,
            lineShift: top,
          },
          {
            // 组件与拖拽节点的中间是否对齐
            isNearly: isNearly(
              curComponentStyle.top + curComponentHalfHeight,
              top + componentHalfHeight
            ),
            lineNode: linesRef.current['xc']!, // xc
            line: 'xc',
            dragShift: top + componentHalfHeight - curComponentHalfHeight,
            lineShift: top + componentHalfHeight,
          },
          {
            isNearly: isNearly(curComponentStyle.top, bottom),
            lineNode: linesRef.current['xb']!, // xb
            line: 'xb',
            dragShift: bottom,
            lineShift: bottom,
          },
          {
            isNearly: isNearly(curComponentStyle.bottom, bottom),
            lineNode: linesRef.current['xb']!, // xb
            line: 'xb',
            dragShift: bottom - curComponentStyle.height,
            lineShift: bottom,
          },
        ],
        left: [
          {
            isNearly: isNearly(curComponentStyle.left, left),
            lineNode: linesRef.current['yl']!, // yl
            line: 'yl',
            dragShift: left,
            lineShift: left,
          },
          {
            isNearly: isNearly(curComponentStyle.right, left),
            lineNode: linesRef.current['yl']!, // yl
            line: 'yl',
            dragShift: left - curComponentStyle.width,
            lineShift: left,
          },
          {
            // 组件与拖拽节点的中间是否对齐
            isNearly: isNearly(
              curComponentStyle.left + curComponentHalfWidth,
              left + componentHalfWidth
            ),
            lineNode: linesRef.current['yc']!, // yc
            line: 'yc',
            dragShift: left + componentHalfWidth - curComponentHalfWidth,
            lineShift: left + componentHalfWidth,
          },
          {
            isNearly: isNearly(curComponentStyle.left, right),
            lineNode: linesRef.current['yr']!, // yr
            line: 'yr',
            dragShift: right,
            lineShift: right,
          },
          {
            isNearly: isNearly(curComponentStyle.right, right),
            lineNode: linesRef.current['yr']!, // yr
            line: 'yr',
            dragShift: right - curComponentStyle.width,
            lineShift: right,
          },
        ],
      }
      const needToShow: string[] = []
      const { rotate } = componentStyle
      Object.keys(conditions).forEach((key) => {
        // 遍历符合的条件并处理
        conditions[key].forEach(
          (condition: {
            isNearly: boolean
            lineNode: HTMLDivElement
            line: string
            dragShift: number
            lineShift: number
          }) => {
            if (!condition.isNearly) return

            const value =
              rotate !== 0
                ? translateCurComponentShift(key, condition, curComponentStyle)
                : condition.dragShift
            // 修改当前组件位移
            getShapeOffset &&
              getShapeOffset(key as any, value, _curComponentStyle)

            condition.lineNode.style[key] = `${condition.lineShift}px`
            needToShow.push(condition.line)
          }
        )
      })
      // 同一方向上同时显示三条线可能不太美观，因此才有了这个解决方案
      // 同一方向上的线只显示一条，例如多条横条只显示一条横线
      if (needToShow.length) {
        chooseTheHorizontalLine(needToShow)
      }
    })
  }, [
    _curComponentStyle,
    hideLine,
    allComponentStyleList,
    activeComponentIndex,
    isNearly,
    translateCurComponentShift,
    getShapeOffset,
    chooseTheHorizontalLine,
  ])

  useEffect(() => {
    isShow ? showLine() : hideLine()
  }, [hideLine, isShow, showLine])

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
