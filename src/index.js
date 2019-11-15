import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from 'containers/App'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import combinedReducers from 'reducers'

import * as serviceWorker from './serviceWorker'

const logger = []

if (process.env.NODE_ENV === 'development') {
  logger.push(createLogger)
  logger.push(thunk)
}

const store = createStore(combinedReducers, applyMiddleware(...logger))
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
