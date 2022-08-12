<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear filters"
            type="secondary"
            @click="clearUserJobFilterSelections"
          />
        </div>
      </div>

      <accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </accordion>

      <accordion header="Job Types">
        <job-filters-sidebar-job-type />
      </accordion>

      <accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useStore } from "vuex";

import { key } from "@/store";

import Accordion from "@/components/Shared/Accordion.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

import { CLEAR_USER_JOB_SELECTIONS } from "@/store/constants";

import JobFiltersSidebarDegrees from "./JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobType from "./JobFiltersSidebarJobType.vue";
import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordion,
    ActionButton,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobType,
    JobFiltersSidebarOrganizations,
  },
  setup() {
    const store = useStore(key);

    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_SELECTIONS);
    };

    return { clearUserJobFilterSelections };
  },
});
</script>
