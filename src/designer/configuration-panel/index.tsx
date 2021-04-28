import { useCallback, useState } from 'react'

// rc
import { Tabs, Radio } from 'antd'
import UISchemaPanel from './ui-schema-panel'
import DataSchemaPanel from './data-schema-panel'
import { GuiJsonInput as JsonEditor } from './gui-components'

// stores
import { useDesigner } from '../stores'

// types
import { IComponentInstance } from '../types'

// utils
import styled from 'styled-components'

const { TabPane } = Tabs

type IEditMode = 'nocode' | 'procode'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 262px; // 360px;
  height: 100%;
  padding: 10px;
  background: #1d1f23;
  color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
  }
`

const ProCodePanel = () => {
  const { updateComponent, activeComponent } = useDesigner()

  return (
    <JsonEditor
      value={activeComponent || {}}
      onSave={(value) =>
        activeComponent &&
        updateComponent(activeComponent.id, value as IComponentInstance)
      }
    />
  )
}

const EditModeSwitch = (props: {
  onUpdateEditMode: (_editMode: IEditMode) => void
  editMode: IEditMode
}) => {
  const { editMode, onUpdateEditMode } = props

  return (
    <Radio.Group
      options={[
        { label: 'No-Code', value: 'nocode' },
        { label: 'Pro-Code', value: 'procode' },
      ]}
      size="small"
      optionType="button"
      onChange={(e) => onUpdateEditMode(e.target.value)}
      value={editMode}
    />
  )
}

const SettingPanel = () => {
  const { componentsInstance, activeComponent } = useDesigner()

  const [editMode, setEditMode] = useState<IEditMode>('nocode') // 编辑态模式，

  const onUpdateEditMode = useCallback((_editMode: IEditMode) => {
    setEditMode(_editMode)
  }, [])

  if (componentsInstance.length === 0) {
    return <Wrap />
  }

  return (
    <Wrap>
      <div className="header">
        <div>当前组件：{activeComponent?.name || '--'}</div>
        <div>版本：{activeComponent?.version || '--'}</div>
      </div>
      <div>
        <EditModeSwitch
          onUpdateEditMode={onUpdateEditMode}
          editMode={editMode}
        />
      </div>
      {editMode === 'nocode' ? (
        <Tabs defaultActiveKey="1">
          <TabPane tab="样式" key="1">
            <UISchemaPanel />
          </TabPane>
          <TabPane tab="数据" key="2">
            <DataSchemaPanel />
          </TabPane>
        </Tabs>
      ) : (
        <ProCodePanel />
      )}
    </Wrap>
  )
}

export default SettingPanel
