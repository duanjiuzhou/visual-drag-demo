import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

// rc
import {
  PlusSquareOutlined,
  LayoutOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { Modal, Form, Input, Layout, Menu } from 'antd'

// path
import { EDITOR_URL } from '@src/constants/path'

// css
import './style.scss'

const { Header, Content, Sider } = Layout

enum MenuType {
  创建设计,
  大屏管理,
}
const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [menuType, setIsMenuType] = useState(MenuType.创建设计)

  const [form] = Form.useForm()
  const history = useHistory()

  const onSelect = useCallback((item) => {
    console.log(item.key)
    setIsMenuType(+item.key)
  }, [])

  const showModal = useCallback(() => {
    setIsModalVisible(true)
  }, [])

  const onClose = useCallback(() => {
    setIsModalVisible(false)
  }, [])

  const onOk = useCallback(() => {
    form.submit()
    const { id } = form.getFieldsValue()
    if (id) {
      setIsModalVisible(false)
      history.push(`${EDITOR_URL}?id=${id}`)
    }
  }, [form, history])

  return (
    <Layout className="home-wrap">
      <Header className="header">
        <div className="title">低代码构建平台</div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[`${MenuType.创建设计}`]}
            onSelect={onSelect}
            style={{
              height: '100%',
              borderRight: 0,
              paddingTop: '10px',
              fontSize: '14px',
            }}
          >
            <Menu.Item key={MenuType.创建设计} icon={<PlusSquareOutlined />}>
              创建设计
            </Menu.Item>
            <Menu.Item key={MenuType.大屏管理} icon={<LayoutOutlined />}>
              大屏管理
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {menuType === MenuType.创建设计 ? (
              <>
                <div className="item" onClick={showModal}>
                  <div>
                    <div>
                      <PlusOutlined className="icon" />
                    </div>
                    <div>新建大屏</div>
                  </div>
                </div>
                <Modal
                  title="新建大屏"
                  forceRender
                  centered
                  visible={isModalVisible}
                  onOk={onOk}
                  onCancel={onClose}
                >
                  <Form form={form}>
                    <Form.Item
                      label="id"
                      name="id"
                      rules={[{ required: true, message: '请输入id' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Form>
                </Modal>
              </>
            ) : (
              <div>开发中...</div>
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Home
