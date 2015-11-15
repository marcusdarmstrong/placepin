import * as Immutable from 'immutable';

export default function reducer(state = new Immutable.List(), action) {
  if (action.type === 'ADD_MARKER') {
    return state.push({lat: action.lat, lng: action.lng});
  }
  return state;
}
