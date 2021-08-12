import { Product } from "./shop/Product";
import axios from "axios";


export class Sylius {
    constructor(private readonly baseURL: string) {
        this.baseURL = baseURL;
    }

    axiosClient = axios.create({
        baseURL: this.baseURL
    });

    product = new Product(this.axiosClient);
}

