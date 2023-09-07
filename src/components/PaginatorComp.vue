<template>
    <div>
        <div class="items">
            <catalog-item v-for="(post, index) in currentPageItems" :class="{ even: pageItem % 2 === 0 }">
                <template #title>
                    <h3>{{ post.title }}</h3>
                </template>
                <template #button>
                    <router-link :to="{ name: 'singlePost', params: { id: post.id } }">View Details</router-link>
                </template>
            </catalog-item>
        </div>
        <ul class="controls">
            <li><button :disabled="previousButtonDisabled" @click="changePage(-1)">Previous page</button></li>
            <span>{{ pageOfPages }}</span>
            <li><button :disabled="nextButtonIsDisabled" @click="changePage(1)">Next page</button></li>
        </ul>
    </div>
</template>
  
<script>
import CatalogItem from '@/UI/CatalogItem.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        CatalogItem
    },
    props: {
        elementsCount: {
            type: Array,
            required: true
        },
        entriesPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },


    computed: {
          
        ...mapGetters(['paginatortotalPages', 'nextButtonIsDisabled', 'previousButtonDisabled', 'pageOfPages', 'currentPageItems'])
     
    },


    methods: {
        changePage(direction) {
            this.$store.dispatch('changeDirection', direction)
        },
    }

}
</script>
  
  
<style scoped>
.pagCompTry {
    color: blue;
}

.controls {
    display: flex;
    list-style: none;
    padding: 1rem ;
    justify-content: center;
    border: 1px solid black;
    font-size: larger;
    background-color: rgb(87, 87, 87);
    color: white;
    align-items: center;
}

.controls button {
    background-color: rgb(11, 47, 207);
    border-color:rgb(11, 47, 207) ;
    color: white;
    border-radius: 5%;
    padding: 0.4rem;
}

.controls button:hover {
    cursor: pointer;
}

.controls .active {
    background-color: red;
}

.controls button[disabled],
button[disabled]:hover { 
 background-color: gray;
 border-color: gray;
 cursor: not-allowed;
}

.items {
    display: flex;
    flex-direction: column;
    gap: 0.3rem
}

:deep(.even) {
    background-color: aqua;
}
</style>