// import Vue from 'vue'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'

import IndexPage from './index.vue'

const localVue = createLocalVue()

const $router = {
  push: jest.fn()
}

function _mountComponent () {
  return shallowMount(IndexPage, {
    localVue,
    propsData: {},
    mocks: {
      $router,
      localePath: (obj: any) => obj,
      $t: (str: string) => str
    },
    slots: {},
    stubs: {
      NuxtLink: RouterLinkStub,
      FontAwesomeIcon: true
    }
  })
}

describe('pages/index.vue', () => {
  let component: any = null

  beforeEach(() => {
    jest.clearAllMocks()
    component = _mountComponent()
  })

  test('Should have h1 with title id', () => {
    const $title = component.find('h1#title')
    expect($title.exists()).toBe(true)
  })
})
