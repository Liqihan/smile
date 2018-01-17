import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './wapApp';
import routes from './router.config';
import Smile from 'packages';
import 'packages/smile-css/src/index.css';
import DemoUi from './components';


Vue.use(Smile);
Vue.use(VueRouter);

Vue.use(DemoUi);

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