import { Slider } from 'antd'
import { SliderSingleProps } from 'antd/lib/slider'

// SliderRangeProps
export default function SliderControl(
  props: SliderSingleProps & { suffix: string; prefix: string }
) {
  const { suffix, prefix } = props
  return (
    <>
      {!!suffix && <label>{suffix}</label>}
      <Slider {...props} />
      {!!prefix && <label>{prefix}</label>}
    </>
  )
}
