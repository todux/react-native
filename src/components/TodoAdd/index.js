import React, {
  Component,
  TextInput,
  View,
  PropTypes,
} from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'
import s from './styles'
import colors from '../../colors';

class TodoAdd extends Component {

  constructor() {
    super()
    this.state = { text: '' }
    this.submit = this.submit.bind(this)
  }

  submit() {
    if (this.state.text) {
      this.props.onCreate(this.state.text)
    }
  }

  render() {
    return (
      <View style={s.container}>
        <Icon name="chevron-up" style={s.icon} onPress={this.submit}/>
        <TextInput
          placeholder="Add a new Todo!"
          selectionColor={colors.darkBlue}
          style={s.text}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.submit}
        />
      </View>
    )
  }
}

TodoAdd.propTypes = {
  onCreate: PropTypes.func,
}

export default TodoAdd
