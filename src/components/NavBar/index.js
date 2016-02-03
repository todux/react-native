import React, {
  Component,
  Text,
  View,
  PropTypes,
} from 'react-native'

import { Filters } from 'redux-mvc-store/actions'
import FilterBar from '../FilterBar'
import styles from './styles'

class NavBar extends Component {
  render() {
    const { onFilterChange, title, currentFilter } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FilterBar
          onFilterChange={onFilterChange}
          currentFilter={currentFilter}
          filterOptions={{
            'Active': Filters.ACTIVE,
            'All': Filters.ALL,
            'Completed': Filters.COMPLETED,
          }}
        />
      </View>
    )
  }
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}

export default NavBar
