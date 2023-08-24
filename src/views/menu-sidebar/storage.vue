<template>
  <div class="font-bold text-[20px]">ห้องเก็บของ</div>

  <div class="mt-6">
    <h2 class="text-xl font-semibold leading-tight text-gray-700">
      อุปกรณ์คอมพิวเตอร์
    </h2>

    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                User
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Role
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Created at
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-20 h-20 rounded">
                    <img
                      class="w-full h-full"
                      src="https://storage.googleapis.com/file-computeandmore/images/4489a63d-7cfb-49e7-8b28-afd980f95e0b.jpg"
                      alt="profile pic"
                    />
                  </div>

                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap"></p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap"></p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap"></p>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span
                  :class="`relative inline-block px-3 py-1 font-semibold leading-tight`"
                >
                  <span aria-hidden />
                  <span class="relative"></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
