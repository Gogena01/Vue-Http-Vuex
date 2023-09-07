<template>
    <nav>
        <ul>
            <slot></slot>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    position: relative;
    top: 0;
    z-index: 1;
    width: 100%;
    padding: 0.5rem 0;
    background-color: rgb(197, 192, 192);

    ul {
        display: flex;
        gap: 2rem;
        list-style: none;

        li {
            background-color: blue;
            padding: 1rem;
        }
    }
}
</style>