import { useMemo } from 'react'
import { useDesigner } from '../../stores'
import styled from 'styled-components'
import { GuiEditor } from '../gui-components'
import BaseSchema from './base-schema'
import { unFlatten, flatten, getDefaultValue } from '../../utils'

const Wrap = styled.div`
  font-size: 20px;
  padding: 12px;
  height: 100%;
`

const UISchemaPanel = () => {
  const { activeComponent, componentsMeta, updateComponent } = useDesigner()
  const { box, props, type } = activeComponent || {}

  const { config, defaultValue } = useMemo(() => {
    const _config = {
      ...BaseSchema,
      ...(type ? componentsMeta[type].uiSchema! : {}),
    }

    // 递归处理字段，当前逻辑不完整
    const _defaultValue = getDefaultValue(_config)

    // 将props传参抹平
    const _props = flatten(props)

    const result = {
      config: _config,
      defaultValue: { ..._defaultValue, ..._props, ...box },
    }
    return result
  }, [box, componentsMeta, props, type])

  return (
    <Wrap>
      <GuiEditor
        value={defaultValue}
        config={config}
        successCB={(allValues: any) => {
          const {
            width,
            height,
            top,
            left,
            rotate,
            zIndex,
            ..._props
          } = allValues

          activeComponent &&
            updateComponent(activeComponent.id, {
              box: { ...box, width, height, top, left, rotate, zIndex },
              props: { ...props, ...unFlatten(_props) },
            })
        }}
      />
    </Wrap>
  )
}

export default UISchemaPanel
