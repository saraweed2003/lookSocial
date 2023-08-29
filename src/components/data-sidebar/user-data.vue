<script setup>
import { ref, computed, onMounted } from "vue";
import { items } from "./itemsD";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchAsset");
});

const assets = computed(() => store.getters.getAsset);
console.log("Asset:", assets);

const pageSize = ref(10); // ข้อมูลแสดงต่อหน้า
const currentPage = ref(1); // หน้าปัจจุบัน
const totalItems = ref(10); // จำนวนรายการทั้งหมด

// คำนวณรายการที่ต้องการแสดงในแต่ละหน้า
const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return assets.value.slice(start, end);
});

// เมื่อมีการเปลี่ยนขนาดหน้า
const onShowSizeChange = (currentPage, size) => {
  pageSize.value = size;
  currentPage.value = 1;
  displayedItems.value = assets.value.slice(0, size);
};

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-UK", options);
}
</script>

<template>
  <div class="py-[20px]">
    <div class="bg-white rounded-lg shadow-md text-xs">
      <div
        class="grid grid-cols-12 text-left text-xs font-medium border-b text-gray-700 bg-gray-100 rounded"
      >
        <div class="col-span-1 p-[16px]">รูปภาพ</div>
        <div class="col-span-2 p-[16px]">ชื่อ</div>
        <div class="col-span-2 p-[16px]">แบรนด์</div>
        <div class="col-span-2 p-[16px]">สถานะ</div>
        <div class="col-span-1 p-[16px]">ชื่อผู้อัปเดต</div>
        <div class="col-span-2 p-[16px]">วันที่สร้าง</div>
        <div class="col-span-2 p-[16px]">วันที่อัปเดต</div>
      </div>

      <div class="overflow-auto max-h-[60vh] custom-scrollbar">
        <div
          class="grid grid-cols-12 border-b border-[#F0F0F0] text-left text-xs items-center hover:shadow-[0px_1px_10px_1px_rgba(0,0,0,0.30)] rounded-sm"
          v-for="item in displayedItems"
          :key="item"
        >
          <div class="col-span-1 p-[16px]">
            <img class="w-[60px] h-full rounded" :src="item.image" alt="" />
          </div>
          <div class="col-span-2 p-[16px]">
            <div class="text-sm font-medium leading-5 text-gray-900">
              {{ item.name }}
            </div>
            <div class="text-sm leading-5 text-gray-500">
              สี {{ item.color }}, {{ item.detail }}
            </div>
          </div>
          <div class="col-span-2 p-[16px]">{{ item.brand.name }}</div>
          <div class="col-span-2 flex p-[16px] text-center">
            <div
              v-if="item.status === 'usable'"
              class="text-[#1BBE0D] bg-green-100 p-[5px] rounded"
            >
              กำลังใช้งาน
            </div>
            <div v-if="item.status === 'unusable'" class="text-[#FF0000]">
              ใช้งานไม่ได้
            </div>
            <div v-if="item.status === 'stock'" class="text-[#FFD600]">
              สต็อก
            </div>
            <div v-if="item.status === '`other'" class="text-[#DB00FF]">
              อื่นๆ
            </div>
          </div>

          <div class="col-span-1 p-[16px]">{{ item.users }}</div>
          <div class="col-span-2 p-[16px] text-gray-800 group">
            {{ formatDate(item.created_at) }}
            <p
              class="text-[16px] text-green-600 invisible group-hover:visible bg-gray-200 px-[5px] rounded absolute"
            >
              {{ item.username_create }}
            </p>
          </div>

          <div class="col-span-2 p-[16px] text-gray-800">
            {{ formatDate(item.updated_at) }}
            <p
              class="text-[16px] text-[#FF9922] invisible group-hover:visible bg-gray-200 px-[5px] rounded absolute"
            >
              {{ item.username_create }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative pt-[20px]">
      <a-pagination
        v-model:current="currentPage"
        v-model:pageSize="pageSize"
        show-size-changer
        :total="totalItems"
        @showSizeChange="onShowSizeChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
