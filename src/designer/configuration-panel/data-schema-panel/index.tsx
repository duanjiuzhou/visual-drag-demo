import { useCallback } from 'react'
import { useDesigner } from '../../stores'
import styled from 'styled-components'
import { GuiEditor } from '../gui-components'
import { IDataSchema } from '../gui-components/types'

const Wrap = styled.div`
  font-size: 20px;
  height: 100%;
`

const DataConfig: IDataSchema = {
  url: {
    name: 'URL',
    type: 'text',
    defaultValue: '',
  },
  staticData: {
    name: '静态数据',
    type: 'json',
    defaultValue: {},
  },
  updateInterval: {
    name: '更新间隔',
    type: 'number',
    defaultValue: 1,
  },
}

const defaultValue: Record<string, any> = {}

for (const param in DataConfig) {
  defaultValue[param] = DataConfig[param].defaultValue
}

const DataSchemaPanel = () => {
  const { activeComponent, updateComponent } = useDesigner()

  const onFinish = useCallback(
    (allValues) => {
      activeComponent &&
        updateComponent(activeComponent.id, {
          dataSource: { ...activeComponent.dataSource, ...allValues },
        })
    },
    [activeComponent, updateComponent]
  )

  return (
    <Wrap>
      <GuiEditor
        value={activeComponent?.dataSource || defaultValue}
        config={DataConfig}
        successCB={onFinish}
      />
    </Wrap>
  )
}

export default DataSchemaPanel
