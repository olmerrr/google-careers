<template>
  <section>
    <img
      class="w-8 h-8 object-contain rounded-3xl"
      :src="imageLink"
      alt="img"
    />
  </section>
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-128.png",
    };
  },
};
</script>
