import { Select } from 'antd'
import { SelectProps } from 'antd/lib/select'

const SelectControl = (
  props: SelectProps<string> & { options: { label: string; value: string }[] }
) => {
  return (
    <Select {...props}>
      {props.options.map((item) => {
        return (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        )
      })}
    </Select>
  )
}

export default SelectControl
