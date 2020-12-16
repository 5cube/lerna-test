<template>
  <h1>{{ msg }}</h1>
  <button @click="count++" class="bg-blue-500 hover:bg-blue-600 px-3 py-2">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
