"use strict";

class Cart {
    constructor(axiosClient) {
        this.axiosClient = axiosClient;
    }

    API_PATH = '/api/v2/shop/orders'

     POST_CONFIG = {
        headers: {
            'Content-Type': 'application/ld+json'
        }
    }

    PATCH_CONFIG = {
        headers: {
            'Content-Type': 'application/merge-patch+json'
        }
    };

    createCart() {
        return this.axiosClient.post(`${this.API_PATH}`, {}, this.POST_CONFIG);
    }

    addToCart(tokenValue, productVariantIri, quantity) {
        const body = {
            productVariant: productVariantIri,
            quantity: quantity
        }

        return this.axiosClient.patch(`${this.API_PATH}/${tokenValue}/items`, body, this.PATCH_CONFIG);
    }

    getCart(tokenValue) {
        return this.axiosClient.get(`${this.API_PATH}/${tokenValue}`)
    }

    addressCart(tokenValue, email, address) {
        const request = {
            email: email,
            billingAddress: address,
            shippingAddress: address
        }

        return this.axiosClient.patch(`${this.API_PATH}/${tokenValue}/address`, request, this.PATCH_CONFIG)
    }

    setShipping(tokenValue, shippingId, shippingMethodIri) {
        const request = {
            shippingMethod: shippingMethodIri
        }
        return this.axiosClient.patch(`${this.API_PATH}/${tokenValue}/shipments/${shippingId}`, request, this.PATCH_CONFIG)
    }

    setPayment(tokenValue, paymentId, paymentMethodIri) {
        const request = {
            paymentMethod: paymentMethodIri
        }

        return this.axiosClient.patch(`${this.API_PATH}/${tokenValue}/payments/${paymentId}`, request, this.PATCH_CONFIG)
    }

    completeCart(tokenValue, notes) {
        const body = {
            notes: notes
        }

        return this.axiosClient.patch(`${this.API_PATH}/${tokenValue}/complete`, body, this.PATCH_CONFIG);
    }
}

module.exports = Cart;
