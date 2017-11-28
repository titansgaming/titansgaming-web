<template lang="pug">
  ul
    MumbleChannel(
      v-for="channel in channels"
      :key="channel.name"
      :channel="channel"
    )
</template>

<style lang="stylus" scoped>
</style>

<script>
  import MumbleChannel from './MumbleChannel';

  export default {
    name: 'ChannelViewer',
    components: {
      MumbleChannel,
    },
    props: {
      channels: {
        default: [],
        type: Array,
      },
    },
  };
</script>
