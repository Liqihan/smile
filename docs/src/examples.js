import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './wapApp';
import routes from './router.config';

import 'packages/smile-css/src/index.css';

Vue.use(VueRouter);
const routesConfig = routes(true);
console.log(routesConfig);
const router =  new VueRouter({
    mode: 'hash',
    base: '/smile/examples',
    routes: routesConfig
})
window.VueRouter = router;
new Vue({
    render: h => h(App),
    router,
    el: '#app'
})

Vue.use(VueRouter);