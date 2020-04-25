import { AppEnv } from '../config/env-shim'

declare module '@nuxt/types' {
  interface Context {
    $env: AppEnv;
  }
  interface NuxtAppOptions {
    $env: AppEnv;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $env: AppEnv;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $env: AppEnv;
  }
}
