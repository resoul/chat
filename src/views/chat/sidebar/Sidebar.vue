<script>
import SidebarCloseButton from "@/components/theme/SidebarCloseButton.vue";
import Directives from "@/components/theme/Directives.vue";
import ChatSearch from "@/views/chat/messages/ChatSearch.vue";
import ChatList from "@/views/chat/messages/ChatList.vue";
import { mapStores } from "pinia";
import { useChatStore } from "@/components/chat.js";
import MoreSettingsButton from "@/views/chat/messages/MoreSettingsButton.vue";

export default {
  name: "Sidebar",
  extends: Directives,
  components: {
    'ui-settings-more-btn': MoreSettingsButton,
    'ui-sidebar-close-btn': SidebarCloseButton,
    'ui-chat-list': ChatList,
    'ui-chat-search': ChatSearch
  },
  setup() {
    const chat = useChatStore();

    return { chat }
  },
  computed: {
    ...mapStores(useChatStore)
  },
  data() {
    return {
      title: 'Chat'
    }
  },
  mounted() {
    this.chatStore.fetchStories()
    this.chatStore.fetchChatList()
  }
}
</script>

<template>
  <div class="sidebar-panel">
    <div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
      <div class="flex h-18 w-full items-center justify-between pl-4 pr-1">
        <div class="flex items-center">
          <div class="avatar mr-3 hidden size-9 lg:flex">
            <div class="is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
          </div>
          <p class="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100" v-text="title"></p>
        </div>
        <ui-sidebar-close-btn class="xl:hidden" />
      </div>
      <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
        <div>
          <div class="flex items-center justify-between px-4">
            <span class="text-xs+ font-medium uppercase">History</span>
            <div class="-mr-1.5 flex">
              <button class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div v-swiper="{ slidesPerView: 'auto', spaceBetween: 10, slidesPerGroup: 3 }" class="swiper px-4">
            <div class="swiper-wrapper mt-1">
              <div v-for="story in chat.getStories" class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center">
                <div class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5">
                  <img :src="story.src" :alt="story.name" class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700" />
                </div>
                <p class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100" v-text="story.name"></p>
              </div>
            </div>
          </div>
        </div>
        <ui-chat-search class="mt-4 flex px-4" />
        <div class="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">
          <ui-chat-list :mini="false" :items="chat.getChatList" />
        </div>
        <div class="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600">
          <a
              href="#"
              data-tooltip="All Chats"
              class="btn size-9 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
              />
              <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="Users"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="Groups"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="Channels"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="More"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="sidebar-panel-min">
    <div class="flex h-full flex-col bg-white dark:bg-navy-750">
      <div class="flex h-18 shrink-0 items-center justify-center">
        <div class="avatar flex size-10">
          <div
              class="is-initial is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <svg
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
        <div class="is-scrollbar-hidden flex grow flex-col overflow-y-auto">
          <ul class="mt-2 flex flex-col items-center justify-center space-y-1">
            <li>
              <a
                  href="#"
                  class="btn size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  href="#"
                  class="btn size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div class="my-4 mx-4 h-px shrink-0 bg-slate-200 dark:bg-navy-500"></div>
          <div class="flex flex-col">
            <ui-chat-list :mini="true" :items="chat.getChatList" />
          </div>
        </div>
        <ui-settings-more-btn class="py-3 text-center" />
      </div>
    </div>
  </div>
</template>
