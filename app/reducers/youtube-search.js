// @flow
import {YOUTUBE_QUERY} from '../actions/youtube-search';
const defaultState = {q: '', results: []};

export default function youtubeSearch(state = defaultState, action: Object) {
  switch (action.type) {
    case YOUTUBE_QUERY:
      let clone = Object.assign({}, defaultState);
      clone.q = action.q;
      return clone;
    default:
      return state;
  }
}
