import {createApp} from 'vue';
import App from './App.vue';

// import {store} from './store'
// console.log(store)

import {router} from './router'
console.log(router)

createApp(App).use(router).mount('#app');
