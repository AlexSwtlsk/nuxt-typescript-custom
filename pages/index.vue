<template>
  <section>
    <h1
      id="title"
      class="header"
    >
      Nuxt TypeScript Starter

      <FontAwesomeIcon :icon="['fas', 'home']" />
    </h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {}
</script>
