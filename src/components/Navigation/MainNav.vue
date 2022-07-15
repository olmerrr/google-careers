<template>
  <header :class="['w-full', 'text-sm', headerHightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Bobo Careers
        </router-link>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <!-- data-test="main-nav-list-item"
            this attr for test data in Jest -->
              <a href="/" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full py-2.5 ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />

          <action-button
            v-else
            data-test="login-button"
            text="Sign in"
            type="primary"
            @click="signIn"
          />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import TheSubnav from "@/components/Navigation/TheSubnav.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    TheSubnav,
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
      loginText: "Sign in",
    };
  },
  computed: {
    headerHightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    signIn() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<style scoped>
a {
  outline: none;
}
</style>
