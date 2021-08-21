import {
  loadForsaleFailed,
  loadForsaleSuccess,
  LOAD_FORSALE,
} from "../actions/forsale";

const loadForsaleFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_FORSALE) {
      try {
        const forsale = await api.forsale.loadForSale();
        dispatch(loadForsaleSuccess(forsale));
      } catch (err) {
        dispatch(loadForsaleFailed(err));
      }
    }
  };

const forsale = [loadForsaleFlow];

export default forsale;
