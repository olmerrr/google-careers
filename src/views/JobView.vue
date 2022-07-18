<template>
  <h4>
    Job Viev for id:
    <span>{{ currentJobId }}</span>
  </h4>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
