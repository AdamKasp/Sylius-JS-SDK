"use strict";
const axios = require("axios");
const product = require("./shop/Product");
const cart = require("./shop/Cart");

class ShopClient {
    constructor() {}

    axiosClient = axios.create({
        baseURL: '/syliusapi'
    });

    product = new product(this.axiosClient);
    cart = new cart(this.axiosClient);
}

module.exports = ShopClient;

