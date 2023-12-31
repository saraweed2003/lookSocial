<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchCategory");
});

const assets = computed(() => store.getters.getCategory);
// console.log("category:", assets);

const isOpen = ref();

const state = reactive({
  activeButton: null,
  activeText: null,
});
const handleButtonClick = (buttonNumber) => {
  state.activeButton = buttonNumber;
  localStorage.setItem("activeButton", buttonNumber);
};
const isButtonActive = (buttonNumber) => {
  return state.activeButton === buttonNumber;
};

onMounted(() => {
  const storedButton = localStorage.getItem("activeButton");
  if (storedButton) {
    state.activeButton = parseInt(storedButton);
  }
});

const viewCategory = (category) => {
  store.dispatch("setSelectedCategory", category);
};

const menu1Visible = ref(false);
const menu2Visible = ref(false);

const showMenu1 = (flag) => {
  menu1Visible.value = flag;
};

const showMenu2 = (flag) => {
  menu2Visible.value = flag;
};
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false"
    />
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0"
    >
      <!------------------------------------------------------------------ Logo ------------------------------------------------------------------>
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            class="w-full h-auto"
            width="208"
            height="23"
            viewBox="0 0 208 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 22.6378V0.350556H5.89859V17.7735H14.3069V22.6363H0V22.6378ZM38.3195 11.4635C38.3195 13.1803 38.1155 14.7458 37.7075 16.1585C37.3098 17.5608 36.6816 18.7697 35.826 19.7869C34.9703 20.8026 33.8695 21.5862 32.5252 22.1345C31.1808 22.6738 29.5737 22.9419 27.7009 22.9419C25.8692 22.9419 24.2812 22.6723 22.9368 22.1345C21.6027 21.5862 20.502 20.8086 19.636 19.8019C18.7701 18.7862 18.1273 17.5712 17.709 16.1585C17.2907 14.7458 17.0823 13.1713 17.0823 11.4335C17.0823 9.11595 17.4551 7.104 18.2021 5.39766C18.958 3.68084 20.1233 2.35352 21.6966 1.4187C23.2715 0.471902 25.2822 0 27.7317 0C30.2209 0 32.2419 0.471902 33.7947 1.4172C35.3578 2.36251 36.5026 3.69432 37.2291 5.41115C37.9556 7.12947 38.3195 9.14591 38.3195 11.4635ZM23.2964 11.4635C23.2964 12.8043 23.4461 13.9578 23.7441 14.9241C24.042 15.8889 24.516 16.6319 25.1633 17.1503C25.8105 17.6686 26.6574 17.9278 27.7024 17.9278C28.787 17.9278 29.6485 17.6686 30.2855 17.1503C30.9327 16.6319 31.395 15.8904 31.6739 14.9241C31.963 13.9593 32.1069 12.8058 32.1069 11.4635C32.1069 9.45153 31.7781 7.86054 31.1206 6.69202C30.4631 5.5235 29.333 4.93924 27.7303 4.93924C26.6647 4.93924 25.8032 5.20291 25.1472 5.73174C24.4999 6.26057 24.0273 7.01262 23.7279 7.98788C23.4402 8.96315 23.2964 10.1212 23.2964 11.4635ZM62.3395 11.4635C62.3395 13.1803 62.1355 14.7458 61.7275 16.1585C61.3297 17.5608 60.7016 18.7697 59.8459 19.7869C58.9903 20.8026 57.8895 21.5862 56.5451 22.1345C55.2007 22.6738 53.5936 22.9419 51.7209 22.9419C49.8892 22.9419 48.3012 22.6723 46.9568 22.1345C45.6227 21.5862 44.5234 20.8086 43.656 19.8019C42.7901 18.7862 42.1472 17.5712 41.7289 16.1585C41.3107 14.7458 41.1022 13.1713 41.1022 11.4335C41.1022 9.11595 41.475 7.104 42.2221 5.39766C42.9809 3.67934 44.1447 2.35202 45.7181 1.4172C47.2914 0.471902 49.3022 0 51.7517 0C54.2409 0 56.2619 0.471902 57.8147 1.4172C59.3777 2.36251 60.5225 3.69432 61.249 5.41115C61.9755 7.12797 62.3395 9.14591 62.3395 11.4635ZM47.3164 11.4635C47.3164 12.8043 47.4661 13.9578 47.764 14.9241C48.0634 15.8889 48.536 16.6319 49.1833 17.1503C49.8305 17.6686 50.6774 17.9278 51.7223 17.9278C52.807 17.9278 53.6685 17.6686 54.3055 17.1503C54.9527 16.6319 55.415 15.8904 55.6939 14.9241C55.983 13.9593 56.1268 12.8058 56.1268 11.4635C56.1268 9.45153 55.7981 7.86054 55.1406 6.69202C54.483 5.5235 53.3529 4.93924 51.7502 4.93924C50.6847 4.93924 49.8232 5.20291 49.1671 5.73174C48.5199 6.26057 48.0473 7.01262 47.7479 7.98788C47.4602 8.96315 47.3164 10.1212 47.3164 11.4635ZM83.7764 22.6378H77.1161L72.7996 14.1166L71.0516 15.1833V22.6378H65.1222V0.350556H71.0516V10.0298C71.3011 9.54141 71.5844 9.05453 71.9029 8.56615C72.2316 8.07777 72.5501 7.61635 72.8583 7.17891L77.4434 0.349058H83.8953L77.0104 10.3339L83.7764 22.6378ZM108.505 15.8694C108.505 17.0784 108.206 18.2274 107.61 19.315C107.013 20.3922 106.082 21.2656 104.817 21.9367C103.562 22.6079 101.94 22.9434 99.9487 22.9434C98.9536 22.9434 98.0774 22.897 97.3201 22.8056C96.573 22.7142 95.8759 22.5674 95.2301 22.3637C94.5829 22.1509 93.9107 21.8753 93.2135 21.5412V16.175C94.3979 16.7847 95.5926 17.2521 96.7976 17.5772C98.0025 17.8918 99.093 18.0506 100.068 18.0506C100.655 18.0506 101.133 17.9787 101.501 17.8379C101.88 17.6956 102.159 17.5023 102.338 17.2581C102.517 17.0035 102.607 16.7143 102.607 16.3892C102.607 16.0027 102.473 15.6776 102.203 15.414C101.945 15.1398 101.526 14.8552 100.948 14.5601C100.371 14.2649 99.6097 13.8994 98.663 13.4619C97.8573 13.0754 97.1249 12.6799 96.4674 12.2725C95.8201 11.8665 95.2624 11.4036 94.7942 10.8852C94.3363 10.3564 93.9826 9.74216 93.7346 9.04105C93.4865 8.33993 93.3618 7.51148 93.3618 6.5557C93.3618 5.12351 93.7052 3.92353 94.3921 2.95875C95.0892 1.98349 96.0549 1.25092 97.2893 0.764032C98.5339 0.275651 99.9678 0.0329582 101.59 0.0329582C103.013 0.0329582 104.293 0.196251 105.428 0.52134C106.572 0.846428 107.598 1.21796 108.504 1.63443L106.697 6.28304C105.761 5.84559 104.84 5.50103 103.935 5.24635C103.029 4.98269 102.188 4.84936 101.41 4.84936C100.903 4.84936 100.484 4.91527 100.156 5.04711C99.8372 5.16845 99.5979 5.33624 99.4379 5.55047C99.2882 5.7632 99.2134 6.00739 99.2134 6.28154C99.2134 6.6276 99.3425 6.93771 99.6023 7.21186C99.8709 7.48602 100.314 7.78564 100.932 8.11073C101.559 8.42533 102.41 8.8373 103.486 9.34516C104.551 9.83354 105.457 10.3609 106.204 10.9302C106.951 11.4889 107.517 12.1646 107.906 12.9571C108.306 13.7391 108.505 14.7099 108.505 15.8694ZM132.515 11.4635C132.515 13.1803 132.311 14.7458 131.903 16.1585C131.505 17.5608 130.877 18.7697 130.021 19.7869C129.166 20.8026 128.065 21.5862 126.721 22.1345C125.376 22.6738 123.769 22.9419 121.896 22.9419C120.065 22.9419 118.477 22.6723 117.132 22.1345C115.798 21.5862 114.697 20.8086 113.831 19.8019C112.965 18.7862 112.323 17.5712 111.904 16.1585C111.486 14.7458 111.278 13.1713 111.278 11.4335C111.278 9.11595 111.65 7.104 112.398 5.39766C113.155 3.68084 114.319 2.35352 115.892 1.4187C117.467 0.471902 119.478 0 121.927 0C124.416 0 126.437 0.471902 127.99 1.4172C129.553 2.36251 130.698 3.69432 131.424 5.41115C132.152 7.12947 132.515 9.14591 132.515 11.4635ZM117.492 11.4635C117.492 12.8043 117.642 13.9578 117.939 14.9241C118.239 15.8889 118.711 16.6319 119.359 17.1503C120.006 17.6686 120.851 17.9278 121.898 17.9278C122.982 17.9278 123.844 17.6686 124.481 17.1503C125.128 16.6319 125.59 15.8904 125.869 14.9241C126.158 13.9593 126.302 12.8058 126.302 11.4635C126.302 9.45153 125.974 7.86054 125.316 6.69202C124.658 5.5235 123.528 4.93924 121.926 4.93924C120.86 4.93924 119.999 5.20291 119.343 5.73174C118.695 6.26057 118.223 7.01262 117.923 7.98788C117.636 8.96315 117.492 10.1212 117.492 11.4635ZM145.828 4.9692C145.131 4.9692 144.509 5.12201 143.961 5.42613C143.414 5.72125 142.946 6.15271 142.557 6.72198C142.168 7.29126 141.87 7.98788 141.661 8.81034C141.462 9.62381 141.364 10.5481 141.364 11.5848C141.364 12.987 141.538 14.1661 141.886 15.1218C142.234 16.0776 142.762 16.7982 143.47 17.2866C144.186 17.775 145.083 18.0177 146.158 18.0177C147.133 18.0177 148.069 17.8798 148.966 17.6057C149.872 17.3315 150.783 17.0005 151.699 16.6154V21.7075C150.733 22.1449 149.743 22.4595 148.727 22.6528C147.722 22.8461 146.65 22.9419 145.516 22.9419C143.147 22.9419 141.205 22.464 139.692 21.5083C138.189 20.5435 137.078 19.2057 136.362 17.4993C135.654 15.7915 135.302 13.811 135.302 11.5549C135.302 9.868 135.531 8.32346 135.989 6.92123C136.457 5.51901 137.138 4.30405 138.035 3.27785C138.93 2.24116 140.035 1.44417 141.35 0.88388C142.671 0.314601 144.184 0.029962 145.887 0.029962C146.942 0.029962 148.053 0.157301 149.219 0.41048C150.393 0.654671 151.537 1.05017 152.653 1.59997L150.846 6.34147C150.049 5.95496 149.243 5.62987 148.426 5.3662C147.61 5.10104 146.744 4.9692 145.828 4.9692ZM155.44 22.6378V0.350556H161.368V22.6363H155.44V22.6378ZM179.909 22.6378L178.835 18.4611H171.74L170.635 22.6378H164.154L171.278 0.259172H179.147L186.361 22.6378H179.909ZM177.609 13.5219L176.668 9.8635C176.57 9.46651 176.425 8.90322 176.236 8.17215C176.046 7.43059 175.857 6.66805 175.669 5.88604C175.488 5.09355 175.351 4.44337 175.251 3.93551C175.161 4.44337 175.031 5.07407 174.862 5.82612C174.703 6.56768 174.533 7.30475 174.354 8.03582C174.185 8.76689 174.035 9.37662 173.906 9.865L172.966 13.5234H177.609V13.5219ZM189.147 22.6378V0.350556H195.045V17.7735H203.454V22.6363H189.147V22.6378Z"
              fill="black"
            />
            <path
              d="M206.262 14.2109L201.18 13.915L201.286 0L207.938 0.386848L206.262 14.2109ZM208 18.6755C208 20.399 206.532 21.7963 204.722 21.7963C202.912 21.7963 201.444 20.399 201.444 18.6755C201.444 16.952 202.912 15.5547 204.722 15.5547C206.532 15.5547 208 16.952 208 18.6755Z"
              fill="#001AFF"
            />
          </svg>
        </div>
      </div>

      <!----------------------------------------------------------------- Navbar ----------------------------------------------------------------->
      <div class="">
        <nav
          class="mt-10 px-[10px] border-y overflow-y-auto h-[810px] custom-scrollbar"
        >
          <router-link
            class="flex items-center px-6 py-2 mt-[10px] hover:bg-[#184BCE] hover:text-white rounded-[6px]"
            :class="{ active: isButtonActive(1) }"
            @click="handleButtonClick(1)"
            to="/dashboard"
          >
            <span class="mx-4">หน้าหลัก</span>
          </router-link>

          <div>
            <div @click="showMenu1(!menu1Visible)">
              <button
                class="flex items-center px-6 py-2 mt-[10px] hover:bg-[#184BCE] hover:text-white rounded-[6px] w-full"
                :class="{ active: isButtonActive(2) }"
                @click="handleButtonClick(2)"
              >
                <span class="mx-4">ห้องเก็บของ</span>
                <svg
                  id="icon1"
                  class="transform rotate-180"
                  :class="{ 'rotate-0': menu1Visible }"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div v-for="item in assets" :key="item">
              <div
                v-if="menu1Visible"
                id="menu1"
                class="bg-gray-200 border-b rounded p-[5px]"
              >
                <div
                  class="flex items-center px-6 py-2 hover:bg-[#184BCE] hover:text-white rounded-[6px]"
                  @click="showMenu2(!menu2Visible)"
                >
                  <span class="ml-4">{{ item.type.name }}</span>
                  <svg
                    id="icon2"
                    class="transform rotate-180"
                    :class="{ 'rotate-0': menu2Visible }"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div v-if="menu2Visible" id="menu2">
                  <router-link
                    id="menu2"
                    @click="viewCategory(item)"
                    class="flex items-center px-6 py-2 hover:bg-[#184BCE] hover:text-white rounded-[6px]"
                    to="/view-category"
                  >
                    <span class="mx-6">- {{ item.name }}</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <router-link
            class="flex items-center px-6 py-2 mt-[10px] hover:bg-[#184BCE] hover:text-white rounded-[6px]"
            :class="{ active: isButtonActive(3) }"
            @click="handleButtonClick(3)"
            to="/meeting_room"
          >
            <span class="mx-4">ห้องประชุม</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-[10px] hover:bg-[#184BCE] hover:text-white rounded-[6px]"
            :class="{ active: isButtonActive(4) }"
            @click="handleButtonClick(4)"
            to="/office"
          >
            <span class="mx-4">ห้องทำงาน</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-[10px] hover:bg-[#184BCE] hover:text-white rounded-[6px]"
            :class="{ active: isButtonActive(5) }"
            @click="handleButtonClick(5)"
            to="/parking"
          >
            <span class="mx-4">ที่จอดรถ</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-[10px] hover:bg-[#184BCE] hover:text-white rounded-[6px]"
            :class="{ active: isButtonActive(6) }"
            @click="handleButtonClick(6)"
            to="/restaurant"
          >
            <span class="mx-4">ร้านอาหาร</span>
          </router-link>

          <router-link
            class="flex items-center px-6 py-2 mt-[10px] hover:bg-[#184BCE] hover:text-white rounded-[6px]"
            :class="{ active: isButtonActive(7) }"
            @click="handleButtonClick(7)"
            to="/dining_place"
          >
            <span class="mx-4">ที่รับประทานอาหาร</span>
          </router-link>
        </nav>
      </div>

      <!--------------------------------------------------------------- Category ----------------------------------------------------------------->
      <div class="p-[10px]">
        <router-link
          to="/category"
          class="bg-white flex items-center space-x-4 px-10 py-2 fill-black hover:fill-white hover:bg-[#184BCE] hover:text-white rounded-[5px]"
          :class="{ active: isButtonActive(10) }"
          @click="handleButtonClick(10)"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            height="0.875em"
            viewBox="0 0 448 512"
          >
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          <span class="text-[20px]">เพิ่มหมวดหมู่</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: #184bce;
  border-radius: 5px;
  color: #ffffff;
  fill: white;
}

.button-style {
  display: inline-block;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.button-style:hover {
  background-color: #184bce;
  color: white;
}
</style>
