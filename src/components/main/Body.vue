<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="col-start-4 col-span-6">
        <div class="bg-white border border-[#C6C1C1] p-[5px]">
          <div class="grid grid-cols-12 relative">
            <input
              type="ค้นหา"
              class="text-[30px] py-[15px] pl-[27px] w-full col-span-11"
              placeholder="ค้นหา"
            />
            <button
              class="bg-[#3C50FA] rounded flex items-center justify-center"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3136 8.68629 18 12 18C15.3136 18 18 15.3136 18 12C18 8.68629 15.3136 6 12 6ZM3 12C3 7.02943 7.02943 3 12 3C16.9705 3 21 7.02943 21 12C21 13.9437 20.3838 15.7435 19.3361 17.2147L26.5606 24.4393C27.1464 25.0251 27.1464 25.9749 26.5606 26.5606C25.9749 27.1464 25.0251 27.1464 24.4393 26.5606L17.2147 19.3361C15.7435 20.3838 13.9437 21 12 21C7.02943 21 3 16.9705 3 12Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 col-start-4 text-[16px] pt-[5px]">
      <div class="col-start-4 col-span-6 grid grid-cols-12 gap-2.5">
        <div class="text-center" v-for="items in testapi" :key="items.id">
          <router-link to="/equipment" @click="viewitem(items)">
            {{ items.type.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("apihomes");
});

const testapi = computed(() => store.getters.getapihome);

const viewitem = (viweitem) => {
  store.dispatch("selectedviweproduct", viweitem);
};
</script>
