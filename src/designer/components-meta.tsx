import { lazy } from 'react'
import { IComponentsMeta } from './types'

import IFrameConfig from './designer-components/iframe/config'
import TagConfig from './designer-components/tag/config'
import PictureConfig from './designer-components/picture/config'
import PieChartConfig from './designer-components/charts/pie/config'

// 搭建组件懒加载
const IFrame = lazy(
  () => import(/* webpackChunkName: "iframe" */ './designer-components/iframe')
)
const Tag = lazy(
  () => import(/* webpackChunkName: "tag" */ './designer-components/tag')
)
const Image = lazy(
  () =>
    import(/* webpackChunkName: "picture" */ './designer-components/picture')
)

const PieChart = lazy(
  () =>
    import(
      /* webpackChunkName: "pie-chart" */ './designer-components/charts/pie'
    )
)

const componentsMeta: IComponentsMeta = {
  iframe: {
    ...IFrameConfig,
    component: IFrame,
  },
  tag: {
    ...TagConfig,
    component: Tag,
  },
  image: {
    ...PictureConfig,
    component: Image,
  },
  'pie-chart': {
    ...PieChartConfig,
    component: PieChart,
  },
}

export default componentsMeta
