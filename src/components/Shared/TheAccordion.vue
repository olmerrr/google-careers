<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <template v-if="isOpen">
      <section class="w-full mt-5 text-left">
        <slot>
          <p>Whoops, somebody forgot to populate me</p>
        </slot>
      </section>
    </template>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "TheAccordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    const caretIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );

    return { isOpen, open, caretIcon };
  },
};
</script>

<style></style>
