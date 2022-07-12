<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      sample: "Hello Yaroslav",
    };
  },
  created() {
    console.log("Hey, i have been created!", this.sample);
  },
};
</script>

<style></style>
