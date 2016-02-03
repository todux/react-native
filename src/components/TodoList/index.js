import React, {
  Component,
  Text,
  ListView,
  PropTypes,
} from 'react-native'

import TodoItem from '../TodoItem'
import styles from './styles'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: this.createDataSource(props.todos)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.createDataSource(nextProps.todos)
    })
  }

  createDataSource(todos) {
    const ds = new ListView.DataSource({rowHasChanged: this.todoHasChanged})
    todos.push({text: '', completed: false})
    return ds.cloneWithRows(todos)
  }

  todoHasChanged(todo1, todo2) {
    todo1.text !== todo2.text || todo1.completed !== todo1.completed
  }

  render() {
    const { onCreate, onUpdate, onDelete } = this.props
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(todo) => {
          if (todo.id) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            )
          }

          return (
            <TodoItem
              key="new"
              todo={todo}
              onUpdate={(id, update) => onCreate(update.text)}
            />
          )
        }}
      />
    )
  }
}

TodoList.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    firebase_key: PropTypes.string,
  }).isRequired).isRequired,
}

export default TodoList
