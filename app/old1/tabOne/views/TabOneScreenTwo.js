import React from 'react'
import { View, Text } from 'react-native'
export default class TabOneScreenTwo extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab One Screen Two' }</Text>
      </View>
    )
  }
}
