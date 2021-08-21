import { useState, useCallback, useMemo, lazy } from 'react'
import { createContainer } from 'unstated-next'
import { IDesignerMode, IComponentInstance, IComponentsMeta, IDesignerProps } from '../types';
import { uuid } from '../utils';

import { defaultRootInstance } from '../designer-components/stage';
import StageConfig from '../designer-components/stage/config'

const Stage = lazy(
    () => import(/* webpackChunkName: "stage" */ '../designer-components/stage')
)

const initialState: IDesignerProps = {
    mode: "show",
    componentsMeta: {},
    componentsInstance: []
}

// 补充根节点
const initInstances = (instances: IComponentInstance[]) => {
    if (instances.length === 0 || instances[0].type !== "stage") {
        instances.unshift(defaultRootInstance);
    }
    return instances;
};

// 补充组件元数据
const initComponentsMeta = (meta: IComponentsMeta) => {
    if (!meta['stage']) {
        meta.stage = {
            ...StageConfig,
            component: Stage,
        }
    }
    return meta;
};

function Designer(state = initialState) {
    // designer状态，edit编辑态，show展示态
    const [mode, setMode] = useState<IDesignerMode>(state.mode || "show");
    const [scale, setsScale] = useState(1);
    // 组件实例列表
    const [componentsInstance, setComponentsInstance] = useState<IComponentInstance[]>(initInstances(state.componentsInstance || []));
    // 组件元数据
    const [componentsMeta, setComponentsMeta] = useState<IComponentsMeta>(
        initComponentsMeta(state.componentsMeta || {})
    );
    // 当前激活的组件索引，0为根节点
    const [activeComponentIndex, setActiveComponentIndex] = useState<number>(0);

    // 右击菜单数据
    const [contextMenuState, setContextMenuState] = useState({
        top: 0,
        left: 0,
        show: false,
    })

    // 添加组件
    const addComponent = useCallback((componentInstance: IComponentInstance) => {
        componentInstance.id = uuid()
        console.log('添加组件', componentInstance)
        setComponentsInstance((_) => {
            return [..._, componentInstance];
        });
    }, [])

    // 更新指定组件
    const updateComponent = useCallback((id: string, c: Partial<IComponentInstance>) => {
        console.log('更新指定组件', c);
        setComponentsInstance((_) => {
            const index = _.findIndex((item) => item.id === id);
            if (index === -1) {
                return _;
            }
            _[index] = { ..._[index], ...c };

            return [..._];
        });
    }, []);

    const updateScale = useCallback((value) => {
        let _ = value
        if (value < 0.2) {
            _ = 0.2
        }
        if (value > 2) {
            _ = 2
        }
        setsScale(_);
    }, [])

    const activeComponent = useMemo(
        () =>
            activeComponentIndex !== undefined
                ? componentsInstance[activeComponentIndex]
                : undefined,
        [activeComponentIndex, componentsInstance]
    )

    // 显示右键菜单
    const showContextMenu = useCallback((top: number, left: number) => {
        setContextMenuState({ show: true, left, top })
    }, [])

    // 隐藏右键菜单
    const hideContextMenu = useCallback(() => {
        setContextMenuState((_) => ({
            ..._, show: false
        }))
    }, [])

    return {
        mode, setMode, componentsInstance,
        updateComponent, addComponent,
        componentsMeta, setComponentsMeta,
        activeComponentIndex, setActiveComponentIndex,
        contextMenuState, hideContextMenu, showContextMenu,
        activeComponent,
        scale,
        updateScale
    }
}

const DesignerStore = createContainer(Designer)

export const useDesigner = DesignerStore.useContainer;

export default DesignerStore
