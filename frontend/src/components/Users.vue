<template>
  <h1>{{ msg }}</h1>
  <p v-if="loading">loading...</p>
  <p v-if="error">
    Error occured!
    <button @click="getData">try again</button>
  </p>

  <template v-if="!loading && !error">
    <ul>
      <li v-for="user in data.data" :key="user.emai">
        {{user.username}}
      </li>
    </ul>
    </template>

</template>

<script>
import { defineProps, reactive, onMounted } from 'vue'
import useFetcher from '../composables/fetch'
import {users} from '../services/places'

export default {
  name: 'Users',
  props: ['msg'],
  setup() {
    const state = reactive({ count: 0 })
    const { data, loading, error, getData } = useFetcher(users);

    onMounted(() => {
      getData();
    })
    return { data: data, loading, error, getData };
  },
}



</script>

<style scoped>
a {
  color: #42b983;
}
</style>
