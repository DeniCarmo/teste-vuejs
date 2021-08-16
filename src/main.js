import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('phoneFormat', val=>{
  if(val.length === 10){

    return `(${val.substring(0, 2)}) ${val.substring(2, 4)}-${val.substring(4, val.length)}`;

  }else if(val.length === 11){

    return `(${val.substring(0, 2)}) ${val.substring(2, 5)}-${val.substring(5, val.length)}`;

  }
  return val;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')