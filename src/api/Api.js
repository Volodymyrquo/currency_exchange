import * as axios from "axios";

const instance = axios.create({
baseURL:`https://api.exchangeratesapi.io/`
})


export const ratesAPI = {
latestRate(currency){
    return instance.get(`latest?symbols=${currency}`)
}
}