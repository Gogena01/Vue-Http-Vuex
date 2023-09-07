import { createStore } from "vuex";
import postsModule from "./modules/posts";
import paginatorModule from "./modules/paginator";

const store = createStore({
    modules: {
        posts:postsModule,
        paginator:paginatorModule
    }
})


export default store