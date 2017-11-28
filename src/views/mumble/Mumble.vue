<template lang="pug">
  div
    page-meta(title="Mumble")

    h1 Mumble
    ChannelViewer(:channels="channels")
</template>

<style lang="stylus" scoped>
  div
    --test: darkgreen
</style>

<script>
  import ChannelViewer from './components/ChannelViewer';
  import channels from './testdata.json';

  export default {
    name: 'Mumble',
    components: {
      ChannelViewer,
    },
    data() {
      return {
        channels: channels[0].channels,
      };
    },
  };
</script>
