'use strict';

import React, { StyleSheet } from 'react-native';
import colors from './colors'

export default StyleSheet.create({

  appContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  navBar: {
    backgroundColor: colors.darkBlue,
  },
  navText: {
    color: colors.white,
    fontSize: 16,
    marginVertical: 10,
  },
  navTitle: {
    fontWeight: "500",
  },
  navRight: {
    paddingRight: 10,
  },
  navLeft: {
    paddingLeft: 10,
  },
  scene: {
    flex: 1,
    paddingTop: 64,
  }
});
