import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid,
} from 'react-native';

export default class Toolbar extends Component {
  render() {
    console.log('test 2');
    return (
      <ToolbarAndroid
        title="MY toolbar"
        actions={[{title: 'Settings', show: 'always'}]}
        onActionSelected={this.onActionSelected}
        style={styles.toolbar}
      />
    );
  }

  onActionSelected = (position) => {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }
}

// <ToolbarAndroid title="AwesomeApp" />

const styles = {
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
  },
};
