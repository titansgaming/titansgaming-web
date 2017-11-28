<template lang="pug">
  li
    | {{ channel.name }}
    ul(v-if="channel.channels.length > 0")
      MumbleChannel(
        v-for="child in channel.channels"
        :key="child.name"
        :channel="child"
      )
</template>

<style lang="stylus" scoped>
</style>

<script>
  export default {
    name: 'MumbleChannel',
    props: {
      channel: {
        default: {},
        type: Object,
      },
    },
  };
</script>
