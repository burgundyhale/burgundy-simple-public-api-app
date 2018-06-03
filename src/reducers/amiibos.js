import { GET_COMPLETE, GET_REQUEST } from "../constants/action-types";
import { statusType } from "../constants/types";

export const initialState = {
  amiiboData: [],
  status: statusType.INITIAL,
  error: null,
};

export default function amiibos(state = initialState, action) {
  switch (action.type) {
    case GET_REQUEST:
      return Object.assign({}, state, {
        status: statusType.GETTING,
      });
    case GET_COMPLETE:
      if (action.error) {
        return Object.assign({}, state, {
          status: statusType.ERROR,
          error: action.error,
        });
      }

      return Object.assign({}, state, {
        amiiboData: action.payload.amiibos,
        status: statusType.COMPLETE,
        error: null,
      });
    default:
      return state;
  }
}
