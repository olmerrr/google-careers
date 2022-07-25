<template>
  <the-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue and Me" type="checkbox" class="mr-3" />
            <label for="Between Vue and Me">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue and Half Men" type="checkbox" class="mr-3" />
            <label for="Vue and Half Men">Vue and Half Men</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </the-accordion>
</template>

<script>
import TheAccordion from "@/components/Shared/TheAccordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    TheAccordion,
  },
};
</script>

<style></style>
