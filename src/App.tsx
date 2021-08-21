import { Suspense, lazy } from 'react'
import { Switch, Router, Route } from 'react-router-dom'

// utils
import history from '@utils/history'
import resizeFontsize from '@utils/resizeFontsize'

// config
import { EDITOR_URL, BASE_URL, SHOW_URL } from '@constants/path'

const isMobile = process.env.REACT_APP_MOBILE === 'true'

const Home = lazy(() => import('@routes/Home'))
const Layout = lazy(() => import('@routes/Layout'))
const Board = lazy(() => import('@routes/Board'))

function App() {
  isMobile && resizeFontsize()

  return (
    <Router history={history}>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path={BASE_URL} component={Home} />
          <Route path={EDITOR_URL} component={Layout} />
          <Route path={SHOW_URL} component={Board} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
