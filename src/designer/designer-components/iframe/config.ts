import { IComponentConfig } from "../../types";

// 组件配置
const config: IComponentConfig = {
  version: "0.1.0",
  classify: ["interactive"], // 组件类型。
  name: "iframe",
  showName: "iframe窗口",
  // 组件自定义控件配置
  uiSchema: {
    src: {
      name: "链接",
      type: "text",
      defaultValue: "",
    },
    title: {
      name: "名称",
      type: "text",
      defaultValue: "",
    },
    closable: {
      name: "是否可关闭",
      type: "boolean",
      defaultValue: false,
    },
  },
};

export default config