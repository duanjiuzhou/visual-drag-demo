import { useState, useCallback, useMemo } from 'react'
import { createContainer } from 'unstated-next'
import { defaultRootInstance } from '../designer-components/root-wrap';
import { IDesignerMode, IComponentInstance, IComponentsMeta, IDesignerProps } from '../types';
import { uuid } from '../utils';

const initialState: IDesignerProps = {
    mode: "show",
    componentsMeta: {},
    componentsInstance: []
}

// 补充根节点
const initInstances = (instances: IComponentInstance[]) => {
    if (instances.length === 0 || instances[0].type !== "root") {
        instances.unshift(defaultRootInstance);
    }
    return instances;
};

function Designer(state = initialState) {
    // designer状态，edit编辑态，show展示态
    const [mode, setMode] = useState<IDesignerMode>(state.mode || "show");
    // 组件实例列表
    const [componentsInstance, setComponentsInstance] = useState<IComponentInstance[]>(initInstances(state.componentsInstance || []));
    // 组件元数据
    const [componentsMeta, setComponentsMeta] = useState<IComponentsMeta>(
        state.componentsMeta || {}
    );
    // 当前激活的组件索引，0为根节点
    const [activeComponentIndex, setActiveComponentIndex] = useState<number | undefined>(0);
    // 组件是否处于点击状态
    const [isClickComponent, setIsClickComponent] = useState(false)
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
        isClickComponent, setIsClickComponent,
        contextMenuState, hideContextMenu, showContextMenu,
        activeComponent,
    }
}

const DesignerStore = createContainer(Designer)

export const useDesigner = DesignerStore.useContainer;

export default DesignerStore
