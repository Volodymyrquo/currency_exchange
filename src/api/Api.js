import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://api.exchangeratesapi.io/`

})


export const ratesAPI = {
    latestRate() {
        return instance.get(`latest`)
    }
}