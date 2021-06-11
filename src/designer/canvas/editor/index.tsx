import { Suspense, useCallback, useState, useMemo, useRef } from 'react'

// rc
import Drag, { IShapeStyleType } from '../../drag'
import MarkLine from '../../mark-line'
import ContextMenu from '@src/designer/context-menu'

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
    showContextMenu,
    hideContextMenu,
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
      setIsClickComponent(true)
      setActiveComponentIndex(index)
    },
    [setActiveComponentIndex, setIsClickComponent]
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
      console.log('onContextMenu')

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
      showContextMenu(top, left)
    },
    [showContextMenu]
  )

  const onRootMouseDown = useCallback((index: number, e: any) => {
    e.stopPropagation()
    setIsClickComponent(true)
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
        curComponentStyle: { ...box, ...offset },
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

  return (
    <div
      className="editor-wrap grid-wrap"
      id="canvas-editor"
      onContextMenu={onContextMenu}
    >
      {componentsInstance.map((item, index) => {
        const { type, props, box, id } = item
        const { component: C, suspenseFallback = null } = componentsMeta[type]
        // 根节点直接渲染，仅融合参数
        if (type === 'root') {
          return (
            <C
              key={id}
              {...props}
              width={box.width}
              height={box.height}
              onMouseDown={onRootMouseDown.bind(null, index)}
            />
          )
        }

        const activeId =
          activeComponentIndex !== undefined
            ? componentsInstance[activeComponentIndex].id
            : ''

        return (
          <Drag
            container={'#canvas-editor'}
            key={id}
            isActive={id === activeId}
            // shapeStyle={box}
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
                style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
              >
                <C {...props} width={box.width} height={box.height} />
              </div>
            </Suspense>
          </Drag>
        )
      })}
      <ContextMenu />
      <MarkLine
        diff={3}
        getShapeOffset={getShapeOffset}
        activeComponentIndex={activeComponentIndex!}
        allComponentStyleList={allComponentStyleList}
        curComponentStyle={markLinkState.curComponentStyle}
        isDownward={markLinkState.isDownward}
        isRightward={markLinkState.isRightward}
        isShow={markLinkState.isShow}
      />
    </div>
  )
}

export default Editor
