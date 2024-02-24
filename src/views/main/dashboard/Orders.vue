<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";
import MoreIcon from "@/components/icons/MoreIcon.vue";
import Tab from "@/components/tab.js";
export default {
  extends: Dashboards,
  components: {
    'ui-more-icon': MoreIcon
  },
  data() {
    return {
      overviewChartConfig: {
        colors: ["#4C4EE7", "#26E7A6", "#FF9800"],
        series: [
          {
            name: "Orders",
            data: [28, 45, 35, 50, 32, 55, 23, 60, 28],
          },
          {
            name: "Completed Orders",
            data: [14, 25, 20, 25, 12, 20, 15, 20, 14],
          },
          {
            name: "Returned Orders",
            data: [4, 5, 6, 5, 2, 5, 3, 6, 3],
          },
        ],
        chart: {
          height: 270,
          type: "bar",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            barHeight: "90%",
            columnWidth: "35%",
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          labels: {
            hideOverlappingLabels: false,
          },
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
            bottom: 0,
          },
        },
        yaxis: {
          show: false,
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
        responsive: [
          {
            breakpoint: 850,
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "55%",
                },
              },
            },
          },
        ],
      },
      budgetChartConfig: {
        series: [
          {
            name: "Start",
            data: [44, 55, 41, 25, 22, 56],
          },
          {
            name: "End",
            data: [13, 23, 20, 60, 13, 16],
          },
        ],
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 10,
            bottom: -12,
            top: 0,
          },
        },
        yaxis: {
          show: false,
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
        xaxis: {
          show: false,

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
        chart: {
          type: "bar",
          height: 120,
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
          stacked: true,
          stackType: "100%",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: ["#0EA5E9", "#e2e8f0"],
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            horizontal: false,
            columnWidth: 8,
          },
        },
        legend: {
          show: false,
        },
      },
      incomeChartConfig: {
        colors: ["#10b981"],
        series: [
          {
            name: "Income",
            data: [20, 50, 30, 60, 33, 75],
          },
        ],
        chart: {
          type: "area",
          stacked: false,
          height: 150,
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
      },
      expenseChartConfig: {
        colors: ["#FF5724"],
        series: [
          {
            name: "Expense",
            data: [82, 25, 60, 30, 50, 20],
          },
        ],
        chart: {
          type: "area",
          stacked: false,
          height: 150,
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
      },
      topSeller1Config: {
        colors: ["#4467EF"],
        chart: {
          height: 100,
          type: "line",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        series: [
          {
            name: "Income",
            data: [20, 420, 102, 540, 275, 614],
          },
        ],

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },

        grid: {
          padding: {
            left: 0,
            right: 0,
            top: -10,
            bottom: 0,
          },
        },
        xaxis: {
          show: false,
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
        yaxis: {
          show: false,
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
      },
      topSeller2Config: {
        colors: ["#4467EF"],
        chart: {
          height: 100,
          type: "line",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        series: [
          {
            name: "Income",
            data: [54, 77, 43, 69, 12],
          },
        ],

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },

        grid: {
          padding: {
            left: 0,
            right: 0,
            top: -10,
            bottom: 0,
          },
        },
        xaxis: {
          show: false,
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
        yaxis: {
          show: false,
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
      },
      topSeller3Config: {
        colors: ["#4467EF"],
        chart: {
          height: 100,
          type: "line",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        series: [
          {
            name: "Income",
            data: [0, 20, 10, 30, 20, 50],
          },
        ],

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },

        grid: {
          padding: {
            left: 0,
            right: 0,
            top: -10,
            bottom: 0,
          },
        },
        xaxis: {
          show: false,
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
        yaxis: {
          show: false,
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
      },
      topSeller4Config: {
        colors: ["#4467EF"],
        chart: {
          height: 100,
          type: "line",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        series: [
          {
            name: "Income",
            data: [654, 820, 102, 540, 154, 614],
          },
        ],

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },

        grid: {
          padding: {
            left: 0,
            right: 0,
            top: -10,
            bottom: 0,
          },
        },
        xaxis: {
          show: false,
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
        yaxis: {
          show: false,
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
      },
      dropdownConfig: {
        placement: "bottom-end",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
        ],
      }
    }
  },
  mounted() {
    new Tab("#overview-tab");
  }
}
</script>

<template>
  <div class="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div class="card col-span-12 lg:col-span-8">
      <div class="mt-3 flex flex-col justify-between px-4 sm:flex-row sm:items-center sm:px-5">
        <div class="flex flex-1 items-center justify-between space-x-2 sm:flex-initial">
          <h2 class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100">
            Order Overview
          </h2>
          <div v-popper="{ ref: '.popper-ref', root: '.popper-root', config: dropdownConfig }" class="inline-flex">
            <button class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <ui-more-icon />
            </button>

            <div class="popper-root">
              <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
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
        <div id="overview-tab" class="hidden space-x-2 sm:flex">
          <button
              data-target="#overview-tab-monthly"
              class="tab btn h-8 rounded-full text-xs font-medium"
              data-active-class="bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
              data-default-class="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100"
          >
            Monthly
          </button>
          <button
              data-target="#overview-tab-yearly"
              class="tab btn h-8 rounded-full text-xs+ font-medium"
              data-active-class="bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
              data-default-class="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100"
          >
            Yearly
          </button>
        </div>
      </div>

      <div
          class="mt-4 grid grid-cols-2 gap-3 px-4 sm:mt-5 sm:grid-cols-4 sm:gap-5 sm:px-5 lg:mt-6"
      >
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-navy-600">
          <div class="flex justify-between space-x-1">
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              $67.6k
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-primary dark:text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p class="mt-1 text-xs+">Income</p>
        </div>
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-navy-600">
          <div class="flex justify-between">
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              12.6K
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <p class="mt-1 text-xs+">Completed</p>
        </div>
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-navy-600">
          <div class="flex justify-between">
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              143
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-warning"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p class="mt-1 text-xs+">Pending</p>
        </div>
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-navy-600">
          <div class="flex justify-between">
            <p
                class="text-xl font-semibold text-slate-700 dark:text-navy-100"
            >
              651
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-info"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
          </div>
          <p class="mt-1 text-xs+">Dispatch</p>
        </div>
      </div>

      <div class="ax-transparent-gridline mt-2 px-2">
        <div v-apex-charts="overviewChartConfig"></div>
      </div>
    </div>
    <div
        class="col-span-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:col-span-4 lg:grid-cols-2 lg:gap-6"
    >
      <div class="card col-span-2 px-4 pb-5 sm:px-5">
        <div class="flex items-center justify-between py-3">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Budget
          </h2>
          <div v-popper="{ ref: '.popper-ref', root: '.popper-root', config: dropdownConfig }" class="inline-flex">
            <button class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <ui-more-icon />
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
        <div class="flex grow space-x-5">
          <div class="flex w-1/2 flex-col">
            <div class="grow">
              <p
                  class="text-2xl font-semibold text-slate-700 dark:text-navy-100"
              >
                $67.4k
              </p>
              <a
                  href="#"
                  class="border-b border-dotted border-current pb-0.5 text-tiny font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
              >
                Yearly Budget
              </a>
            </div>
            <p class="mt-2 text-xs leading-normal line-clamp-3">
              You have spent about 25% of your annual budget.
            </p>
          </div>

          <div class="ax-transparent-gridline flex w-1/2 items-end">
            <div v-apex-charts="budgetChartConfig"></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="mt-3 flex items-center justify-between px-4 sm:px-5">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Income
          </h2>

          <div v-popper="{ ref: '.popper-ref', root: '.popper-root', config: dropdownConfig }" class="inline-flex">
            <button class="popper-ref btn -mr-2 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <ui-more-icon />
            </button>

            <div class="popper-root w-max">
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
          $169.6k
        </p>
        <div class="ax-transparent-gridline">
          <div v-apex-charts="incomeChartConfig"></div>
        </div>
      </div>
      <div class="card">
        <div class="mt-3 flex items-center justify-between px-4 sm:px-5">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Expense
          </h2>

          <div v-popper="{ ref: '.popper-ref', root: '.popper-root', config: dropdownConfig }" class="inline-flex">
            <button class="popper-ref btn -mr-2 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <ui-more-icon />
            </button>

            <div class="popper-root w-max">
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
          <div v-apex-charts="expenseChartConfig"></div>
        </div>
      </div>
    </div>
    <div class="card col-span-12 pb-2 lg:col-span-5 xl:col-span-6">
      <div class="my-3 flex items-center justify-between px-4 sm:px-5">
        <h2
            class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
        >
          Top Sellers
        </h2>
        <div v-popper="{ ref: '.popper-ref', root: '.popper-root', config: dropdownConfig }" class="inline-flex">
          <button class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <<ui-more-icon />
          </button>

          <div class="popper-root">
            <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
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
      <div
          class="scrollbar-sm flex space-x-3 overflow-x-auto px-4 pb-3 sm:px-5"
      >
        <div
            class="w-56 shrink-0 rounded-xl bg-slate-50 p-4 dark:bg-navy-600"
        >
          <div class="flex flex-col items-center space-y-3 text-center">
            <div
                class="size-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5"
            >
              <img
                  class="h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
              >
                Travis Fuller
              </p>
              <p class="text-xs+ text-slate-400 dark:text-navy-300">
                Salesman
              </p>
            </div>
          </div>
          <div class="mt-5">
            <div>
              <p>Sales</p>
              <div class="mt-0.5 flex space-x-2">
                <p
                    class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                >
                  2 348
                </p>
                <p
                    class="flex items-center space-x-0.5 text-xs text-success"
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
                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                  <span>4.3%</span>
                </p>
              </div>
            </div>
            <div class="ax-transparent-gridline">
              <div v-apex-charts="topSeller1Config"></div>
            </div>
          </div>
          <div class="mt-5 flex justify-center space-x-2">
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
            class="w-56 shrink-0 rounded-xl bg-slate-50 p-4 dark:bg-navy-600"
        >
          <div class="flex flex-col items-center space-y-3 text-center">
            <div
                class="size-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5"
            >
              <img
                  class="h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
              >
                Konnor Guzman
              </p>
              <p class="text-xs+ text-slate-400 dark:text-navy-300">
                Salesman
              </p>
            </div>
          </div>
          <div class="mt-5">
            <div>
              <p>Sales</p>
              <div class="mt-0.5 flex space-x-2">
                <p
                    class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                >
                  6 052
                </p>
                <p
                    class="flex items-center space-x-0.5 text-xs text-error"
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
                        d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                  <span>2.33%</span>
                </p>
              </div>
            </div>
            <div class="ax-transparent-gridline">
              <div v-apex-charts="topSeller2Config"></div>
            </div>
          </div>
          <div class="mt-5 flex justify-center space-x-2">
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
            class="w-56 shrink-0 rounded-xl bg-slate-50 p-4 dark:bg-navy-600"
        >
          <div class="flex flex-col items-center space-y-3 text-center">
            <div
                class="size-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5"
            >
              <img
                  class="h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
              >
                Katrina West
              </p>
              <p class="text-xs+ text-slate-400 dark:text-navy-300">
                Saleswoman
              </p>
            </div>
          </div>
          <div class="mt-5">
            <div>
              <p>Sales</p>
              <div class="mt-0.5 flex space-x-2">
                <p
                    class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                >
                  2 348
                </p>
                <p
                    class="flex items-center space-x-0.5 text-xs text-success"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span>3.33%</span>
                </p>
              </div>
            </div>
            <div class="ax-transparent-gridline">
              <div v-apex-charts="topSeller3Config"></div>
            </div>
          </div>
          <div class="mt-5 flex justify-center space-x-2">
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
            class="w-56 shrink-0 rounded-xl bg-slate-50 p-4 dark:bg-navy-600"
        >
          <div class="flex flex-col items-center space-y-3 text-center">
            <div
                class="size-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5"
            >
              <img
                  class="h-full w-full rounded-full border-2 border-white object-cover object-center dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="image"
              />
            </div>
            <div>
              <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
              >
                Henry Curtis
              </p>
              <p class="text-xs+ text-slate-400 dark:text-navy-300">
                Salesman
              </p>
            </div>
          </div>
          <div class="mt-5">
            <div>
              <p>Sales</p>
              <div class="mt-0.5 flex space-x-2">
                <p
                    class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                >
                  4 574
                </p>
                <p
                    class="flex items-center space-x-0.5 text-xs text-success"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span>1.2%</span>
                </p>
              </div>
            </div>
            <div class="ax-transparent-gridline">
              <div v-apex-charts="topSeller4Config"></div>
            </div>
          </div>
          <div class="mt-5 flex justify-center space-x-2">
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
            <button
                class="btn size-8 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
        class="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7 lg:gap-6 xl:col-span-6"
    >
      <div class="card px-4 pb-5 sm:px-5">
        <div class="flex items-center justify-between py-3">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Social Traffic
          </h2>
          <div v-popper="{ ref: '.popper-ref', root: '.popper-root', config: dropdownConfig }" class="inline-flex">
            <button class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <ui-more-icon />
            </button>

            <div class="popper-root">
              <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
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
          <p>
                  <span class="text-2xl text-slate-700 dark:text-navy-100"
                  >135K</span
                  >
            <span class="text-xs text-success">+3.1%</span>
          </p>
          <p class="text-xs+">View in this month</p>
        </div>
        <div class="mt-5 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>Instagram</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                34.3k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>Facebook</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                17.72k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>Youtube</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                12.41k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>Pinterest</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                11.89k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>Discord</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                9.47k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>TikTok</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                8.11k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>Twitter</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                5.98k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <p>Tumblr</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                2.7k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
        </div>
      </div>

      <div class="card px-4 pb-5 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Top Countries
          </h2>
          <a
              href="#"
              class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
          >
            View All
          </a>
        </div>
        <div>
          <p>
                  <span class="text-2xl text-slate-700 dark:text-navy-100"
                  >64</span
                  >
          </p>
          <p class="text-xs+">Countries</p>
        </div>
        <div class="mt-5 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/australia-round.svg"
                  alt="flag"
              />
              <p>Australia</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $6.41k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/brazil-round.svg"
                  alt="flag"
              />
              <p>Brazil</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $2.33k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/china-round.svg"
                  alt="flag"
              />
              <p>China</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $7.21k
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/india-round.svg"
                  alt="flag"
              />
              <p>India</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $754
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/italy-round.svg"
                  alt="flag"
              />
              <p>Italy</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $699
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/japan-round.svg"
                  alt="flag"
              />
              <p>Japan</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $624
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/russia-round.svg"
                  alt="flag"
              />
              <p>Russia</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $574
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <img
                  class="size-6"
                  src="/images/flags/spain-round.svg"
                  alt="flag"
              />
              <p>Spain</p>
            </div>
            <div class="flex items-center space-x-2">
              <p class="text-sm+ text-slate-800 dark:text-navy-100">
                $506
              </p>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-success"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12">
      <div class="flex items-center justify-between">
        <h2
            class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Latest Orders
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
          <div v-popper="{ ref: '.popper-ref', root: '.popper-root', config: dropdownConfig }" class="inline-flex">
            <button class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <ui-more-icon />
            </button>
            <div class="popper-root">
              <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
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
                Order
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Date
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Name
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Address
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Order Status
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Payment
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Total
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
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #95647
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">25 May 2021</p>
                <p class="mt-0.5 text-xs">01:25 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
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
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  260 W. Storm Street New York, NY 10025.
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-warning/10 text-warning dark:bg-warning/15"
                >
                  Unconfirmed
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-warning">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Await Auth</span>
                </div>
              </td>

              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $2 654
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #84895
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">03 May 2021</p>
                <p class="mt-0.5 text-xs">09:44 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >John Due
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  13811 Gimbert Ln Santa Ana, California(CA), 92705
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-success/10 text-success dark:bg-success/15"
                >
                  Completed
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-success">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Paid</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $3 654
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #49756
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">19 Jun 2021</p>
                <p class="mt-0.5 text-xs">5:43 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Tom Robert
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  3803 Fox Rd Huron, Ohio(OH), 44839
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge bg-info/10 text-info dark:bg-info/15">
                  Shipped
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-success">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Paid</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $6 156
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #79632
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">03 Jun 2021</p>
                <p class="mt-0.5 text-xs">4:54 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Nolan Doe
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  1805 Jackson Ave Seaford, New York(NY), 11783
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                >
                  Processing
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-success">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Paid</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $7 621
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #12668
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">09 Jun 2021</p>
                <p class="mt-0.5 text-xs">2:03 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
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
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  421 Basswood Ln Haysville, Kansas(KS), 67060
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-error/10 text-error dark:bg-error/15"
                >
                  Cancelled
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-error">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Failed</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $456
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #66463
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">23 Jul 2021</p>
                <p class="mt-0.5 text-xs">9:11 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
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
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  205 Hope Rd Helena, Montana(MT), 59602
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-warning/10 text-warning dark:bg-warning/15"
                >
                  Unconfirmed
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-warning">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Await Auth</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $5 116
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>

            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #53133
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">11 Aug 2021</p>
                <p class="mt-0.5 text-xs">12:11 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Lance Tucker
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  1805 Jackson Ave Seaford, New York(NY), 11783
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-warning/10 text-warning dark:bg-warning/15"
                >
                  Unconfirmed
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-warning">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Await Auth</span>
                </div>
              </td>

              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $4 952
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #5684
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">11 May 2021</p>
                <p class="mt-0.5 text-xs">07:55 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Raul Bradley
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  13811 Gimbert Ln Santa Ana, California(CA), 92705
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-success/10 text-success dark:bg-success/15"
                >
                  Completed
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-success">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Paid</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $5 137
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #64669
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">29 Jun 2021</p>
                <p class="mt-0.5 text-xs">1:54 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
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
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  3803 Fox Rd Huron, Ohio(OH), 44839
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge bg-info/10 text-info dark:bg-info/15">
                  Shipped
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-success">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Paid</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $2 566
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <ui-more-icon />
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="font-medium text-primary dark:text-accent-light"
                >
                  #31669
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="font-medium">08 Jun 2021</p>
                <p class="mt-0.5 text-xs">7:36 AM</p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-9">
                    <img
                        class="mask is-squircle"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Samantha Shelton
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p class="w-48 overflow-hidden text-ellipsis text-xs+">
                  1805 Jackson Ave Seaford, New York(NY), 11783
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                >
                  Processing
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="badge space-x-2.5 text-xs+ text-success">
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Paid</span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <p
                    class="text-sm+ font-medium text-slate-700 dark:text-navy-100"
                >
                  $9 665
                </p>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                  <ui-more-icon />
                </button>
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
  </div>
</template>
