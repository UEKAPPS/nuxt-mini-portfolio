// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/motion/nuxt'
  ],
  unocss:{
    preflight: true,
    uno: true
  }
})
