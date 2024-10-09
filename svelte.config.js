import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

const config = {
  kit: {
    appDir: 'app',
    adapter: adapter(),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    }
  },
  preprocess: vitePreprocess(),
}
export default config;