<script>
import { useSidebarStore } from "@/components/sidebar.js";

export default {
  name: "SidebarToggleButton",
  setup() {
    const sidebar = useSidebarStore();

    return { sidebar }
  }
}
</script>

<template>
  <button @click="sidebar.toggle()" class="sidebar-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>