import React, { AppRegistry, Component, StatusBarIOS } from 'react-native'
import { Provider } from 'react-redux'

import Todux from './src/app'

StatusBarIOS.setStyle('light-content')

import { initialize } from 'redux-mvc-store/actions'
import store from 'redux-mvc-store'

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
