<script setup>
import { ref } from "vue";
import userD from "./user/user.vue";

const status = ref(0);

const showModal = () => {
  status.value = 1;
};

const closeModal = () => {
  status.value = 0;
  emits("close");
};
console.log(closeModal);

const emits = defineEmits(["close"]);
</script>

<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-[#184BCE] border-b shadow-2xl"
  >
    <div class="flex items-center">
      <button
        class="text-gray-500 focus:outline-none lg:hidden"
        @click="isOpen = true"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span
          class="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-white font-bold"
        >
          ชื่อผู้ใช้งาน :
        </span>

        <div class="w-32 pl-[90px] pr-[5px] text-indigo-600 rounded-md sm:w-64">
          <a-select defaultValue="user" style="width: 100%">
            <a-select-option value="">Sarawut</a-select-option>
            <a-select-option value="Sarayut">Sarayut</a-select-option>
          </a-select>
        </div>
      </div>
      <div class="ml-[10px]">
        <button @click="showModal">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7
          48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0
          29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none"></button>

      <div class="relative">
        <router-link to="/">
          <button
            class="relative z-10 block w-8 h-8 overflow-hidden rounded-[5px] bg-white shadow focus:outline-none"
          >
            <svg
              class="w-full h-full p-[5px]"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                fill="#184BCE"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </header>

  <userD v-if="status === 1" @close="closeModal" />
</template>
