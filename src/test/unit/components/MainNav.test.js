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
  // list item
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
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
      const wrapper = mount(MainNav);
      const loginBtn = wrapper.find("[data-test='login-button']");
      expect(loginBtn.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("display user profile image", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginBtn = wrapper.find("[data-test='login-button']");
      await loginBtn.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
  // test v-if
});
