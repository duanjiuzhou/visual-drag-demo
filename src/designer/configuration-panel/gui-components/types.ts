import { InputProps } from "antd/lib/input";
import { InputNumberProps } from "antd/lib/input-number";
import { SelectProps } from "antd/lib/select";
import { RadioGroupProps } from "antd/lib/radio";
import { CheckboxGroupProps } from "antd/lib/checkbox";

// 暂不启用
export interface IControlBase {
  name: string; // 属性名
  description?: string; // 属性描述
  defaultValue: any; // 默认值
  props?: any;
}

interface ITextControl extends IControlBase {
  type: "text";
  props?: InputProps;
}

interface INumberControl extends IControlBase {
  type: "number";
  props?: InputNumberProps;
}

interface ISelectControl extends IControlBase {
  type: "select";
  props?: {
    options: {
      value: string;
      label: string;
    }[];
  } & SelectProps<string>;
}

interface IColorControl extends IControlBase {
  type: "color";
}

interface IBooleanControl extends IControlBase {
  type: "boolean";
}

interface IJsonControl extends IControlBase {
  type: "json";
}

interface IHiddenControl extends IControlBase {
  type: "hidden";
}

interface IRadioControl extends IControlBase {
  type: "buttonRadio";
  props?: {
    options: {
      value: string;
      label: string;
    }[];
  } & RadioGroupProps;
}

interface ISliderControl extends IControlBase {
  type: "slider";
}

interface ISwitchControl extends IControlBase {
  type: "switch";
}

export interface IGroupControl extends Omit<IControlBase, "defaultValue"> {
  type: "group";
  baseParam?: string;
  children: IUISchema;
  defaultValue?: any; // 将defaultValue字段置可选，避免填写不必要的信息
}

interface ICheckboxControl extends IControlBase {
  type: "checkbox";
  props?: {
    options: {
      value: string;
      label: string;
    }[];
  } & CheckboxGroupProps;
}

// 暂不启用
export type IUIControl =
  | ITextControl
  | INumberControl
  | ISelectControl
  | IColorControl
  | IBooleanControl
  | IJsonControl
  | IHiddenControl
  | IGroupControl
  | IRadioControl
  | ISliderControl
  | ISwitchControl
  | ICheckboxControl;

export type IUISchema = Record<string, IUIControl>;

export type IDataSchema = IUISchema;