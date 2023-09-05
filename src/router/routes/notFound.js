export default [
    {
        name:'NotFound',
        path:'/NotFound(.*)',
        component: () => import('@/pages/NotFound.vue')
    }
]