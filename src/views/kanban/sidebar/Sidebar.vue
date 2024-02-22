<script>
export default {
  name: "Sidebar"
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
                class="is-initial rounded-full bg-success/10 text-success"
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
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
          </div>
          <p
              class="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100"
          >
            Kanban Board
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
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
              <span> My Plan </span>
            </button>
          </div>
          <div class="mt-4 flex items-center justify-between px-4">
            <span class="text-xs font-medium uppercase">BOARDS</span>
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
                      d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
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
            </div>
          </div>
          <ul
              class="mt-1 space-y-1.5 px-2 font-inter text-xs+ font-medium"
          >
            <li>
              <a
                  class="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                  href="#"
              >
                      <span class="text-slate-800 dark:text-navy-100"
                      >Ecommerce App</span
                      >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  class="group flex justify-between space-x-2 rounded-lg bg-primary/10 p-2 tracking-wide text-primary outline-none transition-all dark:bg-accent-light/10 dark:text-accent-light"
                  href="#"
              >
                <span>Banking App</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  class="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                  href="#"
              >
                      <span class="text-slate-800 dark:text-navy-100"
                      >LMS App</span
                      >
              </a>
            </li>
          </ul>
          <div class="my-4 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>
          <div id="sidebar-workspace">
            <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
              <div
                  class="ac-header flex items-center justify-between px-4"
              >
                      <span class="text-xs font-medium uppercase"
                      >Workspace</span
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
                          d="M12 4v16m8-8H4"
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
                <ul
                    class="space-y-1.5 px-2 pt-1 font-inter text-xs+ font-medium"
                >
                  <li>
                    <a
                        class="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                        href="#"
                    >
                      <div class="flex items-center space-x-2">
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
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                        <span class="text-slate-800 dark:text-navy-100"
                        >Inbox</span
                        >
                      </div>
                      <span class="text-primary dark:text-accent-light"
                      >2</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                        class="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                        href="#"
                    >
                      <div class="flex items-center space-x-2">
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
                      </div>
                      <span class="text-primary dark:text-accent-light"
                      >1</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                        class="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                        href="#"
                    >
                      <div class="flex items-center space-x-2">
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span class="text-slate-800 dark:text-navy-100"
                        >Members</span
                        >
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                        class="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                        href="#"
                    >
                      <div class="flex items-center space-x-2">
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
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span class="text-slate-800 dark:text-navy-100"
                        >Setting</span
                        >
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                        class="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                        href="#"
                    >
                      <div class="flex items-center space-x-2">
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
                              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span class="text-slate-800 dark:text-navy-100"
                        >Timetable</span
                        >
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between p-4">
          <button
              class="btn h-11 w-full justify-between bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
          >
            <span> Upgrade to Pro </span>
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
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
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
            class="avatar flex size-10 rounded-full bg-success/10 text-success"
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
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
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
                      stroke-width="1.5"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
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
                  class="btn relative size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <div
                    class="absolute top-0 right-0 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent"
                >
                  2
                </div>
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  href="#"
                  class="btn relative size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <div
                    class="absolute top-0 right-0 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent"
                >
                  1
                </div>
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
                      stroke-width="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
                      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
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