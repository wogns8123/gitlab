import { SAVE_ID } from "./types";

export function saveId(dataToSubmit: number) {
  return {
    type: SAVE_ID,
    payload: dataToSubmit,
  };
}
