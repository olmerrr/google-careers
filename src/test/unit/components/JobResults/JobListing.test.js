import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Angular Developer",
    organization: "Vue and Me",
    location: ["Kiev"],
    minimumQualifications: ["Development", "Testing"],
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

  it("renders job location", () => {
    const jobProps = createJobProps({ locations: ["Orlando", "Jacksonville"] });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Jacksonville");
  });

  it("renders job qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: [
        "Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives",
        "Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas",
      ],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch(
      "Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives"
    );
    expect(wrapper.text()).toMatch(
      "Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas"
    );
  });
});
