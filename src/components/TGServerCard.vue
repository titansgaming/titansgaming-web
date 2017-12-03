<style lang="stylus" scoped>
</style>

<template lang="pug">
  div
    div {{ name }}
    div
      slot(name="users")
        tg-user-list(
          v-if="users"
          showdetails
          heading="Online users"
          :users="users"
        )
      slot(name="channels")
        tg-channel-list(
          v-if="channels"
          heading="Channels"
          :channels="channels"
        )
</template>

<script>
  import TGChannelList from './TGChannelList';
  import TGUserList from './TGUserList';

  export default {
    name: 'tg-server-card',
    components: {
      'tg-channel-list': TGChannelList,
      'tg-user-list': TGUserList,
    },
    props: {
      channels: {
        default: () => [],
        type: Array,
      },
      name: {
        default: undefined,
        type: String,
      },
      users: {
        default: () => [],
        type: Array,
      },
    },
  };
</script>
