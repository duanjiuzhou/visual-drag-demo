import { IComponentConfig } from "../../types";

// 组件配置
const config: IComponentConfig = {
  version: "0.1.0",
  classify: ["media"], // 组件类型。
  name: "image",
  showName: "图片",
  // 组件自定义控件配置
  uiSchema: {
    imgRepeatType: {
      name: "图片重复",
      type: "select",
      defaultValue: "不重复拉伸满",
      props: {
        options: [
          {
            value: "不重复拉伸满",
            label: "不重复拉伸满",
          },
          {
            value: "水平和垂直重复",
            label: "水平和垂直重复",
          },
          {
            value: "水平重复",
            label: "水平重复",
          },
          {
            value: "垂直重复",
            label: "垂直重复",
          },
        ],
      },
    },
    // imgRepeatType: {
    //   name: "图片重复",
    //   type: "buttonRadio",
    //   defaultValue: "不重复拉伸满",
    //   props: {
    //     options: [
    //       {
    //         value: "不重复拉伸满",
    //         label: "不重复拉伸满",
    //       },
    //       {
    //         value: "水平和垂直重复",
    //         label: "水平和垂直重复",
    //       },
    //       {
    //         value: "水平重复",
    //         label: "水平重复",
    //       },
    //       {
    //         value: "垂直重复",
    //         label: "垂直重复",
    //       },
    //     ],
    //   },
    // },
    url: {
      name: "图片链接",
      type: "text",
      defaultValue:
        "https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/0189ed0e459221e36d1fe35ef018ea39~300x300.images",
    },
    target: {
      name: "是否新开窗口",
      type: "switch",
      defaultValue: false,
      props: {
        checkedChildren: "开",
        unCheckedChildren: "关",
      },
    },
    // target: {
    //   name: "是否新开窗口",
    //   type: "boolean",
    //   defaultValue: false,
    // },
  },
};

export default config