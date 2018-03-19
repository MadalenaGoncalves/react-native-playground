import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Details',
  }
);

export default RootStack;
