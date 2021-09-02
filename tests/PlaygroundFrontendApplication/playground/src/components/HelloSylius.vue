<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ responseBody }}</h2>
  </div>
</template>

<script>
import { ProductSDK } from '../../../../../src/shop/Product.ts';
export default {
  name: 'HelloSylius',
  props: {
    msg: String
  },
    data() {
      return {
        responseBody: null,
      }
    },
    mounted() {
      this.getProducts()
    },

    methods: {
      getProducts() {
          this.responseBody = ProductSDK.getProducts();
      }
    }
}
</script>

