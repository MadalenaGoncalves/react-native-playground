import React from 'react';
import { Provider } from 'react-redux';

import store from './Reducers/store';
import Navigator from './Navigator';

// import CounterAction from './Actions/CounterAction';
// import ServiceAction from './Actions/ServiceAction';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
