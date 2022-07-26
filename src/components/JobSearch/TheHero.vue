<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            src="@/assets/hero-img.jpg"
            alt="hero-img"
            class="h-80 w-80 rounded-full"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <the-spotlight class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="/job/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img
            :src="slotProps.spotlight.img"
            class="object-contain"
            alt="img"
          />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ slotProps.spotlight.title }}
            </h3>
            <p class="mt-3 text-sm">
              {{ slotProps.spotlight.description }}
            </p>
          </div>
          <router-link
            to="/job/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </the-spotlight>
  </main>
</template>

<script>
import TheHeadline from "@/components/JobSearch/TheHeadline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import TheSpotlight from "@/components/JobSearch/TheSpotlight.vue";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm,
    TheSpotlight,
  },
};
</script>
