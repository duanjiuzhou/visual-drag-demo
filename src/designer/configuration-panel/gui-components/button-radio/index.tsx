import { Radio, RadioGroupProps } from 'antd'

export default function RadioControl(props: RadioGroupProps) {
  return (
    <Radio.Group {...props}>
      {props.options?.map((item: any) => {
        return (
          <Radio key={item.value} value={item.value}>
            {item.label}
          </Radio>
        )
      })}
    </Radio.Group>
  )
}
