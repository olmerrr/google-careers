import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

jest.mock("vuex");
jest.mock("vue-router");

import TheSubnav from "@/components/Navigation/TheSubnav";

describe("TheSubnav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", () => {
      useRoute.mockReturnValue({
        name: "JobResults",
      });

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });

      const wrapper = mount(TheSubnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on jobs page", () => {
    it("does NOT display job count", () => {
      useRoute.mockReturnValue({
        name: "Home",
      });
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [],
        },
      });
      const wrapper = mount(TheSubnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
