import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

class ServiceComponent extends React.Component {
  componentDidMount() {
    this.props.callService();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error != undefined) {
      Alert.alert(
        'Error',
        nextProps.error, [{
          text: 'Do you want to reload',
          onPress: () => this.props.callService(),
        }],
        { cancelable: false },
      );
    }
  }

  renderCell = ({ item, index }) => {
    return (
      <View key={item.data.id} style={styles.containerList}>
        <Image source= {{ uri: item.data.thumbnail }} style={styles.photo} />
        <Text style={styles.text}>
          {item.data.author}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={this.renderCell}
        />
        <ActivityIndicator
          animating={this.props.isLoading}
          style={[styles.centering, { height: 80 }]}
          size="large"
          color="#0000ff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F5FCFF'
  },
  containerList: {
    // flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    // height: 80,
    // width: 80,
    // borderRadius: 20,
    backgroundColor: '#000000'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});


export default ServiceComponent;
