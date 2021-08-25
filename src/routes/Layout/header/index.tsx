import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
// rc
import { message } from 'antd'
import { SendOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import ComponentList from './component-list'

import { useDesigner } from '@src/designer'

// path
import { SHOW_URL } from '@src/constants/path'

// css
import './style.scss'

const Header = () => {
  const { componentsInstance, clearCanvas } = useDesigner()
  const history = useHistory()
  const onSaveClick = useCallback(() => {
    localStorage.setItem('designerData', JSON.stringify(componentsInstance))
    message.success('保存成功')
  }, [componentsInstance])

  const onDeleteClick = useCallback(() => {
    clearCanvas()
    message.success('删除成功')
  }, [clearCanvas])

  const onSendClick = useCallback(() => {
    localStorage.setItem('designerData', JSON.stringify(componentsInstance))
    history.push(SHOW_URL)
  }, [componentsInstance, history])

  return (
    <div className="wrap">
      <div className="component-warp">
        <ComponentList />
      </div>
      <div className="handle-wrap">
        <span onClick={onDeleteClick} className="release-wrap" title="清空画布">
          <DeleteOutlined className="icon icon-align" />
        </span>
        <span onClick={onSaveClick} className="release-wrap" title="保存">
          <SaveOutlined className="icon icon-align" />
        </span>
        <span onClick={onSendClick} className="release-wrap" title="发布预览">
          <SendOutlined className="icon release" />
        </span>
      </div>
    </div>
  )
}

export default Header
