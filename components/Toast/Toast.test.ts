import { Toast } from "#components";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";

// Mock data
const mockToast: Toast = {
    text: "This is a mock toast",
    icon: ["fas", "check"],
};
const mockToastID = Date.now();

// Abstract component mount
const mountComponent = async () => {
    return mountSuspended(Toast, {
        props: {
            toast: mockToast,
            toastId: mockToastID,
        },
    });
};

// Tests
describe("Toast component", () => {
    it("can mount the component", async () => {
        const component = await mountComponent();
        expect(component.exists()).toBe(true);
    });

    it("can render text", async () => {
        const component = await mountComponent();
        expect(component.text()).toContain("Close");
    });

    it("can render text passed as prop", async () => {
        const component = await mountComponent();
        const renderedText = component.text();
        expect(renderedText).toContain(mockToast.text);
    });

    it("can render icon passed as prop", async () => {
        const component = await mountComponent();
        const renderedHTML = component.html();
        mockToast.icon.forEach((part) => {
            expect(renderedHTML).toContain(part);
        });
    });
});
