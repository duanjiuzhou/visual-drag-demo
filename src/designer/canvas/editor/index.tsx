import { Suspense, useCallback, useState } from 'react'

// rc
import Drag, { IShapeStyleType } from '../../drag'
import MarkLine from '../../markLine'

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
  const [markLinkState, setMarkLinkState] = useState<{
    curComponentStyle: IShapeStyleType
    isDownward: boolean
    isRightward: boolean
    isShow: boolean
  }>({} as any)

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
      setMarkLinkState({
        curComponentStyle: box,
        isDownward: false,
        isRightward: false,
        isShow: false,
      })
    },
    [updateComponent]
  )

  const onDrag = useCallback(
    (
      shapeStyle: IShapeStyleType,
      type: 'point' | 'rotate' | 'shape',
      isDownward?: boolean,
      isRightward?: boolean
    ) => {
      if (type === 'shape') {
        // console.log(shapeStyle, type, isDownward, isRightward)
        setMarkLinkState({
          curComponentStyle: shapeStyle,
          isDownward: isDownward!,
          isRightward: isRightward!,
          isShow: true,
        })
      }
    },
    []
  )

  const getShapeOffset = useCallback((key: 'left' | 'top', value: number) => {
    console.log(key, value)
  }, [])

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
            shapeStyle={box}
            onDragStart={() => {
              onDragStart(index)
            }}
            onDrag={onDrag}
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
      <MarkLine
        getShapeOffset={getShapeOffset}
        activeComponentIndex={activeComponentIndex!}
        allComponentStyleList={componentsInstance.map((item) => item.box)}
        {...markLinkState}
      />
    </div>
  )
}

export default Editor
