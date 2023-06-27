<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal 
      theme="sale"
      @close="toggleModal"
    >
        <h1>{{ header }}</h1>
        <p>{{ content }}</p>
    </Modal>
  </div>
<button @click="toggleModal">Show</button>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'Test Vue App',
      header: 'Title test',
      content: 'Content test',

      showModal: false,
    };
  },
 methods: {
   toggleModal () {
    this.showModal = !this.showModal
  },
 }
};
</script>

<style>

</style>
