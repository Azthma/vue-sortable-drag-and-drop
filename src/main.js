import 'mdb-vue-ui-kit/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/routes'
import vuetify from './plugins/vuetify'
import Sortable from 'vue-sortable'
import VDraggable from "vue-sortable-list";


Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Sortable)
Vue.use(VDraggable);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
