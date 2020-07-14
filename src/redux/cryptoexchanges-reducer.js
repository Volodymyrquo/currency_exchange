import {exchangeDataAPI} from "../api/CryptoAPI";

const SET_EXCHANGES = "SET_EXCHANGES";

const initialState = {
   exchanges: []
}

const cryptoExchangesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EXCHANGES:
            return {...state, exchanges: action.exchanges}
        default:
            return state;
    }
}

export const setExchanges = (exchanges) => ({type: SET_EXCHANGES, exchanges});

export const setCryptoExchanges = () => async (dispatch) => {
    const response = await exchangeDataAPI.exchangesAll();
    dispatch(setExchanges(response.data));
}

export default cryptoExchangesReducer;