import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import azure from 'svelte-adapter-azure-swa';

export default {
  kit: {
    adapter: azure(),
    target: '#app',
    vite: {
      preprocess: vitePreprocess(),
    }
  }
};

