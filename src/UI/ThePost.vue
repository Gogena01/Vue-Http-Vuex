<template>
    <div class="singleItem">
        <header>
            <slot name="title"></slot>
        </header>
        <main>
            <slot name="body"></slot>
        </main>
        <footer>
            <slot name="controls"></slot>
        </footer>
    </div>
</template>


<style scoped lang="scss">
div {
    background-color: rgb(168, 168, 245);
    border: 2px solid black;
    text-align: center;
    margin-bottom: 1rem;
}
</style>