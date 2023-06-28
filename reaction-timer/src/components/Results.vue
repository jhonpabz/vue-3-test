<template>
  <div class="block">
    <h2>You are {{ rank }}</h2>
    <p>Reaction Time: {{ score }} ms</p>
  </div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 200) {
      this.rank = 'Immortal';
    } else if (this.score < 300) {
      this.rank = 'Legend';
    } else if (this.score < 400) {
      this.rank = 'Crusader';
    } else {
      this.rank = 'Herald';
    }
  },
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
