export default [
    {
        path:'/',
        meta: {
            title:'Home Page'
        },
        component: () => import('@/pages/HomePage.vue')
    }
]