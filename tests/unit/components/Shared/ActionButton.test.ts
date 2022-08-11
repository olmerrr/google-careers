import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Some text",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Some text");
  });
  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Some text",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
