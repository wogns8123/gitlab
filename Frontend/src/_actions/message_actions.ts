import { SAVE_MESSAGE } from "./types";

export function saveMessage(dataToSubmit: object) {
  return {
    type: SAVE_MESSAGE,
    payload: dataToSubmit,
  };
}