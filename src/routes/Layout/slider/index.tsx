import { useCallback } from 'react'

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

  return (
    <div className="slider">
      <span className="slider-btn" onClick={onAdd}>
        +
      </span>
      <span className="slider-number">{(scale * 100).toFixed(0)}%</span>
      <span className="slider-btn" onClick={onReduce}>
        -
      </span>
    </div>
  )
}

export default Slider
