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

const items = ref([...Array(5).keys()].map(() => exampleData));
</script>

<template>
  <div class="font-bold text-[20px]">ห้องประชุม</div>

  <div class="mt-8" />

  <div class="flex flex-col mt-8">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                <div>
                  รูปภาพ
                  <div class="pl-[15px] inline">ชื่อ</div>
                </div>
              </th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                แบรนด์
              </th>

              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                สถานะ
              </th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                วันที่สร้าง
              </th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                วันที่อัปเดต
              </th>
            </tr>
          </thead>

          
          <tbody class="bg-white">
            <tr v-for="item in items" :key="item" class="hover:border-l-[5px] border-green-500 hover:shadow-[0px_1px_10px_1px_rgba(0,0,0,0.30)] rounded">
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-30 h-full">
                    <img class="w-10 h-10 rounded" :src="item.image" alt="" />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      {{ item.name }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      สีดำ, ขนาด 24 นิ้ว
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm leading-5 text-gray-900">
                  {{ item.brands }}
                </div>
                <div class="text-sm leading-5 text-gray-500"></div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >{{ item.status }}</span
                >
              </td>

              <td
                class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
              >
                {{ item.created_At }}
              </td>
              <td
                class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
              >
                {{ item.updated_At }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
