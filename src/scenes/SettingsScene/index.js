import React, {
  Component,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  PropTypes,
} from 'react-native'

import { connect } from 'react-redux'

import s from './styles'
import colors from '../../colors'

class SettingsScene extends Component {

  constructor() {
    super()
    this.save = this.save.bind(this)
  }

  save() {
    debugger
  }

  render() {
    const { dispatch, firebase_subdomain, style } = this.props

    return (
      <View style={[style, s.container]}>
        <Text style={s.textDescription}>
          Here you can enter your firebase subdomain to recieve syncing across devices.  You can register blah blah blah.
        </Text>
        <View style={[s.fullWidthFormInput]}>
          <Text style={s.textLabel}>
            Firebase Subdomain
          </Text>
          <TextInput
            ref="firebase_subdomain_input"
            placeholder='something-neat-123'
            selectionColor={colors.darkBlue}
            style={s.textInput}
            value={firebase_subdomain}
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
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
