import { IComponentConfig } from "../../types";

// 组件配置
const config: IComponentConfig = {
  version: "0.1.0",
  classify: ["text"], // 组件类型。
  name: "tag",
  showName: "标签",
  // 组件自定义控件配置
  uiSchema: {
    text: {
      name: "文本",
      type: "text",
      defaultValue: "我是一个标签",
    },
    color: {
      name: "颜色",
      type: "color",
      defaultValue: "#ff0000",
    },
  },
};

export default config;
