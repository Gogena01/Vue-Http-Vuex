<template>
<div>
    <header>
        <slot name="title"></slot>
    </header>
    <footer>
        <slot name="button"></slot>
    </footer>
</div>
</template>


<style scoped lang="scss">
div {
    border: 1px solid black;
    padding: 1rem;
    background-color: brown;
    color: white;
}
</style>


