<script setup>
import { ref, onMounted } from "vue";

const name = ref("");
const names = ref(JSON.parse(localStorage.getItem("names")) || []);
const editing = ref(false);
const editIndex = ref(null);

const addName = () => {
  if (name.value.trim() !== "") {
    names.value.push(name.value);
    updateLocalStorage();
    name.value = "";
  }
};

const editName = (index) => {
  name.value = names.value[index];
  editing.value = true;
  editIndex.value = index;
};

const saveEdit = () => {
  if (editIndex.value !== null && name.value.trim() !== "") {
    names.value[editIndex.value] = name.value;
    updateLocalStorage();
    name.value = "";
    editing.value = false;
    editIndex.value = null;
  }
};

const clearEdit = () => {
  name.value = "";
  editing.value = false;
  editIndex.value = null;
};

const deleteName = (index) => {
  names.value.splice(index, 1);
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem("names", JSON.stringify(names.value));
};

onMounted(() => {
  // Any initialization or real-time updates can be done here
});

const closeModal = () => {
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

<template>
  <div
    class="modal overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center grid grid-cols-11 bg-[#6B7280]/75"
  >
    <div class="grid col-start-5 col-span-3">
      <div class="grid grid-rows-1 bg-white rounded-lg p-[20px]">
        <div
          class="text-center justify-center items-center text-[20px] font-bold text-black pb-[20px]"
        >
          เพิ่มประเภท
        </div>

        <!----------------------------- เพิ่มชื่อผู้ใช้งาน ----------------------------->
        <div class="grid grid-cols-12 items-center pb-[10px] gap-2">
          <div class="col-span-12">
            <input
              v-model="name"
              type="text"
              placeholder="กรอกชื่อประเภท"
              class="border border-gray-200 rounded p-[8px] w-full"
            />
          </div>

          <div class="clearfix py-[10px] col-span-12">
            <a-upload
              v-model:file-list="fileList"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              @preview="handlePreview"
              :before-upload="beforeUpload"
            >
              <div v-if="fileList.length < 1">
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

          <div class="col-span-6">
            <button
              class="bg-[#184BCE] text-white p-[8px] rounded w-full"
              @click="addName"
            >
              บันทึก
            </button>
          </div>

          <div class="col-span-6">
            <button
              class="bg-white border text-black p-[7px] rounded w-full"
              @click="closeModal"
            >
              ยกเลิก
            </button>
          </div>
        </div>

        <!----------------------------- รายชื่อผู้ใช้งาน ----------------------------->
        <!-- <div class="py-[10px]">
          <div class="border rounded">
            <div
              class="grid grid-cols-8 col-span-8 bg-gray-100 p-[8px] border-b"
            >
              <div class="text-gray-600">ชื่อ</div>
            </div>

            <div
              class="grid grid-cols-12 p-[8px]"
              v-for="(name, index) in names"
              :key="index"
            >
              <div class="col-span-10 py-[5px]">{{ name }}</div>
              <div class="flex justify-center">
                <button class="p-[3px]" @click="editName(index)">
                  <svg
                    class="w-3 h-3"
                    width="700"
                    height="700"
                    viewBox="0 0 700 700"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M495.869 25.6348L429.698 91.8066L607.432 269.541L673.604 203.369C707.784 169.189 707.784 113.818 673.604 79.6387L619.737 25.6348C585.557 -8.54492 530.186 -8.54492 496.006 25.6348H495.869ZM398.799 122.705L80.1077 441.533C65.889 455.752 55.4983 473.389 49.7562 492.666L1.35771 657.139C-2.06026 668.76 1.08427 681.201 9.56084 689.678C18.0374 698.154 30.4788 701.299 41.9632 698.018L206.436 649.619C225.713 643.877 243.35 633.486 257.569 619.268L576.534 300.439L398.799 122.705Z"
                      fill="#FF9922"
                    />
                  </svg>
                </button>
              </div>

              <div class="flex justify-center">
                <button class="p-[3px]" @click="deleteName(index)">
                  <svg
                    class="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      fill="#FF0000"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
