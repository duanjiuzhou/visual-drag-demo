import { IComponentListItem } from "./type";

const componentListConfig: IComponentListItem[] = [
  {
    name: "图表",
    icon: "",
    subList: [
      {
        name: "柱状图",
        icon: "",
        key: "bar-chart",
        components: [],
      },
      {
        name: "折线图",
        icon: "",
        key: "line-chart",
        components: [],
      },
      {
        name: "饼图",
        icon: "",
        key: "pie-chart",
        components: [],
      },
      {
        name: "散点图",
        icon: "",
        key: "scatter-chart",
        components: [],
      },
      {
        name: "其他",
        icon: "",
        key: "other-chart",
        components: [],
      },
    ],
    components: [],
  },
  {
    name: "媒体",
    key: "media",
    icon: "",
    components: [],
  },
  {
    name: "文字",
    key: "text",
    icon: "",
    components: [],
  },
  {
    name: "辅助",
    key: "interactive",
    icon: "",
    components: [],
  },
];

export default componentListConfig;
