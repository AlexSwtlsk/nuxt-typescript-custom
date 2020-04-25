import { config as dotEnvConfig } from 'dotenv'
import { head } from './config/head'
import { envShim } from './config/env-shim'
import { I18N } from './i18n/i18n'

dotEnvConfig()

export default {
  head,
  mode: 'universal',

  loading: { color: '#3B8070' },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N]
  ],
  modules: ['@nuxtjs/axios', ['nuxt-env-shim', envShim]],

  styleResources: {
    scss: ['~/assets/scss/main.scss']
  },

  typescript: {
    typeCheck: {
      eslint: true
    }
  },

  plugins: [],

  build: {}
}
