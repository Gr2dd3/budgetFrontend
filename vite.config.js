import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist', // Se till att denna mapp töms varje gång du bygger
    rollupOptions: {
      input: './index.html', // Din huvudingångsfil
      output: {
        entryFileNames: 'assets/[name]-[hash].js',   // Generera hashade filnamn
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]', 
      }
    }
  },
  base: './', // Gör länkarna relativa så att de fungerar i alla miljöer
});
