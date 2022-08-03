<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useFilteredJobs } from "@/store/composables";
import useConfirmRoute from "@/composables/useConfirmRoute";

export default {
  name: "TheSubnav",
  setup() {
    const FILTERED_JOBS = useFilteredJobs();
    const onJobResultPage = useConfirmRoute("JobResults");

    return { onJobResultPage, FILTERED_JOBS };
  },
};
</script>
