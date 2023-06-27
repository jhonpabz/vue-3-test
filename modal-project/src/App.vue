<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button></button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Test Vue App',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
