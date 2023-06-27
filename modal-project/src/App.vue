<template>
  <h1>{{ title }}</h1>
  <Modal 
    :header="title" 
    :content="content"
    theme="sale"
  />
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
    };
  },
};
</script>

<style>

</style>
