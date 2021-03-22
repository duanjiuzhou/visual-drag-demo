import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root' //
import App from './App'
// import reportWebVitals from './reportWebVitals'

import 'normalize.css'
import '@styles/global.css'

const HotApp = process.env.NODE_ENV === 'development' ? hot(App) : App
// const HotApp = hot(App)

ReactDOM.render(
  <StrictMode>
    <HotApp />
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
