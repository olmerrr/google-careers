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
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

import { FETCH_JOBS } from "@/store/constants";
import { useFilteredJobs } from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

import JobListing from "./JobListing.vue";

export default {
  name: "JobListings",
  components: { JobListing },
  setup() {
    const store = useStore();
    const fetchJobs = () => store.dispatch(FETCH_JOBS);

    onMounted(fetchJobs);

    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    // const previousPage = computed(() => {
    //   const previousPage = currentPage.value - 1;
    //   const firstPage = 1;
    //   return previousPage >= firstPage ? previousPage : undefined;
    // });

    // const nextPage = computed(() => {
    //   const nextPage = currentPage.value + 1;
    //   const maxPage = Math.ceil(filteredJobs.value.length / 10);
    //   return nextPage <= maxPage ? nextPage : undefined;
    // });

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return { currentPage, previousPage, nextPage, displayedJobs };
  },
};
</script>

<style></style>
