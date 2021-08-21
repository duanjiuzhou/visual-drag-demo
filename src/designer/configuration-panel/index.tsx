// rc
import { Tabs } from 'antd'
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

const Wrap = styled.div`
  min-width: 340px;
  height: 100%;
  padding: 10px;
  background: #25282e;
  color: #fff;
  .header {
    .name {
      margin-right: 10px;
      font-size: 12px;
    }
    .version {
      color: #7d7c7c;
    }
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

const ComponentInfo = () => {
  const { activeComponent } = useDesigner()
  return (
    <div className="header">
      <span className="name">{activeComponent?.name || '--'}</span>
      <span className="version">
        {activeComponent?.version ? `v${activeComponent?.version}` : '--'}
      </span>
    </div>
  )
}

interface IProps {
  className?: string
  style?: React.CSSProperties
}

const SettingPanel = (props: IProps) => {
  const { className = '', style } = props
  const { componentsInstance } = useDesigner()

  if (componentsInstance.length === 0) {
    return <Wrap className={className} style={style} />
  }

  return (
    <Wrap className={className} style={style}>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="配置" key="1">
          <ComponentInfo />
          <UISchemaPanel />
        </TabPane>
        <TabPane tab="数据" key="2">
          <ComponentInfo />
          <DataSchemaPanel />
        </TabPane>
        <TabPane tab="code" key="3">
          <ComponentInfo />
          <ProCodePanel />
        </TabPane>
      </Tabs>
    </Wrap>
  )
}

export default SettingPanel
