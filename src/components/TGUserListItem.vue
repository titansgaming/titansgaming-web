<style lang="stylus" scoped>
</style>

<template lang="pug">
  div
    span {{ name }} &nbsp;
    a(:href="channel.url" v-if="showdetails && channel")
      | [ {{ channel.name }} ]
</template>

<script>
  export default {
    name: 'tg-user-list-item',
    props: {
      channel: {
        default: () => {},
        type: Object,
      },
      name: {
        default: '',
        type: String,
      },
      showdetails: {
        default: false,
        type: Boolean,
      },
    },
  };
</script>
