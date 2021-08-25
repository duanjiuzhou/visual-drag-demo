import { useCallback, useState, useEffect } from 'react'
import { useDesigner } from '@src/designer'
import styled from 'styled-components'
import { IComponentMeta } from '@src/designer/types'
import { Dropdown, Menu, Empty } from 'antd'
import config from './config'
import { IComponentListItem } from './type'
import {
  IGroupControl,
  IUISchema,
} from '@src/designer/configuration-panel/gui-components/types'
import { unFlatten } from '@src/designer/utils'

const ComponentListWrap = styled.div`
  display: flex;
  color: white;
  box-shadow: rgba(43, 146, 210, 0.1) 0px 2px 4px 0px;
  align-items: center;
  .category {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 12px;
    cursor: pointer;
    &:hover {
      background-color: rgba(8, 14, 33, 0.5);
    }
    &.selected {
      color: rgba(21, 139, 246, 1);
      background-color: rgba(8, 14, 33, 0.3);
    }
  }
`

const OverlayWrap = styled.div`
  width: 300px;
  height: 160px;
  background-color: #000;
  color: #fff;
  .component-list {
    display: grid;
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    grid-template-columns: repeat(5, 1fr);
    padding: 8px;
  }
  .component-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(35, 198, 254, 1);
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
  .content-wrap {
    display: flex;
  }
  .menu-wrap {
    flex: none;
    width: 80px;
  }
  .component-wrap {
    flex: auto;
    overflow: auto;
  }
`

const ComponentItem = (props: IComponentMeta & { closeFunc: () => void }) => {
  const { addComponent, componentsMeta, componentsInstance } = useDesigner()

  const handleClick = useCallback(() => {
    const { name, showName, closeFunc, version } = props
    const defaultValue: Record<string, any> = {}
    const { uiSchema, dataSchema } = componentsMeta[name]
    // 递归处理字段，当前逻辑不完整
    const getDefaultValue = (_config: IUISchema, baseParam = '') => {
      for (const param in _config) {
        const configItem = _config[param]
        if (configItem.type === 'group') {
          const {
            children,
            baseParam: _baseParam,
          } = configItem as IGroupControl
          getDefaultValue(children, _baseParam ? `${_baseParam}` : '')
        } else {
          defaultValue[baseParam + param] = configItem.defaultValue
        }
      }
    }
    getDefaultValue(uiSchema)

    const center = [
      componentsInstance[0].box.width / 2,
      componentsInstance[0].box.height / 2,
    ]
    const [width, height] = [
      defaultValue.width || 150,
      defaultValue.height || 150,
    ]

    closeFunc()

    addComponent({
      id: '',
      type: name,
      name: showName,
      version,
      box: {
        width,
        height,
        top: center[1] - height / 2,
        left: center[0] - width / 2,
        zIndex: 1,
        rotate: 0,
        opacity: 1,
      }, // 定位参数
      props: { ...unFlatten(defaultValue) }, //  根据组件定制
      dataSource: dataSchema || {},
    })
  }, [props, componentsMeta, componentsInstance, addComponent])

  return (
    <div className="component-item" onClick={handleClick}>
      {props.showName}
    </div>
  )
}

const Overlay = (props: IComponentListItem & { closeFunc: () => void }) => {
  const { subList, components } = props
  const [selectedKeys, setSelectedKeys] = useState(
    subList ? [subList[0].key] : []
  )
  const [activeComponents, setActiveComponents] = useState<IComponentMeta[]>([])
  const getComponentItem = useCallback(
    (list: IComponentMeta[]) => {
      return list.length > 0 ? (
        <div className="component-list">
          {list.map((item) => (
            <ComponentItem
              key={item.name}
              {...item}
              closeFunc={props.closeFunc}
            />
          ))}
        </div>
      ) : (
        <Empty style={{ paddingTop: '12px' }} />
      )
    },
    [props.closeFunc]
  )

  useEffect(() => {
    if (subList) {
      const activeSub = subList.find((item) => item.key === selectedKeys[0])
      setActiveComponents(activeSub ? activeSub.components : [])
    }
  }, [selectedKeys, subList])

  return (
    <OverlayWrap>
      {subList ? (
        <div className="content-wrap">
          <div className="menu-wrap">
            <Menu
              selectedKeys={selectedKeys}
              onSelect={(val) => setSelectedKeys([val.key as string])}
            >
              {subList.map((item) => {
                return <Menu.Item key={item.key}>{item.name}</Menu.Item>
              })}
            </Menu>
          </div>
          <div className="component-wrap">
            {getComponentItem(activeComponents)}
          </div>
        </div>
      ) : (
        getComponentItem(components)
      )}
    </OverlayWrap>
  )
}

const ComponentList = () => {
  const { componentsMeta } = useDesigner()
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [uiConfig, setUiConfig] = useState<IComponentListItem[] | undefined>()

  const onClose = useCallback(() => {
    setSelectedCategory(undefined)
  }, [])

  useEffect(() => {
    const getUIComponentListConfig = () => {
      const componentArr = Object.keys(componentsMeta).map(
        (item) => componentsMeta[item]
      )
      const nextUIConfig = [...config]
      const configMap: Record<string, string> = {} // 记录数据位置信息
      nextUIConfig.forEach((item, index) => {
        if (item.key) {
          configMap[item.key] = `${index}`
        } else if (item.subList) {
          item.subList.forEach((i, t) => {
            configMap[i.key] = `${index}.${t}`
          })
        }
      })
      componentArr.forEach((item) => {
        if (item.classify) {
          item.classify.forEach((i) => {
            const dataPosition = configMap[i] ? configMap[i].split('.') : []
            if (dataPosition.length === 0) {
              return
            }

            if (dataPosition.length === 1) {
              nextUIConfig[Number(dataPosition[0])].components.push(item)
            } else if (dataPosition.length === 2) {
              nextUIConfig[Number(dataPosition[0])].subList![
                Number(dataPosition[1])
              ].components.push(item)
            }
          })
        }
      })
      setUiConfig(nextUIConfig)
    }
    getUIComponentListConfig()
  }, [componentsMeta])

  return (
    <ComponentListWrap>
      {uiConfig
        ? uiConfig.map((item) => (
            <Dropdown
              visible={selectedCategory === item.name}
              onVisibleChange={(visible: boolean) => {
                setSelectedCategory(item.name)
                if (!visible) {
                  setSelectedCategory(undefined)
                }
              }}
              trigger={['click']}
              key={item.name}
              overlay={<Overlay {...item} closeFunc={onClose} />}
            >
              <div
                className={`category ${
                  item.name === selectedCategory ? 'selected' : ''
                }`}
              >
                {item.name}
              </div>
            </Dropdown>
          ))
        : null}
    </ComponentListWrap>
  )
}

export default ComponentList
