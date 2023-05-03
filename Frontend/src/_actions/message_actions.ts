import { SAVE_MESSAGE } from "./types";

export function saveMessage(dataToSubmit: any) {
  return {
    type: SAVE_MESSAGE,
    payload: dataToSubmit,
  };
}
