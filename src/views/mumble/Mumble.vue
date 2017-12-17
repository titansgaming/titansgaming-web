<template lang="pug">
  div
    page-meta(title="Mumble")

    h1 Mumble
    tg-server-card(:channels="channels")
</template>

<style lang="stylus" scoped>
  div
    --test: darkgreen
</style>

<script>
  import TGServerCard from '@/components/TGServerCard.vue';
  import channels from '@/stories/server/MumbleChannels.json';

  export default {
    name: 'mumble',
    components: {
      'tg-server-card': TGServerCard,
    },
    data() {
      return {
        channels,
      };
    },
  };
</script>
