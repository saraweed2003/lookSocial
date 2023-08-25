<template>
  <div class=" w-full p-[10px] bg-no-repeat h-screen font-Kanit">
    <div>
      <HeaderLook1 />
    </div>
    <div>
      <bodyLook2 />
    </div>
  </div>
</template>

<script setup>
import HeaderLook1 from "../components/main/HeaderLook.vue";
import bodyLook2 from "../views/Contenhome/BodyConten.vue";
</script>
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

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #184bce;
  border-radius: 0.375rem;
}
</style>
