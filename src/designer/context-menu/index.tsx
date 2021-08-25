import { useCallback } from 'react'

// stores
import { useDesigner } from '../stores'

// css
import './style.scss'

const ContextMenu = () => {
  const {
    activeComponent,
    activeComponentIndex,
    contextMenuState,
    hideContextMenu,
    deleteComponent,
    copyComponent,
    pasteComponent,
    topComponent,
    bottomComponent,
    upComponent,
    downComponent,
    scale,
  } = useDesigner()

  const { show, top, left } = contextMenuState

  const handleMouseUp = useCallback(() => {
    hideContextMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlerCopy = useCallback(() => {
    copyComponent()
  }, [copyComponent])

  const handlerPaste = useCallback(() => {
    // TODO 空组件时粘贴提示
    const isSuccess = pasteComponent(top / scale, left / scale)
    console.log(!isSuccess ? '请复制组件' : '粘贴组件成功')
  }, [left, pasteComponent, scale, top])

  const handlerCut = useCallback(() => {}, [])

  const handlerDeleteComponent = useCallback(() => {
    deleteComponent(activeComponentIndex)
  }, [activeComponentIndex, deleteComponent])

  const handlerLock = useCallback(() => {}, [])

  const handlerTopComponent = useCallback(() => {
    topComponent(activeComponentIndex)
  }, [activeComponentIndex, topComponent])

  const handlerBottomComponent = useCallback(() => {
    bottomComponent(activeComponentIndex)
  }, [activeComponentIndex, bottomComponent])

  const handlerUpComponent = useCallback(() => {
    upComponent(activeComponentIndex)
  }, [activeComponentIndex, upComponent])

  const handlerDownComponent = useCallback(() => {
    downComponent(activeComponentIndex)
  }, [activeComponentIndex, downComponent])

  const handlerUnlock = useCallback(() => {}, [])

  return (
    <div
      className="context-menu"
      style={{ top, left, display: show ? 'block' : 'none' }}
    >
      <ul onMouseUp={handleMouseUp}>
        {activeComponentIndex !== 0 ? (
          <>
            {activeComponent && !activeComponent.isLock ? (
              <>
                <li onClick={handlerCopy}>复制</li>
                <li onClick={handlerPaste}>粘贴</li>
                <li onClick={handlerCut} className="disabled">
                  剪切
                </li>
                <li onClick={handlerDeleteComponent}>删除</li>
                <li onClick={handlerLock} className="disabled">
                  锁定
                </li>
                <li onClick={handlerTopComponent}>置顶</li>
                <li onClick={handlerBottomComponent}>置底</li>
                <li onClick={handlerUpComponent}>上移</li>
                <li onClick={handlerDownComponent}>下移</li>
              </>
            ) : (
              <li onClick={handlerUnlock} className="disabled">
                解锁
              </li>
            )}
          </>
        ) : (
          <li onClick={handlerPaste}>粘贴</li>
        )}
      </ul>
    </div>
  )
}

export default ContextMenu
