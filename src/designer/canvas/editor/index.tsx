import { useCallback, Suspense } from 'react'

// rc
import Grid from './Grid'
import Shape from './Shape'

// stores
import { useDesigner } from '../../stores'

// css
import './style.scss'

const Editor = () => {
  const { componentsInstance, componentsMeta } = useDesigner()

  const handleMouseDown = useCallback((e) => {
    console.log('handleMouseDown', e)
  }, [])

  return (
    <div className="editor-wrap" onMouseDown={handleMouseDown}>
      <Grid />
      {componentsInstance.map((item, index) => {
        const { type, props, box } = item
        const { component: C, suspenseFallback = null } = componentsMeta[type]

        return (
          <Shape key={item.id} id={item.id} box={box} index={index}>
            <Suspense fallback={suspenseFallback}>
              <div style={{ pointerEvents: 'none', width: '100%', height: '100%' }}>
                <C {...props} />
              </div>
            </Suspense>
          </Shape>
        )
      })}
    </div>
  )
}

export default Editor
