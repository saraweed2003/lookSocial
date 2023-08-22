<template>
  <div class="bg-[#F0F2F5] h-full p-[20px] bg-no-repeat font-Kanit">
    <div>
      <HeaderEquipment />
    </div>
    <div>
      <router-view />
    </div>
    <ContenEquipment />
  </div>
</template>

<script setup>
import ContenEquipment from "../components/ViewConten/ContenEquipment.vue";
import HeaderEquipment from "../components/ViewConten/HeaderEquipment.vue";
</script>
