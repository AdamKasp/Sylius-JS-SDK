import {Collection} from "../models/shop/product";

export class Product {
    constructor(private axiosClient: any) {
        this.axiosClient = axiosClient;
    }

    getProducts(): any {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        };

        return new Promise(((resolve, reject) => {
            this.axiosClient.get(`/api/v2/shop/products?itemsPerPage=4&page=1`, {}, axiosConfig)
                .then((data: any) => {
                    return data.data['hydra:member'];
                })
                .then((products: []) => {
                    const response: Collection = {
                        productCollection: products,
                        hydraStuff: []
                    };
                    resolve(response);
                })
        }));
    }
}
