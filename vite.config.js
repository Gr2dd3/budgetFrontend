import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: '/budgetFrontend/',  // Se till att denna rad finns och stämmer överens med ditt repo-namn
});
