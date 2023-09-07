<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    padding: 0.2rem;
    background-color: blue;
    border-color: blue;
    color: white;
    border-radius: 8%;
    opacity: 0.7;
    transition: all 0.3s;
}

button:hover {
    opacity: 1;
}

.active {
  background-color: rgb(75, 26, 26);
  border-color: rgb(75, 26, 26);
  opacity: 1;
}
</style>