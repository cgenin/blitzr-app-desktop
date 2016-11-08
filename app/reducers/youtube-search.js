// @flow
import {YOUTUBE_QUERY, YOUTUBE_RESULTS} from '../actions/youtube-search';
const defaultState = {q: '', items: [], nextPage: ''};

export default function youtubeSearch(state = defaultState, action: Object) {
  let clone;
  switch (action.type) {
    case YOUTUBE_QUERY:
      clone = Object.assign({}, defaultState);
      clone.q = action.q;
      return clone;
    case YOUTUBE_RESULTS:
      clone = Object.assign({}, state);
      clone.items = state.items.concat(action.res);
      clone.nextPage = action.nextPage;
      return clone;
    default:
      return state;
  }
}
