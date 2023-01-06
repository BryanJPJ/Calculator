import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("Tags and Components", () => {
  test.skip("should have header", () => {
    const wrapper = mount(App);
    const header = wrapper.find("header");
    expect(header.exists()).toBe(true);
  });

});