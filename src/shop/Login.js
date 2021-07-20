"use strict";

const axios = require("axios");

class Login {
    constructor() {}

    login(email, password) {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let data = {
            email: email,
            password: password
        }

        return axios.post(`/syliusapi/api/v2/shop/authentication-token`, data, axiosConfig)
    }
}

module.exports = Login;
