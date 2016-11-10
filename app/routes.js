// @flow
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {DEFAULT_URL, BLITZR_URL, CHANNELS_URL, YOUTUBE_URL, YOUTUBE_VID_URL} from './env';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import BlitzrPage from './containers/BlitzrPage';
import ChannelsPage from './containers/ChannelsPage';
import YoutubePage from './containers/YoutubePage';
import YoutubeVidPage from './containers/YoutubeVidPage';


export default (
  <Route path={DEFAULT_URL} component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/counter" component={CounterPage}/>
    <Route path={BLITZR_URL} component={BlitzrPage}/>
    <Route path={CHANNELS_URL} component={ChannelsPage}/>
    <Route path={`${YOUTUBE_VID_URL}:index`} component={YoutubeVidPage}/>
    <Route path={YOUTUBE_URL} component={YoutubePage}/>
  </Route>
);
