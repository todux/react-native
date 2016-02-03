import React, {
  Component,
  View,
  PropTypes,
} from 'react-native'

import { connect } from 'react-redux'
import { map, clone } from 'lodash'

import {
  createTodo,
  updateTodo,
  updateFilter,
  Filters,
} from 'redux-mvc-store/actions'

import TodoList from './components/TodoList'
import TodoItem from './components/TodoList'
import NavBar from './components/NavBar'
import styles from './styles'

class Todux extends Component {

  render() {
    const { dispatch, todos, filter } = this.props
    return (
      <View>
        <NavBar
          title={"Todux"}
          currentFilter={filter}
          onFilterChange={(newFilter) => dispatch(updateFilter(newFilter))}
        />
        <TodoList
          todos={todos}
          onCreate={(text) => dispatch(createTodo({text}))}
          renderTodo={(todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={(id) => dispatch(deleteTodo(id))}
                onUpdate={(id, update) => dispatch(updateTodo(id, update))}
              />
            )
          }}
        />
      </View>
    )
  }
}

Todux.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    firebase_key: PropTypes.string,
  }).isRequired).isRequired,
  filter: PropTypes.string
}

function filterTodos(todos, filter) {
  switch (filter) {
    case Filters.ALL:
      return todos
    case Filters.COMPLETED:
      return todos.filter(todo => todo.completed)
    case Filters.ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function selector(state) {
  const reversedTodos = map(state.todos, clone).reverse()
  return {
    todos: filterTodos(reversedTodos, state.filter),
    filter: state.filter
  }
}

export default connect(selector)(Todux)
