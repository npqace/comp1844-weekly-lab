const app = Vue.createApp({
  data() {
      return {
          product: 'Socks',
          image: './assets/images/socks_green.jpg',
          inStock: true,
          inventory: 100,
          onSale: true,
      }
  }
})