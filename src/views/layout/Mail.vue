<script>
import DarkModeButton from "@/components/theme/DarkModeButton.vue";
import MonochromeButton from "@/components/theme/MonochromeButton.vue";
import Notification from "@/views/main/header/Notification.vue";
import { useSidebarStore } from "@/components/sidebar.js";
import MobileSearchbar from "@/views/main/header/MobileSearchbar.vue";
import Searchbar from "@/views/main/header/Searchbar.vue";
import SidebarToggleButton from "@/components/theme/SidebarToggleButton.vue";
import RightSidebar from "@/components/right-sidebar/RightSidebar.vue";
import RightSidebarButton from "@/components/right-sidebar/RightSidebarButton.vue";
import MobileSearchbarButton from "@/views/main/header/MobileSearchbarButton.vue";
export default {
  name: "Mail",
  components: {
    'ui-dark-mode-btn': DarkModeButton,
    'ui-right-sidebar': RightSidebar,
    'ui-mobile-search-bar-btn': MobileSearchbarButton,
    'ui-right-sidebar-btn': RightSidebarButton,
    'ui-monochrome-btn': MonochromeButton,
    'ui-mobile-search-bar': MobileSearchbar,
    'ui-sidebar-toggle-btn': SidebarToggleButton,
    'ui-search-bar': Searchbar,
    'ui-notification': Notification
  },
  setup() {
    const sidebar = useSidebarStore();

    return { sidebar }
  },
  mounted() {
    document.body.classList.add('has-min-sidebar')
  },
  unmounted() {
    document.body.classList.remove('has-min-sidebar')
  }
}
</script>

<template>
  <nav class="header print:hidden">
    <div class="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
      <div class="flex w-full items-center justify-between">
        <div class="size-7">
          <ui-sidebar-toggle-btn />
        </div>
        <div class="-mr-1.5 flex items-center space-x-2">
          <ui-mobile-search-bar-btn />
          <ui-search-bar />
          <ui-dark-mode-btn />
          <ui-monochrome-btn />
          <ui-notification />
          <ui-right-sidebar-btn />
        </div>
      </div>
    </div>
  </nav>
  <ui-mobile-search-bar />
  <ui-right-sidebar />
  <main class="main-content mail-app w-full px-[var(--margin-x)] pb-6">
    <router-view />
  </main>

  <div class="fixed right-3 bottom-3 rounded-full bg-white dark:bg-navy-700">
    <button class="btn size-14 rounded-full bg-warning p-0 font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90 sm:hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    </button>
  </div>
</template>
