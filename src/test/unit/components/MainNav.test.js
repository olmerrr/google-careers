import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

const menuItems = [
  "Teams",
  "Locations",
  "Life at Bobo",
  "How we hire",
  "Students",
  "Jobs",
];

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    //  check menu items on value
    const navigationMenuText = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuText).toEqual(menuItems);
  });
});
