<script>
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  name: 'Home',
  setup () {
   
    const name = ref("Jhon");
    const age = ref(26);
    const names = ref(["Jhon", "asd", "zxcv", "trew"]);
    const search = ref("");

    const stopWwatch = watch(search, () => {
      console.log("Watched: ", search.value);
    })

    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect: ", search.value);
    })

    const handleClick = () => {
      stopWwatch();
      stopWatchEffect();
    } 

    const filteredNames = computed(() => {
      return  names.value.filter(item => item.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()));
    })

    return { name, age, handleClick, names, filteredNames,search}
  }
}
</script>

<template>
  <div class="home">
    <p >Your name is {{ name }} with the age of {{ age }}</p>
    <input type="text" v-model="name" />
    
    <button @click="age++">Plus 1 to age</button>
  </div>

  <input type="text" v-model="search" />
  <button @click="handleClick">Stop Watch</button>
  <!-- <h4>Search name - {{ search }}</h4> -->
 
  <div v-for="filteredName in filteredNames" :key="filteredName">
    <p>{{ filteredName }}</p>
  </div>
</template>


