import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  it("renders job title", () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          title: "Angular Developer",
        },
      },
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).toMatch("Angular Developer");
  });

  it("renders job organization", () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          organization: "Vue and Me",
        },
      },
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).toMatch("Vue and Me");
  });
});
