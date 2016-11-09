// @flow
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {DEFAULT_URL, BLITZR_URL, YOUTUBE_URL} from './env';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import BlitzrPage from './containers/BlitzrPage';
import YoutubePage from './containers/YoutubePage';
import YoutubeVidPage from './containers/YoutubeVidPage';


export default (
  <Route path={DEFAULT_URL} component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/counter" component={CounterPage}/>
    <Route path={BLITZR_URL} component={BlitzrPage}/>
    <Route path={YOUTUBE_URL} component={YoutubePage}/>
    <Route path="/youtube/vid/:index" component={YoutubeVidPage}/>
  </Route>
);
