<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <ul>
      <li v-for="user in users" :key="user.username">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["msg"]);
const users = ref([]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
