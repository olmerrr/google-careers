<template>
  <div class="job-results flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>
