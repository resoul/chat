<script>
import { useSidebarStore } from "@/components/sidebar.js";
export default {
  name: "SidebarCloseButton",
  setup() {
    const sidebar = useSidebarStore();

    return { sidebar }
  }
}
</script>

<template>
  <button @click="sidebar.close()" class="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7" />
    </svg>
  </button>
</template>