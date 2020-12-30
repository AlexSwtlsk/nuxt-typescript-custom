import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import { Plugin } from '@nuxt/types'
import * as packageJson from '../package.json'

const sentryModule: Plugin = ({ app }) => {
  try {
    if (app.$config.SENTRY_ENABLED === true || app.$config.SENTRY_ENABLED === 'true') {
      Sentry.init({
        environment: app.$config.SENTRY_ENVIRONMENT,
        dsn: app.$config.SENTRY_DSN,
        release: (packageJson as any).version,
        integrations: [new Integrations.Vue({ Vue, attachProps: true })]
      })
    }
  } catch (e) {
    console.error('No config given for Sentry in config.json', e)
  }
}

export default sentryModule
