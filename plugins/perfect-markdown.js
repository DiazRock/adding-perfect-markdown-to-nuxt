import Vue from 'vue'
import pmd from 'perfect-markdown'
// import { store } from '../store/index'

export default ({ store }) => {
  Vue.use(pmd, { store })
}
