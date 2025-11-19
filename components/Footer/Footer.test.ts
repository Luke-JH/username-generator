import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { Footer } from "#components";

describe("Footer component", () => {
    it("can mount the component", async () => {
        const component = await mountSuspended(Footer);
        expect(component.exists()).toBe(true);
    });
    it("renders text", async () => {
        const component = await mountSuspended(Footer);
        expect(component.text()).toContain(
            "Thank you for using the username generator, have a nice day.",
        );
    });
    it("displays the correct year", async () => {
        const component = await mountSuspended(Footer);
        const today = new Date();
        const currentYear = today.getFullYear();
        expect(component.text()).toContain(currentYear);
    });
});
