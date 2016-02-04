import React, {
  Component,
  ListView,
  PropTypes,
} from 'react-native'

import TodoItem from '../TodoItem'
import TodoAdd from '../TodoAdd'
import s from './styles'

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
    const { renderTodo, onCreate, todos } = this.props

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(todo) => {
          if (todo.id) return renderTodo(todo)
          else {
            return (
              <TodoAdd
                onCreate={(text) => onCreate(text)}
              />
            )
          }
        }}
      />
    )
  }
}

TodoList.propTypes = {
  onCreate: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    firebase_key: PropTypes.string,
  }).isRequired).isRequired,
}

export default TodoList
