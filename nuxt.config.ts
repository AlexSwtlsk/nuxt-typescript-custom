import { meta } from './config/meta'
import { link } from './config/link'
import { I18N } from './i18n/i18n'

export default {
  head: {
    // title: '', // handled in layout.vue
    meta,
    link
  },
  target: 'server',
  ssr: true,
  modern: process.env.NODE_ENV === 'production',

  loading: { color: '#3B8070' },
  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxt/components',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N],
    '@nuxtjs/pwa'
  ],

  modules: ['@nuxtjs/axios'],

  sitemap: {
    hostname: process.env.DOMAIN_NAME,
    gzip: true,
    i18n: true,
    exclude: []
  },
  styleResources: {
    scss: ['~/assets/scss/main.scss']
  },

  plugins: [
    '@/plugins/font-awesome',
    '@/plugins/sentry'
  ],

  pwa: {
    workbox: false,
    manifest: {
      name: 'sitename',
      short_name: 'shortname',
      description: 'desc',
      lang: 'lang',
      useWebmanifestExtension: false,
      shortcuts: [
        // {
        //   name: '',
        //   description: '',
        //   url: ''
        // }
      ]
    },
    meta: {
      ogType: 'website'
      // twitterCreator: 'twitter',
      // twitterSite: 'twitter'
    }
  },

  build: {
    analyze: process.env.NODE_ENV !== 'production'
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    SENTRY_ENABLED: process.env.SENTRY_ENABLED,
    SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT,
    SENTRY_DSN: process.env.SENTRY_DSN
  }
}
