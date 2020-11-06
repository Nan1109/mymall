import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import axios from '@/axios/axios'
Vue.prototype.$axios = axios;
import { Swipe, SwipeItem, Lazyload, Search} from 'vant';
import 'vant/lib/index.css';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
