<template>
<div class="backdrop" @click.self="$emit('close')"> <!-- .self: For backfdrop only -->
    <div class="modal" :class="{ sale: theme === 'sale'}"> 
        <slot>Default content</slot> <!-- Only shows when slot has no value -->
        <slot name="links"></slot>
    </div>
</div>
</template>

<script>
export default {
    props: ['theme'],
    // methods: {
    //     closeModal() {
    //         this.$emit('close')
    //     }
    // }
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
.modal.sale {
    background-color: #1593e7;
    color: #fff;
}

.modal.sale h1{
    color: #fff;
}
</style>