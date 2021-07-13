"use strict";

const axios = require("axios");

class Cart {
    constructor() {}

    getCart() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        };
        return axios.post(`/syliusapi/api/v2/shop/orders`, {}, axiosConfig)
    }
}

module.exports = Cart;
