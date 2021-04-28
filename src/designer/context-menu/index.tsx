import { useCallback } from 'react'

// stores
import { useDesigner } from '../stores'

// css
import './style.scss'

const ContextMenu = () => {
  const {
    activeComponent,
    contextMenuState,
    setIsClickComponent,
  } = useDesigner()
  const { show, top, left } = contextMenuState

  const handleMouseUp = useCallback(() => {
    setIsClickComponent(true)
  }, [])

  const copy = useCallback(() => {}, [])
  const paste = useCallback(() => {}, [])
  const cut = useCallback(() => {}, [])
  const deleteComponent = useCallback(() => {}, [])
  const lock = useCallback(() => {}, [])
  const topComponent = useCallback(() => {}, [])
  const bottomComponent = useCallback(() => {}, [])
  const upComponent = useCallback(() => {}, [])
  const downComponent = useCallback(() => {}, [])
  const unlock = useCallback(() => {}, [])

  return show ? (
    <div className="context-menu" style={{ top, left }}>
      <ul onMouseUp={handleMouseUp}>
        {activeComponent ? (
          <>
            {activeComponent.isLock ? (
              <>
                <li onClick={copy}>复制</li>
                <li onClick={paste}>粘贴</li>
                <li onClick={cut}>剪切</li>
                <li onClick={deleteComponent}>删除</li>
                <li onClick={lock}>锁定</li>
                <li onClick={topComponent}>置顶</li>
                <li onClick={bottomComponent}>置底</li>
                <li onClick={upComponent}>上移</li>
                <li onClick={downComponent}>下移</li>
              </>
            ) : (
              <li onClick={unlock}>解锁</li>
            )}
          </>
        ) : (
          <li onClick={paste}>粘贴</li>
        )}
      </ul>
    </div>
  ) : null
}

export default ContextMenu
