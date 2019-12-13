<template>
  <div id="app">
    <h1>{{state.name}}</h1>
    <input v-model="query" />
    <button @click="search">Search</button>
    <p v-if="state.loading">loading...</p>
    <template v-else>
      <ul v-if="state.result && state.result.count">
        <li
          v-for="quote in state.result._embedded.quotes"
          :key="quote.quote_id"
        >{{quote.value}}</li>
      </ul>
      <p v-else>{{state.status}}</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    state: {
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
      this.state.commands.load(this.query);
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
