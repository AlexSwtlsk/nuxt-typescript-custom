<template>
  <section>
    <h1
      id="title"
      class="header"
    >
      Nuxt TypeScript Starter
    </h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class IndexPage extends Vue {}
</script>
