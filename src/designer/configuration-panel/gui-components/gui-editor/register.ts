import { Input, InputNumber } from "antd";
import ColorInput from "../color-input";
import BooleanControl from "../boolean";
import SelectControl from "../select";
import JsonEditor from "../json-input";
import RadioControl from "../button-radio";
import SliderControl from "../slider";
import GroupControl from "../group";
import SwitchControl from "../switch";
import CheckboxControl from "../checkbox";

export const transform2AntdFields: { [key: string]: any } = {
  text: Input,
  boolean: BooleanControl,
  number: InputNumber,
  color: ColorInput,
  select: SelectControl,
  json: JsonEditor,
  buttonRadio: RadioControl,
  slider: SliderControl,
  group: GroupControl,
  switch: SwitchControl,
  checkbox: CheckboxControl,
};

export const registerFormFields = (key: string) => {
  // 功能待定
  return transform2AntdFields[key];
};
