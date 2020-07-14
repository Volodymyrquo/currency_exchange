import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import exchangeReducer from "./exchange-reducer";
import thunkMiddleware from "redux-thunk";
import cryptoExchangesReducer from "./cryptoexchanges-reducer";

const reducers = combineReducers(
    {
exchange: exchangeReducer,
        cryptoExchanges: cryptoExchangesReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store_ = store;
export default store;
