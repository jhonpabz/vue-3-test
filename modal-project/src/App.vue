<template>
  <h1>{{ title }}</h1>
  <teleport to="#modals" v-if="showModal">
    <Modal 
      theme="sale"
      @close="toggleModal"
    >
        <template v-slot:links>
          <div  v-if="modal === 1">
            <a href="#">Sign In</a>
            <a href="#">Register</a>
          </div>
          <div  v-if="modal === 2">
            <a href="#">Logout</a>
          </div>
        </template>

        <h1>{{ header }}</h1>
        <p>{{ content }}</p>
    </Modal>
  </teleport>
<button @click="toggleModal">Show Modal</button>
<button @click.ctrl="toggleModalTwo">Show 2nd Modal (ctrl)</button>
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
      modal: 1,

      showModal: false,
    };
  },
 methods: {
   toggleModal () {
    this.modal = 1
    this.showModal = !this.showModal
  },
  toggleModalTwo () {
    this.modal = 2
    this.showModal = !this.showModal
  },
 }
};


// Challenge
//   - create an extra button to open a different modal
//   - use the same modal component but pass in a different template (slot)
//   - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)

</script>


