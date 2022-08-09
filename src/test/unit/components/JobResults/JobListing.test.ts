import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";
import { Job } from "@/api/types";
import { createJob } from "../../store/utils";

describe("JobListing", () => {
  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("renders job title", () => {
    const job = createJob({ title: "Angular Developer" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Angular Developer");
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "Vue and Me" });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Vue and Me");
  });

  it("renders job location", () => {
    const job = createJob({ locations: ["Orlando", "Jacksonville"] });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Jacksonville");
  });

  it("renders job qualifications", () => {
    const job = createJob({
      minimumQualifications: [
        "Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives",
        "Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas",
      ],
    });
    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch(
      "Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives"
    );
    expect(wrapper.text()).toMatch(
      "Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas"
    );
  });

  it("links to individual job's page", () => {
    const job = createJob({ id: 15 });
    const wrapper = mount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
