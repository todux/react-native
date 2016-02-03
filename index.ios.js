import React, { AppRegistry, StatusBarIOS, Component } from 'react-native'
import { Provider } from 'react-redux'

import Todux from './src/app'

StatusBarIOS.setStyle('light-content')

import { initialize, createTodo } from 'redux-mvc-store/actions'
import store from 'redux-mvc-store'

store.dispatch(initialize())

store.dispatch(createTodo({text: "hello world"}))
store.dispatch(createTodo({text: "YES"}))

store.subscribe(() => console.log(store.getState()))

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
