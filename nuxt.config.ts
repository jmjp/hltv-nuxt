// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    nitro:{
        preset: 'cloudflare_pages'
    },
    experimental:{
        externalVue: true
    }
})
