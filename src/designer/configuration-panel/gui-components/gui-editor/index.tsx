import { FC, useCallback, useEffect } from 'react'
import { Form, Button } from 'antd'
import { registerFormFields } from './register'
import { IUIControl, IGroupControl } from '../types'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

interface IProps {
  value: Record<string, any>
  config: Record<string, any>
  successCB: (allValues: any) => void
}

const GuiItem: FC<{ config: IUIControl; name: string }> = ({
  config,
  name,
}) => {
  const { name: label, type, props } = config
  const C = registerFormFields(type)
  if (type === 'hidden') {
    return null
  }

  if (type === 'group') {
    const { children, baseParam } = config as IGroupControl
    return (
      <C name={label} {...props}>
        {Object.keys(children).map((key) => {
          const _key = (baseParam ? `${baseParam}.` : '') + key
          return <GuiItem key={_key} name={_key} config={children[key]} />
        })}
      </C>
    )
  }

  const valuePropName = ['boolean', 'switch'].includes(type)
    ? 'checked'
    : 'value'

  return (
    <Form.Item name={name} label={label} valuePropName={valuePropName}>
      <C {...props} />
    </Form.Item>
  )
}

const GuiForm: FC<IProps> = ({ value, config, successCB }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
  }, [form, value])

  const onFinish = useCallback(
    (allValues) => {
      successCB(allValues)
    },
    [successCB]
  )

  return (
    <Form onFinish={onFinish} initialValues={value} {...layout} form={form}>
      {Object.keys(config).map((key) => (
        <GuiItem key={key} name={key} config={config[key]} />
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          更新
        </Button>
      </Form.Item>
    </Form>
  )
}

export default GuiForm
