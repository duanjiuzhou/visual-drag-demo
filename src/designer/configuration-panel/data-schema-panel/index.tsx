import { useState, useCallback, useEffect, useMemo } from 'react'
import { useDesigner } from '../../stores'
import styled from 'styled-components'
import { GuiEditor } from '../gui-components'
import { IDataSchema } from '../gui-components/types'
import { IComponentInstance } from '@src/designer/types'

const Wrap = styled.div`
  font-size: 20px;
  padding: 12px;
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
  const { activeComponentIndex, componentsInstance, updateComponent } = useDesigner()

  const activeComponent = useMemo(
    () =>
      activeComponentIndex !== undefined
        ? componentsInstance[activeComponentIndex]
        : ({} as IComponentInstance),
    [activeComponentIndex, componentsInstance]
  )

  const { id } = activeComponent
  const [dataSource, setDataSource] = useState(activeComponent.dataSource)

  const onFinish = useCallback(
    (allValues) => {
      updateComponent(id, { dataSource: { ...dataSource, ...allValues } })
    },
    [dataSource, id, updateComponent]
  )

  useEffect(() => {
    setDataSource(activeComponent.dataSource)
  }, [activeComponent])

  return (
    <Wrap key={id}>
      <GuiEditor
        value={activeComponent.dataSource || defaultValue}
        config={DataConfig}
        successCB={onFinish}
      />
    </Wrap>
  )
}

export default DataSchemaPanel
