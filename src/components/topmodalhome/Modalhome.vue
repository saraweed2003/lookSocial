<template>
  <div
    class="modal overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center grid grid-cols-12 bg-[#6B7280]/75"
  >
    <div class="grid col-start-5 col-span-4">
      <div class="bg-[#184BCE] py-[14px] pl-[20px] grid grid-cols-12">
        <div class="col-span-11 text-[30px] text-[white]">เพิ่มรายการ</div>
        <button @click="closemodaladd" class="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.962488 0.75741C1.28422 0.435681 1.80583 0.435681 2.12756 0.75741L19.5533 18.1831C19.875 18.5048 19.875 19.0264 19.5533 19.3481C19.2315 19.6699 18.7099 19.6699 18.3882 19.3481L0.962488 1.92248C0.640759 1.60076 0.640759 1.07913 0.962488 0.75741Z"
              fill="white"
            />
            <path
              d="M19.5391 0.741291C19.2174 0.41957 18.6957 0.41957 18.374 0.741291L0.948322 18.167C0.626601 18.4887 0.626601 19.0104 0.948322 19.3321C1.27005 19.6538 1.79168 19.6538 2.1134 19.3321L19.5391 1.90637C19.8608 1.58464 19.8608 1.06302 19.5391 0.741291Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="bg-[#FFFFFF] text-[#343434]">
        <div class="py-[10px] text-[18px] px-[10px]">
          <div class="grid grid-cols-12 gap-2.5">
            <div class="col-span-4 justify-self-end">ผู้ใช้:</div>
            <div class="col-span-7">
              <input
                value=""
                placeholder="กรอกชื่อผู้ใช้"
                class="border w-full p-[3px]"
              />
            </div>
            <div class="col-span-4 justify-self-end">สถานที่:</div>
            <div class="col-span-7">
              <select class="border w-full p-[3px]">
                <option value="" hidden>กรุณาเลือกสถานที่</option>
                <option value="">456</option>
                <option value="">789</option>
                <option value="">1011</option>
              </select>
            </div>
            <div class="col-span-4 justify-self-end">แบรนด์:</div>
            <div class="col-span-7">
              <select class="border w-full p-[3px]">
                <option value="" hidden>กรุณาเลือกแบรนด์</option>
                <option value="">456</option>
                <option value="">789</option>
                <option value="">1011</option>
              </select>
            </div>
            <div class="col-span-4 justify-self-end">รายละเอียด:</div>
            <div class="col-span-7">
              <input
                class="border w-full p-[6px]"
                type="text"
                placeholder="กรอกรายละเอียด"
              />
            </div>
            <div class="col-span-4 justify-self-end">ร้านค้า:</div>
            <div class="col-span-7">
              <input
                class="border w-full p-[6px]"
                type="text"
                placeholder="กรอกชื่อผู้ใช้"
              />
            </div>
            <div class="col-span-4 justify-self-end">ลิ้งค์ร้านค้า:</div>
            <div class="col-span-7">
              <input
                class="border w-full p-[6px]"
                type="text"
                placeholder="กรอก URL"
              />
            </div>
            <div class="col-span-4 justify-self-end">วันที่ซื้อ:</div>
            <div class="col-span-7">
              <div>
                <a-date-picker
                  style="width: 100%"
                  :format="formatDate"
                  placeholder="เลือกวัน"
                  :locale="locale"
                />
              </div>
            </div>
            <div class="col-span-4 justify-self-end">ราคา:</div>
            <div class="col-span-7">
              <input
                class="border w-full p-[6px]"
                type="text"
                placeholder="กรอกราคา"
              />
            </div>
            <div class="col-span-4 justify-self-end">รูปภาพ:</div>
            <div class="clearfix col-span-7">
              <a-upload
                v-model:file-list="fileList"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                @preview="handlePreview"
                :before-upload="beforeUpload"
              >
                <div v-if="fileList.length < 4">
                  <plus-outlined />
                  <div style="margin-top: 8px">Upload</div>
                </div>
              </a-upload>
              <a-modal
                :open="previewVisible"
                :title="previewTitle"
                :footer="null"
                @cancel="handleCancel"
              >
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </div>
          </div>
          <div class="grid grid-cols-12">
            <button
              class="col-span-2 col-start-11 bg-[#184BCE] px-[24px] py-[10px] text-[white]"
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "dayjs/locale/th";
import locale from "ant-design-vue/es/date-picker/locale/th_TH";

const closemodaladd = () => {
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
<style scoped></style>
