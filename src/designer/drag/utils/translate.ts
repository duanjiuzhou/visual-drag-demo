export function mod360(deg: number) {
    return (deg + 360) % 360
}

/**
 * 计算根据圆心旋转后的点的坐标
 * @param   {Object}  point  旋转前的点坐标
 * @param   {Object}  center 旋转中心
 * @param   {Number}  rotate 旋转的角度
 * @return  {Object}         旋转后的坐标
 * https://www.zhihu.com/question/67425734/answer/252724399 旋转矩阵公式
 */
export function calculateRotatedPointCoordinate(point: { x: number, y: number }, center: { x: number, y: number }, rotate: number) {
    /**
     * 旋转公式：
     *  点a(x, y)
     *  旋转中心c(x, y)
     *  旋转后点n(x, y)
     *  旋转角度θ                tan ??
     * nx = cosθ * (ax - cx) - sinθ * (ay - cy) + cx
     * ny = sinθ * (ax - cx) + cosθ * (ay - cy) + cy
     */

    return {
        x: (point.x - center.x) * Math.cos(angleToRadian(rotate)) - (point.y - center.y) * Math.sin(angleToRadian(rotate)) + center.x,
        y: (point.x - center.x) * Math.sin(angleToRadian(rotate)) + (point.y - center.y) * Math.cos(angleToRadian(rotate)) + center.y,
    }
}

// 求两点之间的中点坐标
export function getCenterPoint(p1: { x: number, y: number }, p2: { x: number, y: number }) {
    return {
        x: p1.x + ((p2.x - p1.x) / 2),
        y: p1.y + ((p2.y - p1.y) / 2),
    }
}

// 角度转弧度
// Math.PI = 180 度
function angleToRadian(angle: number) {
    return angle * Math.PI / 180
}