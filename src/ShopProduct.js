"use strict";

const axios = require("axios");

class ShopProduct {
    constructor() {}

    getProducts() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        };
        return axios.get(`/syliusapi/api/v2/shop/products?itemsPerPage=4&page=1`, {}, axiosConfig)
    }
}

module.exports = ShopProduct;
