import { IComponentInstance } from '@src/designer/types'
import React from 'react'
import styled from 'styled-components'

export const defaultRootInstance: IComponentInstance = {
  id: 'stage',
  type: 'stage', // 组件名称
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
  onContextMenu?: () => void
  scale?: number
  className?: string
}

const Wrap = styled.div`
  position: relative;
  transform-origin: 0 0;
`

function Stage(props: IProps) {
  const { width, height, backgroundColor, scale = 1, ...rest } = props
  return (
    <Wrap
      {...rest}
      style={{
        width,
        height,
        backgroundColor,
        transform: `scale(${scale}`,
      }}
    >
      {props.children}
    </Wrap>
  )
}

export default Stage
