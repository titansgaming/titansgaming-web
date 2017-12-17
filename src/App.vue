<template lang="pug">
  div(id="app")
    div
      router-link(:to="{name: 'home'}") Home
    div
      router-link(:to="'Mumble'") Mumble
    router-view
</template>

<style lang="stylus">
  body
    background-color: #2c3e50;
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
    margin-top: 60px;
    --test: red;
  a, a:visited
    color: white
</style>

<script>
  export default {
    name: 'app',
  };
</script>
