<template lang="pug">
  div
    page-meta(title="Home")

    h1 Welcome to Titans Gaming
</template>

<style lang="stylus" scoped>
  h1, h2
    font-weight: normal
  ul
    list-style-type: none
    padding: 0
  li
    display: inline-block
    margin: 0 10px
  a
    color: #42b983
</style>

<script>
  export default {
    name: 'home',
    data() {
      return {
        title: 'Hello World!',
      }
    },
    head() {
      return {
        // title: this.title,
        meta: [
          {
            vmid: 'description',
            name: 'description',
            content: 'Titans Gaming website',
          },
        ],
      };
    },
  };
</script>
