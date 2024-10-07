import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        carrito: 'carrito.html',
        singUp: 'SingUp.html',
        details: 'details.html',
      },
    },
  },
});
