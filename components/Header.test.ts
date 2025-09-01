import { Header } from "#components";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";

describe("Header component", () => {
    it("can mount the component", async () => {
        const component = await mountSuspended(Header);
        expect(component.exists()).toBe(true);
    });
    it("renders the nav element", async () => {
        const component = await mountSuspended(Header);
        expect(component.find("nav").exists()).toBe(true);
    });
    it("renders the logo image", async () => {
        const component = await mountSuspended(Header);
        const img = component.get("img");
        expect(img.attributes("src")).toContain("logo.png");
    });
});
