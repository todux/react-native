import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  PropTypes,
} from 'react-native'

import { connect } from 'react-redux'
import s from './styles'

class SettingsScene extends Component {
  render() {
    const { dispatch, firebase_subdomain, style } = this.props

    return (
      <View style={[style, s.container]}>
      </View>
    )
  }
}

SettingsScene.route = { title: 'Settings' }

SettingsScene.NavLeft =({navigator, style}) => {
  return (
    <TouchableHighlight onPress={() => navigator.pop()}>
      <Text style={style}>Back</Text>
    </TouchableHighlight>
  )
}

SettingsScene.NavRight = ({navigator, style}) => {
  return (
    <TouchableHighlight onPress={() => navigator.pop()}>
      <Text style={style}>Save</Text>
    </TouchableHighlight>
  )
}


SettingsScene.propTypes = {
  firebase_subdomain: PropTypes.string
}

function selector(state) {
  return {
    firebase_subdomain: state.firebase_subdomain
  }
}

export default connect(selector)(SettingsScene)
