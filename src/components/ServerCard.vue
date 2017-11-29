<template lang="pug">
  div Hello {{name}}
</template>

<style lang="stylus" scoped>
</style>

<script>
  export default {
    name: 'ServerCard',
    props: {
      name: String,
    },
  };
</script>
