import { useCallback } from 'react'

// rc
import Editor from './editor'

// stores
import { useDesigner } from '../stores'

// utils
import { getDefaultValue, unFlatten } from '../utils'

const Canvas = () => {
  const {
    addComponent,
    componentsMeta,
    isClickComponent,
    setIsClickComponent,
    hideContextMenu,
    setActiveComponentIndex,
  } = useDesigner()
  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }, [])

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      const key = e.dataTransfer.getData('key')
      if (!key) {
        return
      }
      const { uiSchema, showName, version = '0.1.0' } = componentsMeta[key]
      const defaultValue = getDefaultValue(uiSchema)
      const [width, height] = [
        defaultValue.width || 150,
        defaultValue.height || 150,
      ]

      addComponent({
        id: '',
        type: key,
        name: showName,
        version,
        box: {
          width,
          height,
          top: e.nativeEvent.offsetY,
          left: e.nativeEvent.offsetX,
          zIndex: 1,
          rotate: 0,
        }, // 定位参数
        props: { ...unFlatten(defaultValue), width, height },
        dataSource: componentsMeta[key].dataSchema || {},
      })
    },
    [addComponent, componentsMeta]
  )

  const handleMouseDown = useCallback(() => {
    setIsClickComponent(false)
  }, [setIsClickComponent])

  const handleMouseUp = useCallback(() => {
    console.log('触发鼠标弹起')
    hideContextMenu()
    if (!isClickComponent) {
      setActiveComponentIndex(0)
    }
  }, [hideContextMenu, isClickComponent, setActiveComponentIndex])

  return (
    <div
      onDragOver={handleDragOver}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDrop={handleDrop}
    >
      <Editor />
    </div>
  )
}

export default Canvas
