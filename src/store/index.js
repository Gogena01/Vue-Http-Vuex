import { createStore } from "vuex";
import postsModule from "./modules/posts/index";
import paginatorModule from "./modules/paginator";

const store = createStore({
    namespaced:true,
    modules: {
        posts:postsModule,
        paginator:paginatorModule
    }
})


export default store