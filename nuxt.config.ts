// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    }
  },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: `${process.env.NUXT_PUBLIC_API_BASE}/api/**`
      },
    },
  },
  modules: [
    'nuxt-quasar-ui'
  ],
  quasar: { /* */ },
})
