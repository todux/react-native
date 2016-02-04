import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  PropTypes,
  Navigator
} from 'react-native'

import HomeScene from './scenes/HomeScene'
import SettingsScene from './scenes/SettingsScene'
import s from './styles'

class Todux extends Component {
  render() {
    return (
      <Navigator
        initialRoute={HomeScene.route}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case HomeScene.route.title:
              return <HomeScene style={s.scene}/>

            case SettingsScene.route.title:
              return <SettingsScene style={s.scene}/>
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            style={s.navBar}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                switch (route.title) {
                  case HomeScene.route.title:
                    return null

                  case SettingsScene.route.title:
                    return <SettingsScene.NavLeft navigator={navigator} style={[s.navText, s.navLeft]}/>
              }

                return null
              },

              Title: (route, navigator, index, navState) => {
                return (
                  <Text style={[s.navText, s.navTitle]}>
                    {route.title}
                  </Text>
                )
              },

              RightButton: (route, navigator, index, navState) => {
                switch (route.title) {
                  case HomeScene.route.title:
                    return <HomeScene.NavRight navigator={navigator}/>

                  case SettingsScene.route.title:
                    return <SettingsScene.NavRight navigator={navigator} style={[s.navText, s.navRight]}/>
                }
              }
            }}
          />
        }
      />
    )
  }
}

export default Todux
