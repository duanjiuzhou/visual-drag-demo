import * as React from 'react'

enum ImgRepeatType {
  不重复拉伸满,
  水平和垂直重复,
  水平重复,
  垂直重复,
}

const config = {
  [ImgRepeatType.不重复拉伸满]: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  [ImgRepeatType.水平和垂直重复]: {
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
  },
  [ImgRepeatType.水平重复]: {
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'auto 100%',
  },
  [ImgRepeatType.垂直重复]: {
    backgroundRepeat: 'repeat-y',
    backgroundSize: '100%',
  },
}

interface IProps extends React.HTMLAttributes<HTMLElement> {
  width?: number
  height?: number
  opacity?: number
  alt?: string
  imgRepeatType?: ImgRepeatType
  url?: string
  target?: boolean
}

const Image = (props: IProps) => {
  const {
    className = '',
    width,
    height,
    opacity,
    imgRepeatType = ImgRepeatType.不重复拉伸满,
    url,
    alt,
    target,
    style,
    ...rest
  } = props

  const myStyle = {
    width,
    height,
    opacity,
    backgroundImage: `url(${url})`,
    ...config[imgRepeatType],
    backgroundSize: 'contain',
  }
  return (
    <div className={className} style={{ ...style, ...myStyle }} {...rest}>
      {url && (
        <a
          href={url}
          target={target ? '_blank' : undefined}
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <span style={{ display: 'none' }}>{alt}</span>
        </a>
      )}
    </div>
  )
}

export default Image
