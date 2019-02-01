import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';
// Import Nprogress CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        name: 'Home',
        component: Home,
        props: true,
        async beforeEnter (to, from, next) {
            try {
                const response = await axios.get('/home');
                to.params.aboutData = response.data;
            } catch (e) {
                to.params.error = {e: e, message: e.message}
            }
            next();
        }
    },
    {
        path: '/photos',
        name: 'Photos',
        component: Photos,
        props: true,
        async beforeEnter (to, from, next) {
            try {
                console.log('Getting Photos');
                const response = await axios.get('/photos');
                console.log('GOT Photos');
                to.params.allPhotos = response.data;
            } catch (e) {
                to.params.error = {e: e, message: e.message}
            }
            next();
        }
    },
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

// Configure NProgress
NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
