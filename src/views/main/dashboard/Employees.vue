<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";

export default {
  extends: Dashboards,
  data() {
    return {
      clientGrowthConfig: {
        colors: ["#10B981"],
        series: [
          {
            name: "Clients Growth",
            data: [45, 20, 55, 28, 45, 25, 65],
          },
        ],
        chart: {
          type: "area",
          stacked: false,
          height: 120,
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: -28,
            bottom: -15,
          },
        },
        stroke: {
          width: 2,
        },
        tooltip: {
          shared: true,
        },
        legend: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      },
      salesGrowthConfig: {
        colors: ["#FF9800"],
        series: [
          {
            name: "Sales Growth",
            data: [35, 20, 45, 30, 55, 27, 45],
          },
        ],
        chart: {
          type: "area",
          stacked: false,
          height: 120,
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: -28,
            bottom: -15,
          },
        },
        stroke: {
          width: 2,
        },
        tooltip: {
          shared: true,
        },
        legend: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      },
      tasksConfig: {
        colors: ["#0EA5E9"],
        series: [65],
        chart: {
          height: 120,
          width: 120,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
            dataLabels: {
              name: {
                show: false,
                color: "#fff",
              },
              value: {
                show: true,
                fontSize: "18px",
                offsetY: 4,
              },
            },
          },
        },
        grid: {
          show: false,
          padding: {
            left: -20,
            right: -20,
            top: -20,
            bottom: -23,
          },
        },
        stroke: {
          lineCap: "round",
        },
      }
    }
  }
}
</script>

<template>
  <div class="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5 lg:mt-6 lg:gap-6">
    <div class="card shadow-none">
      <div class="mt-2 flex h-8 items-center justify-between px-4">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Clients Growth
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
              <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
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

      <p class="grow px-4">
        <span class="text-2xl font-semibold text-success">16k</span>
        <span class="text-xs">+6%</span>
      </p>

      <div class="ax-transparent-gridline ax-rounded-b-lg">
        <div v-apex-charts="clientGrowthConfig"></div>
      </div>
    </div>
    <div class="card shadow-none">
      <div class="mt-2 flex h-8 items-center justify-between px-4">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Sales Growth
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
              <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
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

      <p class="grow px-4">
        <span class="text-2xl font-semibold text-warning">45k</span>
        <span class="text-xs">+3%</span>
      </p>

      <div class="ax-transparent-gridline ax-rounded-b-lg">
        <div v-apex-charts="salesGrowthConfig"></div>
      </div>
    </div>
    <div
        class="card flex-row justify-between p-4 sm:flex-col lg:flex-row"
    >
      <div class="flex flex-col justify-between">
        <div class="space-y-2 pb-2">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Completed Task
          </h2>

          <div
              class="badge h-6 space-x-1 rounded-full bg-info/10 text-info dark:bg-info/15"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clip-rule="evenodd"
              />
            </svg>
            <span>34%</span>
          </div>
        </div>
        <p class="flex space-x-1 text-xs sm:hidden lg:flex">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4.5 text-slate-400 dark:text-navy-300"
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
          <span>2 Days limit</span>
        </p>
      </div>
      <div class="flex items-center justify-center">
        <div v-apex-charts="tasksConfig"></div>
      </div>
    </div>
  </div>

  <div class="mt-4 sm:mt-5 lg:mt-6">
    <div class="flex items-center justify-between">
      <h2
          class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
      >
        Employees & Personnel
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
              <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
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
    <div
        class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
    >
      <div class="card space-y-9 p-4 sm:p-5">
        <div class="flex justify-between">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <img
                  class="mask is-squircle"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p class="font-medium text-slate-700 dark:text-navy-100">
                Travis Fuller
              </p>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div class="flex space-x-2">
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <div
                  class="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent"
              >
                4
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between space-x-2">
          <div>
            <p class="text-xs+">Sells</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              2 348
            </p>
          </div>
          <div>
            <p class="text-xs+">Target</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              3 000
            </p>
          </div>
          <div>
            <p class="text-xs+">Clients</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              78
            </p>
          </div>
        </div>
        <div class="grow">
          <div class="flex w-full space-x-1">
            <div
                data-tooltip="Phone Calls"
                class="h-2 w-4/12 rounded-full bg-primary dark:bg-accent"
            ></div>
            <div
                data-tooltip="Chats Messages"
                class="h-2 w-3/12 rounded-full bg-success"
            ></div>
            <div
                data-tooltip="Emails"
                class="h-2 w-5/12 rounded-full bg-info"
            ></div>
          </div>
          <div class="mt-2 flex flex-wrap">
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div
                  class="size-2 rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="flex space-x-1 text-xs leading-6">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Calls</span
                      >
                <span>33%</span>
              </div>
            </div>
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-success"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Chat Messages</span
                      >
                <span>17%</span>
              </div>
            </div>
            <div
                class="mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-info"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Emails</span
                      >
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <img
                data-tooltip="Award Level 1"
                class="size-6"
                src="/images/awards/award-19.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 2"
                class="size-6"
                src="/images/awards/award-2.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-5.svg"
                alt="avatar"
            />
          </div>
          <button
              class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card space-y-9 p-4 sm:p-5">
        <div class="flex justify-between">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <img
                  class="mask is-squircle"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p class="font-medium text-slate-700 dark:text-navy-100">
                Konnor Guzman
              </p>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div class="flex space-x-2">
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
        <div class="flex justify-between space-x-2">
          <div>
            <p class="text-xs+">Sells</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              1 451
            </p>
          </div>
          <div>
            <p class="text-xs+">Target</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              2 000
            </p>
          </div>
          <div>
            <p class="text-xs+">Clients</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              54
            </p>
          </div>
        </div>
        <div class="grow">
          <div class="flex w-full space-x-1">
            <div
                data-tooltip="Phone Calls"
                class="h-2 w-3/12 rounded-full bg-primary dark:bg-accent"
            ></div>
            <div
                data-tooltip="Chats Messages"
                class="h-2 w-7/12 rounded-full bg-success"
            ></div>
            <div
                data-tooltip="Emails"
                class="size-2/12 rounded-full bg-info"
            ></div>
          </div>
          <div class="mt-2 flex flex-wrap">
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div
                  class="size-2 rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="flex space-x-1 text-xs leading-6">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Calls</span
                      >
                <span>24%</span>
              </div>
            </div>
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-success"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Chat Messages</span
                      >
                <span>56%</span>
              </div>
            </div>
            <div
                class="mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-info"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Emails</span
                      >
                <span>20%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <img
                data-tooltip="Award Level 1"
                class="size-6"
                src="/images/awards/award-1.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 2"
                class="size-6"
                src="/images/awards/award-6.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-9.svg"
                alt="avatar"
            />
          </div>
          <button
              class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card space-y-9 p-4 sm:p-5">
        <div class="flex justify-between">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <img
                  class="mask is-squircle"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p class="font-medium text-slate-700 dark:text-navy-100">
                Alfredo Elliott
              </p>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Contractors
              </p>
            </div>
          </div>
          <div class="flex space-x-2">
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                4
              </div>
            </div>
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between space-x-2">
          <div>
            <p class="text-xs+">Sells</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              423
            </p>
          </div>
          <div>
            <p class="text-xs+">Target</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              500
            </p>
          </div>
          <div>
            <p class="text-xs+">Clients</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              16
            </p>
          </div>
        </div>
        <div class="grow">
          <div class="flex w-full space-x-1">
            <div
                data-tooltip="Phone Calls"
                class="h-2 w-8/12 rounded-full bg-primary dark:bg-accent"
            ></div>
            <div
                data-tooltip="Chats Messages"
                class="size-2/12 rounded-full bg-success"
            ></div>
            <div
                data-tooltip="Emails"
                class="size-2/12 rounded-full bg-info"
            ></div>
          </div>
          <div class="mt-2 flex flex-wrap">
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div
                  class="size-2 rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="flex space-x-1 text-xs leading-6">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Calls</span
                      >
                <span>60%</span>
              </div>
            </div>
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-success"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Chat Messages</span
                      >
                <span>23%</span>
              </div>
            </div>
            <div
                class="mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-info"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Emails</span
                      >
                <span>17%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <img
                data-tooltip="Award Level 2"
                class="size-6"
                src="/images/awards/award-14.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-13.svg"
                alt="avatar"
            />
          </div>
          <button
              class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card space-y-9 p-4 sm:p-5">
        <div class="flex justify-between">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <img
                  class="mask is-squircle"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p class="font-medium text-slate-700 dark:text-navy-100">
                Samantha Shelton
              </p>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Contractors
              </p>
            </div>
          </div>
          <div class="flex space-x-2">
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between space-x-2">
          <div>
            <p class="text-xs+">Sells</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              579
            </p>
          </div>
          <div>
            <p class="text-xs+">Target</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              800
            </p>
          </div>
          <div>
            <p class="text-xs+">Clients</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              24
            </p>
          </div>
        </div>
        <div class="grow">
          <div class="flex w-full space-x-1">
            <div
                data-tooltip="Phone Calls"
                class="h-2 w-4/12 rounded-full bg-primary dark:bg-accent"
            ></div>
            <div
                data-tooltip="Chats Messages"
                class="h-2 w-4/12 rounded-full bg-success"
            ></div>
            <div
                data-tooltip="Emails"
                class="h-2 w-4/12 rounded-full bg-info"
            ></div>
          </div>
          <div class="mt-2 flex flex-wrap">
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div
                  class="size-2 rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="flex space-x-1 text-xs leading-6">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Calls</span
                      >
                <span>30%</span>
              </div>
            </div>
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-success"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Chat Messages</span
                      >
                <span>36%</span>
              </div>
            </div>
            <div
                class="mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-info"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Emails</span
                      >
                <span>34%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <img
                data-tooltip="Award Level 2"
                class="size-6"
                src="/images/awards/award-15.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-13.svg"
                alt="avatar"
            />
          </div>
          <button
              class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card space-y-9 p-4 sm:p-5">
        <div class="flex justify-between">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <img
                  class="mask is-squircle"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p class="font-medium text-slate-700 dark:text-navy-100">
                Derrick Simmons
              </p>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div class="flex space-x-2">
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between space-x-2">
          <div>
            <p class="text-xs+">Sells</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              6 541
            </p>
          </div>
          <div>
            <p class="text-xs+">Target</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              8 000
            </p>
          </div>
          <div>
            <p class="text-xs+">Clients</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              145
            </p>
          </div>
        </div>
        <div class="grow">
          <div class="flex w-full space-x-1">
            <div
                data-tooltip="Phone Calls"
                class="h-2 w-6/12 rounded-full bg-primary dark:bg-accent"
            ></div>
            <div
                data-tooltip="Chats Messages"
                class="h-2 w-4/12 rounded-full bg-success"
            ></div>
            <div
                data-tooltip="Emails"
                class="size-2/12 rounded-full bg-info"
            ></div>
          </div>
          <div class="mt-2 flex flex-wrap">
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div
                  class="size-2 rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="flex space-x-1 text-xs leading-6">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Calls</span
                      >
                <span>55%</span>
              </div>
            </div>
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-success"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Chat Messages</span
                      >
                <span>30%</span>
              </div>
            </div>
            <div
                class="mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-info"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Emails</span
                      >
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <img
                data-tooltip="Award Level 2"
                class="size-6"
                src="/images/awards/award-15.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-5.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-25.svg"
                alt="avatar"
            />
          </div>
          <button
              class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card space-y-9 p-4 sm:p-5">
        <div class="flex justify-between">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <img
                  class="mask is-squircle"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p class="font-medium text-slate-700 dark:text-navy-100">
                Katrina West
              </p>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div class="flex space-x-2">
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                1
              </div>
            </div>
            <div class="relative cursor-pointer">
              <button
                  class="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-between space-x-2">
          <div>
            <p class="text-xs+">Sells</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              3 481
            </p>
          </div>
          <div>
            <p class="text-xs+">Target</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              5 000
            </p>
          </div>
          <div>
            <p class="text-xs+">Clients</p>
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              96
            </p>
          </div>
        </div>

        <div class="grow">
          <div class="flex w-full space-x-1">
            <div
                data-tooltip="Phone Calls"
                class="h-2 w-1/12 rounded-full bg-primary dark:bg-accent"
            ></div>
            <div
                data-tooltip="Chats Messages"
                class="h-2 w-5/12 rounded-full bg-success"
            ></div>
            <div
                data-tooltip="Emails"
                class="h-2 w-6/12 rounded-full bg-info"
            ></div>
          </div>
          <div class="mt-2 flex flex-wrap">
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div
                  class="size-2 rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="flex space-x-1 text-xs leading-6">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Calls</span
                      >
                <span>9%</span>
              </div>
            </div>
            <div
                class="mr-4 mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-success"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Chat Messages</span
                      >
                <span>41%</span>
              </div>
            </div>
            <div
                class="mb-1 inline-flex items-center space-x-2 font-inter"
            >
              <div class="size-2 rounded-full bg-info"></div>
              <div class="flex space-x-1 text-xs">
                      <span
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >Emails</span
                      >
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="flex space-x-2">
            <img
                data-tooltip="Award Level 2"
                class="size-6"
                src="/images/awards/award-1.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-24.svg"
                alt="avatar"
            />
            <img
                data-tooltip="Award Level 3"
                class="size-6"
                src="/images/awards/award-30.svg"
                alt="avatar"
            />
          </div>
          <button
              class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
