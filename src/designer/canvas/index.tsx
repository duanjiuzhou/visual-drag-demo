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
      const { uiSchema, showName } = componentsMeta[key]
      const defaultValue = getDefaultValue(uiSchema)
      const [width, height] = [
        defaultValue.width || 300,
        defaultValue.height || 300,
      ]

      addComponent({
        id: '',
        type: key,
        name: showName,
        version: '0.1',
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
    if (!isClickComponent) {
      setActiveComponentIndex(undefined)
    }
  }, [isClickComponent, setActiveComponentIndex])

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
