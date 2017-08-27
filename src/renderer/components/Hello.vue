<template>
  <div>
    <h1>hello</h1>
    <Form></Form>
    <AllView></AllView>
  </div>
</template>

<script>
  export default {
    name: 'hello-page',
    components: {
      Form: require('@/components/Form'),
      AllView: require('@/components/AllView'),
    },
  }
</script>

<style>
</style>