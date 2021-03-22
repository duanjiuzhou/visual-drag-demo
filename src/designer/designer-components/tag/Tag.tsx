import { Tag as AntdTag } from 'antd'
import { TagProps } from 'antd/es/tag'

interface IProps extends TagProps {
  text: string
}

const Tag = (props: IProps) => {
  return <AntdTag {...props}>{props.text}</AntdTag>
}

export default Tag
