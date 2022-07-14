import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

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
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
  // list item
  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    //  check menu items on value
    const navigationMenuText = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuText).toEqual(menuItems);
  });
  // test v-if
  describe("when user logged out", () => {
    it("user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginBtn = wrapper.find("[data-test='login-button']");
      expect(loginBtn.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("display user profile image", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);
      const loginBtn = wrapper.find("[data-test='login-button']");
      await loginBtn.trigger("click");
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    // test v-if

    it("displays subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
