<template>
    <div>
        <div class="items">
            <slot :currentPageItems="currentPageItems"></slot>
        </div>
        <ul class="controls">
            <li><button :disabled="previousButtonDisabled" @click="changePage(-1)">Previous page</button></li>
            <span>{{ pageOfPages }}</span>
            <li><button :disabled="nextButtonIsDisabled" @click="changePage(1)">Next page</button></li>
        </ul>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        elementsCount: {
            type: Array,
            required: true
        },
    },


    computed: { 
        ...mapGetters('paginator', ['paginatortotalPages', 'nextButtonIsDisabled', 'previousButtonDisabled', 'pageOfPages', 'currentPageItems'])   
    },

    created() {
       this.$store.dispatch('paginator/handleData', this.elementsCount)
    },

    methods: {
        changePage(direction) {
            this.$store.dispatch('paginator/changeDirection', direction)
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