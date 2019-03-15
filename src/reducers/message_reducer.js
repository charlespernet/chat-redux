import { SET_MESSAGE } from '../actions';
import { CLEAR_INPUT } from '../actions';

export default function(state = "", action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
