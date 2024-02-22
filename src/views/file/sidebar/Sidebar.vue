<script>
import Accordion from "accordion-js";
export default {
  name: "Sidebar",
  mounted() {
    new Accordion("#my-files", {
      duration: 200,
      openOnInit: [0],
    });

    new Accordion("#tree1", {
      duration: 200,
      showMultiple: true,
    });

    new Accordion("#tree1-1", {
      duration: 200,
      showMultiple: true,
    });

    new Accordion("#tree1-2", {
      duration: 200,
      showMultiple: true,
    });

    new Accordion("#tree1-3", {
      duration: 200,
      showMultiple: true,
    });
  }
}
</script>

<template>
  <!-- Sidebar Panel -->
  <div class="sidebar-panel">
    <div
        class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"
    >
      <!-- Sidebar Panel Header -->
      <div
          class="flex h-18 w-full items-center justify-between pl-4 pr-1"
      >
        <div class="flex items-center">
          <div class="avatar mr-3 hidden size-9 lg:flex">
            <div
                class="is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
            >
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
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
          </div>
          <p
              class="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100"
          >
            My Cloud
          </p>
        </div>
        <button
            class="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"
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
                d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Sidebar Panel Body -->
      <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
        <div class="is-scrollbar-hidden grow overflow-y-auto">
          <div class="mt-2 px-4">
            <button
                class="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                />
              </svg>
              <span> Create New </span>
            </button>
          </div>
          <div id="my-files">
            <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
              <div
                  class="ac-header mt-4 flex items-center justify-between px-4"
              >
                      <span class="text-xs font-medium uppercase"
                      >MY FILES
                      </span>
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
                        stroke-width="2"
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
                <ul
                    class="mt-1 space-y-1 px-2 font-inter text-xs+ font-medium"
                    id="tree1"
                >
                  <li
                      class="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100"
                  >
                    <div
                        tabindex="0"
                        class="tree-header flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <button
                          class="ac-trigger btn mr-1 size-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ac-icon size-4.5 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                          <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-3 size-6 text-warning"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        />
                      </svg>
                      <span>Design</span>
                    </div>
                    <div class="ac-panel pl-4">
                      <ul id="tree1-1">
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Web Apps</span>
                          </div>
                        </li>
                        <li
                            class="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100"
                        >
                          <div
                              tabindex="0"
                              class="tree-header flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <button
                                class="ac-trigger btn mr-1 size-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="ac-icon size-4.5 transition-transform"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                              >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                              </svg>
                            </button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Documents</span>
                          </div>
                          <div class="ac-panel pl-4">
                            <ul>
                              <li>
                                <div
                                    tabindex="0"
                                    class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                >
                                  <div
                                      class="mr-1 flex size-5 items-center justify-center"
                                  ></div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="mr-3 size-6 text-warning"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                    <path
                                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    />
                                  </svg>
                                  <span>LMS App</span>
                                </div>
                              </li>
                              <li>
                                <div
                                    tabindex="0"
                                    class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                >
                                  <div
                                      class="mr-1 flex size-5 items-center justify-center"
                                  ></div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="mr-3 size-6 text-warning"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                    <path
                                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    />
                                  </svg>
                                  <span>Ecommerce</span>
                                </div>
                              </li>
                              <li>
                                <div
                                    tabindex="0"
                                    class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                >
                                  <div
                                      class="mr-1 flex size-5 items-center justify-center"
                                  ></div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="mr-3 size-6 text-warning"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                    <path
                                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    />
                                  </svg>
                                  <span>Dashboard</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Desktop Apps</span>
                          </div>
                        </li>
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Mobile Apps</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div
                        tabindex="0"
                        class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <div
                          class="mr-1 flex size-5 items-center justify-center"
                      ></div>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-3 size-6 text-warning"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        />
                      </svg>
                      <span>Backup Files</span>
                    </div>
                  </li>
                  <li
                      class="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100"
                  >
                    <div
                        tabindex="0"
                        class="tree-header flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <button
                          class="ac-trigger btn mr-1 size-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ac-icon size-4.5 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                          <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-3 size-6 text-warning"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        />
                      </svg>
                      <span>CRM Apps</span>
                    </div>
                    <div class="ac-panel pl-4">
                      <ul id="tree1-2">
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Sheets</span>
                          </div>
                        </li>
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Slides</span>
                          </div>
                        </li>
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Words</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                      class="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100"
                  >
                    <div
                        tabindex="0"
                        class="tree-header flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <button
                          class="ac-trigger btn mr-1 size-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ac-icon size-4.5 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                          <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-3 size-6 text-warning"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        />
                      </svg>
                      <span>Applications</span>
                    </div>
                    <div class="ac-panel pl-4">
                      <ul id="tree1-3">
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Web Apps</span>
                          </div>
                        </li>
                        <li
                            class="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100"
                        >
                          <div
                              tabindex="0"
                              class="tree-header flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <button
                                class="ac-trigger btn mr-1 size-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="ac-icon size-4.5 transition-transform"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                              >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                              </svg>
                            </button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>CRM Apps</span>
                          </div>
                          <div class="ac-panel pl-4">
                            <ul>
                              <li>
                                <div
                                    tabindex="0"
                                    class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                >
                                  <div
                                      class="mr-1 flex size-5 items-center justify-center"
                                  ></div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="mr-3 size-6 text-warning"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                    <path
                                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    />
                                  </svg>
                                  <span>LMS App</span>
                                </div>
                              </li>
                              <li>
                                <div
                                    tabindex="0"
                                    class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                >
                                  <div
                                      class="mr-1 flex size-5 items-center justify-center"
                                  ></div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="mr-3 size-6 text-warning"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                    <path
                                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    />
                                  </svg>
                                  <span>Ecommerce</span>
                                </div>
                              </li>
                              <li>
                                <div
                                    tabindex="0"
                                    class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                                >
                                  <div
                                      class="mr-1 flex size-5 items-center justify-center"
                                  ></div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="mr-3 size-6 text-warning"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                    <path
                                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    />
                                  </svg>
                                  <span>Dashboard</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Desktop Apps</span>
                          </div>
                        </li>
                        <li>
                          <div
                              tabindex="0"
                              class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >
                            <div
                                class="mr-1 flex size-5 items-center justify-center"
                            ></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="mr-3 size-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                              <path
                                  d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            <span>Mobile Apps</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div
                        tabindex="0"
                        class="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <div
                          class="mr-1 flex size-5 items-center justify-center"
                      ></div>

                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-3 size-6 text-warning"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                      <span>Archives</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>

          <ul class="space-y-1.5 px-2 font-inter text-xs+ font-medium">
            <li>
              <a
                  class="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span class="text-slate-800 dark:text-navy-100"
                >Shared Folders</span
                >
              </a>
            </li>
            <li>
              <a
                  class="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span class="text-slate-800 dark:text-navy-100"
                >Important</span
                >
              </a>
            </li>
            <li>
              <a
                  class="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-slate-800 dark:text-navy-100"
                >Recent</span
                >
              </a>
            </li>
            <li>
              <a
                  class="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                <span class="text-slate-800 dark:text-navy-100"
                >Tags</span
                >
              </a>
            </li>
            <li>
              <a
                  class="group flex space-x-2 rounded-lg p-2 tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span>Trash</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col p-4">
          <div class="flex items-center justify-between">
            <p>
                    <span class="font-medium text-slate-600 dark:text-navy-100"
                    >35GB</span
                    >
              of 1TB
            </p>
            <a
                href="#"
                class="text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
            >Upgrade</a
            >
          </div>

          <div class="progress mt-2 h-2 bg-slate-150 dark:bg-navy-500">
            <div class="w-7/12 rounded-full bg-info"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Minimized Sidebar Panel -->
  <div class="sidebar-panel-min">
    <div
        class="flex h-full flex-col items-center bg-white dark:bg-navy-750"
    >
      <div class="flex h-18 shrink-0 items-center justify-center">
        <div
            class="avatar flex size-10 rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
        >
          <div class="is-initial">
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
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
        <div
            class="is-scrollbar-hidden flex grow flex-col overflow-y-auto"
        >
          <ul class="mt-4 space-y-1">
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
                      stroke-width="1.5"
                      d="M12 4v16m8-8H4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  href="#"
                  class="btn size-10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
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
                      stroke-width="1.5"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div class="my-4 h-px bg-slate-200 dark:bg-navy-500"></div>
          <ul class="space-y-1">
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  href="#"
                  class="btn size-10 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
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
                      stroke-width="1.5"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="py-3">
          <button
              class="btn size-10 rounded-full border border-slate-200 p-0 font-medium hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
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
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>