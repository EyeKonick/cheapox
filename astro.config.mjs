// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // PLACEHOLDER: domain printed on the CheaPOX "Tales of Arctic" flyer. Confirm the client owns it
  // (or swap in the real URL) before launch. It drives canonical, Open Graph and JSON-LD URLs.
  site: 'https://cheapoxtravelandtours.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
