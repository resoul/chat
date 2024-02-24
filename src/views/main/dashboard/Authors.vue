<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";

export default {
  extends: Dashboards,
  data() {
    return {
      visitorsConfig: {
        colors: ["#10b981"],
        series: [
          {
            name: "Visitors",
            data: [35, 20, 45, 30, 55, 27, 45],
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
            opacityFrom: 0.35,
            opacityTo: 0.05,
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
      authors1Config: {
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
      authors2Config: {
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
      authors3Config: {
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
      },
      authors4Config: {
        series: [
          {
            name: "Posts",
            data: [1499, 2303, 2857, 1791, 2194, 1351],
          },
        ],
        colors: ["#ff5724"],
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
      authors5Config: {
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
      membersConfig: {
        colors: ["#ff5724"],
        series: [
          {
            name: "Members",
            data: [65, 40, 60, 35, 56, 42],
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
            opacityFrom: 0.35,
            opacityTo: 0.05,
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
  }
}
</script>

<template>
  <div
      class="mt-6 flex flex-col items-center justify-between space-y-2 px-[var(--margin-x)] text-center transition-all duration-[.25s] sm:flex-row sm:space-y-0 sm:text-left"
  >
    <div>
      <h3 class="text-xl font-semibold text-slate-700 dark:text-navy-100">
        Blogboard
      </h3>
      <p class="mt-1 hidden sm:block">Manage articles and authors</p>
    </div>
    <div>
      <p class="font-medium text-slate-700 dark:text-navy-100">
        Featured Authors
      </p>
      <div class="mt-2 flex space-x-2">
        <div class="avatar size-8">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="avatar size-8">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="avatar size-8">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="avatar size-8">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="avatar size-8">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
      </div>
    </div>
  </div>
  <div
      class="mt-4 grid grid-cols-1 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:grid-cols-4 lg:gap-6"
  >
    <div class="card p-4 sm:col-span-2 sm:p-5">
      <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
      >
        <div
            class="flex items-center space-x-4 rounded-2xl border border-slate-150 p-4 dark:border-navy-600"
        >
          <div
              class="mask is-star-2 flex size-12 items-center justify-center bg-warning/10 dark:bg-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 text-warning dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div class="font-inter">
            <p
                class="text-base font-semibold text-slate-700 dark:text-navy-100"
            >
              203
            </p>
            <p>All Posts</p>
          </div>
        </div>
        <div
            class="flex items-center space-x-4 rounded-2xl border border-slate-150 p-4 dark:border-navy-600"
        >
          <div
              class="mask is-star-2 flex size-12 items-center justify-center bg-primary/10 dark:bg-accent"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 text-primary dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div class="font-inter">
            <p
                class="text-base font-semibold text-slate-700 dark:text-navy-100"
            >
              16
            </p>
            <p>Post Writers</p>
          </div>
        </div>
        <div
            class="flex items-center space-x-4 rounded-2xl border border-slate-150 p-4 dark:border-navy-600"
        >
          <div
              class="mask is-star-2 flex size-12 items-center justify-center bg-secondary/10 dark:bg-secondary"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 text-secondary dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div class="font-inter">
            <p
                class="text-base font-semibold text-slate-700 dark:text-navy-100"
            >
              12.3k
            </p>
            <p>Likes</p>
          </div>
        </div>
        <div
            class="flex items-center space-x-4 rounded-2xl border border-slate-150 p-4 dark:border-navy-600"
        >
          <div
              class="mask is-star-2 flex size-12 items-center justify-center bg-success/10 dark:bg-success"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6 text-success dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
          <div class="font-inter">
            <p
                class="text-base font-semibold text-slate-700 dark:text-navy-100"
            >
              3k
            </p>
            <p>Comments</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div
          class="mt-3.5 flex grow items-baseline justify-between px-4 sm:px-5"
      >
        <div>
          <p class="font-medium">Visitors</p>
          <p
              class="text-2xl font-semibold text-slate-700 dark:text-navy-100"
          >
            45k
          </p>
        </div>
        <div
            class="badge space-x-1 rounded-full bg-success/10 py-1 px-1.5 text-success dark:bg-success/15"
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
          <span>46%</span>
        </div>
      </div>
      <div class="ax-transparent-gridline">
        <div v-apex-charts="visitorsConfig"></div>
      </div>
    </div>

    <div class="card">
      <div
          class="mt-3.5 flex grow items-baseline justify-between px-4 sm:px-5"
      >
        <div>
          <p class="font-medium">Members</p>
          <p
              class="text-2xl font-semibold text-slate-700 dark:text-navy-100"
          >
            12k
          </p>
        </div>
        <div
            class="badge space-x-1 rounded-full bg-error/10 py-1 px-1.5 text-error dark:bg-error/15"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
          >
            <path
                fill-rule="evenodd"
                d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                clip-rule="evenodd"
            />
          </svg>
          <span>16%</span>
        </div>
      </div>
      <div class="ax-transparent-gridline">
        <div v-apex-charts="membersConfig"></div>
      </div>
    </div>
  </div>
  <div class="mt-4 sm:mt-5 lg:mt-6">
    <div
        class="flex h-8 items-center justify-between px-[var(--margin-x)] transition-all duration-[.25s]"
    >
      <h2
          class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
      >
        Top Authors
      </h2>
      <a
          href="#"
          class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
      >View All</a
      >
    </div>

    <div class="mt-3 grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
      <div
          class="mt-4 hidden pl-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-3 lg:flex"
      >
        <div class="flex items-center justify-center px-3">
          <img
              class="w-full"
              src="/images/illustrations/writer.svg"
              alt="image"
          />
        </div>
      </div>
      <div
          class="is-scrollbar-hidden col-span-12 flex space-x-4 overflow-x-auto px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-9 lg:pl-0"
      >
        <div class="card w-64 shrink-0 pb-3">
          <div class="h-20 rounded-t-lg bg-primary dark:bg-accent">
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
            <p class="text-xs text-slate-400 dark:text-navy-300">
              USA, Washington DC
            </p>
            <div class="mt-1 flex items-center space-x-4">
              <div class="w-9/12">
                <div class="ax-transparent-gridline" v-apex-charts="authors1Config"></div>
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
            <div class="mt-2 flex justify-between">
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
        </div>

        <div class="card w-64 shrink-0 pb-3">
          <div class="h-20 rounded-t-lg bg-primary dark:bg-accent">
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
            <p class="text-xs text-slate-400 dark:text-navy-300">
              UK, London
            </p>
            <div class="mt-1 flex items-center space-x-4">
              <div class="w-9/12">
                <div v-apex-charts="authors2Config" class="ax-transparent-gridline"></div>
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
            <div class="mt-2 flex justify-between">
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
        </div>

        <div class="card w-64 shrink-0 pb-3">
          <div class="h-20 rounded-t-lg bg-primary dark:bg-accent">
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
            <p class="text-xs text-slate-400 dark:text-navy-300">
              Australia, Sydney
            </p>
            <div class="mt-1 flex items-center space-x-4">
              <div class="w-9/12">
                <div v-apex-charts="authors3Config" class="ax-transparent-gridline"></div>
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
            <div class="mt-2 flex justify-between">
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
        </div>

        <div class="card w-64 shrink-0 pb-3">
          <div class="h-20 rounded-t-lg bg-primary dark:bg-accent">
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
              Derrick Simmons
            </h3>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              Austria, Vienna
            </p>
            <div class="mt-1 flex items-center space-x-4">
              <div class="w-9/12">
                <div v-apex-charts="authors4Config" class="ax-transparent-gridline"></div>
              </div>
              <div class="w-3/12 text-center">
                <p
                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                >
                  98
                </p>
                <p class="text-xs+">Posts</p>
              </div>
            </div>
            <div class="mt-2 flex justify-between">
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
                      class="is-initial rounded-full bg-secondary text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                  >
                    re
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
        </div>

        <div class="card w-64 shrink-0 pb-3">
          <div class="h-20 rounded-t-lg bg-primary dark:bg-accent">
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
              Samantha Shelton
            </h3>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              Switzerland, Zurich
            </p>
            <div class="mt-1 flex items-center space-x-4">
              <div class="w-9/12">
                <div v-apex-charts="authors5Config" class="ax-transparent-gridline"></div>
              </div>
              <div class="w-3/12 text-center">
                <p
                    class="text-xl font-medium text-slate-700 dark:text-navy-100"
                >
                  566
                </p>
                <p class="text-xs+">Posts</p>
              </div>
            </div>
            <div class="mt-2 flex justify-between">
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
        </div>
      </div>
    </div>
  </div>
  <div
      class="mt-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 lg:mt-6"
  >
    <div class="flex h-8 items-center justify-between">
      <h2
          class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
      >
        Latest Posts
      </h2>
      <a
          href="#"
          class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
      >View All</a
      >
    </div>
    <div
        class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
    >
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >What is Tailwind CSS?</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            distinctio dolorum harum.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">John Doe</span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">25 May, 2022</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >Tailwind CSS Card Example</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
            the sit.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Konnor Guzman </span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">30 May, 2022</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >What is PHP?</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
            the sit.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Travis Fuller </span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">10 June, 2022</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >Top Design Systems</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto assumenda.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Alfredo Elliott </span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">19 June, 2022</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >How Did We Get Here?</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Katrina West </span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">26 June, 2022</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >NodeJS Design Patterns</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Henry Curtis </span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">12 June, 2022</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >313 Pattern and Color ideas</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Samantha Shelton </span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">30 June, 2022</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <img
            class="h-44 w-full rounded-2xl object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="card -mt-8 grow rounded-2xl p-4">
          <div>
            <a
                href="#"
                class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >25 Surprising Facts About Chair</a
            >
          </div>
          <p class="mt-2 grow line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div class="mt-4 flex items-center justify-between">
            <a
                href="#"
                class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Konnor Guzman </span>
            </a>
            <p
                class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                    stroke-width="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">03 July, 2022</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
