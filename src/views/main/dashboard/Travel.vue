<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";
import { useThemeStore } from "@/components/theme/theme.js";

export default {
  extends: Dashboards,
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full pb-8')
  },
  data() {
    return {
      analyticsConfig: {
        colors: ["#4ade80", "#f43f5e", "#a855f7"],
        series: [44, 55, 67],
        chart: {
          height: 250,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: "35%",
            },
            track: {
              margin: 10,
            },
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  return w.config.series.reduce((s, v) => s + v);
                },
              },
            },
          },
        },
        grid: {
          padding: {
            top: -20,
            bottom: -20,
            right: 0,
            left: 0,
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Booked", "Cancelled", "Unconfirmed"],
      },
      expenseConfig: {
        colors: ["#0EA5E9"],
        series: [
          {
            name: "Expense",
            data: [82, 25, 60, 30, 50, 20],
          },
        ],
        chart: {
          type: "area",
          stacked: false,
          height: 180,
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
            top: -20,
            bottom: -8,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.1,
            stops: [20, 100, 100, 100],
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

    // Travels History Menu
    new Popper(
        "#travels-history-menu",
        ".popper-ref",
        ".popper-root",
        dropdownConfig
    );

    // Analytics Menu
    new Popper("#analytics-menu", ".popper-ref", ".popper-root", dropdownConfig);

    // Expense Menu
    new Popper("#expense-menu", ".popper-ref", ".popper-root", dropdownConfig);
  }
}
</script>

<template>
  <div class="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div class="card col-span-12 lg:col-span-8 xl:col-span-9">
      <div class="mt-3 flex items-center justify-between px-4 sm:px-5">
        <h2
            class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Travels History
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
          <div id="travels-history-menu" class="inline-flex">
            <button
                class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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

      <div
          class="mt-5 grid grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-5"
      >
        <div
            class="relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-info to-info-focus p-3.5"
        >
          <p class="text-xs uppercase text-sky-100">Total Booking</p>
          <div class="flex items-end justify-between space-x-2">
            <p class="mt-4 text-2xl font-medium text-white">31,556</p>
            <a
                href="#"
                class="border-b border-dotted border-current pb-0.5 text-xs font-medium text-sky-100 outline-none transition-colors duration-300 line-clamp-1 hover:text-white focus:text-white"
            >Get Report
            </a>
          </div>
          <div
              class="mask is-reuleaux-triangle absolute top-0 right-0 -m-3 size-16 bg-white/20"
          ></div>
        </div>
        <div
            class="relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 p-3.5"
        >
          <p class="text-xs uppercase text-amber-50">Total Revenue</p>
          <div class="flex items-end justify-between space-x-2">
            <p class="mt-4 text-2xl font-medium text-white">$61,556</p>
            <a
                href="#"
                class="border-b border-dotted border-current pb-0.5 text-xs font-medium text-amber-50 outline-none transition-colors duration-300 line-clamp-1 hover:text-white focus:text-white"
            >Get Report
            </a>
          </div>
          <div
              class="mask is-diamond absolute top-0 right-0 -m-3 size-16 bg-white/20"
          ></div>
        </div>
        <div
            class="relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 p-3.5"
        >
          <p class="text-xs uppercase text-pink-100">Total Debt</p>
          <div class="flex items-end justify-between space-x-2">
            <p class="mt-4 text-2xl font-medium text-white">$12,556</p>
            <a
                href="#"
                class="border-b border-dotted border-current pb-0.5 text-xs font-medium text-pink-100 outline-none transition-colors duration-300 line-clamp-1 hover:text-white focus:text-white"
            >Get Report
            </a>
          </div>
          <div
              class="mask is-hexagon-2 absolute top-0 right-0 -m-3 size-16 bg-white/20"
          ></div>
        </div>
      </div>

      <div class="scrollbar-sm mt-5 min-w-full overflow-x-auto">
        <table class="is-hoverable w-full text-left">
          <tbody>
          <tr
              class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
          >
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <div class="flex items-center space-x-4">
                <div class="size-12">
                  <img
                      class="h-full w-full rounded-lg"
                      src="/images/800x800.png"
                      alt="image"
                  />
                </div>
                <div>
                  <p
                      class="font-medium text-slate-600 dark:text-navy-100"
                  >
                    Glacier National Park
                  </p>
                  <p
                      class="mt-1 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Unated States
                  </p>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">5 Night</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-departure"></i>
              &hairsp;
              <span>05 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-arrival"></i>
              &hairsp;
              <span>12 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">2 Adult</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <p class="font-medium text-slate-700 dark:text-navy-100">
                $120
              </p>
            </td>
          </tr>
          <tr
              class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
          >
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <div class="flex items-center space-x-4">
                <div class="size-12">
                  <img
                      class="h-full w-full rounded-lg"
                      src="/images/800x800.png"
                      alt="image"
                  />
                </div>
                <div>
                  <p
                      class="font-medium text-slate-600 dark:text-navy-100"
                  >
                    Tahiti
                  </p>
                  <p
                      class="mt-1 text-xs text-slate-400 dark:text-navy-300"
                  >
                    French
                  </p>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">4 Night</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-departure"></i>
              &hairsp;
              <span>08 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-arrival"></i>
              &hairsp;
              <span>14 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">3 Adult</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <p class="font-medium text-slate-700 dark:text-navy-100">
                $140
              </p>
            </td>
          </tr>

          <tr
              class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
          >
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <div class="flex items-center space-x-4">
                <div class="size-12">
                  <img
                      class="h-full w-full rounded-lg"
                      src="/images/800x800.png"
                      alt="image"
                  />
                </div>
                <div>
                  <p
                      class="font-medium text-slate-600 dark:text-navy-100"
                  >
                    Argentine Patagonia
                  </p>
                  <p
                      class="mt-1 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Argentine
                  </p>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              12 Night
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-departure"></i>
              &hairsp;
              <span>11 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-arrival"></i>
              &hairsp;
              <span>23 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">6 Adult</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <p class="font-medium text-slate-700 dark:text-navy-100">
                $300
              </p>
            </td>
          </tr>
          <tr
              class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
          >
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <div class="flex items-center space-x-4">
                <div class="size-12">
                  <img
                      class="h-full w-full rounded-lg"
                      src="/images/800x800.png"
                      alt="image"
                  />
                </div>
                <div>
                  <p
                      class="font-medium text-slate-600 dark:text-navy-100"
                  >
                    Amalfi Coast
                  </p>
                  <p
                      class="mt-1 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Italy
                  </p>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">2 Night</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-departure"></i>
              &hairsp;
              <span>10 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-arrival"></i>
              &hairsp;
              <span>12 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">1 Adult</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <p class="font-medium text-slate-700 dark:text-navy-100">
                $80
              </p>
            </td>
          </tr>
          <tr
              class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
          >
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <div class="flex items-center space-x-4">
                <div class="size-12">
                  <img
                      class="h-full w-full rounded-lg"
                      src="/images/800x800.png"
                      alt="image"
                  />
                </div>
                <div>
                  <p
                      class="font-medium text-slate-600 dark:text-navy-100"
                  >
                    Great Barrier Reef
                  </p>
                  <p
                      class="mt-1 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Australia
                  </p>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">4 Night</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-departure"></i>
              &hairsp;
              <span>01 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <i class="fa-solid fa-plane-arrival"></i>
              &hairsp;
              <span>05 Dec 2018</span>
            </td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">3 Adult</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">
              <p class="font-medium text-slate-700 dark:text-navy-100">
                $100
              </p>
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
    <div
        class="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-4 lg:grid-cols-1 lg:gap-6 xl:col-span-3"
    >
      <div class="card pb-5">
        <div
            class="my-3 flex h-8 items-center justify-between px-4 sm:px-5"
        >
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Analytics
          </h2>

          <div id="analytics-menu" class="inline-flex">
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
          <div v-apex-charts="analyticsConfig"></div>
        </div>
        <div
            class="mx-auto mt-3 max-w-xs px-4 text-center text-xs+ sm:px-5"
        >
          <p>Travel analytics calculated based on travels count</p>
        </div>
      </div>
      <div class="card">
        <div class="mt-3 flex items-center justify-between px-4 sm:px-5">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Expense
          </h2>

          <div id="expense-menu" class="inline-flex">
            <button
                class="popper-ref btn -mr-2 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        <p
            class="grow px-4 text-xl font-semibold text-slate-700 dark:text-navy-100 sm:px-5"
        >
          $34.6k
        </p>
        <div class="ax-transparent-gridline">
          <div v-apex-charts="expenseConfig"></div>
        </div>
      </div>
    </div>
  </div>
  <div
      class="mt-4 pl-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 lg:mt-6"
  >
    <div class="rounded-l-lg bg-slate-150 pt-4 pb-1 dark:bg-navy-800">
      <h2
          class="px-4 text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 sm:px-5 lg:text-lg"
      >
        Top Hotels
      </h2>
      <div
          class="scrollbar-sm mt-4 flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5"
      >
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-info py-1 uppercase text-white"
              >
                plus
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>3 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>3 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Emerald Bay Inn.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$100</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.9</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-warning py-1 uppercase text-white"
              >
                lux
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>2 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>5 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Crowne Plaza.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$80</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.8</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-secondary py-1 uppercase text-white"
              >
                Penthouse
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>3 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>3 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Sunset Lodge.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$100</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.9</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-info py-1 uppercase text-white"
              >
                plus
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>1 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>2 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Hotel Elite.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$120</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.9</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-warning py-1 uppercase text-white"
              >
                lux
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>2 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>5 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Hotel Bliss.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$90</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.5</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-info py-1 uppercase text-white"
              >
                plus
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>3 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>3 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Emerald Bay Inn.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$100</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.9</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-warning py-1 uppercase text-white"
              >
                lux
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>2 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>5 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Crowne Plaza.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$80</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.8</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-secondary py-1 uppercase text-white"
              >
                Penthouse
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>3 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>3 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Sunset Lodge.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$100</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.9</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-info py-1 uppercase text-white"
              >
                plus
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>1 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>2 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Hotel Elite.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$120</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.9</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72 shrink-0 flex-col">
          <img
              class="h-48 w-full rounded-2xl object-cover object-center"
              src="/images/800x600.png"
              alt="image"
          />

          <div class="card mx-2 -mt-8 grow rounded-2xl p-3.5">
            <div class="flex space-x-2">
              <div
                  class="badge rounded-full bg-warning py-1 uppercase text-white"
              >
                lux
              </div>
              <div
                  class="flex flex-wrap items-center font-inter text-xs uppercase"
              >
                <p>2 beds</p>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>5 Adult</p>
              </div>
            </div>
            <div class="mt-2">
              <a
                  href="#"
                  class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >Hotel Bliss.</a
              >
            </div>
            <div class="flex items-end justify-between">
              <p class="mt-2">
                      <span
                          class="text-base font-medium text-slate-700 dark:text-navy-100"
                      >$90</span
                      >
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >/day</span
                >
              </p>
              <p class="flex shrink-0 items-center space-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="size-3.5 text-slate-400 dark:text-navy-300"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                  />
                </svg>
                <span>4.5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
