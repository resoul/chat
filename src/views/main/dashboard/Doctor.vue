<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";

export default {
  extends: Dashboards,
  data() {
    return {
      parientsConfig: {
        colors: ["#0EA5E9", "#F000B9"],
        series: [
          {
            name: "Man",
            data: [28, 45, 35, 50, 32],
          },
          {
            name: "Woman",
            data: [14, 25, 20, 25, 12],
          },
        ],
        chart: {
          height: 210,
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            barHeight: "90%",
            columnWidth: "40%",
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May"],

          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: -8,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
      }
    }
  }
}
</script>

<template>
  <div class="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div class="col-span-12 lg:col-span-8 xl:col-span-9">
      <div class="card col-span-12 mt-12 bg-gradient-to-r from-blue-500 to-blue-600 p-5 sm:col-span-8 sm:mt-0 sm:flex-row">
        <div class="flex justify-center sm:order-last">
          <img
              class="-mt-16 h-40 sm:mt-0"
              src="/images/illustrations/doctor.svg"
              alt="image"
          />
        </div>
        <div
            class="mt-2 flex-1 pt-2 text-center text-white sm:mt-0 sm:text-left"
        >
          <h3 class="text-xl">
            Good morning, <span class="font-semibold">Dr. Adam</span>
          </h3>
          <p class="mt-2 leading-relaxed">Have a nice day at work</p>
          <p>Progress is <span class="font-semibold">excellent!</span></p>

          <button
              class="btn mt-6 border border-white/10 bg-white/20 text-white hover:bg-white/30 focus:bg-white/30"
          >
            View Schedule
          </button>
        </div>
      </div>

      <div class="mt-4 sm:mt-5 lg:mt-6">
        <div class="flex h-8 items-center justify-between">
          <h2
              class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Appointment request
          </h2>
          <a
              href="#"
              class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
          >View All</a
          >
        </div>
        <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          <div class="card space-y-4 p-5">
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="image"
                />
              </div>
              <div>
                <h3
                    class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Travis Fuller
                </h3>
                <p
                    class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                >
                  Scaling
                </p>
              </div>
            </div>
            <div>
              <p>Thu, 26 March</p>
              <p
                  class="text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                08:00
              </p>
            </div>
            <div class="flex justify-between">
              <div class="flex space-x-2">
                <button
                    class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
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
                        d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button
                    class="btn size-7 rounded-full bg-error/10 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
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
          <div class="card space-y-4 p-5">
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="image"
                />
              </div>
              <div>
                <h3
                    class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Alfredo Elliott
                </h3>
                <p
                    class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                >
                  Checkup
                </p>
              </div>
            </div>
            <div>
              <p>Mon, 15 March</p>
              <p
                  class="text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                06:00
              </p>
            </div>
            <div class="flex justify-between">
              <div class="flex space-x-2">
                <button
                    class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
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
                        d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button
                    class="btn size-7 rounded-full bg-error/10 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
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
          <div class="card space-y-4 p-5">
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="image"
                />
              </div>
              <div>
                <h3
                    class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Derrick Simmons
                </h3>
                <p
                    class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                >
                  Checkup
                </p>
              </div>
            </div>
            <div>
              <p>Wed, 14 March</p>
              <p
                  class="text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                11:00
              </p>
            </div>
            <div class="flex justify-between">
              <div class="flex space-x-2">
                <button
                    class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
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
                        d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button
                    class="btn size-7 rounded-full bg-error/10 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
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

      <div class="mt-4 sm:mt-5 lg:mt-6">
        <div class="flex items-center justify-between">
          <h2
              class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Appointments
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
            <div v-popper class="inline-flex">
              <button class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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
                  NAME
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  LOCATION
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  DATETIME
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  STATUS
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
                    <div class="avatar size-9">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Anthony Jensen
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >London, Kliniken Clinic
                  </a>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                >
                  Mon, 12 May - 09:00
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-4 size-5"
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
                    <div class="avatar size-9">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Konnor Guzman
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >Manchester, PLC Home Health
                  </a>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                >
                  Tue, 17 June - 14:30
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-4 size-5 text-error"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
                    <div class="avatar size-9">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Derrick Simmons
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >Liverpool, Life flash Clinic
                  </a>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                >
                  Wed, 29 May - 13:30
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-4 size-5 text-error"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
                    <div class="avatar size-9">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Henry Curtis
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >London, Kliniken Clinic
                  </a>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                >
                  Mon, 22 June - 15:00
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-4 size-5"
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
                    <div class="avatar size-9">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Katrina West
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >Manchester, PLC Home Health
                  </a>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                >
                  Tue, 17 June - 14:30
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-4 size-5 text-error"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
                    <div class="avatar size-9">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Travis Fuller
                            </span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <a href="#" class="hover:underline focus:underline"
                  >Liverpool, Life flash Clinic
                  </a>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
                >
                  Wed, 19 May - 11:30
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-4 size-5"
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
        <div
            class="rounded-lg bg-info/10 px-4 pb-5 dark:bg-navy-800 sm:px-5"
        >
          <div class="flex items-center justify-between py-3">
            <h2 class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
              Next Patient
            </h2>
            <div v-popper class="inline-flex">
              <button class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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
          <div class="space-y-4">
            <div class="flex justify-between">
              <div class="avatar size-16">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="image"
                />
              </div>
              <div>
                <p>Today</p>
                <p
                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                >
                  11:00
                </p>
              </div>
            </div>
            <div>
              <h3
                  class="text-lg font-medium text-slate-700 dark:text-navy-100"
              >
                Alfredo Elliott
              </h3>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Checkup
              </p>
            </div>
            <div class="space-y-3 text-xs+">
              <div class="flex justify-between">
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  D.O.B.
                </p>
                <p class="text-right">25 Jan 1998</p>
              </div>
              <div class="flex justify-between">
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  Weight
                </p>
                <p class="text-right">56 kg</p>
              </div>
              <div class="flex justify-between">
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  Height
                </p>
                <p class="text-right">164 cm</p>
              </div>
              <div class="flex justify-between">
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  Last Appointment
                </p>
                <p class="text-right">25 May 2021</p>
              </div>
              <div class="flex justify-between">
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  Register Date
                </p>
                <p class="text-right">16 Jun 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div
            class="card sm:order-last sm:col-span-2 lg:order-none lg:col-span-1"
        >
          <div
              class="mt-3 flex items-center justify-between px-4 sm:px-5"
          >
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Number of Patients
            </h2>
            <div v-popper class="inline-flex">
              <button class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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

          <div class="ax-transparent-gridline pr-2">
            <div v-apex-charts="parientsConfig"></div>
          </div>
        </div>
        <div class="card p-4">
          <div class="space-y-1 text-center font-inter text-xs+">
            <div class="flex items-center justify-between px-2 pb-4">
              <p class="font-medium text-slate-700 dark:text-navy-100">
                January 2022
              </p>
              <div class="-mr-1.5 flex space-x-2">
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
      </div>
    </div>
  </div>
</template>
