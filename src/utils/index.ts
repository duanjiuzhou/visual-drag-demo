// 获取url指定参数
export const getUrlParam = (param: string) => {
    const reg = new RegExp(`(^|&)${param}=([^&]*)(&|$)`);
    const r = window.location.search.substr(1).match(reg);
    return r !== null ? decodeURI(r[2]) : undefined;
};