import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Angular Developer",
    organization: "Vue and Me",
    ...jobProps,
  });
  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Angular Developer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Angular Developer");
  });

  it("renders job organization", () => {
    const jobProps = createJobProps({ organization: "Vue and Me" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue and Me");
  });
});
