// rc
import Header from './header'
import {
  ComponentList,
  Designer,
  ConfigurationPanel,
  Canvas,
} from '@src/designer'

import componentsMeta from '@src/designer/components-meta'

// css
import './style.scss'

const Layout = () => {
  return (
    <div className="layout-wrap">
      <Designer mode={'edit'} componentsMeta={componentsMeta}>
        <Header />
        <div className="layout-content">
          <ComponentList />
          <div className="canvas-wrap">
            <Canvas className="canvas-content" />
          </div>

          <ConfigurationPanel />
        </div>
      </Designer>
    </div>
  )
}

export default Layout
