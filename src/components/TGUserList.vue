<style lang="stylus" scoped>
</style>

<template lang="pug">
  div
    div(v-if="heading") {{ heading }}
    ul
      li(v-for="user in users")
        tg-user-list-item(
          :showdetails="showdetails"
          :name="user.name"
          :channel="user.channel"
        )
</template>

<script>
  import TGUserListItem from './TGUserListItem';

  export default {
    name: 'tg-user-list',
    components: {
      'tg-user-list-item': TGUserListItem,
    },
    props: {
      heading: {
        default: '',
        type: String,
      },
      showdetails: {
        default: false,
        type: Boolean,
      },
      users: {
        default: () => [],
        type: Array,
      },
    },
  };
</script>
