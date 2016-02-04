import React, {
  Component,
  Text,
  TextInput,
  View,
  PropTypes,
} from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'
import styles from './styles'
import colors from '../../colors';

class TodoItem extends Component {

  constructor() {
    super()
    this.state = { text: '' }
    this.clearInputText = this.clearInputText.bind(this)
    this.inputSubmit = this.inputSubmit.bind(this)
  }

  clearInputText() {
    this.setState({ text: '' })
  }

  inputSubmit() {
    this.props.onUpdate(undefined, this.state)
  }

  render() {
    const { onUpdate, onDelete, todo, autoFocusInput } = this.props

    let iconName = "minus",
        iconStyle = [styles.icon],
        textStyle = [styles.text],
        textComponent

    if (todo) {
      if (todo.completed) {
        iconName = "check"
        iconStyle.push(styles.iconCompleted)
        textStyle.push(styles.strikethrough)
      }

      textComponent = <Text style={textStyle}>{todo.text}</Text>
    }
    else {
      textComponent = <TextInput
        placeholder="Add a new Todo!"
        selectionColor={colors.darkBlue}
        style={textStyle}
        value={this.state.text}
        autoFocus={autoFocusInput}
        onChangeText={(text) => this.setState({text})}
        onEndEditing={this.clearInputText}
        onSubmitEditing={this.inputSubmit}
      />
    }

    return (
      <View style={styles.container}>
        <Icon
          name={iconName}
          style={iconStyle}
          onPress={() => {
            if (todo) {
              onUpdate(todo.id, {completed: !todo.completed})
            }
          }}
        />
        {textComponent}
      </View>
    )
  }
}

TodoItem.propTypes = {
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  autoFocusInput: PropTypes.bool,
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
}

export default TodoItem
