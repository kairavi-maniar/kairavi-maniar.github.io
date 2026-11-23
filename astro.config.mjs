// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is published as a GitHub "user site" from the repository
// `kairavi-maniar.github.io`, so it is served from the domain root ("/").
// If you ever publish from a differently named repository (a "project site"),
// set `base` to '/<repository-name>' — every internal link uses the base path.
export default defineConfig({
  site: 'https://kairavi-maniar.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
