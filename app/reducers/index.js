// @flow
import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import counter from './counter';
import screens from './screens';
import youtubeSearch from './youtube-search';

const rootReducer = combineReducers({
  counter,
  screens,
  youtubeSearch,
  routing
});

export default rootReducer;
