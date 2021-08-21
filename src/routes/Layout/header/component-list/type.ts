import { IComponentMeta } from "@src/designer/types";

export interface ISubListItem {
  name: string;
  icon: string;
  key: string;
  components: IComponentMeta[];
}

// 组建分类列表
export interface IComponentListItem {
  name: string;
  icon: string;
  key?: string;
  subList?: ISubListItem[];
  components: IComponentMeta[];
}
