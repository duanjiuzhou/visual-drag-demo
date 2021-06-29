import { IComponentConfig } from "../../../types";

// 组件配置
const config: IComponentConfig = {
  version: "0.1.0",
  name: "pie-chart",
  showName: "饼图",
  classify: ["pie-chart"], // 组件类型。
  // 组件自定义控件配置
  uiSchema: {
    title: {
      name: "标题",
      type: "group",
      baseParam: "title",
      children: {
        visible: {
          name: "是否展示",
          type: "boolean",
          defaultValue: true,
        },
        text: {
          name: "文本",
          type: "text",
          defaultValue: "多色饼图",
        },
      },
    },
    description: {
      name: "描述",
      type: "group",
      baseParam: "description",
      children: {
        visible: {
          name: "是否展示",
          type: "boolean",
          defaultValue: true,
        },
        text: {
          name: "文本",
          type: "text",
          defaultValue:
            "指定颜色映射字段(colorField)，饼图切片将根据该字段数据显示为不同的颜色。指定颜色需要将color配置为一个数组。\n当把饼图label的类型设置为inner时，标签会显示在切片内部。设置offset控制标签的偏移值。",
        },
      },
    },
    radius: {
      name: "半径",
      type: "number",
      defaultValue: 0.8,
    },
    angleField: {
      name: "扇形切片字段",
      type: "text",
      defaultValue: "value",
    },
    colorField: {
      name: "扇形颜色字段",
      type: "text",
      defaultValue: "type",
    },
    label: {
      name: "标签文本",
      type: "group",
      baseParam: "label",
      children: {
        visible: {
          name: "是否展示",
          type: "boolean",
          defaultValue: true,
        },
        type: {
          name: "标签文本类型",
          type: "select",
          props: {
            options: [
              { label: "扇形切片内", value: "inner" },
              { label: "饼外", value: "outer" },
              { label: "圆形排布于饼外", value: "outer-center" },
              { label: "蜘蛛布局", value: "spider" },
            ],
          },
          defaultValue: "inner",
        },
      },
    },
    forceFit: {
      name: "自适应容器宽高",
      type: "boolean",
      defaultValue: true,
    },
  },
  dataSchema: {
    staticData: [
      {
        type: "分类一",
        value: 27,
      },
      {
        type: "分类二",
        value: 25,
      },
      {
        type: "分类三",
        value: 18,
      },
      {
        type: "分类四",
        value: 15,
      },
      {
        type: "分类五",
        value: 10,
      },
      {
        type: "其它",
        value: 5,
      },
    ],
  },
};

export default config