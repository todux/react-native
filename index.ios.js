import React, { AppRegistry, Component } from 'react-native'
import { Provider } from 'react-redux'

import Todux from './src/app'

import { Filters, initialize } from 'todux-store/actions'
import store from 'todux-store'

store.dispatch(initialize((callback) => {
  callback({
    todos: [],
    filter: Filters.ALL,
    firebase_subdomain: 'shining-inferno-825',
  })
}))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todux/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Todux', () => App)
