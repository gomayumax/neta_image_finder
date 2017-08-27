<template>
  <div>
      <md-input-container>
        <label>Image URL</label>
        <md-input placeholder="image url" v-model="url"></md-input>
      </md-input-container>
      <button @click="addImage">add</button>
  </div>
</template>

<script>
  export default {
    data: {
      function () {
        return {
          url: ''
        }
      }
    },
    methods: {
      addImage () {
        console.log(this.url)
        this.$store.dispatch('addImage', {
          url: this.url,
        })
      },
    },
  }
</script>

<style>
</style>