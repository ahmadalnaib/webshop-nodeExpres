<template>
  <div v-if="loading" class="text-center">Loading...</div>
  <div v-else>
    <div v-if="products.length === 0" class="text-center">No products available</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded-lg shadow-md">
        <nuxt-link :to="{ name: 'products-id', params: { id: product.id } }">
          <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover mb-4 rounded-md">
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <p class="text-gray-700">{{ product.description }}</p>
          <p class="text-gray-900 font-bold">${{ product.price }}</p>
          <div class="flex items-center mt-2">
            <span class="text-yellow-500 mr-1">★</span>
            <span>{{ product.rating.rate }} ({{ product.rating.count }} reviews)</span>
          </div>
          <div v-if="product.can_buy===false" class="text-red-500 mt-2">You can't buy this product now</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '../../services/productService';

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  products.value = await fetchProducts();
  loading.value = false;
});
</script>

<style scoped>
/* Add any additional styles here */
</style>