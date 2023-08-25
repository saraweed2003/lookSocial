<template>
  <BodyLook1 />
  <div class="px-[90px] pt-[40px] font-Kanit">
    <div class="grid grid-cols-8 gap-[50px]">
      <!-- <div class="col-start-2 col-span-2">
        <div class="bg-[#FFFFFF] h-[400px] rounded-[8px]">
          <div class="bg-[#184BCE] relative shadow-2xl rounded-[8px] h-[160px]">
            <div class="grid grid-cols-4">
              <div class="py-[25px] px-[40px] col-span-2">
                <div v-for="(product, index) in products" :key="product.id">
                  <img
                    v-if="index === 5"
                    :src="product.image"
                    class="w-full h-[110px]"
                  />
                </div>
              </div>
              <div
                class="col-span-2 text-center text-[#FFFFFF] grid grid-rows-5"
              >
                <div class="row-span-4 flex items-center">
                  อุปกรณ์คอมพิวเตอร์
                </div>
                <div class="grid grid-cols-5">
                  <div class="group static col-start-4">
                    <button
                      class="col-start-4 fill-white hover:fill-black "
                      @click="showInput = !showInput"
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.3335 1.65849C18.5449 -0.552832 22.1302 -0.552832 24.3415 1.65849C26.5528 3.86982 26.5528 7.45508 24.3415 9.66641L12.8709 21.137C12.2156 21.7923 11.8297 22.1782 11.4006 22.513C10.8948 22.9074 10.3474 23.2458 9.76831 23.5217C9.27697 23.7559 8.75937 23.9284 7.88007 24.2215L3.85175 25.5643L2.8818 25.8876C2.09507 26.1498 1.2277 25.9451 0.641315 25.3587C0.0549261 24.7723 -0.149833 23.9049 0.112416 23.1182L1.77849 18.1199C2.07157 17.2406 2.24407 16.7231 2.47824 16.2317C2.75424 15.6526 3.09251 15.1053 3.48706 14.5994C3.82181 14.1702 4.20762 13.7845 4.86304 13.129L16.3335 1.65849ZM3.80991 23.6661L7.24616 22.5207C8.20285 22.2018 8.60933 22.0647 8.98791 21.8842C9.4481 21.665 9.88302 21.3962 10.285 21.0826C10.6157 20.8246 10.9201 20.5224 11.6332 19.8093L20.787 10.6556C19.8332 10.3192 18.6046 9.69573 17.4544 8.54554C16.3043 7.39533 15.6807 6.1667 15.3444 5.21299L6.19061 14.3667C5.47753 15.0799 5.17531 15.3842 4.91737 15.715C4.60385 16.117 4.33505 16.5518 4.11574 17.0121C3.93531 17.3906 3.79817 17.7972 3.47926 18.7538L2.33385 22.1901L3.80991 23.6661ZM16.8158 3.74162C16.8572 3.9532 16.927 4.24082 17.0436 4.57705C17.3063 5.33402 17.8023 6.32812 18.7371 7.26288C19.6718 8.19762 20.666 8.6937 21.4229 8.95632C21.7592 9.07297 22.0467 9.14287 22.2584 9.18423L23.0588 8.38374C24.5617 6.88081 24.5617 4.44408 23.0588 2.94115C21.5559 1.43822 19.1191 1.43822 17.6162 2.94115L16.8158 3.74162Z"
                        />
                      </svg>
                    </button>
                    <p
                      class="group-hover:visible invisible text-[16px] bg-[#184BCE] rounded text-white p-[5px] absolute"
                    >
                      แก้ไข
                    </p>
                  </div>

                  <div class="group static" v-if="showInput">
                    <button
                      @click="addNewProduct"
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
            <template v-if="!showInput">
              <router-link
                v-for="viweitem in products"
                :key="viweitem.id"
                @click="viewitem(viweitem)"
                class="py-[7px] pl-[20px] text-start hover:bg-[#184BCE] hover:text-[white]"
                to="/equipment"
              >
                {{ viweitem.title }} 1
              </router-link>
            </template>

            <template v-else>
              <input
                v-if="showInput"
                v-model="newProductTitle"
                placeholder="ชื่อที่ต้องการ"
                class="py-[7px] pl-[20px] h-full w-full text-start border-b border"
              />
              <input
                type="text"
                v-for="product in products"
                :key="product.id"
                class="py-[7px] pl-[20px] h-full w-full text-start border-b border"
                :value="product.title"
                @input="updateProductTitle(index, $event.target.value)"
              />
            </template>
          </div>
        </div>
      </div> -->

      <div class="col-span-2" v-for="items in items" :key="items.id">
        <div class="bg-[#FFFFFF] h-[400px] rounded-[8px]">
          <div class="bg-[#184BCE] relative shadow-2xl rounded-[8px] h-[160px]">
            <div class="grid grid-cols-4">
              <div class="py-[25px] px-[40px] col-span-2">
                <div>
                  <img :src="items.image" class="w-full h-[110px]" />
                </div>
              </div>
              <div
                class="col-span-2 text-center text-[#FFFFFF] grid grid-rows-5"
              >
                <div class="row-span-4 flex items-center">
                  {{ items.name }}
                </div>
                <div class="grid grid-cols-5">
                  <div class="group static col-start-4">
                    <button
                      class="col-start-4 fill-white hover:fill-black"
                      @click="showInput = !showInput"
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.3335 1.65849C18.5449 -0.552832 22.1302 -0.552832 24.3415 1.65849C26.5528 3.86982 26.5528 7.45508 24.3415 9.66641L12.8709 21.137C12.2156 21.7923 11.8297 22.1782 11.4006 22.513C10.8948 22.9074 10.3474 23.2458 9.76831 23.5217C9.27697 23.7559 8.75937 23.9284 7.88007 24.2215L3.85175 25.5643L2.8818 25.8876C2.09507 26.1498 1.2277 25.9451 0.641315 25.3587C0.0549261 24.7723 -0.149833 23.9049 0.112416 23.1182L1.77849 18.1199C2.07157 17.2406 2.24407 16.7231 2.47824 16.2317C2.75424 15.6526 3.09251 15.1053 3.48706 14.5994C3.82181 14.1702 4.20762 13.7845 4.86304 13.129L16.3335 1.65849ZM3.80991 23.6661L7.24616 22.5207C8.20285 22.2018 8.60933 22.0647 8.98791 21.8842C9.4481 21.665 9.88302 21.3962 10.285 21.0826C10.6157 20.8246 10.9201 20.5224 11.6332 19.8093L20.787 10.6556C19.8332 10.3192 18.6046 9.69573 17.4544 8.54554C16.3043 7.39533 15.6807 6.1667 15.3444 5.21299L6.19061 14.3667C5.47753 15.0799 5.17531 15.3842 4.91737 15.715C4.60385 16.117 4.33505 16.5518 4.11574 17.0121C3.93531 17.3906 3.79817 17.7972 3.47926 18.7538L2.33385 22.1901L3.80991 23.6661ZM16.8158 3.74162C16.8572 3.9532 16.927 4.24082 17.0436 4.57705C17.3063 5.33402 17.8023 6.32812 18.7371 7.26288C19.6718 8.19762 20.666 8.6937 21.4229 8.95632C21.7592 9.07297 22.0467 9.14287 22.2584 9.18423L23.0588 8.38374C24.5617 6.88081 24.5617 4.44408 23.0588 2.94115C21.5559 1.43822 19.1191 1.43822 17.6162 2.94115L16.8158 3.74162Z"
                        />
                      </svg>
                    </button>
                    <p
                      class="group-hover:visible invisible text-[16px] bg-[#184BCE] rounded text-white p-[5px] absolute"
                    >
                      แก้ไข
                    </p>
                  </div>

                  <div class="group static">
                    <button
                      @click="addNewProduct"
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
            <template v-if="!showInput">
              <router-link
                v-for="(nameItem, index) in items.detall.name"
                :key="index"
                @click="viewitem(nameItem)"
                class="py-[7px] pl-[20px] text-start hover:bg-[#184BCE] hover:text-[white]"
                to="/equipment"
              >
                {{ nameItem.name }}
              </router-link>
            </template>

            <!-- Show input if showInput is true -->
            <template v-else>
              <input
                v-if="showInput"
                v-model="newProductTitle"
                placeholder="ชื่อที่ต้องการ"
                class="py-[7px] pl-[20px] h-full w-full text-start border-b border"
              />
              <input
                type="text"
                v-for="product in products"
                :key="product.id"
                class="py-[7px] pl-[20px] h-full w-full text-start border-b border"
                :value="product.title"
                @input="updateProductTitle(index, $event.target.value)"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-for="testapis in testapi" :key="testapis.id">
      {{ testapis }}
    </div>
  </div>
</template>

<script setup>
import BodyLook1 from "@/components/main/Body.vue";

import axios from "axios";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

import { items } from "./itemsHome";

console.log(items);
const store = useStore();

const testapi = ref([]);
const products = ref([]);
const showInput = ref(false);

const updateProductTitle = (index, newTitle) => {
  products.value[index].title = newTitle;
};

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://padmeexii.pythonanywhere.com/api/asset/"
    );
    testapi.value = response;
    console.log("123", products.value);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

const newProductTitle = ref("");

const addNewProduct = () => {
  if (newProductTitle.value.trim() !== "") {
    const newProduct = {
      id: products.value.length + 1,
      title: newProductTitle.value.trim(),
    };
    products.value.push(newProduct);
    newProductTitle.value = "";
  }
};
const viewitem = (viweitem) => {
  store.dispatch("selectedviweproduct", viweitem);
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
