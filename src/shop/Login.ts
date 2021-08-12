import axios from 'axios';

export class Login {
    constructor() {}

    login(email: string, password: string): any {
        const axiosConfig = {
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
