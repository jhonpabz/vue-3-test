<template>
  <div class="block">
    <h3>Reaction Time: {{ score }} ms</h3>
  </div>
</template>

<script>
export default {
  props: ['score'],
};
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #e9ca1a;
  color: #000000;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
