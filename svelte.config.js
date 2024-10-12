import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import azure from 'svelte-adapter-azure-swa';

export default {
  kit: {
    // Om du använder en statisk server eller annan typ av hosting kan du ställa in `adapter-static`
    adapter: azure(),
    target: '#app',  // Här matchar du id:n i din index.html där appen ska monteras (t.ex. <div id="app"></div>)
    vite: {
      // Vite-specifik konfiguration, om nödvändigt
      preprocess: vitePreprocess(),
    }
  }
};

