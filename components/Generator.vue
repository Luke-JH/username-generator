<template>
  <div class="flex flex-col items-center gap-5">
    <div class="flex flex-col items-center">
      <div class="text-2xl font-bold">Username Generator</div>
      <h5 class="text-lg">
        Create alternative username options for if yours is taken.
      </h5>
    </div>
    <div class="flex flex-col items-center gap-5">
      <div class="flex items-center gap-3">
        <input
          v-model="name"
          class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 max-w-72"
          type="text"
          placeholder="Please input your username"
          @keyup.enter="generateNames"
        />
        <button
          class="button rounded-lg bg-primary hover:bg-primary-hover text-white p-3"
          @click="generateNames"
        >
          Generate Alternatives
        </button>
      </div>
      <div
        v-for="newName in newNames"
        :key="newName"
        class="flex items-center gap-3"
      >
        <p>{{ newName }}</p>
        <button
          class="button rounded-lg bg-primary hover:bg-primary-hover text-white p-3"
          @click="copyText(newName)"
        >
          Copy
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const name = ref("");
const newNames: Ref<string[]> = ref([]);

const generateNames = () => {
  const additions = [".", "-", "_", ".-", "._", "-.", "-_", "_.", "_-"];
  if (name.value) {
    newNames.value = additions.map((addition) => name.value.concat(addition));
  }
};

const copyText = (text: string) => navigator.clipboard.writeText(text);
</script>
