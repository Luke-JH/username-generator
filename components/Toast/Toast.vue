<template>
    <div
        role="alert"
        class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
    >
        <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg">
            <font-awesome :icon="toast.icon" size="lg" />
        </div>
        <div class="ms-3 text-sm font-normal">{{ toast.text }}</div>
        <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
            @click="toastStore.removeToast(toastId)"
        >
            <span class="sr-only">Close</span>
            <font-awesome :icon="['fas', 'circle-xmark']" />
        </button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    toast: Toast;
    toastId: number;
}
defineProps<Props>();

const toastStore = useToastStore();
</script>
