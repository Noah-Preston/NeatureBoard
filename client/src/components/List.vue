<template>
  <div class="col-3 card">
    <h4>{{list.title}}</h4>
  </div>
</template>

<script>

  export default {
    name: "list",
    computed: {
      lists() {
        let data = this.$store.state.lists;
        return data;
      }
    },
  }

</script>

<style>

</style>