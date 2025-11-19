<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

    <TransitionGroup name="toasts" tag="div" class="fixed top-[20px] right-[20px] z-50">
        <Toast
            v-for="[index, toast] in toastStore.toasts"
            :key="index"
            :toast-id="index"
            :toast="toast"
        />
    </TransitionGroup>
</template>
<script setup lang="ts">
const toastStore = useToastStore();
</script>
