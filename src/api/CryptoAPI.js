import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com/api/v1/exchanges/`,
    headers:{
        "x-api-key": "Vhcl75IoYr5JhVxiaYHArbQydrj0ax",
        "x-api-secret": "BiXE5D7gpAW0Wr3iQoTKp8lwHcNwIyyuscYhIzdKYL6lm",
        "x-rapidapi-host": "crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com",
        "x-rapidapi-key": "e18d8210b4mshf39970da57434a2p11b2a4jsn88869d8e1347",
        "useQueryString": true
    }

})


export const exchangeDataAPI = {
    exchangesAll() {
        return instance.get()
    }
}