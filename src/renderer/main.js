import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import path from 'path'
import ADODB from 'node-adodb'






// Are we running from inside an asar package ?
if (process.mainModule.filename.indexOf('app.asar') !== -1) {
  // In that case we need to set the correct path to adodb.js
  Vue.prototype.$static = path.resolve(__dirname, '../../../');
  ADODB.PATH = path.join(Vue.prototype.$static, '/adodb.js');
} else {
  Vue.prototype.$static = __static;
}



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$path = path;
Vue.prototype.$ADODB = ADODB;

/* eslint-disable no-new */
new Vue({
  components: {
    App
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')