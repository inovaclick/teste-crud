<template>
  <div id="app">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation";

export default {
  components: {
    TheNavigation
  }
};
</script>

<style>
h3 {
  color: black;
}

.header {
  font-size: 3.3rem;
}

.header > a {
  text-decoration: none;
  color: black;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
