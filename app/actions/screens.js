// @flow
export const RESIZE_SCREENS = 'RESIZE_SCREENS';

export function resize(scr) {
  return {
    type: RESIZE_SCREENS,
    scr
  };
}

