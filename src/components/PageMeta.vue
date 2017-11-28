<script>

  function updateTitle(title) {
    document.title = `${title} | Titans Gaming`;
  }

  export default {
    name: 'PageMeta',
    props: ['title'],
    created() {
      updateTitle(this.title);
    },
    watch: {
      title() {
        updateTitle(this.title);
      },
    },
    render() {
    },
  };
</script>
