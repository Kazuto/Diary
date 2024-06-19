// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  meta: {
    title: 'Tagebuch - Kai Mayer',
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    [
      "nuxt-content-git",
      {
        createdAtName: "gitCreatedAt",
        updatedAtName: "gitUpdatedAt",
      },
    ],
  ],

  content: {
    documentDriven: true,
  },

  tailwindcss: {
    cssPath: "~/assets/app.css",
  },

  options: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
});
