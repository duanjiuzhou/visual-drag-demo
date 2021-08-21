import { Suspense, useCallback, useState, useMemo, useRef } from 'react'

// rc
import Drag, { IShapeStyleType } from '../../drag'
import MarkLine from '../../mark-line'
import ContextMenu from '@src/designer/context-menu'

// stores
import { useDesigner } from '../../stores'

// type
import { IComponentInstance, IComponentMeta } from '@src/designer/types'

// css
import './style.scss'

interface IEditorProps {
  className?: string
}

const Editor = (editorProps: IEditorProps) => {
  const { className = '' } = editorProps
  const {
    componentsInstance,
    componentsMeta,
    activeComponentIndex,
    updateComponent,
    setActiveComponentIndex,
    showContextMenu,
    hideContextMenu,
    scale,
  } = useDesigner()
  const [markLinkState, setMarkLinkState] = useState<{
    curComponentStyle: IShapeStyleType
    isDownward: boolean
    isRightward: boolean
    isShow: boolean
  }>({} as any)
  const [shapeOffsetInfo, setShapeOffsetInfo] = useState<{
    curComponentStyle: IShapeStyleType
    id: string
  }>()

  const shapeOffsetInfoRef = useRef(shapeOffsetInfo)
  const idRef = useRef<string>()

  const onDragStart = useCallback(
    (index: number) => {
      console.log('onDragStart')
      setActiveComponentIndex(index)
    },
    [setActiveComponentIndex]
  )

  const onDragEnd = useCallback(
    (box: IComponentInstance['box'], id: string) => {
      console.log('onDragEnd')
      updateComponent(id, { box })
      setShapeOffsetInfo(undefined)
      shapeOffsetInfoRef.current = undefined
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
      id: string,
      shapeStyle: IShapeStyleType,
      type: 'point' | 'rotate' | 'shape',
      isDownward?: boolean,
      isRightward?: boolean
    ) => {
      idRef.current = id
      if (type === 'shape') {
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

  const onContextMenu = useCallback(
    (e) => {
      e.stopPropagation()
      e.preventDefault()

      // 计算菜单相对于编辑器的位移
      let target = e.target
      let top = e.nativeEvent.offsetY
      let left = e.nativeEvent.offsetX
      while (target instanceof SVGElement) {
        target = target.parentNode
      }
      while (!target.className.includes('editor-wrap')) {
        left += target.offsetLeft
        top += target.offsetTop
        target = target.parentNode
      }

      showContextMenu(top * scale, left * scale)
    },
    [showContextMenu, scale]
  )

  const onRootMouseDown = useCallback((index: number) => {
    setActiveComponentIndex(index)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getShapeOffset = useCallback(
    (key: 'left' | 'top', value: number, box: IShapeStyleType) => {
      if (idRef.current === undefined) {
        return
      }

      // 数据一致不更新
      if (
        shapeOffsetInfoRef.current &&
        shapeOffsetInfoRef.current.curComponentStyle[key] === value
      ) {
        return
      }

      const offset = { [key]: value }
      const result = {
        curComponentStyle: {
          ...box,
          ...offset,
        },
        id: idRef.current!,
      }
      shapeOffsetInfoRef.current = result
      setShapeOffsetInfo(result)
    },
    []
  )

  const allComponentStyleList = useMemo(
    () => componentsInstance.map((item) => item.box),
    [componentsInstance]
  )
  const { component: Stage } = componentsMeta['stage'] as IComponentMeta

  const rootComponentData = useMemo(() => {
    return componentsInstance[0]
  }, [componentsInstance])

  return (
    <div className={className}>
      <div className="editor-wrap">
        <Stage
          onContextMenu={onContextMenu}
          id="canvas-editor"
          onMouseDown={onRootMouseDown.bind(null, 0)}
          onClick={() => {
            hideContextMenu()
          }}
          scale={scale}
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

            const activeId =
              activeComponentIndex !== undefined
                ? componentsInstance[activeComponentIndex].id
                : ''

            return (
              <Drag
                scale={{ x: scale, y: scale }}
                container={'#canvas-editor'}
                key={id}
                isActive={id === activeId}
                shapeStyle={
                  shapeOffsetInfo && id === shapeOffsetInfo.id
                    ? shapeOffsetInfo.curComponentStyle
                    : box
                }
                onDragStart={() => {
                  onDragStart(index)
                }}
                onDrag={(shapeStyle, _type, isDownward, isRightward) => {
                  onDrag(id, shapeStyle, _type, isDownward, isRightward)
                }}
                onDragEnd={(dragBox) => {
                  onDragEnd(dragBox, id)
                }}
                onCLick={() => {
                  hideContextMenu()
                }}
              >
                <Suspense fallback={suspenseFallback}>
                  <div
                    style={{
                      pointerEvents: 'none',
                      width: '100%',
                      height: '100%',
                      userSelect: 'none',
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
              </Drag>
            )
          })}
          <MarkLine
            diff={8}
            getShapeOffset={getShapeOffset}
            activeComponentIndex={activeComponentIndex!}
            allComponentStyleList={allComponentStyleList}
            curComponentStyle={markLinkState.curComponentStyle}
            isDownward={markLinkState.isDownward}
            isRightward={markLinkState.isRightward}
            isShow={markLinkState.isShow}
          />
        </Stage>
        <ContextMenu />
      </div>
    </div>
  )
}

export default Editor
