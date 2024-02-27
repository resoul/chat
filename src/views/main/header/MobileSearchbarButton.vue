<script>
import { useMobileSearchStore } from "@/views/main/header/searchbar.js";

export default {
  name: "MobileSearchbarButton",
  setup() {
    const bar = useMobileSearchStore();

    return { bar }
  }
}
</script>

<template>
  <button @click="bar.open()" class="mobile-searchbar-show btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5.5 text-slate-500 dark:text-navy-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </button>
</template>