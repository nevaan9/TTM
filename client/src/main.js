import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';

// Import the components
import Home from './components/Home';
import Photos from './components/Photos';
import Blog from './components/Blog';
import Resume from './components/Resume';

Vue.prototype.$axios = axios;
Vue.prototype.$admin = true;
Vue.use(VueRouter);

Vue.config.productionTip = false;

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/photos', name: 'Photos', component: Photos },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/resume', name: 'Resume', component: Resume },
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
