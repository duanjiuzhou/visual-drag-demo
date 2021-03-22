import { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    font-style: normal;
    background-color: rgb(153, 153, 153);
    border-radius: 2px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease 0s;

    &:before,
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 4px;
      background-color: rgb(240, 240, 240);
      border-radius: 2px;
      transform: translate(-50%, -50%) rotate(45deg);
      content: '';
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &:hover {
    .close {
      opacity: 0.8;
    }
  }
`

const Empty = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: white;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
`

interface IProps {
  src: string
  title?: string
  closable?: boolean
}

function IframeWrapper(props: IProps) {
  const { src, title = src, closable } = props
  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(true)
  }

  if (!src) {
    return <Empty>请输入网站地址</Empty>
  }

  return (
    <>
      {!close && (
        <Wrap>
          <iframe
            title={title}
            src={src}
            width={'100%'}
            height={'100%'}
            style={{ border: 'none' }}
          />
          {closable === true && <Wrap className="close" onClick={handleClose} />}
        </Wrap>
      )}
    </>
  )
}

export default IframeWrapper
