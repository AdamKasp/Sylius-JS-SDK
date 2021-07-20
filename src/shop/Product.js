"use strict";

class Product {
    constructor(axiosClient) {
        this.axiosClient = axiosClient;
    }

    getProducts() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        };
         return  this.axiosClient.get(`/api/v2/shop/products?itemsPerPage=4&page=1`, {}, axiosConfig);
    }
}

module.exports = Product;
