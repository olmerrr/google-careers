<template>
  <div class="job-results">
    <h1 class="font-bold color text-red-800">This is an JobResultsView page</h1>
    <button @click="goToHome" class="border px-4 py-2">go to Main page</button>
  </div>
</template>
<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
