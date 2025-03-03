import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted(){
    AOS.init()
  },
}).$mount("#app");
