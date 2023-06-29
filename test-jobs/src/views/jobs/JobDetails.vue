<script setup>
import { useRoute } from 'vue-router'
import {ref} from 'vue'
const props = defineProps(['id', 'desc'])

const route = useRoute()
</script>
<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>

  <!-- Todo -->
  <!-- <p>Description:  {{ props.desc }}</p> -->
</template>



<style>

</style>