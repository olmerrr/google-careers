import { mount } from "@vue/test-utils";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";

describe("TheSubnav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: { name: routeName },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user on job page", () => {
    it("displays job count", () => {
      const rounteName = "JobResults";
      const wrapper = mount(TheSubnav, createConfig(rounteName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when user not on job page", () => {
    it("does not display job count", () => {
      const routeName = "Home";

      const wrapper = mount(TheSubnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
