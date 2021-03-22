import { Suspense, lazy } from 'react'
import { Switch, Router, Route } from 'react-router-dom'

// utils
import history from '@utils/history'
import resizeFontsize from '@utils/resizeFontsize'

// config
import { BASE_URL } from '@constants/path'

const isMobile = process.env.REACT_APP_MOBILE === 'true'

const Layout = lazy(() => import('@routes/Layout'))

function App() {
  isMobile && resizeFontsize()

  return (
    <Router history={history}>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path={BASE_URL} component={Layout} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
