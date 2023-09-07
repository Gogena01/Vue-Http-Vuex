<template>
    <div class="elements">
        <div class="inputElement">
            <label for="test">Enter text:</label>
            <input type="text" id="test" v-model="inputValue">
        </div>
        <div class="result">
            <h3>{{ inputValue }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        inputValue: {
            get() {
                return this.$store.getters['input/getData'];
            },

            set(value) {
                return this.$store.commit('input/setData', value)
            }
        }
    }
}
</script>


<style scoped lang="scss">
.elements {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 2rem;
}
</style>