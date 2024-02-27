<script>
import { useChatStore } from "@/components/chat.js";
import RightSidebar from "@/components/right-sidebar/RightSidebar.vue";

export default {
  name: "Chat",
  components: {
    'ui-right-sidebar': RightSidebar,
  },
  setup() {
    const chat = useChatStore();

    return { chat }
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
  <ui-right-sidebar />
  <main class="main-content h-100vh chat-app mt-0 flex w-full flex-col" :class="{ 'lg:mr-80' : chat.hasProfileWindowOpen }">
    <router-view />
  </main>
</template>
