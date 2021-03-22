// import { IComponentMeta } from "../types";

export interface IComponentListItem {
    name?: string;
    icon?: string;
    key: string;
    subList?: any[];
    // components: IComponentMeta[];
}

const componentListConfig: IComponentListItem[] = [
    {
        key: "iframe",
    },
    {
        key: "tag",
    },
    {
        key: "image",
    },
];

export default componentListConfig;
