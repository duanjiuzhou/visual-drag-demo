import { useState, useRef, useCallback, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import styled from 'styled-components'
import { Button } from 'antd'

const Wrap = styled.div`
  .btn-save {
    margin: 20px 0 0;
  }
`
const json2String = (json: any) => {
  if (typeof json !== 'object') {
    return ''
  }
  try {
    return JSON.stringify(json, null, '\t')
  } catch {
    return ''
  }
}

interface IProps {
  value: Record<string, any>
  width?: string | number
  height?: string | number
  onChange?: (value: IProps['value']) => void
  onSave?: (value: Record<string, any>) => void
}

const JsonEditor = (props: IProps) => {
  const [editorValue, setEditorValue] = useState(json2String(props.value))
  const [isEditorReady, setIsEditorReady] = useState(false)
  const valueGetter = useRef<() => string>()

  const handleEditorDidMount = (_valueGetter: () => string) => {
    setIsEditorReady(true)
    valueGetter.current = _valueGetter
  }

  const handleChange = useCallback(
    (e, value) => {
      props.onChange?.(JSON.parse(value))
    },
    [props]
  )

  const handleSave = useCallback(() => {
    const value = valueGetter.current!() as string
    props.onSave?.(JSON.parse(value))
  }, [props])

  // TODO 外部其他操作修改[componentsInstance]，同步至editor
  useEffect(() => {
    setEditorValue(json2String(props.value))
  }, [props])

  return (
    <Wrap>
      <Editor
        height={props.height || 600}
        width={props.width || '100%'}
        language="json"
        theme="dark"
        value={editorValue}
        // options={{
        //   formatOnType: true,
        // }}
        onChange={handleChange}
        onMount={handleEditorDidMount}
      />

      {/* 传参保存方法既显示 */}
      {props.onSave && (
        <Button className="btn-save" type="primary" onClick={handleSave} disabled={!isEditorReady}>
          更新
        </Button>
      )}
    </Wrap>
  )
}

export default JsonEditor
