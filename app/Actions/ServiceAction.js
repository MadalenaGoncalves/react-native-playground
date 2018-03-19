import { connect } from 'react-redux';
import axios from 'react-native-axios';

import * as Actions from './ActionTypes';
import ServiceComponent from '../Components/ServiceComponent';

const mapStateToProps = (state) => ({
  isLoading: state.serviceReducer.isLoading,
  error: state.serviceReducer.error,
  data: state.serviceReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  callService: () => dispatch(callWebService()),
});

export const callWebService = () => {
  return (dispatch) => {
    dispatch(serviceActionPending());
    axios.get('https://www.reddit.com/r/reactjs.json')
      .then(response => {
        dispatch(serviceActionSuccess(response.data.data.children))
      })
      .catch(err => {
        dispatch(serviceActionError(error));
      })
  }
}

export const serviceActionPending = () => ({
  type: Actions.SERVICE_PENDING,
});
export const serviceActionError = (error) => ({
  type: Actions.SERVICE_ERROR,
  error,
});
export const serviceActionSuccess = (data) => ({
  type: Actions.SERVICE_SUCCESS,
  data,
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceComponent);
