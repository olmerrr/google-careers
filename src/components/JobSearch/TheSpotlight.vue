<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "TheSpotlight",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const baseUrl = process.env.VUE_APP_API_URL;
    const response = await axios.get(`${baseUrl}/spotlights`);
    console.log(this.spotlights);
    this.spotlights = response.data;
  },
};
</script>

<style></style>
