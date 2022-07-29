import { mount } from "@vue/test-utils";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";

describe("TheSubnav", () => {
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: { name: routeName },
      },
      $store,
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user on job page", () => {
    it("displays job count", () => {
      const rounteName = "JobResults";
      const $store = {
        getters: { FILTERED_JOBS_BY_ORGANIZATIONS: [{ id: 1 }, { id: 2 }] },
      };
      const wrapper = mount(TheSubnav, createConfig(rounteName, $store));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
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
