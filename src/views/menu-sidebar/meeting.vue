<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchAsset");
});

const asset = computed(() => store.getters.getAsset);
</script>

<template>
  <div class="font-bold text-[20px]">ห้องประชุม</div>

  <div v-for="item in asset" :key="item">
    {{ item.brand.name }}
  </div>
</template>

<style lang="scss" scoped></style>
