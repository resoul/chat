<script>
import Components from "@/views/main/components/Components.vue";

export default {
  extends: Components
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Table Advanced
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Components</a
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
          />
        </svg>
      </li>
      <li>Table Advanced</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Users Table -->
    <div>
      <div class="flex items-center justify-between">
        <h2
            class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Users Table
        </h2>
        <div class="flex">
          <div class="table-search-wrapper flex items-center">
            <label class="block">
              <input
                  class="table-search-input form-input w-0 bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200"
                  placeholder="Search here..."
                  type="text"
              />
            </label>
            <button
                class="table-search-toggle btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div id="dropdown-wrapper1" class="inline-flex">
            <button
                class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Another Action</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                </ul>
                <div
                    class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                ></div>
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Separated Link</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-3">
        <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
          <table class="is-hoverable w-full text-left">
            <thead>
            <tr>
              <th
                  class="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                #
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Avatar
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Name
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Age
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Phone
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Role
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Status
              </th>
              <th
                  class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Action
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex size-10">
                  <img
                      class="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5"
              >
                John Doe
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">24</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                443-893-2318
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
                >
                  Superadmin
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <label class="inline-flex items-center">
                  <input
                      class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                  />
                </label>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div id="dropdown-table-1" class="inline-flex">
                  <button
                      class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>

                  <div class="popper-root">
                    <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                    >
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Another Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Something else</a
                          >
                        </li>
                      </ul>
                      <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                      ></div>
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Separated Link</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex size-10">
                  <img
                      class="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5"
              >
                Sabina Mores
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">26</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                563-516-8941
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge rounded-full bg-info/10 text-info dark:bg-info/15"
                >
                  Author
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <label class="inline-flex items-center">
                  <input
                      class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                  />
                </label>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div id="dropdown-table-2" class="inline-flex">
                  <button
                      class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>

                  <div class="popper-root">
                    <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                    >
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Another Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Something else</a
                          >
                        </li>
                      </ul>
                      <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                      ></div>
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Separated Link</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex size-10">
                  <img
                      class="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5"
              >
                Tom Robert
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">29</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                897-154-7469
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
                >
                  Admin
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <label class="inline-flex items-center">
                  <input
                      checked
                      class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                  />
                </label>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div id="dropdown-table-3" class="inline-flex">
                  <button
                      class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>

                  <div class="popper-root">
                    <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                    >
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Another Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Something else</a
                          >
                        </li>
                      </ul>
                      <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                      ></div>
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Separated Link</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex size-10">
                  <img
                      class="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5"
              >
                Nolan Doe
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">22</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                443-893-2318
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge rounded-full bg-info/10 text-info dark:bg-info/15"
                >
                  Author
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <label class="inline-flex items-center">
                  <input
                      class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                      type="checkbox"
                  />
                </label>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div id="dropdown-table-4" class="inline-flex">
                  <button
                      class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>

                  <div class="popper-root">
                    <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                    >
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Another Action</a
                          >
                        </li>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Something else</a
                          >
                        </li>
                      </ul>
                      <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                      ></div>
                      <ul>
                        <li>
                          <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                          >Separated Link</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div
            class="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5"
        >
          <div class="flex items-center space-x-2 text-xs+">
            <span>Show</span>
            <label class="block">
              <select
                  class="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
              >
                <option>10</option>
                <option>30</option>
                <option>50</option>
              </select>
            </label>
            <span>entries</span>
          </div>

          <ol class="pagination">
            <li class="rounded-l-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li class="rounded-r-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </li>
          </ol>

          <div class="text-xs+">1 - 10 of 10 entries</div>
        </div>
      </div>
    </div>

    <!-- Collapsible  Table -->
    <div>
      <div class="flex items-center justify-between">
        <h2
            class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Collapsible Table
        </h2>
        <div class="flex">
          <div class="table-search-wrapper flex items-center">
            <label class="block">
              <input
                  class="table-search-input form-input w-0 bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200"
                  placeholder="Search here..."
                  type="text"
              />
            </label>
            <button
                class="table-search-toggle btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div id="dropdown-wrapper2" class="inline-flex">
            <button
                class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Another Action</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                </ul>
                <div
                    class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                ></div>
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Separated Link</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-3">
        <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
          <table class="w-full text-left" id="table-collapse">
            <thead>
            <tr>
              <th
                  class="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                #
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Avatar
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Name
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Phone
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Level
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Stack
              </th>
              <th
                  class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                More
              </th>
            </tr>
            </thead>
            <tbody class="ac [&.is-active_.ac-icon]:rotate-180">
            <tr class="border-y border-transparent">
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
              >
                John Doe
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                443-893-2316
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Level 1
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex space-x-2">
                  <div
                      class="badge rounded-full border border-info text-info"
                  >
                    Tailwind
                  </div>
                  <div
                      class="badge rounded-full border border-success text-success"
                  >
                    Alpine
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="ac-trigger btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i
                      class="ac-icon fas fa-chevron-down text-sm transition-transform"
                  ></i>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td colspan="100" class="p-0">
                <div class="ac-panel">
                  <div class="px-4 pb-4 sm:px-5">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Aut amet sunt repudiandae!
                    </p>
                    <div
                        class="is-scrollbar-hidden min-w-full overflow-x-auto"
                    >
                      <table class="is-hoverable w-full text-left">
                        <thead>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            #
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Name
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Job
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Favorite Color
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            1
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Cy Ganderton
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Quality Control Specialist
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Blue
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            2
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Hart Hagerty
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Desktop Support Technician
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Purple
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            3
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Brice Swyre
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Tax Accountant
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Red
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            4
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Marjy Ferencz
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Office Assistant I
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Crimson
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="text-right">
                      <button
                          onclick="tableCollapse.close(0)"
                          class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                      >
                        Hide
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
            <tbody class="ac [&.is-active_.ac-icon]:rotate-180">
            <tr class="border-y border-transparent">
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
              >
                Sabina Mores
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                684-4161-8911
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Level 2
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex space-x-2">
                  <div
                      class="badge rounded-full border border-warning text-warning"
                  >
                    React
                  </div>
                  <div
                      class="badge rounded-full border border-info text-info"
                  >
                    Remix
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="ac-trigger btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i
                      class="ac-icon fas fa-chevron-down text-sm transition-transform"
                  ></i>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td colspan="100" class="p-0">
                <div class="ac-panel">
                  <div class="px-4 pb-4 sm:px-5">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Aut amet sunt repudiandae!
                    </p>
                    <div
                        class="is-scrollbar-hidden min-w-full overflow-x-auto"
                    >
                      <table class="is-hoverable w-full text-left">
                        <thead>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            #
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Name
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Job
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Favorite Color
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            1
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Cy Ganderton
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Quality Control Specialist
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Blue
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            2
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Hart Hagerty
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Desktop Support Technician
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Purple
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            3
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Brice Swyre
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Tax Accountant
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Red
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            4
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Marjy Ferencz
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Office Assistant I
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Crimson
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="text-right">
                      <button
                          onclick="tableCollapse.close(1)"
                          class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                      >
                        Hide
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
            <tbody class="ac [&.is-active_.ac-icon]:rotate-180">
            <tr class="border-y border-transparent">
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
              >
                Tom Robert
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                179-911-3218
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Level 3
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex space-x-2">
                  <div
                      class="badge rounded-full border border-error text-error"
                  >
                    Bootstrap
                  </div>
                  <div
                      class="badge rounded-full border border-secondary text-secondary dark:border-secondary-light dark:text-secondary-light"
                  >
                    Tailwind
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="ac-trigger btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i
                      class="ac-icon fas fa-chevron-down text-sm transition-transform"
                  ></i>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td colspan="100" class="p-0">
                <div class="ac-panel">
                  <div class="px-4 pb-4 sm:px-5">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Aut amet sunt repudiandae!
                    </p>
                    <div
                        class="is-scrollbar-hidden min-w-full overflow-x-auto"
                    >
                      <table class="is-hoverable w-full text-left">
                        <thead>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            #
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Name
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Job
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Favorite Color
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            1
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Cy Ganderton
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Quality Control Specialist
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Blue
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            2
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Hart Hagerty
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Desktop Support Technician
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Purple
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            3
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Brice Swyre
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Tax Accountant
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Red
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            4
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Marjy Ferencz
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Office Assistant I
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Crimson
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="text-right">
                      <button
                          onclick="tableCollapse.close(2)"
                          class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                      >
                        Hide
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
            <tbody class="ac [&.is-active_.ac-icon]:rotate-180">
            <tr class="border-y border-transparent">
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="avatar flex">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
              >
                Nolan Doe
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                766-9746-1462
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Level 4
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex space-x-2">
                  <div
                      class="badge rounded-full border border-info text-info"
                  >
                    Tailwind
                  </div>
                  <div
                      class="badge rounded-full border border-success text-success"
                  >
                    Alpine
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="ac-trigger btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i
                      class="ac-icon fas fa-chevron-down text-sm transition-transform"
                  ></i>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td colspan="100" class="p-0">
                <div class="ac-panel">
                  <div class="px-4 pb-4 sm:px-5">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Aut amet sunt repudiandae!
                    </p>
                    <div
                        class="is-scrollbar-hidden min-w-full overflow-x-auto"
                    >
                      <table class="is-hoverable w-full text-left">
                        <thead>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            #
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Name
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Job
                          </th>
                          <th
                              class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                          >
                            Favorite Color
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            1
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Cy Ganderton
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Quality Control Specialist
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Blue
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            2
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Hart Hagerty
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Desktop Support Technician
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Purple
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            3
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Brice Swyre
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Tax Accountant
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Red
                          </td>
                        </tr>
                        <tr
                            class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                        >
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            4
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Marjy Ferencz
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Office Assistant I
                          </td>
                          <td
                              class="whitespace-nowrap px-4 py-3 sm:px-5"
                          >
                            Crimson
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="text-right">
                      <button
                          onclick="tableCollapse.close(3)"
                          class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                      >
                        Hide
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div
            class="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5"
        >
          <div class="text-xs+">1 - 10 of 10 entries</div>

          <ol class="pagination">
            <li class="rounded-l-full bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li class="rounded-r-full bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Table With Filter -->
    <div id="table-filter">
      <div class="ac">
        <div class="flex items-center justify-between">
          <h2
              class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Table With Filter
          </h2>
          <div class="flex">
            <div class="table-search-wrapper flex items-center">
              <label class="block">
                <input
                    class="table-search-input form-input w-0 bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200"
                    placeholder="Search here..."
                    type="text"
                />
              </label>
              <button
                  class="table-search-toggle btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <button
                class="ac-trigger btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
              >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M18 11.5H6M21 4H3m6 15h6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="ac-panel">
          <div class="max-w-2xl py-3">
            <div
                class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
            >
              <label class="block">
                <span>Employer name:</span>
                <div class="relative mt-1.5 flex">
                  <input
                      class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Enter Employer Name"
                      type="text"
                  />
                  <span
                      class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="size-4.5 transition-colors duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                          >
                            <path
                                stroke="currentColor"
                                stroke-width="1.5"
                                d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
                            />
                          </svg>
                        </span>
                </div>
              </label>
              <label class="block">
                <span>Project name:</span>
                <div class="relative mt-1.5 flex">
                  <input
                      class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Enter Project Name"
                      type="text"
                  />
                  <span
                      class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="size-4.5 transition-colors duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                          >
                            <path
                                stroke="currentColor"
                                stroke-width="1.5"
                                d="M3.082 13.944c-.529-.95-.793-1.425-.793-1.944 0-.519.264-.994.793-1.944L4.43 7.63l1.426-2.381c.559-.933.838-1.4 1.287-1.66.45-.259.993-.267 2.08-.285L12 3.26l2.775.044c1.088.018 1.631.026 2.08.286.45.26.73.726 1.288 1.659L19.57 7.63l1.35 2.426c.528.95.792 1.425.792 1.944 0 .519-.264.994-.793 1.944L19.57 16.37l-1.426 2.381c-.559.933-.838 1.4-1.287 1.66-.45.259-.993.267-2.08.285L12 20.74l-2.775-.044c-1.088-.018-1.631-.026-2.08-.286-.45-.26-.73-.726-1.288-1.659L4.43 16.37l-1.35-2.426z"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="3"
                                stroke="currentColor"
                                stroke-width="1.5"
                            />
                          </svg>
                        </span>
                </div>
              </label>
              <label class="block">
                <span>From:</span>
                <div class="relative mt-1.5 flex">
                  <input
                      id="filter-from-datepicker"
                      class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Choose start date..."
                      type="text"
                  />
                  <span
                      class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="size-5 transition-colors duration-200"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                          >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                </div>
              </label>
              <label class="block">
                <span>To:</span>
                <div class="relative mt-1.5 flex">
                  <input
                      id="filter-to-datepicker"
                      class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Choose start date..."
                      type="text"
                  />
                  <div
                      class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-5 transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </label>
              <div class="sm:col-span-2">
                <span>Project Status:</span>
                <div
                    class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6"
                >
                  <label class="inline-flex items-center space-x-2">
                    <input
                        class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-400 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                        type="checkbox"
                    />
                    <span>Upcoming</span>
                  </label>
                  <label class="inline-flex items-center space-x-2">
                    <input
                        class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                        type="checkbox"
                    />
                    <span>In Progress</span>
                  </label>
                  <label class="inline-flex items-center space-x-2">
                    <input
                        checked
                        class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:!border-success checked:bg-success hover:!border-success focus:!border-success dark:border-navy-400"
                        type="checkbox"
                    />
                    <span>Complete</span>
                  </label>
                  <label class="inline-flex items-center space-x-2">
                    <input
                        checked
                        class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:!border-error checked:bg-error hover:!border-error focus:!border-error dark:border-navy-400"
                        type="checkbox"
                    />
                    <span>Cancelled</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-4 space-x-1 text-right">
              <button
                  onclick="tableFilter.close(0)"
                  class="btn font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                Cancel
              </button>

              <button
                  onclick="tableFilter.close(0)"
                  class="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table class="is-hoverable w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Project Name
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Employer Name
                </th>

                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Progress
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Status
                </th>
                <th
                    class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Deadline
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  Web Application
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  John Doe
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      data-tooltip="42% Completed"
                      data-theme="primary"
                      class="progress h-2 bg-slate-150 dark:bg-navy-500"
                  >
                    <div
                        class="w-5/12 rounded-full bg-primary dark:bg-accent"
                    ></div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 px-0 text-primary dark:text-accent-light"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>In Progress</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  03 Sep
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  Android App
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Sabina Mores
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      data-tooltip="77% Completed"
                      data-theme="primary"
                      class="progress h-2 bg-slate-150 dark:bg-navy-500"
                  >
                    <div
                        class="w-9/12 rounded-full bg-primary dark:bg-accent"
                    ></div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 px-0 text-primary dark:text-accent-light"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>In Progress</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  16 Sep
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  Android App
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Bailie Coulman
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      data-tooltip="Cancelled"
                      data-theme="error"
                      class="progress h-2 bg-slate-150 dark:bg-navy-500"
                  >
                    <div class="w-full rounded-full bg-error"></div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="badge space-x-2.5 px-0 text-error">
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Cancelled</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">N/A</td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  Desktop App
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Richardo Aldren
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      data-tooltip="Completed"
                      data-theme="success"
                      class="progress h-2 bg-slate-150 dark:bg-navy-500"
                  >
                    <div class="w-full rounded-full bg-success"></div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="badge space-x-2.5 px-0 text-success">
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Completed</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  25 Aug
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">5</td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  CRM App
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Nolan Doe
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      data-tooltip="Pending"
                      data-theme="secondary"
                      class="progress h-2 bg-slate-150 dark:bg-navy-500"
                  >
                    <div class="w-1/12 rounded-full bg-secondary"></div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 px-0 text-secondary dark:text-secondary-light"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Pending</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  3 Oct
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <div
              class="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5"
          >
            <div class="text-xs+">1 - 10 of 10 entries</div>
            <ol class="pagination space-x-1.5">
              <li>
                <a
                    href="#"
                    class="flex size-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >1</a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                >2</a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >3</a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >4</a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >5</a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex size-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
