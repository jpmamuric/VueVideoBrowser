import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  //h is convention for createElement
  render: h => h(App)
});
