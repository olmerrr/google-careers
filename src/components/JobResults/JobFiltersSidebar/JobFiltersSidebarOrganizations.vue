<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="organizations-filter"
  />
</template>

<script lang="ts">
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

import { defineComponent } from "@vue/runtime-core";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFiltersSidebarOrganizations",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();

    return { uniqueOrganizations, ADD_SELECTED_ORGANIZATIONS };
  },
});
</script>

<style></style>
