import {ratesAPI} from "../api/Api";

const SET_RATE = "SET_RATE";

const initialState = {
    base: "",
    date: "",
    rates: {}
}

const exchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATE:
            return {...state, rates: action.rate}
        default:
            return state;
    }
}

export const setRate = (rate) => ({type: SET_RATE, rate});

export const setCurrencyRate = () => async (dispatch) => {
    const response = await ratesAPI.latestRate();
    dispatch(setRate(response.data.rates));
}

export default exchangeReducer;