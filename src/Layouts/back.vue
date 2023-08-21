<script setup>
import Sidebar from "../components/back/TheSidebar.vue";
import Header from "../components/back/TheHeader.vue";
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto font-Kanit">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 bg-gray-200">
        <div class="p-[30px]">
          <!-- <slot /> -->
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
