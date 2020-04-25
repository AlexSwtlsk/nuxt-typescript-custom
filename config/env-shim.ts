export type AppEnv = {
  API_URL: string;
  SENTRY_ENABLED: boolean;
  SENTRY_DSN: string;
};

export const envShim = {
  keys: [
    { key: 'API_URL' },
    { key: 'SENTRY_ENABLED', default: false },
    { key: 'SENTRY_DSN' }
  ]
}
