import { FC } from 'react'
import { Collapse } from 'antd'
import styled from 'styled-components'

const CollapseReset = styled(Collapse)`
  .site-collapse-custom-panel {
    margin-bottom: 24px;
    overflow: hidden;
    border: 0px;
    border-radius: 2px;
  }
  & > .ant-collapse-item > .ant-collapse-header {
    padding-left: 80px;
  }
`
const GroupControl: FC<{ name: string; isOpen: boolean }> = ({
  name,
  isOpen = false,
  children,
}) => {
  return (
    <CollapseReset bordered={false} defaultActiveKey={isOpen ? '1' : undefined}>
      <Collapse.Panel header={name} key="1" className="site-collapse-custom-panel">
        {children}
      </Collapse.Panel>
    </CollapseReset>
  )
}

export default GroupControl
