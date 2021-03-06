import { IComponentConfig } from "../../types";

// 组件配置
const config: IComponentConfig = {
  version: '0.1.0',
  classify: [], // 组件类型
  name: 'stage',
  showName: '舞台',
  // 组件自定义控件配置
  uiSchema: {
    backgroundColor: {
      name: '背景色',
      type: 'color',
      defaultValue: '#c7c7c7',
    },
  },
}

export default config;
