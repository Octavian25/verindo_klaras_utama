import { LOAD_FORSALE_FAILED, LOAD_FORSALE_SUCCESS } from "../actions/forsale"

const initialState= {
    forsale : [],
    error : null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FORSALE_SUCCESS:
            return {
                forsale: action.payload, error: null
            }
        case LOAD_FORSALE_FAILED:
            return {
                forsale: [], error: action.payload
            }
        default:
            return state
    }
}

export default reducer