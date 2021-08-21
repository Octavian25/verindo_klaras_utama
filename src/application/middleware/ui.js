import { loadForsale } from "../actions/forsale";
import { loadTestimoni } from "../actions/testimoni";
import { PAGE_LOADED } from "../actions/ui";

const pageLoadedFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      dispatch(loadForsale);
      dispatch(loadTestimoni);
    }
  };

const data = [pageLoadedFlow];

export default data;
