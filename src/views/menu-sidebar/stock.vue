<template>
  <div class="font-bold text-[20px]">ห้องเก็บของ</div>

  <!-- <div class="mt-6">
    <h2 class="text-xl font-semibold leading-tight text-gray-700">
      อุปกรณ์คอมพิวเตอร์
    </h2>
    <div>
      <a-date-picker
        style="width: 100%"
        :format="formatDate"
        placeholder="เลือกวัน"
        :locale="locale"
        class="custom-datepicker"
      />
    </div>
  </div> -->

  <div class="pt-[10px]">
    <div class="grid grid-cols-12 gap-6 text-white text-[20px]">
      <router-link
        to="/view-stock"
        class="col-span-3 p-[20px] bg-blue-500 rounded"
      >
        <button>อุปกรณ์คอมพิวเตอร์</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";

dayjs.locale("th");

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-UK", options);
}
</script>

<style></style>
