// rc
import Editor from './editor'
import ShowStage from './show-stage'

// stores
import { useDesigner } from '../stores'

interface IProps {
  className?: string
}

const Canvas = (props: IProps) => {
  const { className = '' } = props
  const { mode } = useDesigner()

  return mode === 'edit' ? <Editor className={className} /> : <ShowStage />
}

export default Canvas
