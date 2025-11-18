<template>
    <button
        :class="`flex ${stackContent && 'flex-col gap-1'} items-center button rounded-lg bg-primary hover:bg-primary-hover text-white p-3`"
        @click="$emit('clicked')"
    >
        <p v-if="text">{{ text }}</p>
        <font-awesome v-if="icon" :icon="icon" size="lg" />
    </button>
</template>
<script setup lang="ts">
interface Props {
    text?: string;
    icon?: [string, string];
    stackContent?: boolean;
}
defineProps<Props>();
</script>
