<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="font-bold text-[20px]">ห้องประชุม</div>

  <div class="group">
   <p>Some content that is always visible.</p>
   <p class="invisible group-hover:visible group-hover:bg-blue-300 absolute">Username update</p>
</div>
</template>

<style lang="scss" scoped></style>
