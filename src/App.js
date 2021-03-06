import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import AppContainer from './routes/AppContainer'
import onRouterUpdate from './onRouterUpdate'

import { start } from './actions/authActions'

const startAuthProcess = store => history => {
  store.dispatch(start(history))
}

const App = ({ store }) => {
  const startAuth = startAuthProcess(store)
  return (
    <Provider store={store}>
      <Router>
        <AppContainer onRouterUpdate={onRouterUpdate} startAuth={startAuth} />
      </Router>
    </Provider>
  )
}

export default App
