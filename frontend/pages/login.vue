<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 rounded-md"
  >
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
      <form @submit.prevent="loginHandler" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            v-model="form.email"
            name="email"
            type="email"
            id="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="form.password"
            name="password"
            type="password"
            id="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  email: '',
  password: ''
});

const loginHandler = async () => {
  try {
    const response = await axios.post('http://localhost:8001/api/login', {
      email: form.email,
      password: form.password
    });
    authStore.login(response.data.first_name);
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
    // Handle login failure, e.g., show an error message
  }
};
</script>
