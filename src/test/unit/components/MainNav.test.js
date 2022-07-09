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
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      const loginBtn = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(loginBtn.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("when user logs in", () => {
    it("display user profile image", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const loginBtn = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      // not best variant, becose cmp name can't change
      // const loginBtn = wrapper.findComponent({ name: "ActionButton" });
      // const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(loginBtn.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
  // test v-if
});
