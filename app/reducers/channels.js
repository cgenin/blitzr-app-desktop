// @flow
import {CHANNLES_ADD} from '../actions/channels';
const defaultState = {results: []};

export function channels(state = defaultState, action: Object) {
  let clone;
  switch (action.type) {
    case CHANNLES_ADD:
      clone = Object.assign({}, state);
      const tmp = Array.from(clone.results);
      tmp.push(action.obj);
      clone.results = tmp;
      return clone;
    default:
      return state;
  }
}
