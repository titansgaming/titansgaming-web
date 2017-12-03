<script>

  function updateTitle(title) {
    document.title = `${title} | Titans Gaming`;
  }

  export default {
    name: 'page-meta',
    props: {
      title: {
        default: '',
        type: String,
      },
    },
    watch: {
      title() {
        updateTitle(this.title);
      },
    },
    created() {
      updateTitle(this.title);
    },
    render() { return ''; },
  };
</script>
