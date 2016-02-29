import React, { AppRegistry, Component } from 'react-native'
import { Provider } from 'react-redux'

import Todux from './src/app'

import { initialize } from 'redux-mvc-store/actions'
import store from 'todux-store'

store.dispatch(initialize())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todux/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Todux', () => App);
