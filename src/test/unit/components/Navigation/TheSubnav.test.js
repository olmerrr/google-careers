import { mount } from "@vue/test-utils";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";

describe("TheSubnav", () => {
  describe("when user on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when user not on job page", () => {
    it("does not display job count", () => {
      const wrapper = mount(TheSubnav, {
        data() {
          return {
            onJobResultPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
