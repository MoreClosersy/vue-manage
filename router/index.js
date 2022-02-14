import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [{
        path: '/home',
        component: () => import('../views/home'),
    }]
}, {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
}]

const router = new VueRouter({
    mode: "history",
    routes
})
export default router