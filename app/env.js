import configureStore from './store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';


export const GOOGLE_KEY = 'AIzaSyBbBJuK2wZAa1n8q7ii7HP0aZqrIqcAVIo';


export const DEFAULT_URL = '/';
export const BLITZR_URL = '/blizr';
export const CHANNELS_URL = '/channels';
export const YOUTUBE_URL = '/youtube';
export const YOUTUBE_VID_URL = '/youtube/vid/';

export const routesBar = [{path: DEFAULT_URL, name: 'Menu'},
  {path: BLITZR_URL, name: 'Blizr'},
  {path: CHANNELS_URL, name: 'Channels'},
  {path: YOUTUBE_URL, name: 'Youtube'}
];
export const store = configureStore();
export const history = syncHistoryWithStore(hashHistory, store);
