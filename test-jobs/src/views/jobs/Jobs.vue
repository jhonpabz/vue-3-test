<script setup>
import { ref } from 'vue'
import JobDetails from './JobDetails.vue'

const jobs = ref([
            {title: "Dev 1", id: 1, desc: 'lorem 1'},
            {title: "Dev 2", id: 2, desc: "lorem"},
            {title: "Dev 3", id: 3, desc: "lorem"},
        ]);
</script>

<template>
  <h1>Jobs Page</h1>
  <div v-for="job in jobs" :key="job.id">
   
    <router-link :to="{ name: 'JobDetails', params: { id: job.id} }">
      <h2>{{ job.title }}</h2>
   <!--    <JobDetails :desc="job.desc" /> -->
    </router-link>

  </div>
</template>



<style>

</style>