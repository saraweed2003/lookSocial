<template>
  <BodyLook1 />
  <div class="px-[90px] pt-[40px] font-Kanit">
    <div class="grid grid-cols-8 gap-[50px]">
      <div
        class="col-span-2 drop-shadow-md"
        v-for="items in testapi"
        :key="items.id"
      >
        <div class="bg-[#FFFFFF] h-[400px] rounded-[8px]">
          <div class="bg-[#184BCE] relative shadow-2xl rounded-[8px] h-[160px]">
            <div class="grid grid-cols-4">
              <div class="py-[25px] px-[40px] col-span-2">
                <div>
                  <img
                    :src="`https://padmeexii.pythonanywhere.com${items.image}`"
                    class="w-full h-[110px]"
                  />
                </div>
              </div>
              <div
                class="col-span-2 text-center text-[#FFFFFF] grid grid-rows-5"
              >
                <div class="row-span-4 flex items-center">
                  {{ items.name }}
                </div>
                <div class="grid grid-cols-5">
                  <div class="group static col-start-5">
                    <button
                      @click="addNewProduct(items)"
                      class="stroke-white hover:stroke-black"
                    >
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 13.5H25ZM13.5 2V25Z" fill="white" />
                        <path
                          d="M2 13.5H25M13.5 2V25"
                          stroke=""
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <p
                      class="group-hover:visible invisible text-[16px] bg-[#184BCE] rounded text-white p-[5px] absolute"
                    >
                      เพิ่ม
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="overflow-auto h-[240px] custom-scrollbar grid grid-cols-1 py-[5px]"
          >
            <router-link
              v-for="category in items.categories"
              :key="category.id"
              @click="viewitem(category)"
              class="py-[7px] pl-[20px] text-start hover:bg-[#184BCE] hover:text-[white]"
              to="/equipment"
            >
              {{ category.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modaladd v-if="status === 1" @close="closemodal" />
</template>

<script setup>
import BodyLook1 from "@/components/main/Body.vue";
import modaladd from "../../components/modaladdhome/Modaladd.vue";

import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const status = ref(0);
const emits = defineEmits(["close"]);

onMounted(async () => {
  await store.dispatch("apihomes");
});

const testapi = computed(() => store.getters.getapihome);
console.log("หน้าบ้าน", testapi);

const viewitem = (viweitem) => {
  store.dispatch("selectedviweproduct", viweitem);
};

const addNewProduct = (items) => {
  store.dispatch("selectedviweproduct", items);
  status.value = 1;
};
const closemodal = () => {
  emits("close");
  status.value = 0;
};
</script>
<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #184bce;
  border-radius: 0.375rem;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background-color: none;
}
</style>
