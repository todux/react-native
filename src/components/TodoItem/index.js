import React, {
  Component,
  Text,
  View,
  PropTypes,
} from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'
import styles from './styles'

class TodoItem extends Component {
  render() {
    const { onUpdate, onDelete, todo } = this.props

    let iconName = "minus",
        iconStyle = [styles.icon],
        textStyles = [styles.text]

    if (todo.completed) {
      iconName = "check"
      iconStyle.push(styles.iconCompleted)
      textStyle.push(styles.strikethrough)
    }

    return (
      <View style={styles.container}>
        <Icon
          name={iconName}
          style={iconStyle}
          onPress={() => {
            if (todo.id) onUpdate({completed: !todo.completed})
          }}
        />
        <Text style={textStyles}>{todo.text}</Text>
      </View>
    )
  }
}

TodoItem.propTypes = {
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
}

export default TodoItem
