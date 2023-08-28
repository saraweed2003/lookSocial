<template>
  <div class="font-bold text-[20px]">เพิ่มหมวดหมู่</div>

  <div class="pt-[10px]">
    <div class="bg-white p-[20px]">
      <div class="grid grid-cols-11">
        <div class="col-span-1">ชื่อผู้ใช้ :</div>
        <div class="col-span-9">
          <select name="" id="" class="w-full">
            <option value="">ff</option>
          </select>
        </div>

        <div class="flex items-center justify-end">
          <button
            @click="showModal"
            class="bg-[#184BCE] rounded p-[6px] text-white"
          >
            เพิ่มชื่อผู้ใช้งาน
          </button>
        </div>

        
      </div>
    </div>
  </div>

  <userD v-if="status === 1" @close="closeModal" />
</template>

<script setup>
import userD from "../../components/back/user/user.vue";

import { ref } from "vue";
import "dayjs/locale/th";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";

const status = ref(0);

const showModal = () => {
  status.value = 1;
};

const closeModal = () => {
  status.value = 0;
  emits("close");
};

const emits = defineEmits(["close"]);

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function formatDate(dateString) {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-UK", options);
}

const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");
const fileList = ref([]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};

const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value =
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
const beforeUpload = async (file) => {
  const isImage = file.type.startsWith("image/");
  if (!isImage) {
    message.error("You can only upload image files!");
    return false;
  }

  file.preview = await getBase64(file);
  fileList.push(file);
  return false;
};
</script>

<style lang="scss" scoped></style>
