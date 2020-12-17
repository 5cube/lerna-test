<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="text-red-500">Welcome to Your Vue.js App</h1>
    <div class="p-6">
      <Btn>Button</Btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Btn } from 'ui'

export default {
  name: 'Home',
  components: { Btn }
}
</script>
