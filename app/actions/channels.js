// @flow
export const CHANNLES_ADD = 'CHANNLES_ADD';

export function add(obj: Object) {
  return {
    type: CHANNLES_ADD,
    obj
  };
}
