<script>
import { useSidebarStore } from "@/components/sidebar.js";

export default {
  name: "RightSidebarButton",
  setup() {
    const sidebar = useSidebarStore();

    return { sidebar }
  }
}
</script>

<template>
  <button @click="sidebar.open()" class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5.5 text-slate-500 dark:text-navy-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  </button>
</template>