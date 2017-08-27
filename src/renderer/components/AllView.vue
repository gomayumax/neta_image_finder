<template>
  <div>
    <ul v-for="image in images">
      <li>
        <md-image :md-src="image.url"></md-image>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      images: function () {
        return this.$store.getters.images
      }
    },
  }
</script>

<style>
</style>