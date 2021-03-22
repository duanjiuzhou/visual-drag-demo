import { IUISchema } from "../gui-components/types";

export default {
  box: {
    name: "尺寸",
    type: "group",
    props: {
      isOpen: true,
    },
    children: {
      width: {
        name: "宽度",
        type: "number",
        defaultValue: 300,
      },
      height: {
        name: "高度",
        type: "number",
        defaultValue: 200,
      },
      top: {
        name: "Y轴偏移",
        type: "number",
        defaultValue: 200,
      },
      left: {
        name: "X轴偏移",
        type: "number",
        defaultValue: 200,
      },
      rotate: {
        name: "旋转",
        type: "number",
        defaultValue: 0,
      },
      opacity: {
        name: "透明度",
        type: "slider",
        defaultValue: 1,
        props: {
          min: 0,
          max: 1,
          step: 0.1,
        },
      },
    },
  },
} as IUISchema;
