import { Suspense, useMemo } from 'react'

// stores
import { useDesigner } from '../../stores'

import { IComponentMeta } from '@src/designer/types'

const ShowStage = () => {
  const { componentsInstance, componentsMeta } = useDesigner()

  const rootComponentData = useMemo(() => {
    return componentsInstance[0]
  }, [componentsInstance])

  const { component: Stage } = componentsMeta['stage'] as IComponentMeta

  return (
    <Stage
      id="canvas-editor"
      width={rootComponentData.box.width}
      height={rootComponentData.box.height}
      {...rootComponentData.props}
    >
      {componentsInstance.map((item, index) => {
        const { type, props, box, id, dataSource } = item
        const _componentsMeta = componentsMeta[type]
        if (!_componentsMeta) {
          return null
        }

        const { component: C, suspenseFallback = null } = _componentsMeta

        if (type === 'stage') {
          return null
        }

        return (
          <Suspense fallback={suspenseFallback} key={`${id}${index}`}>
            <div
              style={{
                position: 'absolute',
                top: box.top,
                left: box.left,
                width: box.width,
                height: box.height,
                zIndex: box.zIndex,
                transform: `rotate(${box.rotate}deg)`,
              }}
            >
              <C
                {...props}
                width={box.width}
                height={box.height}
                data={dataSource?.staticData}
              />
            </div>
          </Suspense>
        )
      })}
    </Stage>
  )
}

export default ShowStage
