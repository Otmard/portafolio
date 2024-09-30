import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    https: true, // Habilita HTTPS
  },
  plugins: [
    mkcert() // Agrega el plugin para certificados SSL
  ]
});
