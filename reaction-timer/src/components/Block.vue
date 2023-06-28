<template>
  <div class="block" v-if="showBLock">Click Me</div>
  <h1>{{ delay }}</h1>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBLock: false,
    };
  },
  mounted() {
    console.log('Mounted');
    setTimeout(() => {
      this.showBLock = true;
      console.log(`Delay for ${this.delay}`);
    }, this.delay);
  },
  updated() {},
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
