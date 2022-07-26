import { mount } from "@vue/test-utils";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        name: "<h2>Some title</h2>",
      },
    });
    expect(wrapper.text()).toMatch("Some title");
  });
  it("allows parent cmp to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h3>Sample subtitle</h3>",
      },
    });
    expect(wrapper.text()).toMatch("Sample subtitle");
  });
});
