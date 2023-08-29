<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchCategory");
});

const assets = computed(() => store.getters.getAsset);
console.log("Asset:", assets);

const showCategory = computed(() => store.getters.getSelectedCategory);
console.log("CC", showCategory.value);

const items = ["รายการที่ 1", "รายการที่ 2", "รายการที่ 3"];
const selectedItem = ref(items[0]);
</script>

<template>
  <div>ชื่อประเภท</div>
  <div class="py-[10px]">
    <div class="bg-white rounded-lg shadow-md text-xs">
      <div
        class="grid grid-cols-12 text-left text-xs font-medium border-b text-gray-700 bg-gray-100 rounded"
      >
        <div class="col-span-1 p-[16px]">รูปภาพ</div>
        <div class="col-span-2 p-[16px]">ชื่อ</div>
        <div class="col-span-1 p-[16px]">แบรนด์</div>
        <div class="col-span-1 p-[16px]">สถานะ</div>
        <div class="col-span-2 p-[16px]">รายละเอียด</div>
        <div class="col-span-2 p-[16px]">วันที่สร้าง</div>
        <div class="col-span-2 p-[16px]">วันที่อัปเดต</div>
        <div class="col-span-1 p-[16px]">เครื่องมือ</div>
      </div>

      <div class="overflow-auto max-h-[60vh] custom-scrollbar">
        <div
          class="grid grid-cols-12 border-b border-[#F0F0F0] text-left text-xs items-center hover:shadow-[0px_1px_10px_1px_rgba(0,0,0,0.30)]"
        >
          <div class="col-span-1 p-[16px]">
            <img class="w-[60px] h-full rounded" alt="" />
          </div>
          <div class="col-span-2 p-[16px]">
            <div class="text-sm font-medium leading-5 text-gray-900">
              {{ showCategory.name }}
            </div>
            <div class="text-sm leading-5 text-gray-500">details</div>
          </div>
          <div class="col-span-1 p-[16px]">brands</div>
          <div class="col-span-1 flex p-[16px] text-center">
            <div
              v-if="showCategory.status === 'usable'"
              class="text-[#1BBE0D] bg-green-100 p-[5px] rounded"
            >
              กำลังใช้งาน
            </div>
            <div
              v-if="showCategory.status === 'unusable'"
              class="text-[#FF0000]"
            >
              ใช้งานไม่ได้
            </div>
            <div v-if="showCategory.status === 'stock'" class="text-[#FFD600]">
              สต็อก
            </div>
            <div v-if="showCategory.status === '`other'" class="text-[#DB00FF]">
              อื่นๆ
            </div>
          </div>

          <div class="col-span-2 p-[16px]">black</div>
          <div class="col-span-2 p-[16px]">11</div>
          <div class="col-span-2 p-[16px]">18</div>
          <div class="col-span-1 p-[16px]">ดู</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
