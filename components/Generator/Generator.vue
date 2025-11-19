<template>
    <div class="flex flex-col items-center gap-5">
        <div class="flex flex-col items-center text-center">
            <div class="text-2xl font-bold">Username Generator</div>
            <h5 class="text-lg">Create alternative username options for if yours is taken.</h5>
        </div>
        <div class="flex flex-col items-center gap-12">
            <div class="flex items-center flex-col sm:flex-row gap-3">
                <input
                    id="username-input"
                    v-model="name"
                    class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 min-w-64"
                    type="text"
                    placeholder="Please input your username"
                    @keyup.enter="generateNames"
                />

                <BaseButton
                    class="max-w-40"
                    text="Generate Alternatives"
                    :icon="['fas', 'microchip']"
                    stack-content
                    @clicked="generateNames"
                />
            </div>
            <div class="flex flex-col gap-2">
                <div
                    v-for="newName in newNames"
                    :key="newName"
                    class="flex items-center justify-between gap-3"
                >
                    <p>{{ newName }}</p>
                    <BaseButton text="Copy" :icon="['fas', 'copy']" @clicked="copyText(newName)" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// Config
const name = ref("");
const newNames = ref<string[]>([]);
const toastStore = useToastStore();

const generateNames = () => {
    const additions = usernameAdditions; // auto imported from utils
    if (name.value) {
        newNames.value = additions.map((addition) => name.value.concat(addition));
    }
};

const copyText = (text: string) => {
    try {
        navigator.clipboard.writeText(text);
        toastStore.addToast({
            text: "Text copied successfully",
            icon: ["fas", "check"],
        });
    } catch {
        toastStore.addToast({
            text: "An error occurred when copying the text",
            icon: ["fas", "exclamation"],
        });
    }
};
</script>
