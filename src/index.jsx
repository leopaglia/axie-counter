import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import { Provider } from './appContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()

if (
  window.matchMedia('(display-mode: standalone)').matches ||
  !!window.navigator.standalone
) {
  window.resizeTo(540, 1250)
}
