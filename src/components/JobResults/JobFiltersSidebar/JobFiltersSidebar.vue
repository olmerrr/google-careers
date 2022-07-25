<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <the-accordion header="Degree" />
      <the-accordion header="Jobs types">
        <p>Placeholder</p>
      </the-accordion>
      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TheAccordion from "@/components/Shared/TheAccordion.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    TheAccordion,
    JobFiltersSidebarOrganizations,
  },
};
</script>
