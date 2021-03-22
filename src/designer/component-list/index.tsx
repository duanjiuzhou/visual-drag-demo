import { useCallback } from 'react'

// config
import componentListConfig from './config'

// stores
import { useDesigner } from '../stores'

// css
import './style.scss'

const ComponentList = () => {
  const { componentsMeta } = useDesigner()

  const handleDragStart = useCallback((e) => {
    e.dataTransfer.setData('key', e.target.dataset.index)
    console.log(e.target.dataset.index)
  }, [])

  return (
    <div className="component-list-wrap" onDragStart={handleDragStart}>
      {componentListConfig.map((item) => {
        const { showName } = componentsMeta[item.key]
        return (
          <div
            key={item.key}
            draggable={true}
            data-index={item.key}
            style={{ width: '100px', height: '35px', border: '1px solid', margin: '5px' }}
          >
            {showName}
          </div>
        )
      })}
    </div>
  )
}

export default ComponentList
