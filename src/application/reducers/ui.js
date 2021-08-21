import { PAGE_LOADED_OFF, PAGE_LOADING_ON } from "../actions/ui"

const initialState ={
    loading : true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_LOADING_ON:
        case PAGE_LOADED_OFF:
            return {
                ...state, loading: action.payload
            }
        default:
            return state;
    }
}

export default reducer