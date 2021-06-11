import { IComponentInstance } from '@src/designer/types'
import React from 'react'
import styled from 'styled-components'

export const defaultRootInstance: IComponentInstance = {
  id: 'root',
  type: 'root', // 组件名称
  name: '舞台',
  version: '0.1.0',
  box: {
    width: 1200,
    height: 740,
    left: 0,
    top: 0,
    zIndex: 1,
    rotate: 0,
  },
  props: {
    backgroundColor: '#c7c7c7',
  },
}

interface IProps {
  width: number
  height: number
  backgroundColor: string
  children?: React.ReactNode
  onClick?: () => void
  onMouseDown?: () => void
}

const Wrap = styled.div<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => `
    width:${props.width}px;
    height:${props.height}px;
    background-color:${props.backgroundColor};
  `};
`

function RootWrap(props: IProps) {
  return <Wrap {...props}>{props.children}</Wrap>
}

export default RootWrap
