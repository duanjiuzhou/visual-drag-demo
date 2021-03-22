import { Checkbox } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'

export default function RadioControl(props: CheckboxGroupProps) {
  return (
    <Checkbox.Group {...props}>
      {props.options?.map((item: any) => {
        return (
          <Checkbox key={item.value} value={item.value}>
            {item.label}
          </Checkbox>
        )
      })}
    </Checkbox.Group>
  )
}
