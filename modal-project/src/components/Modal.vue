<template>
<div class="backdrop">
    <div class="modal">
        <h1>{{ header }}</h1>
        <p>{{ content }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: ['header', 'content']
}
</script>

<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: #00000084;
    width: 100%;
    height: 100%;
}
h1 {
    color: #15e7e7
}
</style>