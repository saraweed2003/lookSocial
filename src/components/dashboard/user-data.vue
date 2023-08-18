<template>
  <div class="py-[20px]">
    <div class="bg-white rounded-lg shadow-md">
      <div class="grid grid-cols-12 text-left border-b">
        <div class="col-span-1 p-[16px]">ID</div>
        <div class="col-span-3 p-[16px]">ชื่อผู้ใช้</div>
        <div class="col-span-3 p-[16px]">สถานะ</div>
        <div class="col-span-2 p-[16px]">วันที่สร้าง</div>
        <div class="col-span-2 p-[16px]">วันที่อัปเดต</div>
        <div class="col-span-1 p-[16px] justify-self-center">เครื่องมือ</div>
      </div>

      <div class="overflow-auto max-h-[552px]">
        <div
          class="grid grid-cols-12 border-b border-[#F0F0F0] text-left items-center"
        >
          <div class="col-span-1 p-[16px]">01</div>
          <div class="col-span-3 p-[16px]">Start</div>

          <div class="col-span-3 flex p-[16px] text-[16px] text-center">
            <div class="text-[#1BBE0D]">เพิ่มข้อมูล</div>
          </div>

          <div class="col-span-2 p-[16px]">18/08/2023 11:00</div>

          <div class="col-span-2 p-[16px]">18/08/2023 11:00</div>

          <router-link to="/" class="col-span-1 p-[16px] justify-self-center">
            <svg
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="hover:fill-[#184BCE]"
                d="M0 8C1.22199 5.5923 3.08292 3.57083 5.37712 2.15902C7.67133 0.747198 10.3095 0 13 0C15.6905 0 18.3287 0.747198 20.6229 2.15902C22.9171 3.57083 24.778 5.5923 26 8C24.778 10.4077 22.9171 12.4292 20.6229 13.841C18.3287 15.2528 15.6905 16 13 16C10.3095 16 7.67133 15.2528 5.37712 13.841C3.08292 12.4292 1.22199 10.4077 0 8ZM13 13.3298C14.4073 13.3298 15.7569 12.7682 16.752 11.7687C17.7471 10.7692 18.3061 9.41355 18.3061 8C18.3061 6.58645 17.7471 5.2308 16.752 4.23128C15.7569 3.23175 14.4073 2.67022 13 2.67022C11.5927 2.67022 10.2431 3.23175 9.24801 4.23128C8.25291 5.2308 7.69388 6.58645 7.69388 8C7.69388 9.41355 8.25291 10.7692 9.24801 11.7687C10.2431 12.7682 11.5927 13.3298 13 13.3298ZM13 10.6649C12.2964 10.6649 11.6215 10.3841 11.124 9.88436C10.6265 9.3846 10.3469 8.70677 10.3469 8C10.3469 7.29323 10.6265 6.6154 11.124 6.11564C11.6215 5.61588 12.2964 5.33511 13 5.33511C13.7036 5.33511 14.3785 5.61588 14.876 6.11564C15.3735 6.6154 15.6531 7.29323 15.6531 8C15.6531 8.70677 15.3735 9.3846 14.876 9.88436C14.3785 10.3841 13.7036 10.6649 13 10.6649Z"
                fill="#81A4FF"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
