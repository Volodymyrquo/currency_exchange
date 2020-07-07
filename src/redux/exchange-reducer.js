const SET_RATE = "SET_RATE";

const initialState = {

}

const exchangeReducer = (state = initialState, action ) => {
switch (action.type) {
    case SET_RATE:
        return {...state, action.rate}
default:
    return state;
}
}

export const setRate = (currency) =>( {})