import { IDataSchema, IUISchema } from "../configuration-panel/gui-components/types";

export type IDesignerMode = "show" | "edit";

// 组件配置，包含可配置项和默认值
export interface IComponentConfig {
    version: string; // 版本号
    classify?: string[]; // 分类，支持多个，未填作为暂时隐藏组件
    name: string; // 组件名
    showName: string; // 组件展示名
    description?: string; // 组件描述
    icon?: string; // 组件icon
    image?: string; // 组件示意图
    uiSchema: IUISchema;
    dataSchema?: IDataSchema;
}

// 元组件定义
export interface IComponentMeta<T = any> extends IComponentConfig {
    wrap?: React.ComponentType<T>; // 容器组件
    component: React.ComponentType<T>;
    onPropsChange?: (prevProps: T, currentProps: T, componentMeta: IComponentMeta<T>) => T;
    suspenseFallback?: () => JSX.Element; // 可选加载组件
    errorFallback?: React.ComponentType<{ instance: IComponentInstance }>;
}

// 组件映射定义，例：Modal组件映射dialog
export type IComponentsMeta = Record<string, IComponentMeta>;

// 组件实例定义
export interface IComponentInstance<T = any> {
    id: string; // 组件id
    parentId?: string; // 组件挂在父节点id，成组/嵌套
    children?: string[]; // 子组件id，成组/嵌套
    type: string; // 组件名称
    name: string; // 组件类型
    version: string; // 用于后续版本订正
    box: {
        // 必填 box
        width: number;
        height: number;
        left: number;
        top: number;
        zIndex: number;
        rotate?: number;
    }; // 定位参数 
    style?: {
        style: React.CSSProperties;
        theme: Record<string, string>;
    }; // 主题 - 样式，暂不启用
    dataSource?: {
        url?: string; // 从接口获取数据
        storeParam?: string; // 数据层
        staticData?: any; // 静态数据
    };
    filter?: {};
    props: T; //  根据组件定制
}

export interface IDesignerProps {
    mode?: IDesignerMode;
    theme?: Record<string, any>;
    componentsMeta: IComponentsMeta;
    componentsInstance?: IComponentInstance[];
}
