<template>
  <div class="grid grid-cols-12">
    <div class="text-[20px] grid grid-cols-12 col-span-6 content-end">
      ทั้งหมด :
      <div class="text-[#262626] text-[20px]">20</div>
    </div>
    <div class="col-start-12 text-end">
      <button
        @click="openModaladd"
        class="bg-[#184BCE] rounded-[10px] px-[10px] py-[16px] col-span-9"
      >
        <div class="grid grid-cols-5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9H17M9 1V17"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div class="text-[18px] text-[white] col-span-4 text-center">
            เพิ่มรายการ
          </div>
        </div>
      </button>
    </div>
  </div>
  <div class="border-[#CFCFCF] border-b pt-[15px] px-[50%]"></div>
  <div class="grid grid-cols-12 text-[18px] py-[25px] content-center">
    <div class="grid grid-cols-5 content-center">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7071 7.29289C14.0976 7.68342 14.0976 8.3166 13.7071 8.7071L10.0243 12.3899C9.4586 12.9556 8.5414 12.9556 7.97568 12.3899L6.29289 10.7071C5.90237 10.3166 5.90237 9.6834 6.29289 9.2929C6.68342 8.9024 7.31658 8.9024 7.70711 9.2929L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289Z"
            fill="#1BBE0D"
          />
        </svg>
      </div>
      <div class="col-span-4">กำลังใช้งาน : 15</div>
    </div>
    <div class="grid grid-cols-5 content-center">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.9591 11.0523C8.9591 11.67 9.4252 12.1708 10.0002 12.1708C10.5752 12.1708 11.0413 11.67 11.0413 11.0523V7.69693C11.0413 7.07922 10.5752 6.57847 10.0002 6.57847C9.4252 6.57847 8.9591 7.07922 8.9591 7.69693V11.0523ZM11.0413 14.3952C11.0413 13.7774 10.5752 13.2767 10.0002 13.2767C9.4252 13.2767 8.9591 13.7774 8.9591 14.3952V14.4077C8.9591 15.0254 9.4252 15.5262 10.0002 15.5262C10.5752 15.5262 11.0413 15.0254 11.0413 14.4077V14.3952ZM7.26977 1.72587C8.45979 -0.575289 11.5403 -0.575289 12.7303 1.72587L19.6025 15.0151C20.759 17.2516 19.2536 20 16.8722 20H3.12778C0.746319 20 -0.758998 17.2516 0.397532 15.0151L7.26977 1.72587Z"
            fill="#CC0000"
          />
        </svg>
      </div>
      <div class="col-span-4">ใช้งานไม่ได้ : 20</div>
    </div>
    <div class="grid grid-cols-5 content-center">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9999 3.889C19.9999 4.35202 20.0048 4.7458 19.9423 5.09485C19.7055 6.41715 18.7753 7.4508 17.5852 7.71383C17.2923 7.77858 16.9645 7.77825 16.5838 7.77792C12.1946 7.77406 7.80535 7.77406 3.41615 7.77792C3.03545 7.77825 2.70761 7.77858 2.41476 7.71383C1.2247 7.4508 0.294422 6.41715 0.0577041 5.09485C-0.00478534 4.7458 5.46487e-05 4.35202 5.46487e-05 3.88899C5.46487e-05 3.42597 -0.00478534 3.03219 0.0577041 2.68313C0.294422 1.36084 1.2247 0.327183 2.41476 0.0641611C2.70761 -0.000561021 3.03545 -0.000272298 3.41615 6.10352e-05C7.80535 0.00394992 12.1946 0.00394992 16.5838 6.10352e-05C16.9645 -0.000272298 17.2923 -0.000561021 17.5852 0.0641611C18.7753 0.327183 19.7055 1.36084 19.9423 2.68313C20.0048 3.03219 19.9999 3.42597 19.9999 3.889ZM1.00014 14.5176V8.2938C1.3723 8.53258 1.78277 8.70691 2.21946 8.80347C2.61115 8.89003 3.02627 8.88947 3.37079 8.88902L3.41673 8.88891C7.8054 8.88502 12.1941 8.88502 16.5828 8.88891L16.6287 8.88902C16.9732 8.88947 17.3884 8.89003 17.7801 8.80347C18.217 8.70691 18.6277 8.53247 19 8.29347V14.5176C19.0001 15.5026 19.0001 16.3512 18.9179 17.0309C18.8297 17.7592 18.631 18.4575 18.1213 19.0237C17.6117 19.59 16.9833 19.8108 16.3278 19.9088C15.7161 20.0001 14.9523 20.0001 14.0658 20H5.93426C5.04779 20.0001 4.28398 20.0001 3.67232 19.9088C3.01682 19.8108 2.38847 19.59 1.87881 19.0237C1.36915 18.4575 1.17041 17.7592 1.08229 17.0309C1.00005 16.3512 1.00009 15.5026 1.00014 14.5176ZM7.00009 10.0001C6.44781 10.0001 6.00009 10.4976 6.00009 11.1112C6.00009 11.7249 6.44781 12.2224 7.00009 12.2224H13C13.5523 12.2224 14 11.7249 14 11.1112C14 10.4976 13.5523 10.0001 13 10.0001H7.00009Z"
            fill="#C6B521"
          />
        </svg>
      </div>
      <div class="col-span-4">สต็อก : 1</div>
    </div>
    <div class="grid grid-cols-5 content-center">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.6 0.759494H19.4C19.7314 0.759494 20 1.09954 20 1.51899C20 1.93844 19.7314 2.27848 19.4 2.27848H4.6C4.26863 2.27848 4 1.93844 4 1.51899C4 1.09954 4.26863 0.759494 4.6 0.759494ZM4.6 6.32911H19.4C19.7314 6.32911 20 6.66916 20 7.08861C20 7.50806 19.7314 7.8481 19.4 7.8481H4.6C4.26863 7.8481 4 7.50806 4 7.08861C4 6.66916 4.26863 6.32911 4.6 6.32911ZM4.6 12.1519H19.4C19.7314 12.1519 20 12.4919 20 12.9114C20 13.3308 19.7314 13.6709 19.4 13.6709H4.6C4.26863 13.6709 4 13.3308 4 12.9114C4 12.4919 4.26863 12.1519 4.6 12.1519ZM4.6 17.7215H19.4C19.7314 17.7215 20 18.0616 20 18.481C20 18.9005 19.7314 19.2405 19.4 19.2405H4.6C4.26863 19.2405 4 18.9005 4 18.481C4 18.0616 4.26863 17.7215 4.6 17.7215ZM1.2 3.03798C0.537266 3.03798 0 2.35789 0 1.51899C0 0.680083 0.537266 0 1.2 0C1.86273 0 2.4 0.680083 2.4 1.51899C2.4 2.35789 1.86273 3.03798 1.2 3.03798ZM1.2 8.6076C0.537266 8.6076 0 7.92751 0 7.08861C0 6.2497 0.537266 5.56962 1.2 5.56962C1.86273 5.56962 2.4 6.2497 2.4 7.08861C2.4 7.92751 1.86273 8.6076 1.2 8.6076ZM1.2 14.4304C0.537266 14.4304 0 13.7503 0 12.9114C0 12.0725 0.537266 11.3924 1.2 11.3924C1.86273 11.3924 2.4 12.0725 2.4 12.9114C2.4 13.7503 1.86273 14.4304 1.2 14.4304ZM1.2 20C0.537266 20 0 19.3199 0 18.481C0 17.6421 0.537266 16.962 1.2 16.962C1.86273 16.962 2.4 17.6421 2.4 18.481C2.4 19.3199 1.86273 20 1.2 20Z"
            fill="#CB3CFD"
          />
        </svg>
      </div>
      <div class="col-span-4">อื่นๆ : 20</div>
    </div>
    <div class="col-start-9 col-span-2">
      <div class="grid grid-cols-11">
        <div class="col-span-3 flex items-center">แบรนด์ :</div>
        <select class="col-span-8">
          <option hidden>เลือกสแบรนด์</option>
          <option value="">LG</option>
          <option value="">LG</option>
          <option value="">LG</option>
        </select>
      </div>
    </div>
    <div class="col-span-2">
      <div class="grid grid-cols-11">
        <div class="col-span-3 flex items-center">สถานที่ :</div>
        <select class="col-span-8">
          <option hidden>เลือกสถานที่</option>
          <option value="">LG</option>
          <option value="">LG</option>
          <option value="">LG</option>
        </select>
      </div>
    </div>
  </div>
  <div class="border-[#CFCFCF] border-b"></div>
  <div class="text-[30px] pt-[10px]">{{ selectedViweitem.category.name }}</div>
  <!-- ---------------------------- -->

  <div class="">
    <div class="grid grid-cols-11 justify-items-center">
      <div class="col-start-6 pb-[10px]">
        <div class="">
          <svg
            width="40"
            height="40"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 15C0 6.71572 6.71572 0 15 0C23.2842 0 30 6.71572 30 15C30 23.2842 23.2842 30 15 30C6.71572 30 0 23.2842 0 15ZM20.5606 10.9393C21.1464 11.5251 21.1464 12.4749 20.5606 13.0606L15.0364 18.5849C14.1879 19.4334 12.8121 19.4334 11.9635 18.5849L9.43933 16.0606C8.85355 15.4749 8.85355 14.5251 9.43933 13.9394C10.0251 13.3536 10.9749 13.3536 11.5607 13.9394L13.5 15.8787L18.4394 10.9393C19.0251 10.3536 19.9749 10.3536 20.5606 10.9393Z"
              fill="#1BBE0D"
            />
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-11 text-[30px]">
        <div class="col-start-5 flex items-center pl-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
        <div class="col-start-6 grid grid-cols-12">
          <div class="col-span-11">กำลังใช้งาน :</div>
          <div class="text-[#1BBE0D]">15</div>
        </div>
        <div class="flex items-center pr-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-10 gap-[70px] pt-[10px] justify-items-center">
      <div
        class="col-span-2 drop-shadow-xl pb-5"
        v-for="prodselectedViweitemsuct in selectedViweitem.type"
        :key="prodselectedViweitemsuct.id"
      >
        <div class="grid grid-cols-4">
          <div class="col-span-4">
            <div class="bg-[#FFFFFF] w-full h-full px-[15px] py-[15px]">
              <div class="bg-[#FFFFFF]">
                <a-carousel arrows dots-class="slick-dots slick-thumb">
                  <template #customPaging="props">
                    <a>
                      <img :src="getImgUrl(props.i)" />
                    </a>
                  </template>
                  <div v-for="item in 4" :key="item">
                    <img :src="getImgUrl(item - 1)" />
                  </div>
                </a-carousel>
              </div>
              <div class="overflow-auto h-[170px] custom-scrollbar">
                <div class="py-[7px] pl-[20px] text-center text-[20px]">
                  {{ prodselectedViweitemsuct.name }}
                </div>
                <div
      class="py-[7px] pl-[20px] text-center text-[20px]"
      v-for="(img, index) in selectedViweitem.type"
      :key="index"
    >
      <img :src="img.image" alt="Image" />
    </div>

                <div class="py-[7px] pl-[20px]">
                  ผู้ใช้งาน: {{ prodselectedViweitemsuct.user }}
                </div>
                <div class="py-[7px] pl-[20px]">
                  สถานที่: {{ prodselectedViweitemsuct.location }}
                </div>
                <div class="py-[7px] pl-[20px]">
                  แบรนด์: {{ prodselectedViweitemsuct.brand }}
                </div>
                <div class="py-[7px] pl-[20px]">
                  รายละเอียด: {{ prodselectedViweitemsuct.comment }}
                </div>
                <div class="py-[7px] pl-[20px]">
                  ร้านค้า: {{ prodselectedViweitemsuct.shop }}
                  <a
                    target="_blank"
                    class="text-blue-500"
                    :href="prodselectedViweitemsuct.shopurl"
                    >คลิก</a
                  >
                </div>
                <div class="py-[7px] pl-[20px]">
                  วันที่ซื้อ: {{ prodselectedViweitemsuct.datebuy }}
                </div>
                <div class="py-[7px] pl-[20px]">
                  ราคา:{{ prodselectedViweitemsuct.price }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ----------------------------ไม่ใช้ -->
  <div>
    <div class="grid grid-cols-11 justify-items-center">
      <div class="col-start-6 pb-[10px]">
        <div class="">
          <svg
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.9591 11.0523C8.9591 11.67 9.4252 12.1708 10.0002 12.1708C10.5752 12.1708 11.0413 11.67 11.0413 11.0523V7.69693C11.0413 7.07922 10.5752 6.57847 10.0002 6.57847C9.4252 6.57847 8.9591 7.07922 8.9591 7.69693V11.0523ZM11.0413 14.3952C11.0413 13.7774 10.5752 13.2767 10.0002 13.2767C9.4252 13.2767 8.9591 13.7774 8.9591 14.3952V14.4077C8.9591 15.0254 9.4252 15.5262 10.0002 15.5262C10.5752 15.5262 11.0413 15.0254 11.0413 14.4077V14.3952ZM7.26977 1.72587C8.45979 -0.575289 11.5403 -0.575289 12.7303 1.72587L19.6025 15.0151C20.759 17.2516 19.2536 20 16.8722 20H3.12778C0.746319 20 -0.758998 17.2516 0.397532 15.0151L7.26977 1.72587Z"
              fill="#CC0000"
            />
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-11 text-[30px]">
        <div class="col-start-5 flex items-center pl-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
        <div class="col-start-6 grid grid-cols-12">
          <div class="col-span-11">กำลังใช้งาน :</div>
          <div class="text-[#CC0000]">20</div>
        </div>
        <div class="flex items-center pr-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <!-- ---------------------------- -->

  <div>
    <div class="grid grid-cols-11 justify-items-center">
      <div class="col-start-6 pb-[10px]">
        <div class="">
          <svg
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.9999 3.889C19.9999 4.35202 20.0048 4.7458 19.9423 5.09485C19.7055 6.41715 18.7753 7.4508 17.5852 7.71383C17.2923 7.77858 16.9645 7.77825 16.5838 7.77792C12.1946 7.77406 7.80535 7.77406 3.41615 7.77792C3.03545 7.77825 2.70761 7.77858 2.41476 7.71383C1.2247 7.4508 0.294422 6.41715 0.0577041 5.09485C-0.00478534 4.7458 5.46487e-05 4.35202 5.46487e-05 3.88899C5.46487e-05 3.42597 -0.00478534 3.03219 0.0577041 2.68313C0.294422 1.36084 1.2247 0.327183 2.41476 0.0641611C2.70761 -0.000561021 3.03545 -0.000272298 3.41615 6.10352e-05C7.80535 0.00394992 12.1946 0.00394992 16.5838 6.10352e-05C16.9645 -0.000272298 17.2923 -0.000561021 17.5852 0.0641611C18.7753 0.327183 19.7055 1.36084 19.9423 2.68313C20.0048 3.03219 19.9999 3.42597 19.9999 3.889ZM1.00014 14.5176V8.2938C1.3723 8.53258 1.78277 8.70691 2.21946 8.80347C2.61115 8.89003 3.02627 8.88947 3.37079 8.88902L3.41673 8.88891C7.8054 8.88502 12.1941 8.88502 16.5828 8.88891L16.6287 8.88902C16.9732 8.88947 17.3884 8.89003 17.7801 8.80347C18.217 8.70691 18.6277 8.53247 19 8.29347V14.5176C19.0001 15.5026 19.0001 16.3512 18.9179 17.0309C18.8297 17.7592 18.631 18.4575 18.1213 19.0237C17.6117 19.59 16.9833 19.8108 16.3278 19.9088C15.7161 20.0001 14.9523 20.0001 14.0658 20H5.93426C5.04779 20.0001 4.28398 20.0001 3.67232 19.9088C3.01682 19.8108 2.38847 19.59 1.87881 19.0237C1.36915 18.4575 1.17041 17.7592 1.08229 17.0309C1.00005 16.3512 1.00009 15.5026 1.00014 14.5176ZM7.00009 10.0001C6.44781 10.0001 6.00009 10.4976 6.00009 11.1112C6.00009 11.7249 6.44781 12.2224 7.00009 12.2224H13C13.5523 12.2224 14 11.7249 14 11.1112C14 10.4976 13.5523 10.0001 13 10.0001H7.00009Z"
              fill="#C6B521"
            />
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-11 text-[30px]">
        <div class="col-start-5 flex items-center pl-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
        <div class="col-start-6 grid grid-cols-12">
          <div class="col-span-11">กำลังใช้งาน :</div>
          <div class="text-[#C6B521]">20</div>
        </div>
        <div class="flex items-center pr-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <!-- ---------------------------- -->

  <div>
    <div class="grid grid-cols-11 justify-items-center">
      <div class="col-start-6 pb-[10px]">
        <div class="">
          <svg
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6 0.759494H19.4C19.7314 0.759494 20 1.09954 20 1.51899C20 1.93844 19.7314 2.27848 19.4 2.27848H4.6C4.26863 2.27848 4 1.93844 4 1.51899C4 1.09954 4.26863 0.759494 4.6 0.759494ZM4.6 6.32911H19.4C19.7314 6.32911 20 6.66916 20 7.08861C20 7.50806 19.7314 7.8481 19.4 7.8481H4.6C4.26863 7.8481 4 7.50806 4 7.08861C4 6.66916 4.26863 6.32911 4.6 6.32911ZM4.6 12.1519H19.4C19.7314 12.1519 20 12.4919 20 12.9114C20 13.3308 19.7314 13.6709 19.4 13.6709H4.6C4.26863 13.6709 4 13.3308 4 12.9114C4 12.4919 4.26863 12.1519 4.6 12.1519ZM4.6 17.7215H19.4C19.7314 17.7215 20 18.0616 20 18.481C20 18.9005 19.7314 19.2405 19.4 19.2405H4.6C4.26863 19.2405 4 18.9005 4 18.481C4 18.0616 4.26863 17.7215 4.6 17.7215ZM1.2 3.03798C0.537266 3.03798 0 2.35789 0 1.51899C0 0.680083 0.537266 0 1.2 0C1.86273 0 2.4 0.680083 2.4 1.51899C2.4 2.35789 1.86273 3.03798 1.2 3.03798ZM1.2 8.6076C0.537266 8.6076 0 7.92751 0 7.08861C0 6.2497 0.537266 5.56962 1.2 5.56962C1.86273 5.56962 2.4 6.2497 2.4 7.08861C2.4 7.92751 1.86273 8.6076 1.2 8.6076ZM1.2 14.4304C0.537266 14.4304 0 13.7503 0 12.9114C0 12.0725 0.537266 11.3924 1.2 11.3924C1.86273 11.3924 2.4 12.0725 2.4 12.9114C2.4 13.7503 1.86273 14.4304 1.2 14.4304ZM1.2 20C0.537266 20 0 19.3199 0 18.481C0 17.6421 0.537266 16.962 1.2 16.962C1.86273 16.962 2.4 17.6421 2.4 18.481C2.4 19.3199 1.86273 20 1.2 20Z"
              fill="#CB3CFD"
            />
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-11 text-[30px]">
        <div class="col-start-5 flex items-center pl-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
        <div class="col-start-6 grid grid-cols-12">
          <div class="col-span-11">กำลังใช้งาน :</div>
          <div class="text-[#CB3CFD]">20</div>
        </div>
        <div class="flex items-center pr-[50px]">
          <svg
            width="500"
            height="5"
            viewBox="0 0 550 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H525C531.63 0 537.989 2.63393 542.678 7.32234C547.366 12.0107 550 18.3696 550 25C550 31.6304 547.366 37.9893 542.678 42.6777C537.989 47.3661 531.63 50 525 50H25C18.3696 50 12.0107 47.3661 7.32234 42.6777C2.63393 37.9893 0 31.6304 0 25C0 18.3696 2.63393 12.0107 7.32234 7.32234C12.0107 2.63393 18.3696 0 25 0Z"
              fill="#CFCFCF"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <ModaladdEquipment v-if="status === 1" @close="ModaladdEquipmentClose" />
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const status = ref(0);
const store = useStore();

import ModaladdEquipment from "../topmodalhome/Modalhome.vue";

const selectedViweitem = computed(() => store.getters.getSelecteviweitem);
console.log(selectedViweitem);
const emits = defineEmits(["close"]);

const openModaladd = () => {
  status.value = 1;
};
const ModaladdEquipmentClose = () => {
  status.value = 0;
  emits("close");
  emits("ModaladdEquipmentClose");
};

const baseUrl =
  "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";

const getImgUrl = (i) => {
  return `${baseUrl}abstract0${i + 1}.jpg`;
};
</script>
<style scoped>
:deep(.slick-dots) {
  position: relative;
  height: auto;
}

:deep(.slick-thumb) {
  bottom: 0px;
}
:deep(.slick-thumb li) {
  width: 40px;
  height: 30px;
}
:deep(.slick-thumb li img) {
  width: hide;
  height: hide;
  display: block;
}
</style>
