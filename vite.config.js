import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist', // Lägg till denna rad för att specificera output-mappen
    rollupOptions: {
      input: './index.html'
    }
  }
});
