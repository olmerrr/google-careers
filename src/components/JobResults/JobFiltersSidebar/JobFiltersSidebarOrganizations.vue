<template>
  <the-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              :data-test="organization"
              @change="selectOrganization"
            />
            <label :for="organization" data-test="organization">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </the-accordion>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { ref } from "vue";

import { useUniqueOrganizations } from "@/store/composables";

import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

import TheAccordion from "@/components/Shared/TheAccordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    TheAccordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults" });
    };

    return { selectedOrganizations, uniqueOrganizations, selectOrganization };
  },
};
</script>

<style></style>
