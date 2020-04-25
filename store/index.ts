import { MutationTree, ActionTree } from 'vuex'
import { RootState } from '~/types/root.state'
// import { Context as AppContext } from '@nuxt/types'

export const state = (): RootState => ({
  //
})

export const mutations: MutationTree<RootState> = {
  //
}

interface Actions<S, R> extends ActionTree<S, R> {
  // nuxtServerInit(
  //   actionContext: ActionContext<S, R>,
  //   appContext: AppContext
  // ): void
}

export const actions: Actions<RootState, RootState> = {
  // nuxtServerInit ({ commit }, context) {}
}
