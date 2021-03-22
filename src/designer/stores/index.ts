import { useState, useCallback } from 'react'
import { createContainer } from 'unstated-next'
import { IDesignerMode, IComponentInstance, IComponentsMeta } from '../types';
import { uuid } from '../utils';

interface IDesignerProps {
    mode: IDesignerMode;
    componentsMeta: IComponentsMeta
}
const initialState: IDesignerProps = {
    mode: "show",
    componentsMeta: {}
}

function Designer(state = initialState) {
    // designer状态，edit编辑态，show展示态
    const [mode, setMode] = useState<IDesignerMode>(state.mode || "show");
    // 组件实例列表
    const [componentsInstance, setComponentsInstance] = useState<IComponentInstance[]>([]);
    // 组件元数据
    const [componentsMeta, setComponentsMeta] = useState<IComponentsMeta>(
        state.componentsMeta || {}
    );
    // 当前激活的组件索引，0为根节点
    const [activeComponentIndex, setActiveComponentIndex] = useState<number | undefined>(0);
    // 当前激活的组件
    const [curComponent, setCurComponent] = useState<IComponentInstance>();
    // 组件是否处于点击状态
    const [isClickComponent, setIsClickComponent] = useState(false)

    // 添加组件
    const addComponent = useCallback((componentInstance: IComponentInstance, index?: number) => {
        if (index !== undefined) {
            componentsInstance.splice(index, 0, componentInstance);
        } else {
            componentInstance.id = uuid()
            console.log('添加组件', componentInstance)
            setComponentsInstance((_) => {
                return [..._, componentInstance];
            });
        }
    }, [componentsInstance])

    // 更新指定组件
    const updateComponent = useCallback((id: string, c: Partial<IComponentInstance>) => {
        setComponentsInstance((_) => {
            const index = _.findIndex((item) => item.id === id);
            if (index === -1) {
                return _;
            }
            _[index] = { ..._[index], ...c };

            return [..._];
        });
    }, []);

    // 更新当前激活的组件
    const updateCurComponent = useCallback((c: Partial<IComponentInstance>) => {
        setCurComponent((_) => {
            if (!_) {
                return
            }
            return { ..._, ...c }
        })
    }, []);

    return {
        mode, setMode, componentsInstance, addComponent,
        componentsMeta, setComponentsMeta, updateComponent,
        activeComponentIndex, setActiveComponentIndex, isClickComponent,
        setIsClickComponent, curComponent, updateCurComponent, setCurComponent
    }
}

const DesignerStore = createContainer(Designer)

export const useDesigner = DesignerStore.useContainer;

export default DesignerStore
