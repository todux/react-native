import React, {
  Component,
  View,
  TouchableHighlight,
  PropTypes,
} from 'react-native'

import {
  createTodo,
  updateTodo,
  deleteTodo,
  updateFilter,
  Filters,
} from 'redux-mvc-store/actions'

import { connect } from 'react-redux'
import { map, clone } from 'lodash'
import Icon from 'react-native-vector-icons/EvilIcons'

import SettingsScene from '../SettingsScene'
import FilterBar from '../../components/FilterBar'
import TodoList from '../../components/TodoList'
import TodoItem from '../../components/TodoItem'

import s from './styles'

class HomeScene extends Component {
  render() {
    const { dispatch, todos, filter, style } = this.props

    return (
      <View style={[style, s.container]}>
        <FilterBar
          currentFilter={filter}
          onFilterChange={(newFilter) => dispatch(updateFilter(newFilter))}
          filterOptions={{
            'All': Filters.ALL,
            'Active': Filters.ACTIVE,
            'Completed': Filters.COMPLETED,
          }}
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

HomeScene.route = { title: 'Todux' }

HomeScene.NavRight = ({navigator}) => {
  return (
    <Icon
      name="gear"
      style={s.actionIcon}
      onPress={() => {
        navigator.push({ title: SettingsScene.route.title })
      }}
    />
  )
}

HomeScene.propTypes = {
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

export default connect(selector)(HomeScene)
