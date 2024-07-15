import { GET_COUNTRIES } from '../types'

const initialState = {
    countries: [],
    error: null,
}; 

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state;
    }
}