export default [
    {
        path: '/posts',
        meta: {
            title: 'Posts Page'
        },


        component: () => import('@/pages/posts/PostsPage.vue'),
        children: [
            {
                name:'singlePost',
                path:':id',
                meta: {
                    title:'Single Post'
                },
                component:() => import('@/pages/posts/SinglePostPage.vue'),
                props:true
            }
        ],

    }
]