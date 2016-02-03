'use strict';

import React, { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    padding: 5,
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: colors.darkBlue,
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
  }
});
