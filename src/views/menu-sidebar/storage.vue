<template>
  <div class="font-bold text-[20px]">ห้องเก็บของ</div>

  <div class="mt-6">
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
