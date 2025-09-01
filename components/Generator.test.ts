import { Generator } from "#components";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";

const testUsername = "testUsername";
const additions = usernameAdditions; // auto imported from utils

const mountAndGenerateUsernames = async (activation: "click" | "enter") => {
    const component = await mountSuspended(Generator);

    const textInput = component.get("input#username-input");
    await textInput.setValue(testUsername);

    switch (activation) {
        case "click":
            const button = component.get("button");
            await button.trigger("click");
            break;
        case "enter":
            await textInput.trigger("keyup.enter");
            break;
    }

    return component;
};

const checkNamesAgainstAdditions = (username: string, text: string, additions: string[]) => {
    for (const addition of additions) {
        expect(text).toContain(`${username}${addition}`);
    }
};

describe("Generator component", () => {
    it("can mount the component", async () => {
        const component = await mountSuspended(Generator);
        expect(component.exists()).toBe(true);
    });
    it("renders text", async () => {
        const component = await mountSuspended(Generator);
        expect(component.text()).toContain("Generate Alternatives");
    });
    it("can generate usernames by clicking", async () => {
        const component = await mountAndGenerateUsernames("click");
        const componentText = component.text();
        checkNamesAgainstAdditions(testUsername, componentText, additions);
    });
    it("can generate usernames by pressing enter", async () => {
        const component = await mountAndGenerateUsernames("enter");
        const componentText = component.text();
        checkNamesAgainstAdditions(testUsername, componentText, additions);
    });
});
