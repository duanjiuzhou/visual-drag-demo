import { Suspense, lazy } from 'react'
import { Switch, Router, Route } from 'react-router-dom'

// utils
import history from '@utils/history'

// path
import { BASE_URL, SHOW_URL } from '@constants/path'

const Layout = lazy(() => import('@routes/Layout'))
const Board = lazy(() => import('@routes/Board'))

function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path={BASE_URL} exact component={Layout} />
          <Route path={SHOW_URL} component={Board} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
