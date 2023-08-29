<template>
  <!-- <div class="font-bold text-[20px]">เพิ่มหมวดหมู่</div> -->

  <div class="pt-[10px]">
    <div class="grid grid-cols-12 gap-2.5">
      <div class="col-span-6 p-[20px] gap-5 bg-white rounded-lg">
        <div class="font-bold text-[40px] col-span-12">เพิ่มหมวดหมู่</div>

        <div class="col-span-12 text-[20px] pt-[30px] pb-[10px]">ประเภท</div>

        <div class="col-span-12 grid grid-cols-12 gap-2.5 pb-[20px]">
          <div class="col-span-10">
            <select
              v-model="categoryType"
              class="w-full bg-white border h-full py-[15px] px-[10px] text-gray-400 rounded text-[16px]"
            >
              <option selected disabled hidden value="">เลือกประเภท</option>
              <option
                class="text-black text-[16px]"
                v-for="typed in types"
                :key="typed.id"
                :value="typed.id"
              >
                {{ typed.name }}
              </option>
            </select>
          </div>

          <div class="flex items-center justify-center col-span-2">
            <button
              @click="showModal2"
              class="bg-[#184BCE] rounded h-full w-full text-white text-[15px]"
            >
              เพิ่มประเภท
            </button>
          </div>
        </div>

        <div class="col-span-12 text-[20px] pt-[30px] pb-[10px]">
          ชื่อหมวดหมู่
        </div>
        <div class="col-span-12 pb-[10px]">
          <input
            v-model="categoryName"
            type="text"
            placeholder="กรอกชื่อหมวดหมู่"
            class="w-full bg-white border py-[15px] rounded px-[10px] text-gray-500 text-[16px]"
          />
        </div>

        <div class="col-span-12 pt-[20px]">
          <button
            @click="submitForm"
            class="bg-[#184BCE] rounded py-[20px] px-[18px] text-white w-full"
          >
            บันทึก
          </button>
        </div>
      </div>

      <div class="col-span-6 bg-white rounded-lg overflow-auto h-[430px]">
        <div v-for="typed in types" :key="typed.id" class="p-[10px]">
          <div class="grid grid-cols-12 border p-[10px]">
            <img
              :src="`https://padmeexii.pythonanywhere.com${typed.image}`"
              class="w-[100px] col-span-2 rounded"
              alt=""
            />
            <div class="col-span-9 flex items-center text-[20px]">
              {{ typed.name }}
            </div>
          </div>

          <div class="p-[10px] border grid grid-cols-3 text-gray-600">
            <div
              v-for="typer in typed.categories"
              :key="typer.id"
              class="border p-[10px]"
            >
              {{ typer.name }}
            </div>
          </div>
        </div>
      </div>

      

      <!-- <div class="col-span-3 bg-white rounded-lg">
        <div v-for="typed in types" :key="typed.id" class="p-[10px] border">
          <div v-for="typer in typed.categories" :key="typer.id">
            {{ typer.name }}
          </div>
        </div>
      </div> -->
    </div>
  </div>

  <userD v-if="status === 1" @close="closeModal" />
  <typeD v-if="status === 2" @close="closeModal" />
</template>

<script setup>
import userD from "../../components/back/modal/user.vue";
import typeD from "../../components/back/modal/type.vue";

import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchType");
});

const types = computed(() => store.getters.getType);
console.log("Type", types.value);

// post category ===========================================
const categoryName = ref("");
const categoryType = ref("");

const submitForm = async () => {
  try {
    const response = await store.dispatch("postCategory", {
      name: categoryName.value,
      type: categoryType.value,
    });
    console.log("success!", response);

    categoryName.value = "";
    categoryType.value = "";
  } catch (error) {
    console.error("error!", error);
  }
};
// post category ===========================================

// modal ==============================================
const status = ref(0);

const showModal = () => {
  status.value = 1;
};

const showModal2 = () => {
  status.value = 2;
};

const closeModal = () => {
  status.value = 0;
  emits("close");
};

const emits = defineEmits(["close"]);
// modal ==============================================
</script>

<style lang="scss" scoped></style>
