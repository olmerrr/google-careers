import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    // console.log(wrapper.text());
    // console.log(wrapper.html());
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
});
