<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";
export default {
  extends: Dashboards,
  data() {
    return {
      pagesViewConfig: {
        colors: ["#FF9800", "#4C4EE7"],
        series: [
          {
            name: "Previous Period",
            data: [14, 25, 20, 25, 12, 20, 15, 20, 14, 25, 20, 25],
          },
          {
            name: "Current Period",
            data: [28, 45, 35, 50, 32, 55, 23, 60, 28, 45, 35, 50],
          },
        ],
        chart: {
          height: 280,
          type: "bar",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        stroke: {
          show: true,
          width: 3,
          colors: ["transparent"],
        },
        dataLabels: {
          enabled: false,
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
            "Oct",
            "Nov",
            "Dec",
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
            bottom: -10,
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
            breakpoint: 1024,
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
      overviewConfig: {
        colors: ["#0EA5E9"],
        series: [
          {
            name: "High",
            data: [28, 45, 35, 50, 32, 55, 23, 60],
          },
        ],
        chart: {
          parentHeightOffset: 0,
          height: 249,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.35,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
          curve: "smooth",
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
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        },
        yaxis: {
          labels: {
            offsetX: -12,
            offsetY: 0,
          },
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: -10,
            bottom: 8,
          },
        },
      },
      writer1Config: {
        series: [
          {
            name: "Posts",
            data: [1765, 2357, 4215, 3971, 3841, 4221],
          },
        ],
        colors: ["#4467EF"],
        chart: {
          height: 85,
          type: "bar",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        grid: {
          padding: {
            left: -18,
            right: 0,
            top: -30,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "55%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
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
      writer2Config: {
        series: [
          {
            name: "Posts",
            data: [2357, 4215, 1765, 4221, 3841, 5665],
          },
        ],
        colors: ["#f000b9"],
        chart: {
          height: 85,
          type: "bar",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        grid: {
          padding: {
            left: -18,
            right: 0,
            top: -30,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "55%",
          },
        },
        dataLabels: {
          enabled: false,
        },

        xaxis: {
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
      writer3Config: {
        series: [
          {
            name: "Posts",
            data: [6153, 7020, 5659, 3422, 5439, 6081],
          },
        ],
        colors: ["#10b981"],
        chart: {
          height: 85,
          type: "bar",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        grid: {
          padding: {
            left: -18,
            right: 0,
            top: -30,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "55%",
          },
        },
        dataLabels: {
          enabled: false,
        },

        xaxis: {
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
  },
  mounted() {
    const pagesList = document.querySelector("#pages-list");
    pagesList._tom = new Tom(pagesList, {
      sortField: { field: "text", direction: "asc" },
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

    // Post Rankings Menu
    new Popper(
        "#post-rankings-menu",
        ".popper-ref",
        ".popper-root",
        dropdownConfig
    );

    // Site Overview Menu
    new Popper(
        "#site-overview-menu",
        ".popper-ref",
        ".popper-root",
        dropdownConfig
    );

    // Top Writers Menu
    new Popper(
        "#top-writers-menu",
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
    <div class="card col-span-12 pb-4">
      <div class="mt-3 flex items-center justify-between px-4 sm:px-5">
        <h2
            class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"
        >
          Page Views
        </h2>

        <div class="flex items-center space-x-4">
          <div
              class="hidden cursor-pointer items-center space-x-2 sm:flex"
          >
            <div class="size-3 rounded-full bg-accent"></div>
            <p>Current Period</p>
          </div>
          <div
              class="hidden cursor-pointer items-center space-x-2 sm:flex"
          >
            <div class="size-3 rounded-full bg-warning"></div>
            <p>Previous Period</p>
          </div>
          <select
              class="form-select h-8 rounded-full border border-slate-300 bg-white px-2.5 pr-9 text-xs+ hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
          >
            <option>Last week</option>
            <option>Last month</option>
            <option>Last year</option>
          </select>
        </div>
      </div>
      <div class="mt-3 grid grid-cols-12">
        <div class="col-span-12 px-4 sm:col-span-6 sm:px-5 lg:col-span-4">
          <select id="pages-list" class="mt-1.5 w-full">
            <option>Travel Blog Page</option>
            <option>Courses Page</option>
            <option>Grammar Page</option>
            <option>Sport Page</option>
            <option>Jobs Page</option>
            <option>Server Status Page</option>
          </select>
          <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-8">
            <div>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Total Views
              </p>
              <p
                  class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                695,454
              </p>
            </div>

            <div>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Monthly increase
              </p>
              <p class="mt-1">
                      <span
                          class="text-xl font-medium text-slate-700 dark:text-navy-100"
                      >
                        16,146
                      </span>
                <span class="text-xs text-success">+3%</span>
              </p>
            </div>
            <div>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Post made
              </p>
              <p
                  class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                469
              </p>
            </div>
            <div>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Avg post view
              </p>
              <p
                  class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                1,559
              </p>
            </div>
            <div>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Total comments
              </p>
              <p
                  class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                198
              </p>
            </div>
            <div>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Post Referred
              </p>
              <p
                  class="mt-1 text-xl font-medium text-slate-700 dark:text-navy-100"
              >
                49
              </p>
            </div>
          </div>
        </div>
        <div
            class="ax-transparent-gridline col-span-12 px-2 sm:col-span-6 lg:col-span-8"
        >
          <div v-apex-charts="pagesViewConfig"></div>
        </div>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-7">
      <div class="card">
        <div
            class="grid grid-cols-1 divide-y divide-slate-150 dark:divide-navy-500 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          <div class="p-4 sm:p-5">
            <h3
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Broken images
            </h3>
            <p class="mt-1 text-xs+ text-slate-400 dark:text-navy-300">
              01 - 30 Oct, 2022
            </p>
            <p class="mt-4">
                    <span
                        class="text-3xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      236
                    </span>
              <span class="text-xs text-success">+3%</span>
            </p>
            <div class="mt-4 flex justify-between">
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Blog name
              </p>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                images
              </p>
            </div>
            <div class="mt-2 space-y-2.5">
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">What is Tailwind CSS?</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  12
                </p>
              </div>
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">What is PHP?</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  18
                </p>
              </div>
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">Top Design Systems</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  17
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 sm:p-5">
            <h3
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Broken links
            </h3>
            <p class="mt-1 text-xs+ text-slate-400 dark:text-navy-300">
              01 - 30 Oct, 2022
            </p>
            <p class="mt-4">
                    <span
                        class="text-3xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      648
                    </span>
              <span class="text-xs text-success">+2.6%</span>
            </p>
            <div class="mt-4 flex justify-between">
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Blog name
              </p>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                link
              </p>
            </div>
            <div class="mt-2 space-y-2.5">
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">313 Pattern and Color ideas</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  33
                </p>
              </div>
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">What is Tailwind CSS?</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  25
                </p>
              </div>
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">NodeJS Design Patterns</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  19
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 sm:p-5">
            <h3
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Comments
            </h3>
            <p class="mt-1 text-xs+ text-slate-400 dark:text-navy-300">
              01 - 30 Oct, 2022
            </p>
            <p class="mt-4">
                    <span
                        class="text-3xl font-medium text-slate-700 dark:text-navy-100"
                    >
                      238
                    </span>
              <span class="text-xs text-success">+6.2%</span>
            </p>
            <div class="mt-4 flex justify-between">
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Blog name
              </p>
              <p
                  class="text-xs uppercase text-slate-400 dark:text-navy-300"
              >
                Comments
              </p>
            </div>
            <div class="mt-2 space-y-2.5">
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">What is PHP?</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  21
                </p>
              </div>
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">Tailwind CSS Card Example</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  46
                </p>
              </div>
              <div class="flex justify-between space-x-2">
                <p class="line-clamp-1">Top Design Systems</p>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  19
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          class="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6"
      >
        <div
            class="col-span-12 -mt-1 sm:col-span-5 lg:col-span-4 xl:col-span-5"
        >
          <div class="flex items-center justify-between">
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Top Writers
            </h2>
            <div id="top-writers-menu" class="inline-flex">
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
          </div>

          <div class="card mt-3">
            <div>
              <div v-swiper="{ pagination: { el: '.swiper-pagination', clickable: true } }" class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div
                        class="h-20 rounded-t-lg bg-primary dark:bg-accent"
                    >
                      <img
                          class="h-full w-full rounded-t-lg object-cover object-center"
                          src="/images/800x600.png"
                          alt="image"
                      />
                    </div>
                    <div class="px-4 py-2 sm:px-5">
                      <div class="flex justify-between space-x-4">
                        <div class="avatar -mt-12 size-20">
                          <img
                              class="rounded-full border-2 border-white dark:border-navy-700"
                              src="/images/200x200.png"
                              alt="avatar"
                          />
                        </div>
                        <div class="flex space-x-2">
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-twitter"></i>
                          </button>
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-instagram text-base"></i>
                          </button>
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </button>
                        </div>
                      </div>
                      <h3
                          class="pt-2 text-base font-medium text-slate-700 dark:text-navy-100"
                      >
                        Konnor Guzman
                      </h3>
                      <p
                          class="text-xs text-slate-400 dark:text-navy-300"
                      >
                        USA, Washington DC
                      </p>
                      <div class="mt-2 flex items-center space-x-4">
                        <div class="w-9/12">
                          <div
                              v-apex-charts="writer2Config"
                              class="ax-transparent-gridline"
                          ></div>
                        </div>
                        <div class="w-3/12 text-center">
                          <p
                              class="text-xl font-medium text-slate-700 dark:text-navy-100"
                          >
                            24
                          </p>
                          <p class="text-xs+">Posts</p>
                        </div>
                      </div>
                      <div class="mt-3 flex justify-between">
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
                            class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    <div class="h-8"></div>
                  </div>

                  <div class="swiper-slide">
                    <div
                        class="h-20 rounded-t-lg bg-primary dark:bg-accent"
                    >
                      <img
                          class="h-full w-full rounded-t-lg object-cover object-center"
                          src="/images/800x600.png"
                          alt="image"
                      />
                    </div>
                    <div class="px-4 py-2 sm:px-5">
                      <div class="flex justify-between space-x-4">
                        <div class="avatar -mt-12 size-20">
                          <img
                              class="rounded-full border-2 border-white dark:border-navy-700"
                              src="/images/200x200.png"
                              alt="avatar"
                          />
                        </div>
                        <div class="flex space-x-2">
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-twitter"></i>
                          </button>
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-instagram text-base"></i>
                          </button>
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </button>
                        </div>
                      </div>
                      <h3
                          class="pt-2 text-base font-medium text-slate-700 dark:text-navy-100"
                      >
                        Travis Fuller
                      </h3>
                      <p
                          class="text-xs text-slate-400 dark:text-navy-300"
                      >
                        UK, London
                      </p>
                      <div class="mt-3 flex items-center space-x-4">
                        <div class="w-9/12">
                          <div
                              v-apex-charts="writer3Config"
                              class="ax-transparent-gridline"
                          ></div>
                        </div>
                        <div class="w-3/12 text-center">
                          <p
                              class="text-xl font-medium text-slate-700 dark:text-navy-100"
                          >
                            168
                          </p>
                          <p class="text-xs+">Posts</p>
                        </div>
                      </div>
                      <div class="mt-3 flex justify-between">
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
                              qe
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
                            class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    <div class="h-9"></div>
                  </div>

                  <div class="swiper-slide">
                    <div
                        class="h-20 rounded-t-lg bg-primary dark:bg-accent"
                    >
                      <img
                          class="h-full w-full rounded-t-lg object-cover object-center"
                          src="/images/800x600.png"
                          alt="image"
                      />
                    </div>
                    <div class="px-4 py-2 sm:px-5">
                      <div class="flex justify-between space-x-4">
                        <div class="avatar -mt-12 size-20">
                          <img
                              class="rounded-full border-2 border-white dark:border-navy-700"
                              src="/images/200x200.png"
                              alt="avatar"
                          />
                        </div>
                        <div class="flex space-x-2">
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-twitter"></i>
                          </button>
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-instagram text-base"></i>
                          </button>
                          <button
                              class="btn size-7 rounded-full bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </button>
                        </div>
                      </div>
                      <h3
                          class="pt-2 text-base font-medium text-slate-700 dark:text-navy-100"
                      >
                        Alfredo Elliott
                      </h3>
                      <p
                          class="text-xs text-slate-400 dark:text-navy-300"
                      >
                        Australia, Sydney
                      </p>
                      <div class="mt-3 flex items-center space-x-4">
                        <div class="w-9/12">
                          <div
                              v-apex-charts="writer1Config"
                              class="ax-transparent-gridline"
                          ></div>
                        </div>
                        <div class="w-3/12 text-center">
                          <p
                              class="text-xl font-medium text-slate-700 dark:text-navy-100"
                          >
                            426
                          </p>
                          <p class="text-xs+">Posts</p>
                        </div>
                      </div>
                      <div class="mt-3 flex justify-between">
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
                                class="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                            >
                              za
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
                            class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    <div class="h-9"></div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="card col-span-12 sm:col-span-7 lg:col-span-8 xl:col-span-7"
        >
          <div class="my-3 flex items-center justify-between px-4">
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Site Overview
            </h2>
            <div id="site-overview-menu" class="inline-flex">
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
          <div class="grid grid-cols-2 gap-3 px-4">
            <div class="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
              <div class="flex justify-between space-x-1">
                <p
                    class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                >
                  11.3M
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="1.5"
                    class="size-5 text-primary dark:text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <p class="mt-1 text-xs+">Total Views</p>
            </div>
            <div class="rounded-lg bg-slate-100 p-3 dark:bg-navy-600">
              <div class="flex justify-between">
                <p
                    class="text-xl font-semibold text-slate-700 dark:text-navy-100"
                >
                  4,566
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <p class="mt-1 text-xs+">Avg Post View</p>
            </div>
          </div>
          <div class="mt-3 px-3">
            <div v-apex-charts="overviewConfig"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-5">
      <div class="-mt-1 flex items-center justify-between">
        <h2
            class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Post Rankings
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
          <div id="post-rankings-menu" class="inline-flex">
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
                  class="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100"
              >
                Rank
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Post Title
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                View
              </th>

              <th
                  class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Position
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  01.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >25 Surprising Facts About Chair
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                1,994
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    2
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
              </td>
            </tr>

            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  02.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >What is Tailwind CSS?
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                1,719
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    3
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
              </td>
            </tr>

            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  03.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >Tailwind CSS Card Example
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                1,621
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    1
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
              </td>
            </tr>

            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  04.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >What is PHP?
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                1,411
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    1
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
              </td>
            </tr>

            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  05.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >Top Design Systems
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                1,269
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    2
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
              </td>
            </tr>

            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  06.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >313 Pattern and Color ideas
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                894
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    1
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
              </td>
            </tr>

            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  07.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >NodeJS Design Patterns
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                636
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    2
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
              </td>
            </tr>

            <tr class="border-y border-transparent">
              <td class="whitespace-nowrap rounded-bl-lg px-4 py-3">
                <p
                    class="text-center text-base font-medium text-slate-700 dark:text-navy-100"
                >
                  08.
                </p>
              </td>
              <td class="min-w-[20rem] px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <div class="avatar size-12">
                    <img
                        class="rounded-lg object-cover object-center"
                        src="/images/800x600.png"
                        alt="avatar"
                    />
                  </div>

                  <span
                      class="font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
                  >Tailwind CSS Card Example
                          </span>
                </div>
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 font-medium text-slate-600 dark:text-navy-100 sm:px-5"
              >
                411
              </td>
              <td
                  class="whitespace-nowrap rounded-br-lg px-4 py-3 sm:px-5"
              >
                <div class="flex items-center justify-end space-x-1">
                  <p class="text-sm+ text-slate-800 dark:text-navy-100">
                    1
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
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
