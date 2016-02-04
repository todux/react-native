import React, {
  Component,
  Text,
  TextInput,
  View,
  PropTypes,
} from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'
import s from './styles'
import colors from '../../colors';

class TodoItem extends Component {

  render() {
    const { onUpdate, onDelete, todo } = this.props

    let iconName = "minus",
        iconStyle = [s.icon],
        textStyle = [s.text],
        textComponent

    if (todo.completed) {
      iconName = "check"
      iconStyle.push(s.iconCompleted)
      textStyle.push(s.strikethrough)
    }

    return (
      <View style={s.container}>
        <Icon
          name={iconName}
          style={iconStyle}
          onPress={() => {
            if (todo) {
              onUpdate(todo.id, {completed: !todo.completed})
            }
          }}
        />
        <Text style={textStyle}>{todo.text}</Text>
      </View>
    )
  }
}

TodoItem.propTypes = {
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
}

export default TodoItem
