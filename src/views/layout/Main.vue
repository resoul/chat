<script>
import SidebarToggleButton from "@/components/theme/SidebarToggleButton.vue";
import { useThemeStore } from "@/components/theme/theme.js";
import { useRightSidebarStore } from "@/components/right-sidebar/right-sidebar.js";
import MobileSearchbar from "@/views/main/header/MobileSearchbar.vue";
import Searchbar from "@/views/main/header/Searchbar.vue";
import Notification from "@/views/main/header/Notification.vue";
import MonochromeButton from "@/components/theme/MonochromeButton.vue";
import DarkModeButton from "@/components/theme/DarkModeButton.vue";
import RightSidebar from "@/components/right-sidebar/RightSidebar.vue";
export default {
  name: "Main",
  components: {
    'ui-dark-mode-btn': DarkModeButton,
    'ui-monochrome-btn': MonochromeButton,
    'ui-mobile-search-bar': MobileSearchbar,
    'ui-sidebar-toggle-btn': SidebarToggleButton,
    'ui-right-sidebar': RightSidebar,
    'ui-search-bar': Searchbar,
    'ui-notification': Notification
  },
  setup() {
    const theme = useThemeStore();
    const sidebar = useRightSidebarStore();

    return { theme, sidebar }
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
          <button class="mobile-searchbar-show btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden">
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

          <ui-search-bar />
          <ui-dark-mode-btn />
          <ui-monochrome-btn />
          <ui-notification />
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
        </div>
      </div>
    </div>
  </nav>
  <ui-mobile-search-bar />
  <ui-right-sidebar />
  <main :class="theme.getMainClass">
    <router-view />
  </main>
</template>
