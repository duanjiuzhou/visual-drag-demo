import { Suspense, useCallback } from 'react'

// rc
import Drag from '../../drag'

// stores
import { useDesigner } from '../../stores'

// type
import { IComponentInstance } from '@src/designer/types'

// css
import './style.scss'

const Editor = () => {
  const {
    componentsInstance,
    componentsMeta,
    activeComponentIndex,
    updateComponent,
    setIsClickComponent,
    setActiveComponentIndex,
  } = useDesigner()

  const onDragStart = useCallback(
    (index: number) => {
      console.log('onDragStart')

      setIsClickComponent(true)
      setActiveComponentIndex(index)
    },
    [setActiveComponentIndex, setIsClickComponent]
  )

  const onDragEnd = useCallback(
    (box: IComponentInstance['box'], id: string) => {
      console.log('onDragEnd')
      updateComponent(id, { box })
    },
    [updateComponent]
  )

  return (
    <div className="editor-wrap grid-wrap" id="canvas-editor">
      {componentsInstance.map((item, index) => {
        const { type, props, box, id } = item
        const { component: C, suspenseFallback = null } = componentsMeta[type]
        const activeId =
          activeComponentIndex !== undefined
            ? componentsInstance[activeComponentIndex].id
            : ''
        return (
          <Drag
            container={'#canvas-editor'}
            key={id}
            isActive={id === activeId}
            box={box}
            onDragStart={() => {
              onDragStart(index)
            }}
            onDragEnd={(dragBox) => {
              onDragEnd(dragBox, id)
            }}
          >
            <Suspense fallback={suspenseFallback}>
              <div
                style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
              >
                <C {...props} />
              </div>
            </Suspense>
          </Drag>
        )
      })}
    </div>
  )
}

export default Editor
