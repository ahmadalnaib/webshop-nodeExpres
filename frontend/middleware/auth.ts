// middleware/auth.js
import { useAuthStore } from '../stores/authStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  authStore.checkAuth();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return navigateTo('/login');
  }
});
