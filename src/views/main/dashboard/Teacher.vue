<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";

export default {
  extends: Dashboards,
  data() {
    return {
      workingHrConfig: {
        colors: ["#0EA5E9"],
        series: [70],
        chart: {
          height: 210,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: true,
                color: "#333",
                offsetY: 10,
                fontSize: "24px",
                fontWeight: 600,
              },
            },
          },
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        stroke: {
          lineCap: "round",
        },
      }
    }
  },
  mounted() {
    const dropdownConfig = {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
      ],
    };

    // Working Hours Menu
    new Popper("#working-hr-menu", ".popper-ref", ".popper-root", dropdownConfig);

    // Mwdia Menu
    new Popper("#media-menu", ".popper-ref", ".popper-root", dropdownConfig);
  }
}
</script>

<template>
  <div
      class="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6"
  >
    <div class="col-span-12 lg:col-span-8 xl:col-span-9">
      <div
          class="card mt-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 p-5 sm:mt-0 sm:flex-row"
      >
        <div class="flex justify-center sm:order-last">
          <img
              class="-mt-16 h-40 sm:mt-0"
              src="/images/illustrations/teacher.svg"
              alt="image"
          />
        </div>
        <div
            class="mt-2 flex-1 pt-2 text-center text-white sm:mt-0 sm:text-left"
        >
          <h3 class="text-xl">
            Welcome Back, <span class="font-semibold">Caleb</span>
          </h3>
          <p class="mt-2 leading-relaxed">
            Your student completed
            <span class="font-semibold text-navy-700">85%</span> of tasks
          </p>
          <p>Progress is <span class="font-semibold">excellent!</span></p>

          <button
              class="btn mt-6 bg-slate-50 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
          >
            View Lessons
          </button>
        </div>
      </div>

      <div class="mt-4 sm:mt-5 lg:mt-6">
        <div class="flex h-8 items-center justify-between">
          <h2
              class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Week 2 Classes
          </h2>
          <a
              href="#"
              class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
          >View All</a
          >
        </div>
        <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          <div class="card flex-row overflow-hidden">
            <div
                class="h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"
            ></div>
            <div class="flex flex-1 flex-col justify-between p-4 sm:px-5">
              <div>
                <img
                    class="size-12 rounded-lg object-cover object-center"
                    src="/images/600x400.png"
                    alt="image"
                />
                <h3
                    class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                >
                  Basic English
                </h3>
                <p class="text-xs+">Mon. 08:00 - 09:00</p>
                <div class="mt-2 flex space-x-1.5">
                  <a
                      href="#"
                      class="tag bg-primary py-1 px-1.5 text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Language
                  </a>
                </div>
              </div>
              <div class="mt-10 flex justify-between">
                <div class="flex -space-x-2">
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
                </div>
                <button
                    class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
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
          <div class="card flex-row overflow-hidden">
            <div
                class="h-full w-1 bg-gradient-to-b from-info to-info-focus"
            ></div>
            <div class="flex flex-1 flex-col justify-between p-4 sm:px-5">
              <div>
                <img
                    class="size-12 rounded-lg object-cover object-center"
                    src="/images/600x400.png"
                    alt="image"
                />
                <h3
                    class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                >
                  Learn UI/UX Design
                </h3>
                <p class="text-xs+">Tue. 10:00 - 11:30</p>
                <div class="mt-2 flex space-x-1.5">
                  <a
                      href="#"
                      class="tag bg-info py-1 px-1.5 text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                  >
                    UI/UX Design
                  </a>
                </div>
              </div>
              <div class="mt-10 flex justify-between">
                <div class="flex -space-x-2">
                  <div class="avatar size-7 hover:z-10">
                    <img
                        class="rounded-full ring ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>

                  <div class="avatar size-7 hover:z-10">
                    <div
                        class="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                    >
                      iu
                    </div>
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
                    class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
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
          <div class="card flex-row overflow-hidden">
            <div
                class="h-full w-1 bg-gradient-to-b from-secondary-light to-secondary"
            ></div>
            <div class="flex flex-1 flex-col justify-between p-4 sm:px-5">
              <div>
                <img
                    class="size-12 rounded-lg object-cover object-center"
                    src="/images/600x400.png"
                    alt="image"
                />
                <h3
                    class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                >
                  Basic of digital marketing
                </h3>
                <p class="text-xs+">Wed. 09:00 - 11:00</p>
                <div class="mt-2 flex space-x-1.5">
                  <a
                      href="#"
                      class="tag bg-secondary px-1.5 py-1 text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
                  >
                    Marketing
                  </a>
                </div>
              </div>
              <div class="mt-10 flex justify-between">
                <div class="flex -space-x-2">
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
                </div>
                <button
                    class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
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
        </div>
      </div>

      <div class="mt-4 sm:mt-5 lg:mt-6">
        <div class="flex items-center justify-between">
          <h2
              class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Media for lessons
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
            <div id="media-menu" class="inline-flex">
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
                  COURSE NAME
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  FILE NAME
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  PERMISSION
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  ASSIGN
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  SIZE
                </th>

                <th
                    class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                ></th>
              </tr>
              </thead>
              <tbody>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div
                        class="relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-accent"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5.5 text-primary dark:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Basic English</span
                    >
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >English book.pdf
                  </a>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 text-slate-800 dark:text-navy-100"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Only View </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  13 Members
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  56 MB
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div
                        class="relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-accent"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5.5 text-primary dark:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Grammar and Punctuation
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >Is Correct.docx
                  </a>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 text-secondary dark:text-secondary-light"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Can Edit</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  95 Members
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  4.2 MB
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div
                        class="relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 dark:bg-secondary"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5.5 text-secondary dark:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Practice speaking English
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >Speaking.mp3
                  </a>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 text-slate-800 dark:text-navy-100"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Only View </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  49 Members
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  9 MB
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div
                        class="relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-info/10 dark:bg-info"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5.5 text-info dark:text-white"
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
                    </div>
                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Basic English
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline">
                    English books.zip
                  </a>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 text-slate-800 dark:text-navy-100"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Only View </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  63 Members
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  496 MB
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div
                        class="relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-warning/10 dark:bg-warning"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5.5 text-warning dark:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Grammar and Punctuation
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline">
                    Video Course.mp4
                  </a>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 text-slate-800 dark:text-navy-100"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Only View </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  47 Members
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  245 MB
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                </td>
              </tr>
              <tr class="border-y border-transparent">
                <td
                    class="whitespace-nowrap rounded-bl-lg px-4 py-3 sm:px-5"
                >
                  <div class="flex items-center space-x-4">
                    <div
                        class="relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-accent"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5.5 text-primary dark:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Basic of digital marketing
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >Digital marketing.pdf
                  </a>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div
                      class="badge space-x-2.5 text-slate-800 dark:text-navy-100"
                  >
                    <div class="size-2 rounded-full bg-current"></div>
                    <span>Only View </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  42 Members
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  54 MB
                </td>
                <td
                    class="whitespace-nowrap rounded-br-lg px-4 py-3 sm:px-5"
                >
                  <button
                      class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-4 xl:col-span-3">
      <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1 lg:gap-6"
      >
        <div class="card pb-5">
          <div class="mt-3 flex items-center justify-between px-4">
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Working Hours
            </h2>
            <div id="working-hr-menu" class="inline-flex">
              <button
                  class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
          </div>
          <div>
            <div v-apex-charts="workingHrConfig"></div>
          </div>
          <div class="px-4 text-center text-xs+ sm:px-5">
            <p>Working hours calculated based on your activity</p>
          </div>
        </div>

        <div class="card p-4 lg:order-last">
          <div class="space-y-1 text-center font-inter text-xs+">
            <div class="flex items-center justify-between px-2 pb-4">
              <p class="font-medium text-slate-700 dark:text-navy-100">
                January 2022
              </p>
              <div class="flex space-x-2">
                <button
                    class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                        d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                    class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                        d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-7 pb-2">
              <div
                  class="text-tiny+ font-semibold text-primary dark:text-accent-light"
              >
                SUN
              </div>
              <div
                  class="text-tiny+ font-semibold text-primary dark:text-accent-light"
              >
                MON
              </div>
              <div
                  class="text-tiny+ font-semibold text-primary dark:text-accent-light"
              >
                TUE
              </div>
              <div
                  class="text-tiny+ font-semibold text-primary dark:text-accent-light"
              >
                WED
              </div>
              <div
                  class="text-tiny+ font-semibold text-primary dark:text-accent-light"
              >
                THU
              </div>
              <div
                  class="text-tiny+ font-semibold text-primary dark:text-accent-light"
              >
                FRY
              </div>
              <div
                  class="text-tiny+ font-semibold text-primary dark:text-accent-light"
              >
                SAT
              </div>
            </div>
            <div class="grid grid-cols-7 place-items-center">
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary dark:text-navy-300 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                29
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary dark:text-navy-300 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                30
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary dark:text-navy-300 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                31
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                1
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                2
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                3
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                4
              </button>
            </div>
            <div class="grid grid-cols-7 place-items-center">
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                5
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                6
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                7
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                8
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                9
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                10
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                11
              </button>
            </div>
            <div class="grid grid-cols-7 place-items-center">
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                12
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                13
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl font-medium text-primary hover:bg-primary/10 hover:text-primary dark:text-accent-light dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                14
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                15
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                16
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                17
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                18
              </button>
            </div>
            <div class="grid grid-cols-7 place-items-center">
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                19
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                20
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                21
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                22
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                23
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                24
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                25
              </button>
            </div>
            <div class="grid grid-cols-7 place-items-center">
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                26
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                27
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                28
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                29
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-900 hover:bg-primary/10 hover:text-primary dark:text-navy-100 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                30
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary dark:text-navy-300 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                1
              </button>
              <button
                  class="flex h-7 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary dark:text-navy-300 dark:hover:bg-accent-light/10 dark:hover:text-accent-light"
              >
                2
              </button>
            </div>
          </div>
        </div>

        <div class="sm:col-span-2 lg:col-span-1">
          <div class="flex h-8 items-center justify-between">
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Students
            </h2>
            <a
                href="#"
                class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
            >View All</a
            >
          </div>
          <div
              class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-1"
          >
            <div class="card p-3">
              <div class="flex items-center justify-between space-x-2">
                <div class="flex items-center space-x-3">
                  <div class="avatar size-10">
                    <img
                        class="rounded-full"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                    <div
                        class="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                    ></div>
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                    >
                      Travis Fuller
                    </p>
                    <p
                        class="mt-0.5 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                    >
                      65% completed
                    </p>
                  </div>
                </div>
                <div class="relative cursor-pointer">
                  <button
                      class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-700 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                  <div
                      class="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent"
                  >
                    2
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-3">
              <div class="flex items-center justify-between space-x-2">
                <div class="flex items-center space-x-3">
                  <div class="avatar size-10">
                    <img
                        class="rounded-full"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                    >
                      Konnor Guzman
                    </p>
                    <p
                        class="mt-0.5 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                    >
                      78% completed
                    </p>
                  </div>
                </div>
                <div class="relative cursor-pointer">
                  <button
                      class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-700 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="card p-3">
              <div class="flex items-center justify-between space-x-2">
                <div class="flex items-center space-x-3">
                  <div class="avatar size-10">
                    <img
                        class="rounded-full"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                    >
                      Alfredo Elliott
                    </p>
                    <p
                        class="mt-0.5 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                    >
                      58% completed
                    </p>
                  </div>
                </div>
                <div class="relative cursor-pointer">
                  <button
                      class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-700 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                  <div
                      class="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent"
                  >
                    3
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-3">
              <div class="flex items-center justify-between space-x-2">
                <div class="flex items-center space-x-3">
                  <div class="avatar size-10">
                    <img
                        class="rounded-full"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                    <div
                        class="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                    ></div>
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                    >
                      Derrick Simmons
                    </p>
                    <p
                        class="mt-0.5 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                    >
                      65% completed
                    </p>
                  </div>
                </div>
                <div class="relative cursor-pointer">
                  <button
                      class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-700 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
