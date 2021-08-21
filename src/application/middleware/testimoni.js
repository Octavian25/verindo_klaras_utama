import {
  loadTestimoniFailed,
  loadTestimoniSuccess,
  LOAD_TESTIMONI,
} from "../actions/testimoni";

const loadTestimoniFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_TESTIMONI) {
      try {
        const forsale = await api.testimoni.loadTestimoni();
        dispatch(loadTestimoniSuccess(forsale));
      } catch (err) {
        dispatch(loadTestimoniFailed(err));
      }
    }
  };

const forsale = [loadTestimoniFlow];

export default forsale;
