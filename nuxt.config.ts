import { head } from './config/head'
import { I18N } from './i18n/i18n'

export default {
  head,
  mode: 'universal',

  loading: { color: '#3B8070' },
  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/components',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N]
  ],

  modules: ['@nuxtjs/axios'],

  styleResources: {
    scss: ['~/assets/scss/main.scss']
  },

  typescript: {
    typeCheck: {
      eslint: true
    }
  },

  plugins: [],

  build: {},

  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  }
}
