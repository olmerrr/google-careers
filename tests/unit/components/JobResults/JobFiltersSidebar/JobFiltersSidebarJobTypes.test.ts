import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebarJobType from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobType.vue";
import { useUniqueJobTypes } from "@/store/composables";

jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
describe("JobFiltersSidebarJobType", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    const wrapper = shallowMount(JobFiltersSidebarJobType);
    const jobTypesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = jobTypesFilter.props();
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
});
