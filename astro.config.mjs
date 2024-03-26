import { defineConfig } from "astro/config";
<<<<<<< HEAD
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel()
});
=======

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});
>>>>>>> 3092a264ad40f4de8a845a0235d4c1cd8b0a8b0d
