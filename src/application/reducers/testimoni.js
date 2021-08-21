import {
  LOAD_TESTIMONI_FAILED,
  LOAD_TESTIMONI_SUCCESS,
} from "../actions/testimoni";

const initialState = {
  testimoni: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TESTIMONI_SUCCESS:
      return {
        testimoni: action.payload,
        error: null,
      };
    case LOAD_TESTIMONI_FAILED:
      return {
        testimoni: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
