export default [
    {
        name:'home',
        path:'/',
        meta: {
            title:'Home Page'
        },
        component: () => import('@/pages/home/HomePage.vue')
    }
]