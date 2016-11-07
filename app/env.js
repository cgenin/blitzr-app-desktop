import configureStore from './store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';

export const DEFAULT_URL = '/';
export const BLITZR_URL = '/blizr';

export const routesBar = [{path: DEFAULT_URL, name: 'Menu'}, {path: '/counter', name: 'counter'},
  {path: BLITZR_URL, name: 'Blizr'}];
export const store = configureStore();
export const history = syncHistoryWithStore(hashHistory, store);