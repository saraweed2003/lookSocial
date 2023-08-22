<script setup>
import { ref } from "vue";

const exampleData = {
  id: "01",
  image:
    "https://www.kikatek.com/MMRes/ResourcesMultimediaProducts/Piper-G600/306/K993248_g4_090655.jpg",
  name: "Monitor",
  brands: "DELL",
  status: "create",
  username_update: "User",
  created_At: "22/08/2023 10:45",
  updated_At: "22/08/2023 10:45",
};

const items = ref([...Array(10).keys()].map(() => exampleData));
</script>

<template>
  <div class="py-[20px]">
    <div class="bg-white rounded-lg shadow-md">
      <div
        class="grid grid-cols-12 text-left border-b text-gray-700 bg-gray-100"
      >
        <div class="col-span-1 p-[16px]">ID</div>
        <div class="col-span-1 p-[16px]"></div>
        <div class="col-span-2 p-[16px]">ชื่อ</div>
        <div class="col-span-2 p-[16px]">แบรนด์</div>
        <div class="col-span-1 p-[16px]">สถานะ</div>
        <div class="col-span-1 p-[16px]">ชื่อผู้อัปเดต</div>
        <div class="col-span-2 p-[16px]">วันที่สร้าง</div>
        <div class="col-span-2 p-[16px]">วันที่อัปเดต</div>
      </div>

      <div class="overflow-auto custom-scrollbar max-h-[678px]">
        <div
          class="grid grid-cols-12 border-b border-[#F0F0F0] text-left items-center hover:shadow-[0px_1px_10px_1px_rgba(0,0,0,0.30)] border-l-[5px] border-l-[#1BBE0D] hover:border-l-[10px] rounded-sm"
          v-for="item in items"
          :key="item"
        >
          <div class="col-span-1 p-[16px]">{{ item.id }}</div>
          <div class="col-span-1 p-[16px]">
            <img :src="item.image" alt="User's Image" class="w-[65px] h-full" />
          </div>
          <div class="col-span-2 p-[16px]">{{ item.name }}</div>
          <div class="col-span-2 p-[16px]">{{ item.brands }}</div>
          <div class="col-span-1 flex p-[16px] text-[16px] text-center">
            <div v-if="item.status === 'create'" class="text-[#1BBE0D]">
              เพิ่มข้อมูล
            </div>
            <div v-if="item.status === 'update'" class="text-[#FF9922]">
              แก้ไขข้อมูล
            </div>
            <div v-if="item.status === 'delete'" class="text-[#FF0000]">
              ลบข้อมูล
            </div>
          </div>

          <div class="col-span-1 p-[16px]">{{ item.username_update }}</div>
          <div class="col-span-2 p-[16px]">{{ item.created_At }}</div>

          <div class="col-span-2 p-[16px]">{{ item.updated_At }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
