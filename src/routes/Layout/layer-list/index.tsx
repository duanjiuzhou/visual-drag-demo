import { FC } from 'react'
import { useDesigner } from '@src/designer'
import styled from 'styled-components'

const LayerList: FC = () => {
  const {
    componentsInstance,
    activeComponent,
    setActiveComponentIndex,
  } = useDesigner()
  return (
    <ComponentListWrap>
      <div className="label">图层</div>
      <ul className="layer-list">
        {componentsInstance.map((item, index) => {
          const { id, name } = item
          return (
            <li
              className={`com-item ${
                activeComponent?.id === id ? 'com-checked' : null
              }`}
              key={id}
              onClick={() => {
                setActiveComponentIndex(index)
              }}
            >
              {name}
            </li>
          )
        })}
      </ul>
    </ComponentListWrap>
  )
}

const ComponentListWrap = styled.div`
  position: relative;
  width: 200px;
  height: 100%;
  color: #fff;
  background-color: #202327;
  .label {
    height: 40px;
    padding: 0 16px;
    line-height: 40px;
    text-align: center;
    background: #373a44;
  }
  .layer-list {
    flex: 1;
    height: calc(100% - 40px);
    padding: 0;
    overflow-y: auto;
    transition: all linear 0.2s;
    .com-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 8px;
      list-style: none;
      outline: none;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    .com-checked {
      background: rgb(36, 145, 247);
    }
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(144, 146, 152, 0.46);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 5px;
    }
  }
`

export default LayerList
