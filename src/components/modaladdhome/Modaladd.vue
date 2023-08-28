<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const name = ref("");
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

const names = computed(() => store.getters.getSelecteviweitem);
console.log(names);
const closeModal = () => {
  emits("close");
};

const emits = defineEmits(["close"]);
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
          ชื่อผู้ใช้งาน
        </div>

        <!----------------------------- เพิ่มชื่อผู้ใช้งาน ----------------------------->
        <div class="grid grid-cols-11 items-center">
          <div class="col-span-9 pr-[10px]">
            <input
              v-model="name"
              type="text"
              placeholder="กรอกชื่อผู้ใช้งาน"
              class="border border-gray-200 rounded p-[8px] w-full"
            />
          </div>

          <div class="flex items-center justify-end col-span-2">
            <button
              class="bg-[#184BCE] text-white p-[8px] rounded w-full"
              v-if="!editing"
              @click="addName"
            >
              เพิ่ม
            </button>

            <button
              class="bg-[#184BCE] text-white p-[8px] rounded w-full"
              v-else
              @click="saveEdit"
            >
              แก้ไข
            </button>
          </div>
        </div>

        <!----------------------------- รายชื่อผู้ใช้งาน ----------------------------->
        <div class="py-[10px]">
          <div class="border rounded">
            <div
              class="grid grid-cols-8 col-span-8 bg-gray-100 p-[8px] border-b"
            >
              <div class="text-gray-600">ชื่อ</div>
            </div>

            <div
              class="grid grid-cols-12 p-[8px]"
              v-for="(name, index) in names.category"
              :key="index"
            >
              <div class="col-span-10 py-[5px]">{{ name.name }}</div>
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
        </div>

        <div>
          <button
            class="bg-[#184BCE] text-[#FFFFFF] py-[9px] px-[107px] rounded-[5px] w-full"
            v-if="!editing"
            @click="closeModal"
          >
            เสร็จสิ้น
          </button>
          <button
            class="bg-[#184BCE] text-[#FFFFFF] py-[9px] px-[107px] rounded-[5px] w-full"
            v-else="editing"
            @click="clearEdit"
          >
            ล้าง
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
