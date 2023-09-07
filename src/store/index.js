import { createStore } from "vuex";
import postsModule from "./modules/posts";
import paginatorModule from "./modules/paginator";
import inputBinding from "./modules/inputBinding";

const store = createStore({
    modules: {
        posts:postsModule,
        paginator:paginatorModule,
        input:inputBinding
    }
})


export default store