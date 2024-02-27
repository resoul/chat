<script>
import SidebarToggleButton from "@/components/theme/SidebarToggleButton.vue";
import { useThemeStore } from "@/components/theme/theme.js";
import { useRightSidebarStore } from "@/components/right-sidebar/right-sidebar.js";
import MobileSearchbar from "@/views/main/header/MobileSearchbar.vue";
import MobileSearchbarButton from "@/views/main/header/MobileSearchbarButton.vue";
import Searchbar from "@/views/main/header/Searchbar.vue";
import Notification from "@/views/main/header/Notification.vue";
import MonochromeButton from "@/components/theme/MonochromeButton.vue";
import DarkModeButton from "@/components/theme/DarkModeButton.vue";
import RightSidebar from "@/components/right-sidebar/RightSidebar.vue";
import RightSidebarButton from "@/components/right-sidebar/RightSidebarButton.vue";
export default {
  name: "Main",
  components: {
    'ui-dark-mode-btn': DarkModeButton,
    'ui-monochrome-btn': MonochromeButton,
    'ui-mobile-search-bar': MobileSearchbar,
    'ui-mobile-search-bar-btn': MobileSearchbarButton,
    'ui-sidebar-toggle-btn': SidebarToggleButton,
    'ui-right-sidebar': RightSidebar,
    'ui-right-sidebar-btn': RightSidebarButton,
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
  <main :class="theme.getMainClass">
    <router-view />
  </main>
</template>
