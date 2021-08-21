export const LOAD_FORSALE = "[forsale] Load";
export const LOAD_FORSALE_SUCCESS = "[forsale] Load Forsale Success";
export const LOAD_FORSALE_FAILED = '[forsale] load Forsale Failed"';

export const loadForsale = {
  type: LOAD_FORSALE,
};

export const loadForsaleSuccess = (forsale) => ({
  type: LOAD_FORSALE_SUCCESS,
  payload: forsale,
});

export const loadForsaleFailed = (error) => ({
  type: LOAD_FORSALE_FAILED,
  payload: error,
});
