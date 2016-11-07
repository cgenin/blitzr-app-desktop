// @flow
import {RESIZE_SCREENS} from '../actions/screens';
const defaultState = {width: 0, height: 0};

export default function screens(state = defaultState, action: Object) {
  switch (action.type) {
    case RESIZE_SCREENS:
      return Object.assign({}, action.scr);
    default:
      return state;
  }
}
