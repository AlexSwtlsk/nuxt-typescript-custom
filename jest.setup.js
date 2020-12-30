// jest.setup.js
const path = require('path')
const Vue = require('vue')
const glob = require('glob')

glob.sync(path.join(__dirname, './components/**/*.vue')).forEach((file) => {
  const name = file.match(/(\w*)\.vue$/)[1]
  Vue.component(name, require(file).default)
})

global.Vue = Vue
