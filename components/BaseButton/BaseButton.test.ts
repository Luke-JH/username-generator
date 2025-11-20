import { BaseButton } from "#components";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";

// Mock data
const mockText = "Test this text";
const mockIcon: [string, string] = ["fas", "check"];

// Abstracted component mount
const mountComponent = async () => {
    return await mountSuspended(BaseButton, {
        props: {
            text: mockText,
            icon: mockIcon,
        },
    });
};

// Tests
describe("BaseButton component", () => {
    it("can mount the component", async () => {
        const component = await mountComponent();
        expect(component.exists()).toBe(true);
    });

    it("can render text passed as prop", async () => {
        const component = await mountComponent();
        const renderedText = component.text();
        expect(renderedText).toContain(mockText);
    });

    it("can render icon passed as prop", async () => {
        const component = await mountComponent();
        const renderedHTML = component.html();
        // Check for each part of the icon tuple
        mockIcon.forEach((part) => {
            expect(renderedHTML).toContain(part);
        });
    });

    it("can trigger click event", async () => {
        const component = await mountComponent();

        const buttonElement = component.find("button");
        expect(buttonElement.exists()).toBe(true);

        await buttonElement.trigger("click");
        expect(component.emitted()).toHaveProperty("clicked");
    });
});
