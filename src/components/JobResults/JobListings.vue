<template>
  <main class="flex-auto p-8 bg-brand-gray-2 text-left">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
      </div>

      <div class="flex items-center justify-end">
        <router-link
          v-if="previousPage"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          :to="{ name: 'JobResults', query: { page: previousPage } }"
          data-test="previous-page-link"
          >Previous
        </router-link>

        <router-link
          v-if="nextPage"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          :to="{ name: 'JobResults', query: { page: nextPage } }"
          data-test="next-page-link"
          >Next</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FETCH_JOBS, FILTERED_JOBS } from "@/store/constants";
import JobListing from "./JobListing.vue";

export default {
  name: "JobListings",
  components: { JobListing },
  computed: {
    ...mapGetters([FILTERED_JOBS]),
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>

<style></style>
