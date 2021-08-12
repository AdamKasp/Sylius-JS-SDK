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
         return  this.axiosClient.get(`/api/v2/shop/products?itemsPerPage=4&page=1`, {}, axiosConfig);
    }
}

