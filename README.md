# Custom Nuxt template by @AlexSwtlsk

This custom template uses

- Nuxt with Typescript
- sass-loader & node-sass for SCSS & nuxt style-resources
- Jest for Unit testing
- Eslint linter
- Nuxt-i18n

[Orginal repo](https://github.com/AlexSwtlsk/nuxt-typescript-custom)

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Running

Don't forget to fill the env variables

```bash
  API_URL= #backend URL
  DOMAIN_NAME= #for canonical URL
  SENTRY_ENABLED= #true/false
  SENTRY_ENVIRONMENT= #custom running env: dev, staging, prod, …
  SENTRY_DSN= # sentry dsn URL
```
