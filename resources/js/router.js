import {createRouter, createWebHistory} from "vue-router";


const routes = [

    {path: '/users/login', component: () => import('./components/Auth/LoginComponent.vue'), name: 'users.login'},
    {
        path: '/users/registration',
        component: () => import('./components/Auth/RegistrationComponent.vue'),
        name: 'users.registration'
    },
    {path: '/get', component: () => import('./components/Auth/GetComponent.vue'), name: 'get.app'},
    {path: '/personal', component: () => import('./components/Auth/PersonalComponent.vue'), name: 'users.personal'},

    {
        path: '/:catchAll(.*)',
        component: () => import('./components/Auth/PersonalComponent.vue'),
        name: '404'
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if(!token){
        if (to.name === 'users.login' || to.name === 'users.registration'){
            return  next()
        }else{
            return next({name: 'users.login'})
        }
    }

    if(to.name === 'users.login' || to.name === 'users.registration' && token){
        return next({name: 'users.personal'})
    }

    next()
})

export default router
