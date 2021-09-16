import { useCallback } from 'react'
import { Tooltip } from 'antd'

import { useDesigner } from '@src/designer'

// css
import './style.scss'

function Slider() {
  const { scale, updateScale } = useDesigner()
  const step = 0.1

  const onAdd = useCallback(() => {
    updateScale(+(scale + step).toFixed(1))
  }, [scale, updateScale])

  const onReduce = useCallback(() => {
    updateScale(+(scale - step).toFixed(1))
  }, [scale, updateScale])

  const onChange = useCallback(
    (value: number) => {
      updateScale(value)
    },
    [updateScale]
  )

  return (
    <div className="slider">
      <span className="slider-btn" onClick={onAdd}>
        +
      </span>
      <Tooltip
        placement="top"
        trigger="click"
        title={
          <div
            className="list"
            style={{
              width: '60px',
              textAlign: 'center',
              userSelect: 'none',
              color: '#c5c5c5',
            }}
          >
            <div style={{ cursor: 'pointer' }} onClick={onChange.bind(null, 5)}>
              500%
            </div>
            <div style={{ cursor: 'pointer' }} onClick={onChange.bind(null, 3)}>
              300%
            </div>
            <div style={{ cursor: 'pointer' }} onClick={onChange.bind(null, 2)}>
              200%
            </div>
            <div style={{ cursor: 'pointer' }} onClick={onChange.bind(null, 1)}>
              100%
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={onChange.bind(null, 0.5)}
            >
              50%
            </div>
          </div>
        }
      >
        <span className="slider-number">{(scale * 100).toFixed(0)}%</span>
      </Tooltip>
      <span className="slider-btn" onClick={onReduce}>
        -
      </span>
    </div>
  )
}

export default Slider
