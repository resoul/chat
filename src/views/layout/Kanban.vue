<script>
import Drawer from "@/components/drawer.js";
import Accordion from "accordion-js";
import DarkModeButton from "@/components/theme/DarkModeButton.vue";
import MonochromeButton from "@/components/theme/MonochromeButton.vue";
import Notification from "@/views/main/header/Notification.vue";
import SidebarToggleButton from "@/components/theme/SidebarToggleButton.vue";
import RightSidebar from "@/components/right-sidebar/RightSidebar.vue";
import MobileSearchbar from "@/views/main/header/MobileSearchbar.vue";
import Searchbar from "@/views/main/header/Searchbar.vue";
import RightSidebarButton from "@/components/right-sidebar/RightSidebarButton.vue";
import MobileSearchbarButton from "@/views/main/header/MobileSearchbarButton.vue";
export default {
  name: "Kanban",
  components: {
    'ui-sidebar-toggle-btn': SidebarToggleButton,
    'ui-right-sidebar': RightSidebar,
    'ui-mobile-search-bar': MobileSearchbar,
    'ui-mobile-search-bar-btn': MobileSearchbarButton,
    'ui-right-sidebar-btn': RightSidebarButton,
    'ui-dark-mode-btn': DarkModeButton,
    'ui-search-bar': Searchbar,
    'ui-monochrome-btn': MonochromeButton,
    'ui-notification': Notification
  },
  mounted() {
    document.body.classList.add('has-min-sidebar')

    new Drawer("#kanban-setting-drawer");
    new Accordion("#drawer-actions-collapse", {
      duration: 200,
      openOnInit: [0],
    });
    new Accordion("#drawer-activities-collapse", {
      duration: 200,
      openOnInit: [0],
    });
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
  <main class="main-content kanban-app w-full">
    <router-view />
  </main>

  <div id="kanban-setting-drawer" class="drawer drawer-right">
    <div
        class="drawer-overlay fixed inset-0 z-[100] hidden bg-slate-900/60"
    ></div>
    <div
        class="drawer-content fixed right-0 top-0 z-[101] hidden h-full w-full sm:w-80"
    >
      <div class="flex h-full w-full flex-col bg-white dark:bg-navy-700">
        <div
            class="flex h-14 items-center justify-between bg-slate-150 p-4 dark:bg-navy-800"
        >
          <h3
              class="text-base font-medium text-slate-700 dark:text-navy-100"
          >
            Banking App
          </h3>
          <div class="-mr-1.5 flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5 text-primary dark:text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  style="display: none"
              >
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </button>
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
        <div class="is-scrollbar-hidden flex grow flex-col overflow-y-auto">
          <div id="drawer-actions-collapse">
            <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
              <div
                  class="ac-header mt-3 flex items-center justify-between px-4"
              >
                <span class="text-xs+ font-medium uppercase">Actions</span>
                <div class="-mr-1.5 flex">
                  <button
                      class="btn ac-trigger size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ac-icon size-3.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="ac-panel">
                <ul class="mt-2 space-y-3 px-4 font-inter font-medium">
                  <li>
                    <a
                        class="group inline-flex items-center space-x-2 tracking-wide outline-none transition-colors hover:text-slate-800 focus:text-navy-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        href="#"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      <span>Edit Board</span>
                    </a>
                  </li>
                  <li>
                    <a
                        class="group inline-flex items-center space-x-2 tracking-wide outline-none transition-colors hover:text-slate-800 focus:text-navy-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        href="#"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                      <span>Archive</span>
                    </a>
                  </li>
                  <li>
                    <a
                        class="group inline-flex items-center space-x-2 tracking-wide outline-none transition-colors hover:text-slate-800 focus:text-navy-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        href="#"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Clone</span>
                    </a>
                  </li>
                  <li>
                    <a
                        class="group inline-flex items-center space-x-2 tracking-wide outline-none transition-colors hover:text-slate-800 focus:text-navy-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        href="#"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                        />
                      </svg>
                      <span>About Board</span>
                    </a>
                  </li>
                  <li>
                    <a
                        class="group inline-flex items-center space-x-2 tracking-wide outline-none transition-colors hover:text-slate-800 focus:text-navy-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                        href="#"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span>Visibility</span>
                    </a>
                  </li>
                  <li>
                    <a
                        class="group inline-flex items-center space-x-2 tracking-wide text-error outline-none"
                        href="#"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <span>Delete</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
              class="my-4 mx-4 h-px shrink-0 bg-slate-200 dark:bg-navy-500"
          ></div>
          <div id="drawer-activities-collapse">
            <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
              <div class="ac-header flex items-center justify-between px-4">
                    <span class="text-xs+ font-medium uppercase"
                    >Activities</span
                    >
                <div class="-mr-1.5 flex">
                  <button
                      class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <button
                      class="ac-trigger btn size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ac-icon size-3.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="ac-panel">
                <ol
                    class="timeline line-space max-w-sm p-4 [--size:1.5rem]"
                >
                  <li class="timeline-item">
                    <div
                        class="timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light"
                    >
                      <i class="fa fa-user-edit text-tiny"></i>
                    </div>
                    <div class="timeline-item-content flex-1 pl-4">
                      <div
                          class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                      >
                        <p
                            class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                        >
                          User Photo Changed
                        </p>
                        <span
                            class="text-xs text-slate-400 dark:text-navy-300"
                        >12 minute ago</span
                        >
                      </div>
                      <p class="py-1">John Doe changed his avatar photo</p>
                      <div class="avatar mt-2 size-20">
                        <img
                            class="mask is-squircle"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                    </div>
                  </li>
                  <li class="timeline-item">
                    <div
                        class="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent"
                    >
                      <i class="fa-solid fa-image text-tiny"></i>
                    </div>
                    <div class="timeline-item-content flex-1 pl-4">
                      <div
                          class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                      >
                        <p
                            class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                        >
                          Images Added
                        </p>
                        <span
                            class="text-xs text-slate-400 dark:text-navy-300"
                        >1 hour ago</span
                        >
                      </div>
                      <p class="py-1">
                        Mores Clarke added new image gallery
                      </p>
                      <div class="mt-4 grid grid-cols-3 gap-3">
                        <img
                            class="rounded-lg"
                            src="/images/800x600.png"
                            alt="image"
                        />
                        <img
                            class="rounded-lg"
                            src="/images/800x600.png"
                            alt="image"
                        />
                        <img
                            class="rounded-lg"
                            src="/images/800x600.png"
                            alt="image"
                        />
                        <img
                            class="rounded-lg"
                            src="/images/800x600.png"
                            alt="image"
                        />
                        <img
                            class="rounded-lg"
                            src="/images/800x600.png"
                            alt="image"
                        />
                        <img
                            class="rounded-lg"
                            src="/images/800x600.png"
                            alt="image"
                        />
                      </div>
                      <div class="mt-4">
                            <span
                                class="font-medium text-slate-600 dark:text-navy-100"
                            >
                              Category:
                            </span>

                        <a
                            href="#"
                            class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                        >
                          #Tag
                        </a>

                        <a
                            href="#"
                            class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                        >
                          #Category
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-item">
                    <div
                        class="timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700"
                    >
                      <i class="fa fa-leaf text-tiny"></i>
                    </div>
                    <div class="timeline-item-content flex-1 pl-4">
                      <div
                          class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                      >
                        <p
                            class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                        >
                          Design Completed
                        </p>
                        <span
                            class="text-xs text-slate-400 dark:text-navy-300"
                        >3 hours ago</span
                        >
                      </div>
                      <p class="py-1">
                        Robert Nolan completed the design of the CRM
                        application
                      </p>
                      <a
                          href="#"
                          class="inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent"
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
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>File_final.fig</span>
                      </a>
                      <div class="pt-2">
                        <a
                            href="#"
                            class="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                        >
                          UI/UX
                        </a>

                        <a
                            href="#"
                            class="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                        >
                          CRM
                        </a>

                        <a
                            href="#"
                            class="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                        >
                          Dashboard
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-item">
                    <div
                        class="timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700"
                    >
                      <i class="fa fa-project-diagram text-tiny"></i>
                    </div>
                    <div class="timeline-item-content flex-1 pl-4">
                      <div
                          class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                      >
                        <p
                            class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                        >
                          ER Diagram
                        </p>
                        <span
                            class="text-xs text-slate-400 dark:text-navy-300"
                        >a day ago</span
                        >
                      </div>
                      <p class="py-1">Team completed the ER diagram app</p>
                      <div>
                        <p
                            class="text-xs text-slate-400 dark:text-navy-300"
                        >
                          Members:
                        </p>
                        <div class="mt-2 flex justify-between">
                          <div class="flex flex-wrap -space-x-2">
                            <div class="avatar size-7 hover:z-10">
                              <img
                                  class="rounded-full ring ring-white dark:ring-navy-700"
                                  src="/images/200x200.png"
                                  alt="avatar"
                              />
                            </div>

                            <div class="avatar size-7 hover:z-10">
                              <div
                                  class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                              >
                                jd
                              </div>
                            </div>

                            <div class="avatar size-7 hover:z-10">
                              <img
                                  class="rounded-full ring ring-white dark:ring-navy-700"
                                  src="/images/200x200.png"
                                  alt="avatar"
                              />
                            </div>

                            <div class="avatar size-7 hover:z-10">
                              <img
                                  class="rounded-full ring ring-white dark:ring-navy-700"
                                  src="/images/200x200.png"
                                  alt="avatar"
                              />
                            </div>

                            <div class="avatar size-7 hover:z-10">
                              <img
                                  class="rounded-full ring ring-white dark:ring-navy-700"
                                  src="/images/200x200.png"
                                  alt="avatar"
                              />
                            </div>
                          </div>
                          <button
                              class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                          >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-5 rotate-45"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                              <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-item">
                    <div
                        class="timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700"
                    >
                      <i class="fa fa-history text-tiny"></i>
                    </div>
                    <div class="timeline-item-content flex-1 pl-4">
                      <div
                          class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                      >
                        <p
                            class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                        >
                          Weekly Report
                        </p>
                        <span
                            class="text-xs text-slate-400 dark:text-navy-300"
                        >a day ago</span
                        >
                      </div>
                      <p class="py-1">The weekly report was uploaded</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
      data-toggle="drawer"
      data-target="#kanban-setting-drawer"
      class="fixed right-3 bottom-3 rounded-full bg-white dark:bg-navy-700"
  >
    <button
        class="btn size-14 rounded-full bg-success p-0 font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90 sm:hidden"
    >
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
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    </button>
  </div>
</template>
