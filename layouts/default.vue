<template>
  <main>
    <nuxt />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  head () {
    return {
      title: this.$t('app.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      link: [
        {
          rel: 'canonical',
          href: this.$config.DOMAIN_NAME + this.$route.path
        }
      ],
      meta: [
        { hid: 'description', name: 'description', content: this.$t('app.description') }
      ]
    }
  }

  meta () {
    return {
      lang: this.$i18n.locale,
      ogUrl: this.$config.DOMAIN_NAME + this.$route.path,
      ogImage: '/icons/icon.png'
    }
  }
}
</script>
