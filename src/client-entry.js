import 'es6-promise/auto'
import { app, store } from './app'

//me
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

import 'public/css/css.css';
import 'public/css/el-change.css';
import 'public/css/component.css';
//me

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__)

// actually mount to DOM
app.$mount('#app')

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
