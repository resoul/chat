<script>
import Main from "@/views/layout/Main.vue";
import Chat from "@/views/layout/Chat.vue";
import Mail from "@/views/layout/Mail.vue";
import Kanban from "@/views/layout/Kanban.vue";
import FileManager from "@/views/layout/FileManager.vue";
import ChatSidebar from "@/views/chat/sidebar/Sidebar.vue";
import MainSidebar from "@/views/main/sidebar/Sidebar.vue";
import MailSidebar from "@/views/mail/sidebar/Sidebar.vue";
import KanbanSidebar from "@/views/kanban/sidebar/Sidebar.vue";
import FileManagerSidebar from "@/views/file/sidebar/Sidebar.vue";
import { useThemeStore } from "@/components/theme/theme.js";
import { useSidebarStore } from "@/components/sidebar.js";
import LinkIconTip from "@/components/tooltip/LinkIconTip.vue";
import IconSettings from "@/components/icons/IconSettings.vue";
import Profile from "@/views/layout/elemets/Profile.vue";
export default {
  name: "App",
  components: {
    Main,
    Chat,
    Mail,
    Kanban,
    FileManager,
    ChatSidebar,
    MailSidebar,
    MainSidebar,
    FileManagerSidebar,
    KanbanSidebar,
    'ui-profile': Profile,
    'ui-link-tooltip': LinkIconTip,
    'ui-icon-settings': IconSettings,
  },
  setup() {
    const sidebar = useSidebarStore();
    const theme = useThemeStore();
    theme.init();
    sidebar.init();
  },
  data() {
    return {
      layout: null,
      sidebarLayout: null
    }
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Chat App'
      this.layout = 'Main'
      this.sidebarLayout = 'MainSidebar'
      if (to.meta.layout !== undefined && to.meta.layout !== '') {
        this.layout = to.meta.layout
      }
      if (to.meta.sidebar !== undefined && to.meta.sidebar !== '') {
        this.sidebarLayout = to.meta.sidebar
      }
    }
  }
}
</script>

<template>
  <div class="sidebar print:hidden">
    <div class="main-sidebar">
      <div class="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
        <div class="flex pt-4">
          <router-link to="/">
            <img class="size-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" src="/images/app-logo.svg" alt="logo"/>
          </router-link>
        </div>
        <div class="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
          <ui-link-tooltip icon="ui-icon-dashboard" placement="right" tooltip="Dashboard" route="/dashboard" />
          <ui-link-tooltip icon="ui-icon-apps" placement="right" tooltip="Applications" route="/app" />
          <ui-link-tooltip icon="ui-icon-layouts" placement="right" tooltip="Pages & Layouts" route="/layouts" />
          <ui-link-tooltip icon="ui-icon-forms" placement="right" tooltip="Forms" route="/forms" />
          <ui-link-tooltip icon="ui-icon-components" placement="right" tooltip="Components" route="/components" />
          <ui-link-tooltip icon="ui-icon-elements" placement="right" tooltip="Elements" route="/elements" />
        </div>
        <div class="flex flex-col items-center space-y-3 py-3">
          <router-link to="/" class="flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <ui-icon-settings />
          </router-link>
          <ui-profile />
        </div>
      </div>
    </div>
    <component :is="sidebarLayout" />
  </div>
  <component :is="layout" />
</template>
