<template>
  <div id="app">
    <h1>{{ state.name }}</h1>
    <input v-model="query" @keyup.enter="search" />
    <button @click="search">Search</button>
    <p v-if="state.status === 'loading'">loading...</p>
    <ul v-else-if="state.status === 'found result'">
      <li v-for="quote in state.result._embedded.quotes" :key="quote.quote_id">
        {{ quote.value }}
      </li>
    </ul>
    <p v-else>{{ state.status }}</p>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      required: true
    },
    commands: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      query: ""
    };
  },
  name: "app",
  methods: {
    search() {
      this.commands.load(this.query);
    }
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  overflow: hidden;
}
</style>
