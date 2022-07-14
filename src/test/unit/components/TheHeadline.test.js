import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import TheHeadline from "@/components/TheHeadline";

describe("TheHeadline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    const wrapper = mount(TheHeadline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consistent interval", () => {
    mount(TheHeadline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(TheHeadline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(TheHeadline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
