import { useMemo } from 'react'

// rc
import Header from './header'
import LayerList from './layer-list'
import Slider from './slider'

import { Designer, ConfigurationPanel, Canvas } from '@src/designer'
import componentsMeta from '@src/designer/components-meta'

// css
import './style.scss'

const Layout = () => {
  const componentsInstance = useMemo(() => {
    const result = localStorage.getItem('designerData')
    return result ? JSON.parse(result) : []
  }, [])

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
