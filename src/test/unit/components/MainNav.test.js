import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    // wecan use second arg in mount
    // wrapper = mount(MainNav, {
    //   data() {
    //     return {
    //       company: "Super Corp",
    //     };
    //   },
    // });
    // console.log(wrapper.text());
    // console.log(wrapper.html());
    expect(wrapper.text()).toMatch("Super Corp");
  });
});
