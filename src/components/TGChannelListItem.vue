<style lang="stylus" scoped>
</style>

<template lang="pug">
  a(:href="link") {{ name }}
</template>

<script>
  export default {
    name: 'tg-channel-list-item',
    props: {
      link: {
        default: '',
        type: String,
      },
      name: {
        default: '',
        type: String,
      },
    },
  };
</script>
