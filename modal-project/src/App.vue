<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal 
      theme="sale"
      @close="toggleModal"
    >
        <template v-slot:links>
          <a href="#">Sign In</a>
          <a href="#">Register</a>
        </template>
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


// Challenge
//   - create an extra button to open a different modal
//   - use hte same modal component but pass in a different template (slot)
//   - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)

</script>


