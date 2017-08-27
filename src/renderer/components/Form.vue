<template>
  <div>
    <md-input-container>
      <label>Only Images</label>
      <md-file v-model="onlyImages" accept="image/*"></md-file>
    </md-input-container>
    <md-button @click="saveFile">save!</md-button>
  </div>
</template>

<script>
  export default {
    methods: {
      saveFile: function () {
        this.$store.dispatch('saveFile')
      },
    },
  }
</script>

<style>
</style>