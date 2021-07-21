import { MODEL_LIST, MODEL_LIST_URL } from "../types/ModelList";

export function modelList(listModel) {
  return {
    type: MODEL_LIST,
    payload: {
      request: {
        url: MODEL_LIST_URL,
        data: listModel,
      },
    },
  };
}
