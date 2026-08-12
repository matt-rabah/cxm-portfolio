import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://mattrabah.com',
  output: 'static',
  outDir: './dist/client',
  session: false,
  experimental: { incrementalBuild: true },
  vite: { server: { host: '0.0.0.0', allowedHosts: ['terminal.local'] } },
});
