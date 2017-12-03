<style lang="stylus" scoped>
</style>

<template lang="pug">
  div
    div(v-if="heading") {{ heading }}
    ul
      li(v-for="channel in channels")
        tg-channel-list-item(
          :name="channel.name"
          :link="channel.url"
        )
        tg-user-list(
          v-if="channel.users"
          :users="channel.users"
        )
        tg-channel-list(
          v-if="channel.channels"
          :channels="channel.channels"
        )
</template>

<script>
  import TGChannelListItem from './TGChannelListItem';
  import TGUserList from './TGUserList';

  export default {
    name: 'tg-channel-list',
    components: {
      'tg-channel-list-item': TGChannelListItem,
      'tg-user-list': TGUserList,
    },
    props: {
      channels: {
        default: () => [],
        type: Array,
      },
      heading: {
        default: '',
        type: String,
      },
    },
  };
</script>
