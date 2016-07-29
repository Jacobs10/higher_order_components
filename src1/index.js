import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Resources from './components/resources'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import { browserHistory, Route, Router } from 'react-router'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)
ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)} >
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <Route path='resources' component={Resources} />
      </Route>
    </Router>
  </Provider>

  , document.querySelector('.container')
)
