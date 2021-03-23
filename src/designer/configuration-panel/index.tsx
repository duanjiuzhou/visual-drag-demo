import { useCallback, useState, useMemo } from 'react'

// rc
import { Button, Tabs, Radio } from 'antd'
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
  const {
    activeComponentIndex,
    componentsInstance,
    updateComponent,
  } = useDesigner()

  const activeComponent = useMemo(
    () =>
      activeComponentIndex !== undefined
        ? componentsInstance[activeComponentIndex]
        : ({} as IComponentInstance),
    [activeComponentIndex, componentsInstance]
  )

  return (
    <JsonEditor
      value={activeComponent}
      onSave={(value) =>
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
  const { activeComponentIndex, componentsInstance } = useDesigner()

  const [editMode, setEditMode] = useState<IEditMode>('nocode') // 编辑态模式，

  const onUpdateEditMode = useCallback((_editMode: IEditMode) => {
    setEditMode(_editMode)
  }, [])

  const activeComponent = useMemo(
    () =>
      activeComponentIndex !== undefined
        ? componentsInstance[activeComponentIndex]
        : ({} as IComponentInstance),
    [activeComponentIndex, componentsInstance]
  )

  if (componentsInstance.length === 0) {
    return <Wrap />
  }

  // if (activeComponentIndex === 0 && componentsInstance[0]) {
  //   return (
  //     <Wrap>
  //       <div className="header">
  //         <span>舞台配置</span>
  //       </div>
  //       <UISchemaPanel />
  //     </Wrap>
  //   )
  // }

  return (
    <Wrap>
      <div className="header">
        <span>
          当前选中组件:{activeComponent.name || ''} <br />
          版本：{activeComponent.version}
        </span>
        <EditModeSwitch
          onUpdateEditMode={onUpdateEditMode}
          editMode={editMode}
        />
        {/* <Button type="link" size="small" onClick={showGlobalConfig}> */}
        <Button type="link" size="small">
          返回舞台配置
        </Button>
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
