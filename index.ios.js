
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect, Provider } from 'react-redux'

import store from 'redux-mvc-store'
import { initialize } from 'redux-mvc-store/actions'
store.dispatch(initialize())

class Todux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Todux = connect((s) => s)(Todux)

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
