import React from 'react'
import { Input } from 'antd'

interface IColorInputProps {
  value: string
  onChange: (value: string) => void
}

const ColorInput: React.FC<IColorInputProps> = ({ value = '', onChange }) => {
  return (
    <>
      <input value={value} type="color" onChange={(e) => onChange(e.target.value)} />
      <Input value={value} type="text" onChange={(e) => onChange(e.target.value)} />
    </>
  )
}

export default ColorInput
