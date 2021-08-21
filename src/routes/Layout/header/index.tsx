import { Link } from 'react-router-dom'

// rc
import { ArrowLeftOutlined, SendOutlined } from '@ant-design/icons'
import { message } from 'antd'
import ComponentList from './component-list'

import { useDesigner } from '@src/designer'

// path
import { BASE_URL, SHOW_URL } from '@src/constants/path'

// utils
import { getUrlParam } from '@src/utils'

// css
import './style.scss'

const Header = () => {
  const id = getUrlParam('id')
  const { componentsInstance } = useDesigner()

  const onClick = () => {
    if (!id) {
      message.warning('当前路由id无数据，无法发布。')
      return
    }
    localStorage.setItem(id, JSON.stringify(componentsInstance))
    window.open(`${SHOW_URL}?id=${id}`)
  }

  return (
    <div className="wrap">
      <div className="component-warp">
        <Link to={BASE_URL}>
          <ArrowLeftOutlined className="icon" />
        </Link>
        <ComponentList />
      </div>
      <div className="handle-wrap">
        <span onClick={onClick} className="release-wrap">
          <SendOutlined className="icon release" />
        </span>
      </div>
    </div>
  )
}

export default Header
