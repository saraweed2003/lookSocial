<script setup>
import Sidebar from "../components/back/TheSidebar.vue";
import Header from "../components/back/TheHeader.vue";
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-Kanit">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto custom-scrollbar">
        <div class="p-[30px]">
          <!-- <slot /> -->
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #184bce;
  border-radius: 0.375rem;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background-color: none;
}
</style>
