import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";

describe("ProfileImage", () => {
  // check cmp olready render
  it("render cmp", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
