<template>
  <div class="w-screen h-screen flex">
    <!-- Sidebar -->
    <div
      class="w-[200px] h-full bg-orange-500 transition duration-200"
      v-show="showSidebar"
    >
      <div class="h-[50px] bg-gray-200 flex justify-center items-center">
        <h3 class="font-bold text-xl">BO-ALFAGIFT</h3>
      </div>
      <div class="h-[calc(100hv-50px)] py-[20px]">
        <div
          class="px-[20px] flex flex-col justify-between space-y-[10px] text-white"
        >
          <div class="h-auto">
            <router-link
              to="/home"
              class="inline-flex relative justify-start items-center py-[10px] px-[10px] w-full text-sm rounded hover:bg-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mr-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span class="mt-1">Home</span>
            </router-link>
            <router-link
              to="/profile"
              class="inline-flex relative justify-start items-center py-[10px] px-[10px] w-full text-sm rounded hover:bg-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mr-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="mt-1">Profile</span>
            </router-link>
            <router-link
              to="/form"
              class="inline-flex relative justify-start items-center py-[10px] px-[10px] w-full text-sm rounded hover:bg-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mr-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <span class="mt-1">Form</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- End Sidebar -->

    <!-- Content -->
    <div class="w-full h-full">
      <div
        class="h-[50px] bg-gray-200 px-[20px] py-[10px] shadow-sm w-full z-10"
        @click="toogleSidebar"
      >
        <!-- Hamburger menu -->
        <div class="cursor-pointer w-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
      <div class="h-[93%] p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- End Content -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const showSidebar = ref(true);

const toogleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<style lang="scss" scoped></style>
