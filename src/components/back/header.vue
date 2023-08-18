<template>
  <div class="bg-white shadow-rg w-full px-[20px] py-[21.5px]">
    <div class="grid grid-cols-12 gap-[5px] items-center">
      <div
        class="col-start-9 col-span-4 grid grid-cols-9 text-[14px] text-black font-bold"
      >
        <div class="col-span-3 flex items-center justify-self-end text-[18px]">
          ชื่อผู้ใช้งาน :
        </div>
        <div class="col-span-6 flex items-center pl-[5px]">
          <a-select
            defaultValue="user"
            style="width: 100%"
            @change="handleChange"
          >
            <a-select-opt-group label="Manager">
              <!-- <span slot="label"> <a-icon type="user" />Manager</span> -->
              <a-select-option value="Sarawut">Sarawut</a-select-option>
            </a-select-opt-group>
            <a-select-opt-group label="Engineer">
              <a-select-option value="Sarayut">Sarayut</a-select-option>
            </a-select-opt-group>
          </a-select>
        </div>

        <div class="col-start-10 pl-[10px]">
          <router-link to="/" class="flex justify-self-end">
            <div class="p-[10px] bg-[#184BCE] rounded-[10px]">
              <svg
                class="w-full h-auto"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6667 28H4.44444C3.64671 28 3 27.3635 3 26.5784V15.7944C3 15.4174 3.15219 15.0557 3.42306 14.7892L14.9786 3.41638C15.5427 2.86121 16.4573 2.86121 17.0214 3.41638L28.5769 14.7892C28.8478 15.0557 29 15.4174 29 15.7944V26.5784C29 27.3635 28.3533 28 27.5556 28H20.3333M11.6667 28H20.3333M11.6667 28V19.4704C11.6667 18.6852 12.3134 18.0488 13.1111 18.0488H18.8889C19.6867 18.0488 20.3333 18.6852 20.3333 19.4704V28"
                  stroke="white"
                  stroke-width="5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
</script>
