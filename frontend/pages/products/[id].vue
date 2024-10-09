<template>
  <div class="container mx-auto p-4">
    <div
      v-if="product"
      class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full"
    >
      <div class="bg-white">
        <div
          class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <!-- Product details -->
          <div class="lg:max-w-lg lg:self-end">
            <div class="mt-4">
              <h1
                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                {{ product.name }}
              </h1>
            </div>
            <section aria-labelledby="information-heading" class="mt-4">
              <h2 id="information-heading" class="sr-only">
                Product information
              </h2>
              <div class="flex items-center">
                <p class="text-lg text-gray-900 sm:text-xl">
                  ${{ product.price }}
                </p>
              </div>
              <div class="mt-4 space-y-6">
                <p class="text-base text-gray-500">{{ product.description }}</p>
              </div>
              <div class="mt-6 flex items-center">
                <span class="text-yellow-500 mr-1">★</span>
                <!-- <span>{{ product.rating.rate }} ({{ product.rating.count }} reviews)</span> -->
              </div>
            </section>
          </div>
          <!-- Product image -->
          <div
            class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center"
          >
            <div
              class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <!-- Product form -->
          <div
            class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start"
          >
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" class="sr-only">Product options</h2>
              <form>
                <div class="mt-10">
                  <button
                    @click.prevent="addToCart(product)"
                    type="submit"
                    :class="[
                      'flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50',
                      product.can_buy === false
                        ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
                    ]"
                    :disabled="product.can_buy === false"
                  >
                    Add to Cart
                  </button>
                  <div
                    v-if="product.can_buy === false"
                    class="text-red-500 mt-2"
                  >
                    You can't buy this product now
                  </div>
                  <!-- <div v-if="!canBuy" class="text-red-500 mt-2">Buying is currently disabled</div> Display message if buying is disabled -->
                </div>
                <div class="mt-6 text-center">
                  <a href="#" class="group inline-flex text-base font-medium">
                    <span class="text-gray-500 hover:text-gray-700"
                      >Lifetime Guarantee</span
                    >
                  </a>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- <LoadingProduct v-for="i in 1" :key="i" /> -->
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;

const config = useRuntimeConfig();
const { data: product, error } = await useFetch(
  `http://localhost:8001/api/products/${id}`
);

if (error.value) {
  console.error('Error fetching product:', error.value);
}
</script>

<style scoped>
/* Add your styles here */
</style>
