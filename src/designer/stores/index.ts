import { useState, useCallback, useMemo, lazy } from 'react'
import { createContainer } from 'unstated-next'
import { IDesignerMode, IComponentInstance, IComponentsMeta, IDesignerProps } from '../types';
import { deepCopy, uuid } from '../utils';

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
    // 复制组件数据
    const [copyComponentData, setCopyComponentData] = useState<IComponentInstance>();

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

    // 更新缩放
    const updateScale = useCallback((value) => {
        let _ = value
        if (value < 0.2) {
            _ = 0.2
        }
        if (value > 5) {
            _ = 5
        }
        setsScale(_);
    }, [])

    // 激活的组件
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

    // 清空画布
    const clearCanvas = useCallback(() => {
        componentsInstance.splice(1)
        setComponentsInstance([...componentsInstance])
    }, [componentsInstance])

    // 删除组件
    const deleteComponent = useCallback((index: number) => {
        if (index === 0 || index === undefined) {
            return
        }
        if (index === activeComponentIndex) {
            setActiveComponentIndex(0)
        }

        componentsInstance.splice(index, 1)
        setComponentsInstance([...componentsInstance])
    }, [activeComponentIndex, componentsInstance])

    // 复制组件
    const copyComponent = useCallback(() => {
        if (!activeComponent) {
            return
        }
        setCopyComponentData(deepCopy(activeComponent))
    }, [activeComponent])

    // 粘贴组件
    const pasteComponent = useCallback((top: number, left: number) => {
        if (!copyComponentData) {
            return false
        }
        copyComponentData.box.top = top
        copyComponentData.box.left = left
        addComponent(deepCopy(copyComponentData))
        return true
    }, [addComponent, copyComponentData])

    // 置顶组件 true成功， false 已经到顶了
    const topComponent = useCallback((index: number) => {
        if (index < componentsInstance.length - 1) {
            const curComponent = componentsInstance.splice(index, 1)[0];
            componentsInstance.push(curComponent)
            setComponentsInstance([...componentsInstance])
            setActiveComponentIndex(componentsInstance.length - 1)
            return true
        }
        return false
    }, [componentsInstance])

    // 置底组件 true成功， false 已经到底了
    const bottomComponent = useCallback((index: number) => {
        if (index > 1) {
            const curComponent = componentsInstance.splice(index, 1)[0];
            componentsInstance.splice(1, 0, curComponent)
            setComponentsInstance([...componentsInstance])
            setActiveComponentIndex(1)
            return true
        }
        return false
    }, [componentsInstance])

    // 上移组件
    const upComponent = useCallback((index: number) => {
        if (index < componentsInstance.length - 1) {
            const temp = componentsInstance[index]
            const targetIndex = index + 1
            componentsInstance[index] = componentsInstance[targetIndex]
            componentsInstance[targetIndex] = temp
            setComponentsInstance([...componentsInstance])
            setActiveComponentIndex(targetIndex)
            return true
        }
        return false
    }, [componentsInstance])
    // 下移组件
    const downComponent = useCallback((index: number) => {
        if (index > 1) {
            const temp = componentsInstance[index]
            const targetIndex = index - 1
            componentsInstance[index] = componentsInstance[targetIndex]
            componentsInstance[targetIndex] = temp
            setComponentsInstance([...componentsInstance])
            setActiveComponentIndex(targetIndex)
            return true
        }
        return false
    }, [componentsInstance])

    return {
        mode, setMode, componentsInstance,
        updateComponent, addComponent,
        componentsMeta, setComponentsMeta,
        activeComponentIndex, setActiveComponentIndex,
        contextMenuState, hideContextMenu, showContextMenu,
        activeComponent,
        scale,
        copyComponentData,
        updateScale,
        deleteComponent,
        clearCanvas,
        copyComponent,
        pasteComponent,
        topComponent,
        bottomComponent,
        upComponent,
        downComponent,

    }
}

const DesignerStore = createContainer(Designer)

export const useDesigner = DesignerStore.useContainer;

export default DesignerStore
