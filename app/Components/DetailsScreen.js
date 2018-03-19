import React from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A nested details screen',
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to HomePage"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />

      </View>
    );
  }
}

export default DetailsScreen;
