<template>
  <the-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
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
import { mapGetters } from "vuex";
import { UNIQUE_ORGANIZATIONS } from "@/store";

import TheAccordion from "@/components/Shared/TheAccordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    TheAccordion,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    selectOrganization() {
      console.log(this.selectedOrganizations);
    },
  },
};
</script>

<style></style>
