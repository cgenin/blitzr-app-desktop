// @flow
import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import counter from './counter';
import screens from './screens';
import youtubeSearch from './youtube-search';
import channels from './channels';

const rootReducer = combineReducers({
  counter,
  screens,
  youtubeSearch,
  channels,
  routing
});

export default rootReducer;
