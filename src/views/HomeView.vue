<template>
  <hero />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import Hero from "@/components/JobSearch/Hero.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
  },
});
</script>
