export default [
    {
        path: '/posts',
        meta: {
            title: 'Posts Page'
        },


        component: () => import('@/pages/PostsPage.vue'),
        children: [
            {
                name:'singlePost',
                path:':id',
                meta: {
                    title:'Single Post'
                },
                component:() => import('@/pages/SinglePostPage.vue'),
                props:true
            }
        ],

    }
]