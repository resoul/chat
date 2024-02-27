<script>
import Tab from "@/components/tab.js";
import Drawer from "@/components/drawer.js";
import Notification from "@/views/main/header/Notification.vue";
import DarkModeButton from "@/components/theme/DarkModeButton.vue";
import MonochromeButton from "@/components/theme/MonochromeButton.vue";
import SidebarToggleButton from "@/components/theme/SidebarToggleButton.vue";
import RightSidebar from "@/components/right-sidebar/RightSidebar.vue";
import Searchbar from "@/views/main/header/Searchbar.vue";
import MobileSearchbar from "@/views/main/header/MobileSearchbar.vue";
import RightSidebarButton from "@/components/right-sidebar/RightSidebarButton.vue";
import MobileSearchbarButton from "@/views/main/header/MobileSearchbarButton.vue";
export default {
  name: "FileManager",
  components: {
    'ui-right-sidebar-btn': RightSidebarButton,
    'ui-dark-mode-btn': DarkModeButton,
    'ui-mobile-search-bar': MobileSearchbar,
    'ui-mobile-search-bar-btn': MobileSearchbarButton,
    'ui-monochrome-btn': MonochromeButton,
    'ui-sidebar-toggle-btn': SidebarToggleButton,
    'ui-search-bar': Searchbar,
    'ui-right-sidebar': RightSidebar,
    'ui-notification': Notification
  },
  mounted() {
    document.body.classList.add('has-min-sidebar')

    new Drawer("#filemanager-activity-drawer");
    new Tab("#drawer-tab");
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
  <main class="main-content filemanager-app w-full pb-6">
    <router-view />
  </main>

  <div id="filemanager-activity-drawer" class="drawer drawer-right">
    <div class="drawer-overlay fixed inset-0 z-[100] hidden bg-slate-900/60"></div>
    <div class="drawer-content fixed right-0 top-0 z-[101] hidden h-full w-full sm:w-80">
      <div class="flex h-full w-full flex-col bg-white dark:bg-navy-700">
        <div class="flex h-14 items-center justify-between bg-slate-150 p-4 dark:bg-navy-800">
          <h3 class="text-base font-medium text-slate-700 dark:text-navy-100">
            Activity
          </h3>
          <div class="-mr-1.5 flex">
            <button
                data-close-drawer
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
            class="is-scrollbar-hidden flex grow flex-col overflow-y-auto overscroll-contain p-4"
            id="drawer-tab"
        >
          <div class="tabs-list flex space-x-2">
            <button
                class="tab btn h-8 rounded-full text-xs+ font-medium"
                data-target="#drawer-tab-recent"
                data-default-class="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100"
                data-active-class="bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
            >
              Recent
            </button>
            <button
                class="tab btn h-8 rounded-full text-xs+ font-medium"
                data-target="#drawer-tab-activity"
                data-default-class="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100"
                data-active-class="bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
            >
              Activity
            </button>
          </div>
          <div class="mt-5">
            <div id="drawer-tab-recent" class="tab-content tab-shift-left">
              <ol class="timeline line-space">
                <li class="timeline-item">
                  <div
                      class="timeline-item-point rounded-full border-2 border-slate-300 dark:border-navy-400"
                  ></div>
                  <div class="timeline-item-content flex-1 pl-4">
                    <div class="flex flex-col justify-between sm:flex-row">
                      <p
                          class="font-medium leading-none text-slate-600 dark:text-navy-100"
                      >
                        2 minute ago
                      </p>
                    </div>
                    <div class="mt-4 grid grid-cols-3 gap-2">
                      <img
                          src="/images/800x600.png"
                          class="rounded-lg object-cover object-center"
                          alt="image"
                      />
                      <img
                          src="/images/800x600.png"
                          class="rounded-lg object-cover object-center"
                          alt="image"
                      />
                      <img
                          src="/images/800x600.png"
                          class="rounded-lg object-cover object-center"
                          alt="image"
                      />
                    </div>
                    <div class="mt-3 flex items-center space-x-2">
                      <div class="avatar size-6">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <p class="text-xs+">
                        <span class="font-medium">Mores Clarke</span>
                        <span class="text-slate-400 dark:text-navy-300"
                        >added 3 new Photo</span
                        >
                      </p>
                    </div>
                  </div>
                </li>

                <li class="timeline-item">
                  <div
                      class="timeline-item-point rounded-full border-2 border-secondary dark:border-secondary-light"
                  ></div>
                  <div class="timeline-item-content flex-1 pl-4">
                    <div class="flex flex-col justify-between sm:flex-row">
                      <p
                          class="font-medium leading-none text-slate-600 dark:text-navy-100"
                      >
                        a hour ago
                      </p>
                    </div>
                    <div class="mt-4 flex items-center space-x-3">
                      <div
                          class="mask is-squircle flex size-11 items-center justify-center bg-secondary text-white"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                            class="font-medium text-slate-700 dark:text-navy-100"
                        >
                          Slow Music
                        </p>
                        <div
                            class="flex text-xs text-slate-400 dark:text-navy-300"
                        >
                          <span>03:12</span>
                          <div
                              class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                          ></div>

                          <span>8.32 MB</span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3 flex items-center space-x-2">
                      <div class="avatar size-6">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <p class="text-xs+">
                        <span class="font-medium">Bill Musk </span>
                        <span class="text-slate-400 dark:text-navy-300">
                              added a new Music</span
                        >
                      </p>
                    </div>
                  </div>
                </li>

                <li class="timeline-item">
                  <div
                      class="timeline-item-point rounded-full border-2 border-info"
                  ></div>
                  <div class="timeline-item-content flex-1 pl-4">
                    <div class="flex flex-col justify-between sm:flex-row">
                      <p
                          class="font-medium leading-none text-slate-600 dark:text-navy-100"
                      >
                        a day ago
                      </p>
                    </div>
                    <div class="mt-4 flex items-center space-x-3">
                      <div
                          class="mask is-squircle flex size-11 items-center justify-center bg-info text-white"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                            class="font-medium text-slate-700 dark:text-navy-100"
                        >
                          Final.fig
                        </p>
                        <div
                            class="flex text-xs text-slate-400 dark:text-navy-300"
                        >
                          <span>45 MB</span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3 flex items-center space-x-2">
                      <div class="avatar size-6">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <p class="text-xs+">
                        <span class="font-medium">John Doe </span>
                        <span class="text-slate-400 dark:text-navy-300">
                              added a new file</span
                        >
                      </p>
                    </div>
                  </div>
                </li>

                <li class="timeline-item">
                  <div
                      class="timeline-item-point rounded-full border-2 border-slate-300 dark:border-navy-400"
                  ></div>
                  <div class="timeline-item-content flex-1 pl-4">
                    <div class="flex flex-col justify-between sm:flex-row">
                      <p
                          class="font-medium leading-none text-slate-600 dark:text-navy-100"
                      >
                        2 day ago
                      </p>
                    </div>
                    <div class="mt-4 grid grid-cols-3 gap-2">
                      <img
                          src="/images/800x600.png"
                          class="rounded-lg object-cover object-center"
                          alt="image"
                      />
                      <img
                          src="/images/800x600.png"
                          class="rounded-lg object-cover object-center"
                          alt="image"
                      />
                      <img
                          src="/images/800x600.png"
                          class="rounded-lg object-cover object-center"
                          alt="image"
                      />
                    </div>
                    <div class="mt-3 flex items-center space-x-2">
                      <div class="avatar size-6">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <p class="text-xs+">
                        <span class="font-medium">Mores Clarke</span>
                        <span class="text-slate-400 dark:text-navy-300"
                        >added 3 new Photo</span
                        >
                      </p>
                    </div>
                  </div>
                </li>

                <li class="timeline-item">
                  <div
                      class="timeline-item-point rounded-full border-2 border-secondary dark:border-secondary-light"
                  ></div>
                  <div class="timeline-item-content flex-1 pl-4">
                    <div class="flex flex-col justify-between sm:flex-row">
                      <p
                          class="font-medium leading-none text-slate-600 dark:text-navy-100"
                      >
                        a month ago
                      </p>
                    </div>
                    <div class="mt-4 flex items-center space-x-3">
                      <div
                          class="mask is-squircle flex size-11 items-center justify-center bg-secondary text-white"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                            class="font-medium text-slate-700 dark:text-navy-100"
                        >
                          Slow Music
                        </p>
                        <div
                            class="flex text-xs text-slate-400 dark:text-navy-300"
                        >
                          <span>03:12</span>
                          <div
                              class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                          ></div>

                          <span>8.32 MB</span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3 flex items-center space-x-2">
                      <div class="avatar size-6">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <p class="text-xs+">
                        <span class="font-medium">Bill Musk </span>
                        <span class="text-slate-400 dark:text-navy-300">
                              added a new Music</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div
                id="drawer-tab-activity"
                class="tab-content tab-shift-left"
            >
              <div class="mt-20 text-center">
                <img
                    class="mx-auto w-40"
                    src="/images/illustrations/empty-girl-box.svg"
                    alt="image"
                />
                <div class="mt-5">
                  <p
                      class="text-lg font-semibold text-slate-700 dark:text-navy-100"
                  >
                    No any activity
                  </p>
                  <p class="text-slate-400 dark:text-navy-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed right-3 bottom-3 rounded-full bg-white dark:bg-navy-700">
    <button class="btn size-14 rounded-full bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent-focus/90 sm:hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
    </button>
  </div>
</template>
