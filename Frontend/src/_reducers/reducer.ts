import { SAVE_ID, SAVE_MESSAGE } from "../_actions/types";

export default function reducer(state = { messages: [], id: "" }, action: any) {
  switch (action.type) {
    case SAVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case SAVE_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
}
