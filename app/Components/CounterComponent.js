import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class CounterApp extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={this.props.increment}
          title="Increase Count"
          color="#841584"
          accessibilityLabel="Increase Count"
        />

        <Text>{this.props.count}</Text>

        <Button
          onPress={this.props.decrement}
          title="Decrease Count"
          color="#841584"
          accessibilityLabel="Decrease Count"
        />
      </View>
    );
  }
}

export default CounterApp;
