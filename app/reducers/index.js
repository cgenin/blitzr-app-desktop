// @flow
import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import counter from './counter';
import screens from './screens';

const rootReducer = combineReducers({
  counter,
  screens,
  routing
});

export default rootReducer;
