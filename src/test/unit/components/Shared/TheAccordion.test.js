import { mount } from "@vue/test-utils";
import TheAccordion from "@/components/Shared/TheAccordion.vue";

describe("TheAccordion", () => {
  it("render child", async () => {
    const wrapper = mount(TheAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Test Header",
      },
      slots: {
        default: "<h3>My nested child</h3>",
      },
    });
    expect(wrapper.text()).not.toMatch("My nested child");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("My nested child");
  });
});
