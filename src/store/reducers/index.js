import userReducer from './user';
import pushNotIdReducer from './pushNotId';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  user: userReducer,
  pushNotId: pushNotIdReducer,
});

export default allReducers;
