import { useMemo } from 'react'

// rc
import Header from './header'
import LayerList from './layer-list'
import Slider from './slider'

import { Designer, ConfigurationPanel, Canvas } from '@src/designer'
import componentsMeta from '@src/designer/components-meta'

// utils
import { getUrlParam } from '@src/utils'

// css
import './style.scss'

const Layout = () => {
  const id = getUrlParam('id')

  const componentsInstance = useMemo(() => {
    if (!id) {
      return []
    }
    const result = localStorage.getItem(id)
    return result ? JSON.parse(result) : []
  }, [id])

  console.log('id', id)

  return (
    <div className="layout-wrap">
      <Designer
        mode={'edit'}
        componentsMeta={componentsMeta}
        componentsInstance={componentsInstance}
      >
        <Header />
        <div className="layout-content">
          <LayerList />
          <div className="canvas-wrap">
            <div className="canvas-content grid-wrap">
              <Canvas />
            </div>
          </div>
          <ConfigurationPanel />
        </div>
        <Slider />
      </Designer>
    </div>
  )
}

export default Layout
