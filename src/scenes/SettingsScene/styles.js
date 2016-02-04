import React, { StyleSheet } from 'react-native';
import colors from '../../colors'

export default StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
  },
  fullWidthFormInput: {
    backgroundColor: '#FFF',
    height: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
  },
  textLabel: {
    flex: 0,
    width: 170,
    textAlign: 'center',
    color: colors.darkBlue,
    alignSelf: 'center',
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  textDescription: {
    marginTop:15,
    padding: 10,
    color: '#888',
    fontSize: 12
  }
});
