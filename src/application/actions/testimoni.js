export const LOAD_TESTIMONI = "[testimoni] Load";
export const LOAD_TESTIMONI_SUCCESS = "[testimoni] Load Testimoni Success";
export const LOAD_TESTIMONI_FAILED = '[testimoni] load Testimoni Failed"';

export const loadTestimoni = {
  type: LOAD_TESTIMONI,
};

export const loadTestimoniSuccess = (testimoni) => ({
  type: LOAD_TESTIMONI_SUCCESS,
  payload: testimoni,
});

export const loadTestimoniFailed = (error) => ({
  type: LOAD_TESTIMONI_FAILED,
  payload: error,
});
