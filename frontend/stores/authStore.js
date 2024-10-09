// stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userName: '',
  }),
  actions: {
    login(name) {
      this.isAuthenticated = true;
      this.userName = name;
      if (process.client) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userName', name);
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.userName = '';
      if (process.client) {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userName');
      }
    },
    checkAuth() {
      if (process.client) {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const userName = localStorage.getItem('userName');
        if (isAuthenticated === 'true' && userName) {
          this.isAuthenticated = true;
          this.userName = userName;
        }
      }
    },
  },
});