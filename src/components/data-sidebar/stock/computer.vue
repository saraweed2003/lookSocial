<script setup>
import { ref, computed } from "vue";
import { items } from "../itemsD";

console.log(items.value);

// ข้อมูลแสดงต่อหน้า
const pageSize = ref(4);
const currentPage = ref(1);
// จำนวนรายการทั้งหมด
const totalItems = ref(items.value.length);

// คำนวณรายการที่ต้องการแสดงในแต่ละหน้า
const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return items.value.slice(start, end);
});

// เมื่อมีการเปลี่ยนขนาดหน้า
const onShowSizeChange = (current, size) => {
  pageSize.value = size;
  currentPage.value = 1;
  displayedItems.value = items.value.slice(0, size);
};
</script>

<template>
  <div class="">
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <div class="relative text-gray-600 pb-[10px]">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            class="bg-white h-10 w-[300px] px-5 rounded-lg text-sm focus:outline-none"
          />
          <button type="submit" class="left-0 top-0 mt-3 mr-4">
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md text-xs">
      <header class="px-3 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">อุปกรณ์คอมพิวเตอร์</h2>
      </header>
      <div
        class="grid grid-cols-12 text-left text-xs font-medium border-b text-gray-700 bg-gray-100 rounded"
      >
        <div class="col-span-1 p-[16px]">รูปภาพ</div>
        <div class="col-span-4 p-[16px]">ชื่อ</div>
        <div class="col-span-3 p-[16px]">แบรนด์</div>
        <div class="col-span-2 p-[16px]">สถานะ</div>
        <div class="col-span-2 p-[16px]">ชื่อผู้ใช้งาน</div>
      </div>

      <div class="overflow-auto max-h-[60vh] custom-scrollbar">
        <div
          class="grid grid-cols-12 border-b border-[#F0F0F0] text-left text-xs items-center hover:shadow-[0px_1px_10px_1px_rgba(0,0,0,0.30)]"
          v-for="item in displayedItems"
          :key="item"
        >
          <div class="col-span-1 p-[16px]">
            <img class="w-[60px] h-full rounded" :src="item.image" alt="" />
          </div>
          <div class="col-span-4 p-[16px]">
            <div class="text-sm font-medium leading-5 text-gray-900">
              {{ item.name }}
            </div>
            <div class="text-sm leading-5 text-gray-500">
              สี {{ item.color }}, {{ item.detail }}
            </div>
          </div>
          <div class="col-span-3 p-[16px]">{{ item.brands }}</div>
          <div class="col-span-2 flex p-[16px] text-center">
            <div v-if="item.status === 'create'" class="text-[#1BBE0D]">
              กำลังใช้งาน
            </div>
            <div v-if="item.status === 'update'" class="text-[#FF9922]">
              สต็อก
            </div>
            <div v-if="item.status === 'delete'" class="text-[#FF0000]">
              ใช้งานไม่ได้
            </div>
          </div>

          <div class="col-span-1 p-[16px]">{{ item.username_update }}</div>
        </div>
      </div>
      <div class="relative p-[10px]">
        <a-pagination
          v-model:current="currentPage"
          v-model:pageSize="pageSize"
          :total="totalItems"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
