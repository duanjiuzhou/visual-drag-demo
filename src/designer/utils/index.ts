import { IGroupControl } from "../configuration-panel/gui-components/types";
import { IComponentMeta } from "../types";

export function uuid(length = 12) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

export const getDefaultValue = (uiSchema: IComponentMeta['uiSchema'], baseParam = '') => {
    const defaultValue: Record<string, any> = {}
    for (const param in uiSchema) {
        const configItem = uiSchema[param]
        if (configItem.type === 'group') {
            const { children, baseParam: _baseParam } = configItem as IGroupControl
            getDefaultValue(children, _baseParam ? `${_baseParam}` : '')
        } else {
            defaultValue[baseParam + param] = configItem.defaultValue
        }
    }
    // for (const param in uiSchema) {
    //   const configItem: any = uiSchema[param]
    //   defaultValue[param] = configItem.defaultValue
    // }
    return defaultValue
}

export function unFlatten(data: Record<string, any>) {
    if (Object(data) !== data || Array.isArray(data)) {
        return data;
    }

    // eslint-disable-next-line
    const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
        resultHolder: Record<string, any> = {};
    for (const p in data) {
        let cur = resultHolder,
            prop = "",
            m;
        // eslint-disable-next-line no-cond-assign
        while ((m = regex.exec(p))) {
            cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
            prop = m[2] || m[1];
        }
        cur[prop] = data[p];
    }
    return resultHolder[""] || resultHolder;
}

export function flatten(data: Record<string, any>) {
    const result: Record<string, any> = {};

    function recurse(cur: Record<string, any>, prop: string) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            const l = cur.length;
            for (let i = 0; i < l; i++) {
                recurse(cur[i], `${prop}[${i}]`);
            }
            if (l === 0) {
                result[prop] = [];
            }
        } else {
            let isEmpty = true;
            for (const p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? `${prop}.${p}` : p);
            }
            if (isEmpty && prop) {
                result[prop] = {};
            }
        }
    }
    recurse(data, "");
    return result;
}

export function deepCopy(target: object) {
    if (typeof target === 'object') {
        const result: any = Array.isArray(target) ? [] : {}
        for (const key in target) {
            if (typeof target[key] === 'object') {
                result[key] = deepCopy(target[key])
            } else {
                result[key] = target[key]
            }
        }

        return result
    }

    return target
}