<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";
import Tab from "@/components/tab.js";
export default {
  extends: Dashboards,
  mounted() {
    new Tab(this.$refs["exchange-tab"]);

    const watchlist1Config = {
      colors: ["#F7931A"],
      chart: {
        height: 60,
        width: 120,
        type: "line",
        parentHeightOffset: 0,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Stat",
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
          top: -28,
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
    };

    const watchlist1El = document.querySelector("#watchlist-1-chart");

    setTimeout(() => {
      watchlist1El._chart = new ApexCharts(watchlist1El, watchlist1Config);
      watchlist1El._chart.render();
    });

    // Watchlist 2 Chart
    const watchlist2Config = {
      colors: ["#627EEA"],
      chart: {
        height: 60,
        width: 120,
        type: "line",
        parentHeightOffset: 0,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Stat",
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
          top: -28,
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
    };

    const watchlist2El = document.querySelector("#watchlist-2-chart");

    setTimeout(() => {
      watchlist2El._chart = new ApexCharts(watchlist2El, watchlist2Config);
      watchlist2El._chart.render();
    });

    // Watchlist 3 Chart
    const watchlist3Config = {
      colors: ["#3AC5BC"],
      chart: {
        height: 60,
        width: 120,
        type: "line",
        parentHeightOffset: 0,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Stat",
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
          top: -28,
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
    };

    const watchlist3El = document.querySelector("#watchlist-3-chart");

    setTimeout(() => {
      watchlist3El._chart = new ApexCharts(watchlist3El, watchlist3Config);
      watchlist3El._chart.render();
    });

    // Watchlist 4 Chart
    const watchlist4Config = {
      colors: ["#4073C3"],
      chart: {
        height: 60,
        width: 120,
        type: "line",
        parentHeightOffset: 0,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Stat",
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
          top: -28,
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
    };

    const watchlist4El = document.querySelector("#watchlist-4-chart");

    setTimeout(() => {
      watchlist4El._chart = new ApexCharts(watchlist4El, watchlist4Config);
      watchlist4El._chart.render();
    });

    // Transactions Chart
    const transactionsConfig = {
      colors: ["#0EA5E9", "#F000B9"],
      series: [
        {
          name: "Income",
          data: [28, 45, 35, 50, 32, 48, 31],
        },
        {
          name: "outcome",
          data: [14, 25, 20, 25, 12, 16, 12],
        },
      ],
      chart: {
        height: 228,
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
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

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
          bottom: -10,
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
    };

    const transactionsEl = document.querySelector("#transactions-chart");

    setTimeout(() => {
      transactionsEl._chart = new ApexCharts(transactionsEl, transactionsConfig);
      transactionsEl._chart.render();
    });

    // Dropdown Menu Config
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

    // Balance Menu
    new Popper("#balance-menu", ".popper-ref", ".popper-root", dropdownConfig);

    // Accounts Menu
    new Popper("#accounts-menu", ".popper-ref", ".popper-root", dropdownConfig);

    // Watchlist Menu
    new Popper("#watchlist-menu", ".popper-ref", ".popper-root", dropdownConfig);

    // Exchange Menu
    new Popper("#exchange-menu", ".popper-ref", ".popper-root", dropdownConfig);

    // Activities Menu
    new Popper("#activities-menu", ".popper-ref", ".popper-root", dropdownConfig);

    // Transactions Menu
    new Popper(
        "#transactions-menu",
        ".popper-ref",
        ".popper-root",
        dropdownConfig
    );
  }
}
</script>

<template>
  <div
      class="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6"
  >
    <div class="col-span-12 lg:col-span-8">
      <div
          class="card bg-gradient-to-br from-purple-500 to-indigo-600 px-4 pb-4 sm:px-5"
      >
        <div class="flex items-center justify-between py-3 text-white">
          <h2 class="text-sm+ font-medium tracking-wide">Your Balance</h2>
          <div id="balance-menu" class="inline-flex">
            <button
                class="popper-ref btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
        <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          <div>
            <div class="flex w-9/12 items-center space-x-1">
              <p class="text-xs text-indigo-100 line-clamp-1">
                0x9CDBC28F0A6C13BB42ACBD3A3B366BFCAB07B8B1
              </p>
              <button
                  class="btn h-5 w-5 shrink-0 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path
                      d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                  />
                  <path
                      d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 text-3xl font-semibold text-white">
              $5,566.00
            </div>
            <p class="mt-3 text-xs+ text-indigo-100">11.159849849 BTC</p>
          </div>

          <div class="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            <div>
              <p class="text-indigo-100">Income</p>
              <div class="mt-1 flex items-center space-x-2">
                <div
                    class="flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-white"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
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
                <p class="text-base font-medium text-white">$2,225.22</p>
              </div>

              <button
                  class="btn mt-3 w-full border border-white/10 bg-white/20 text-white hover:bg-white/30 focus:bg-white/30"
              >
                Receive
              </button>
            </div>
            <div>
              <p class="text-indigo-100">Expense</p>
              <div class="mt-1 flex items-center space-x-2">
                <div
                    class="flex h-7 w-7 items-center justify-center rounded-full bg-black/20 text-white"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
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
                <p class="text-base font-medium text-white">$225.22</p>
              </div>
              <button
                  class="btn mt-3 w-full border border-white/10 bg-white/20 text-white hover:bg-white/30 focus:bg-white/30"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-4 pb-1 sm:mt-5 lg:mt-6">
        <div class="my-3 flex items-center justify-between px-4 sm:px-5">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Watchlist
          </h2>
          <div id="watchlist-menu" class="inline-flex">
            <button
                class="popper-ref btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
        <div
            class="scrollbar-sm flex space-x-4 overflow-x-auto overflow-y-hidden px-4 pb-2 sm:px-5"
        >
          <div class="flex w-72 shrink-0 flex-col">
            <div class="flex items-center space-x-2">
              <img
                  class="h-6 w-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <div>
                <span>Bitcoin</span>
                <span
                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                >
                        btc
                      </span>
              </div>
            </div>

            <div
                class="mt-2.5 flex justify-between rounded-lg bg-slate-50 py-3 pr-3 dark:bg-navy-600"
            >
              <div class="ax-transparent-gridline">
                <div id="watchlist-1-chart"></div>
              </div>
              <div
                  class="flex w-36 flex-col items-center rounded-lg bg-slate-100 py-2 font-inter dark:bg-navy-500"
              >
                <p
                    class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  $31,566.11
                </p>
                <p
                    class="mt-1 flex items-center space-x-0.5 text-xs text-success"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
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
          </div>
          <div class="flex w-72 shrink-0 flex-col">
            <div class="flex items-center space-x-2">
              <img
                  class="h-6 w-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <div>
                <span>Ethereum</span>
                <span
                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                >
                        ETH
                      </span>
              </div>
            </div>

            <div
                class="mt-2.5 flex justify-between rounded-lg bg-slate-50 py-3 pr-3 dark:bg-navy-600"
            >
              <div class="ax-transparent-gridline">
                <div id="watchlist-2-chart"></div>
              </div>
              <div
                  class="flex w-36 flex-col items-center rounded-lg bg-slate-100 py-2 font-inter dark:bg-navy-500"
              >
                <p
                    class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  $7,668.56
                </p>
                <p
                    class="mt-1 flex items-center space-x-0.5 text-xs text-error"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
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
                  <span>6.53%</span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-72 shrink-0 flex-col">
            <div class="flex items-center space-x-2">
              <img
                  class="h-6 w-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <div>
                <span>Solana</span>
                <span
                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                >
                        SOl
                      </span>
              </div>
            </div>

            <div
                class="mt-2.5 flex justify-between rounded-lg bg-slate-50 py-3 pr-3 dark:bg-navy-600"
            >
              <div class="ax-transparent-gridline">
                <div id="watchlist-3-chart"></div>
              </div>
              <div
                  class="flex w-36 flex-col items-center rounded-lg bg-slate-100 py-2 font-inter dark:bg-navy-500"
              >
                <p
                    class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  $1,956.11
                </p>
                <p
                    class="mt-1 flex items-center space-x-0.5 text-xs text-success"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
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
                  <span>3.6%</span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex w-72 shrink-0 flex-col">
            <div class="flex items-center space-x-2">
              <img
                  class="h-6 w-6"
                  src="/images/100x100.png"                     alt="flag"
              />
              <div>
                <span>Litecoin</span>
                <span
                    class="text-xs uppercase text-slate-400 dark:text-navy-300"
                >
                        LTC
                      </span>
              </div>
            </div>

            <div
                class="mt-2.5 flex justify-between rounded-lg bg-slate-50 py-3 pr-3 dark:bg-navy-600"
            >
              <div class="ax-transparent-gridline">
                <div id="watchlist-4-chart"></div>
              </div>
              <div
                  class="flex w-36 flex-col items-center rounded-lg bg-slate-100 py-2 font-inter dark:bg-navy-500"
              >
                <p
                    class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  $487.76
                </p>
                <p
                    class="mt-1 flex items-center space-x-0.5 text-xs text-success"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
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
                  <span>7.98%</span>
                </p>
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
            Latest Activities
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
                  class="table-search-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
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

            <div id="activities-menu" class="inline-flex">
              <button
                  class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
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
                  Activity
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Account
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Last Payment
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Balance
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
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent dark:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5.5 w-5.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >
                        Insurance
                      </p>
                      <p
                          class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                      >
                        Property Coverage
                      </p>
                    </div>
                  </div>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >
                    LTC Wallet
                  </p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p>Mon, 12 May - 09:00</p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p class="font-semibold text-error">-7.55 LTC</p>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-info/10 text-info dark:bg-info dark:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5.5 w-5.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >
                        Electricity
                      </p>
                      <p
                          class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                      >
                        Utility Payment
                      </p>
                    </div>
                  </div>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >
                    BTC Wallet
                  </p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p>Wed, 14 May - 12:47</p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p class="font-semibold text-error">-0.0255 BTC</p>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning dark:bg-warning dark:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5.5 w-5.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >
                        Konnor Guzman
                      </p>
                      <p
                          class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                      >
                        Personal
                      </p>
                    </div>
                  </div>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >
                    BTC Wallet
                  </p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p>SUN, 20 May - 10:16</p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p class="font-semibold text-success">+0.55 BTC</p>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning dark:bg-warning dark:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5.5 w-5.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >
                        Alfredo Elliott
                      </p>
                      <p
                          class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                      >
                        Personal
                      </p>
                    </div>
                  </div>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >
                    ETH Wallet
                  </p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p>THU, 23 May - 15:09</p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p class="font-semibold text-success">+3.25 ETH</p>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning dark:bg-warning dark:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5.5 w-5.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >
                        Henry Curtis
                      </p>
                      <p
                          class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                      >
                        Personal
                      </p>
                    </div>
                  </div>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >
                    BTC Wallet
                  </p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p>Wed, 26 May - 12:22</p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p class="font-semibold text-success">+0.0086 BTC</p>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-info/10 text-info dark:bg-info dark:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5.5 w-5.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >
                        Electricity
                      </p>
                      <p
                          class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                      >
                        Utility Payment
                      </p>
                    </div>
                  </div>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >
                    ETH Wallet
                  </p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p>Sun, 30 May - 13:17</p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p class="font-semibold text-error">-2.894 ETH</p>
                </td>

                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button
                      class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent dark:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5.5 w-5.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                          class="font-medium text-slate-700 dark:text-navy-100"
                      >
                        Insurance
                      </p>
                      <p
                          class="mt-0.5 text-xs text-slate-400 dark:text-navy-300"
                      >
                        Property Coverage
                      </p>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >
                    LTC Wallet
                  </p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p>Mon, 12 May - 09:00</p>
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p class="font-semibold text-error">-7.55 LTC</p>
                </td>
                <td
                    class="whitespace-nowrap rounded-br-lg px-4 py-3 sm:px-5"
                >
                  <button
                      class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
    <div
        class="col-span-12 grid grid-cols-1 gap-4 sm:gap-5 lg:col-span-4 lg:gap-6"
    >
      <div class="card pb-4">
        <div class="flex items-center justify-between px-4 py-3 sm:px-5">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Accounts
          </h2>
          <div id="accounts-menu" class="inline-flex">
            <button
                class="popper-ref btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
        <div
            class="scrollbar-sm flex space-x-3 overflow-x-auto px-4 pb-3 sm:px-5"
        >
          <div
              class="w-48 shrink-0 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 p-[3px]"
          >
            <div class="rounded-lg bg-white p-3 dark:bg-navy-700">
              <div class="flex items-center justify-between">
                <p>Bitcoin</p>
                <img
                    src="/images/100x100.png"                       class="h-6 w-6"
                    alt="logo"
                />
              </div>

              <div class="mt-4 flex items-end justify-between">
                <p
                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                >
                  .739
                </p>
                <p>$7,946.00</p>
              </div>
            </div>
          </div>

          <div
              class="w-48 shrink-0 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 p-[3px]"
          >
            <div class="rounded-lg bg-white p-3 dark:bg-navy-700">
              <div class="flex items-center justify-between">
                <p>Litecoin</p>
                <img
                    src="/images/100x100.png"                       class="h-6 w-6"
                    alt="logo"
                />
              </div>

              <div class="mt-4 flex items-end justify-between">
                <p
                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                >
                  3.545
                </p>
                <p>$2,589.00</p>
              </div>
            </div>
          </div>
          <div
              class="w-48 shrink-0 rounded-lg bg-gradient-to-br from-info to-info-focus p-[3px]"
          >
            <div class="rounded-lg bg-white p-3 dark:bg-navy-700">
              <div class="flex items-center justify-between">
                <p>Ethereum</p>
                <img
                    src="/images/100x100.png"                       class="h-6 w-6"
                    alt="logo"
                />
              </div>

              <div class="mt-4 flex items-end justify-between">
                <p
                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                >
                  5.589
                </p>
                <p>$11,499.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-1 px-4 sm:px-5">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Send Money
          </h2>
          <div class="mt-3 flex space-x-2">
            <div class="avatar h-8 w-8 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar h-8 w-8 hover:z-10">
              <div
                  class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
              >
                jd
              </div>
            </div>

            <div class="avatar h-8 w-8 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar h-8 w-8 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-xs+">View All Contacts</p>

            <button
                class="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
            class="mx-4 my-3 h-px bg-slate-200 dark:bg-navy-500 sm:mx-5"
        ></div>

        <div class="px-4 sm:px-5">
          <div class="flex items-center justify-between">
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Exchange
            </h2>
            <div id="exchange-menu" class="inline-flex">
              <button
                  class="popper-ref btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
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
          <div ref="exchange-tab" class="tabs mt-3 flex flex-col">
            <div class="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-150 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
              <div class="tabs-list flex px-1.5 py-1">
                <button
                    data-target="#exchange-tab-receive"
                    class="tab btn flex-1 space-x-2 px-3 py-2 font-medium"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                  </svg>
                  <span> Receive </span>
                </button>
                <button
                    data-target="#exchange-tab-send"
                    class="tab btn flex-1 space-x-2 px-3 py-2 font-medium"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-4.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    />
                  </svg>
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="pt-4">
              <p class="text-xs+">You send</p>
              <div
                  class="mt-1 flex justify-between space-x-2 rounded-2xl bg-slate-150 p-1.5 dark:bg-navy-800"
              >
                <select
                    class="form-select h-8 rounded-2xl border border-transparent bg-white px-4 py-0 pr-9 text-xs+ hover:border-slate-400 focus:border-primary dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                >
                  <option>Bitcoin</option>
                  <option>Ethereum</option>
                  <option>Solana</option>
                  <option>Litecoin</option>
                </select>
                <input
                    class="form-input w-full bg-transparent px-2 text-right placeholder:text-slate-400/70"
                    placeholder="Amount"
                    type="text"
                />
              </div>
            </div>
            <div class="pt-4">
              <p class="text-xs+">You receive</p>
              <div
                  class="mt-1 flex justify-between space-x-2 rounded-2xl bg-slate-150 p-1.5 dark:bg-navy-800"
              >
                <select
                    class="form-select h-8 rounded-2xl border border-transparent bg-white px-4 py-0 pr-9 text-xs+ hover:border-slate-400 focus:border-primary dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                >
                  <option>Dollar</option>
                  <option>Ethereum</option>
                  <option>Solana</option>
                  <option>Litecoin</option>
                </select>
                <input
                    class="form-input w-full bg-transparent px-2 text-right placeholder:text-slate-400/70"
                    placeholder="Amount"
                    type="text"
                />
              </div>
            </div>
            <div class="absolute right-0 top-1/2 mt-1">
              <button
                  class="btn mask is-hexagon h-7 w-7 bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
              class="btn mt-6 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Buy BTC
          </button>
        </div>
      </div>

      <div class="card">
        <div class="mt-3 flex items-center justify-between px-4 sm:px-5">
          <h2
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Transactions
          </h2>
          <div id="transactions-menu" class="inline-flex">
            <button
                class="popper-ref btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
          <div id="transactions-chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>
