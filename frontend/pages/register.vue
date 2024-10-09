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
           Create  your account
          </h2>
        </div>
        <form @submit.prevent="register" class="space-y-6">
          <div>
            <label for="first_name" class="block text-sm font-medium text-gray-700"
              >First name</label
            >
            <input
              v-model="first_name"
              name="first_name"
              type="text"
              id="first_name"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
            <div>
                <label for="last_name" class="block text-sm font-medium text-gray-700"
                >Last name</label
                >
                <input
                v-model="last_name"
                name="last_name"
                type="text"
                id="last_name"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
          <div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700"
                >E-Mail</label
                >
                <input
                v-model="email"
                name="email"
                type="email"
                id="emiail"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                
            </div>
            </div>
            

            <label for="password" class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              v-model="password"
              name="password"
              type="password"
              id="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

       
            <div>
                <label for="confirm_password" class="block text-sm font-medium text-gray-700"
                >Confirm password</label
                >
                <input
                v-model="confirm_password"
                name="confirm_password"
                type="password"
                id="confirm_password"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
          <div>
            </div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>


<script setup lang="ts">
import axios from 'axios';

const first_name = ref('');
const last_name = ref('');
const email = ref('');
const password = ref('');
const confirm_password = ref('');
const router = useRouter();

const register = async () => {
  try {
    await axios.post('http://localhost:8001/api/register', {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      confirm_password: confirm_password.value
    });
    await router.push('/login');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Registration failed:', error.response?.data || error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
};
</script>