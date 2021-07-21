import { MODEL_DESI, MODEL_DESI_URL } from "../types/ModelDesi";

export function modelDesi(desiModel) {
  return {
    type: MODEL_DESI,
    payload: {
      request: {
        url: MODEL_DESI_URL,
        data: desiModel,
      },
    },
  };
}
