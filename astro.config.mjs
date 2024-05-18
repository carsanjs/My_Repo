import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import Icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ['**/react/*'],
    experimentalReactChildren: true
  }), tailwind(), Icon()]
});