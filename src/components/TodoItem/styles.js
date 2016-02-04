import React, { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: 50,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    padding: 5,
    alignItems: "center",
    backgroundColor: '#FFF'
  },
  text: {
    flex: 1,
    color: colors.darkBlue,
    fontSize:19,
    minHeight: 50,
  },
  icon: {
    fontSize: 48,
    color: "#EEE",
    margin: 5,
  },
  iconCompleted: {
    color: colors.lightNeutral
  },
  strikethrough: {
    textDecorationLine: "line-through"
  },
  deleteStyle: {
    backgroundColor: 'red'
  }
});
