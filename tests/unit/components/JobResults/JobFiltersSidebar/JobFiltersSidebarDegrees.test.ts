import { shallowMount } from "@vue/test-utils";
import { useUniqueDegrees } from "@/store/composables";

import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";

jest.mock("@/store/composables");

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;
describe("JobFiltersSidebarDegrees", () => {
  it("allows user to filter by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebarDegrees);

    const degreeFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = degreeFilter.props();
    expect(uniqueValues).toEqual(["Associate", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
