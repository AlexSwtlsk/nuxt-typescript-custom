<template>
  <section>
    <h1
      id="title"
      class="header"
    >
      {{ $t('app.title') }}

      <FontAwesomeIcon :icon="['fas', 'home']" />
    </h1>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    // const { $config } = useContext()
    return {
    }
  }
})
</script>
