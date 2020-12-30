export const meta = [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content:
      'width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no'
  },
  {
    'http-equiv': 'X-UA-Compatible',
    content: 'IE=edge,chrome=1'
  },
  {
    name: 'theme-color',
    content: process.env.THEME_COLOR
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: process.env.THEME_COLOR
  },

  {
    name: 'apple-mobile-web-app-title',
    content: 'Fastnux'
  },
  {
    name: 'apple-mobile-web-app',
    content: 'yes'
  },
  {
    name: 'mobile-web-app-capable',
    content: 'yes'
  },
  {
    name: 'og:url',
    content: process.env.DOMAIN_NAME
  },
  {
    name: 'og:image',
    content: process.env.DOMAIN_NAME + '/og-image.png'
  },
  {
    name: 'og:image:width',
    content: '1600'
  },
  {
    name: 'og:image:height',
    content: '400'
  }
]
