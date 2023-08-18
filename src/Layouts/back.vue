<template>
  <div class="font-Kanit">
    <!-- <div class="bg-[#184BCE] hidden sm:block">
      <sidebar />
    </div> -->

    <div class="bg-[#F0F2F5]">
      <TheHeader />
      <div class="grid grid-cols-7">
        <div class="col-span-1 hidden sm:block">
          <sidebar />
        </div>
        <div class="p-[20px] col-span-6">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sidebar from "../components/back/sidebar.vue";
import heade from "../components/back/header.vue";
import TheHeader from "../components/back/TheHeader.vue";

import { ref } from "vue";
</script>

<style></style>
