<template>
  <div>
    <h1>Mumble</h1>
    <Test/>
  </div>
</template>

<script>
import Test from '@/components/Test';

export default {
  name: 'Mumble',
  components: {
    Test,
  },
};
</script>

<style scoped>
div {
  --test: darkgreen;
}
</style>
