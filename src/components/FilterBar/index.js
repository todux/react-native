import React, {
  Component,
  SegmentedControlIOS,
  Text,
  View,
  PropTypes,
} from 'react-native'

import { keys, values, findIndex } from 'lodash'
import styles from './styles'

class FilterBar extends Component {

  constructor() {
    super()
    this.onFilter = this.onFilter.bind(this)
  }

  indexOf(filter) {
    const { filterOptions } = this.props
    return findIndex(values(filterOptions), filter)
  }

  onFilter(event) {
    const { onFilterChange, filterOptions } = this.props
    onFilterChange(
      values(filterOptions)[event.nativeEvent.selectedSegmentIndex]
    )
  }

  render() {
    const { onFilterChange, filter, filterOptions } = this.props

    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          values={keys(filterOptions)}
          selectedIndex={this.indexOf(filter)}
          onChange={this.onFilter}
        />
      </View>
    )
  }
}

FilterBar.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}

export default FilterBar
