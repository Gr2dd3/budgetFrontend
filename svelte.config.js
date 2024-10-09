import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';  // Du kan byta adapter om du vill ha något annat än statisk byggnation

export default {
  kit: {
    // Om du använder en statisk server eller annan typ av hosting kan du ställa in `adapter-static`
    adapter: adapter(),
    target: '#app',  // Här matchar du id:n i din index.html där appen ska monteras (t.ex. <div id="app"></div>)
    vite: {
      // Vite-specifik konfiguration, om nödvändigt
      preprocess: vitePreprocess(),
    }
  }
};

