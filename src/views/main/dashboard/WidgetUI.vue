<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";
import Popper from "@/components/popper.js";
export default {
  extends: Dashboards,
  data() {
    return {
      visitorsConfig: {
        colors: ["#FF5724"],
        series: [
          {
            data: [0, 20, 10, 30, 20, 50],
          },
        ],
        chart: {
          type: "line",
          stacked: false,
          height: 150,
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },

          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
          },
        },
        stroke: {
          width: 3,
          curve: "smooth",
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

    new Popper(this.$refs["labels-menu"], this.$refs["labels-menu-ref"], this.$refs["labels-menu-root"], dropdownConfig);
    new Popper(this.$refs["statistic-menu"], this.$refs["statistic-menu-ref"], this.$refs["statistic-menu-root"], dropdownConfig);
    new Popper(this.$refs["you-know-menu"], this.$refs["you-know-menu-ref"], this.$refs["you-know-menu-root"], dropdownConfig);
  }
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Widget UI
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Dashboards</a
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
      <li>Widget UI</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2 class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
            Labels
          </h2>
          <div ref="labels-menu" class="inline-flex">
            <button ref="labels-menu-ref" class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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

            <div class="popper-root" ref="labels-menu-root">
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
        <div class="inline-space flex flex-wrap">
          <a
              href="#"
              class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Icon
          </a>
          <a
              href="#"
              class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            UI/UX
          </a>
          <a
              href="#"
              class="tag bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Bootstrap
          </a>
          <a
              href="#"
              class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Tailwind
          </a>
          <a
              href="#"
              class="tag bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            React
          </a>
          <a
              href="#"
              class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Alpine
          </a>

          <a
              href="#"
              class="tag bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Design
          </a>
        </div>
      </div>
      <div class="card p-3">
        <img
            class="h-48 rounded-lg object-cover object-center"
            src="/images/800x600.png"
            alt="image"
        />
        <div class="mt-3">
          <p
              class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            ❤ Instagram Post
          </p>
          <p class="mt-1 text-xs+">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit?
          </p>
          <div class="mt-2 text-xs">
            <a
                href="#"
                class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >#PHP  </a
            >
            <a
                href="#"
                class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >#ReactJS  </a
            >
            <a
                href="#"
                class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >#NextJS  </a
            >
          </div>
        </div>
      </div>
      <div class="card p-4">
        <div class="flex items-center justify-between">
          <a
              href="#"
              class="font-inter font-medium tracking-wide transition-colors hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
          >
            @twitteraccount
          </a>

          <i class="fa-brands fa-twitter"></i>
        </div>
        <p class="mt-3 text-xs+">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque eaque iste libero neque.
        </p>
        <div class="mt-2 text-xs">
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#PHP  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ReactJS  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#NextJS  </a
          >
        </div>
      </div>
      <div class="card p-4">
        <div class="flex -space-x-px">
          <input
              class="form-input h-10 w-full rounded-l-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Search here..."
              type="text"
          />
          <button
              class="btn z-2 size-10 shrink-0 rounded-l-none bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 text-center">
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Apps
          </a>

          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Repair
          </a>
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Billing
          </a>
        </div>
      </div>
      <div class="card flex-row justify-between">
        <div class="p-4">
          <div class="flex space-x-4">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <h3
                  class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
              >
                Konnor Guzman
              </h3>
              <p class="text-xs line-clamp-1">Web Developer</p>
            </div>
          </div>
          <p class="mt-2 text-xs+">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div class="my-3 mr-2 flex flex-col space-y-1">
          <button
              class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </button>
          <button
              class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
          <button
              class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <div class="card p-3">
        <div class="grid grid-cols-3 gap-3">
          <img
              src="/images/800x600.png"
              class="rounded-lg object-cover object-center"
              alt="image"
          />
          <img
              src="/images/800x600.png"
              class="rounded-lg object-cover object-center"
              alt="image"
          />
          <img
              src="/images/800x600.png"
              class="rounded-lg object-cover object-center"
              alt="image"
          />
          <img
              src="/images/800x600.png"
              class="rounded-lg object-cover object-center"
              alt="image"
          />
          <img
              src="/images/800x600.png"
              class="rounded-lg object-cover object-center"
              alt="image"
          />
          <img
              src="/images/800x600.png"
              class="rounded-lg object-cover object-center"
              alt="image"
          />
        </div>
      </div>
      <div class="card flex-row space-x-4 p-3">
        <div class="w-12 shrink-0">
          <img
              class="w-full"
              src="/images/illustrations/creativedesign-char.svg"
              alt="image"
          />
        </div>
        <div>
          <p
              class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Design Updated
          </p>
          <p class="mt-2 text-xs+">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div class="mt-3 flex flex-wrap -space-x-2">
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
        </div>
      </div>
      <div class="flex space-x-4 sm:space-x-5 lg:space-x-6">
        <div class="card flex-1 p-4">
          <div class="flex grow flex-col items-center">
            <div
                class="flex h-16 w-12 items-center justify-center rounded-full bg-info"
            >
              <i
                  class="fa-solid fa-person-walking text-2xl text-white"
              ></i>
            </div>
            <p class="mt-2 font-medium">Walking</p>
          </div>
          <div class="mt-3 text-center">
            <p
                class="text-3xl font-semibold text-slate-600 dark:text-navy-100"
            >
              234
            </p>
            <p class="text-xs+">meter</p>
          </div>
        </div>
        <div class="card flex-1 p-4">
          <div class="flex grow flex-col items-center">
            <div
                class="flex h-16 w-12 items-center justify-center rounded-full bg-warning"
            >
              <i
                  class="fa-solid fa-clock-rotate-left text-xl text-white"
              ></i>
            </div>
            <p class="mt-2 font-medium">Time</p>
          </div>
          <div class="mt-3 text-center">
            <p
                class="text-3xl font-semibold text-slate-600 dark:text-navy-100"
            >
              16
            </p>
            <p class="text-xs+">minutes</p>
          </div>
        </div>
      </div>
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Maybe You Know
          </h2>
          <div ref="you-know-menu" class="inline-flex">
            <button ref="you-know-menu-ref" class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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

            <div class="popper-root" ref="you-know-men-root">
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
        <div class="grid grid-cols-2 gap-3">
          <div
              class="relative flex flex-col items-center justify-center rounded-lg border border-slate-200 p-4 dark:border-navy-500"
          >
            <div class="absolute top-0 right-0 mx-2 my-1">
              <button
                  class="text-slate-400 transition-colors hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="avatar size-10">
              <img
                  class="mask is-hexagon"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              John D.
            </p>
            <button
                class="btn mt-3 h-6 rounded-full bg-slate-150 px-3 text-xs font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              Follow
            </button>
          </div>
          <div
              class="relative flex flex-col items-center justify-center rounded-lg border border-slate-200 p-4 dark:border-navy-500"
          >
            <div class="absolute top-0 right-0 mx-2 my-1">
              <button
                  class="text-slate-400 transition-colors hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="avatar size-10">
              <img
                  class="mask is-hexagon"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Travis F.
            </p>
            <button
                class="btn mt-3 h-6 rounded-full bg-slate-150 px-3 text-xs font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              Follow
            </button>
          </div>
          <div
              class="relative flex flex-col items-center justify-center rounded-lg border border-slate-200 p-4 dark:border-navy-500"
          >
            <div class="absolute top-0 right-0 mx-2 my-1">
              <button
                  class="text-slate-400 transition-colors hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="avatar size-10">
              <img
                  class="mask is-hexagon"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Alfredo E.
            </p>
            <button
                class="btn mt-3 h-6 rounded-full bg-slate-150 px-3 text-xs font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              Follow
            </button>
          </div>
          <div
              class="relative flex flex-col items-center justify-center rounded-lg border border-slate-200 p-4 dark:border-navy-500"
          >
            <div class="absolute top-0 right-0 mx-2 my-1">
              <button
                  class="text-slate-400 transition-colors hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="avatar size-10">
              <img
                  class="mask is-hexagon"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Raul B.
            </p>
            <button
                class="btn mt-3 h-6 rounded-full bg-slate-150 px-3 text-xs font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
      <div class="card flex-row items-center space-x-4 p-4">
        <div class="flex flex-wrap -space-x-2">
          <div class="avatar size-10 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-10 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
        <div>
          <p
              class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Happy Birthday
          </p>
          <div class="flex text-xs+">
            <a
                href="#"
                class="text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Konnor</a
            >
            <div
                class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
            ></div>
            <a
                href="#"
                class="text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >John</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <div class="card p-4 sm:p-5">
        <div class="flex items-center justify-between">
          <p
              class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Share
          </p>
          <button
              class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
        <div class="mt-4 grid grid-cols-4 gap-3">
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              John
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Doe
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Raul
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Alfredo
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Travis
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Curtis
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Konnor
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Guzman
            </p>
          </div>
        </div>
      </div>
      <div class="card space-y-4 p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <div
              class="size-5 rounded border-2 bg-transparent dark:border-navy-400"
          ></div>
          <p>Not Color</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="size-5 rounded border-2 border-primary bg-transparent dark:border-accent"
          ></div>
          <p>Primary Color</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="size-5 rounded border-2 border-secondary bg-transparent dark:border-secondary-light"
          ></div>
          <p>Secondary Color</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="size-5 rounded border-2 border-info bg-transparent"
          ></div>
          <p>Info Color</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="size-5 rounded border-2 border-success bg-transparent"
          ></div>
          <p>Success Color</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="size-5 rounded border-2 border-warning bg-transparent"
          ></div>
          <p>Warning Color</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="size-5 rounded border-2 border-error bg-transparent"
          ></div>
          <p>Error Color</p>
        </div>
      </div>
      <div class="card px-4 pb-5 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2 class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
            Statistic
          </h2>
          <div ref="statistic-menu" class="inline-flex">
            <button ref="statistic-menu-ref" class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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

            <div class="popper-root" ref="statistic-menu-root">
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
          <div class="flex items-center space-x-3">
            <div
                class="mask is-squircle flex size-10 items-center justify-center bg-warning/10"
            >
              <i class="fa-solid fa-history text-xl text-warning"></i>
            </div>
            <div class="grow space-y-1">
              <div class="flex justify-between">
                <p class="font-medium">Pending</p>
                <p class="text-warning">50%</p>
              </div>
              <div class="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                <div class="w-6/12 rounded-full bg-warning"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <div
                class="mask is-squircle flex size-10 items-center justify-center bg-primary/10 dark:bg-accent-light/10"
            >
              <i
                  class="fa-solid fa-spinner text-xl text-primary dark:text-accent-light"
              ></i>
            </div>
            <div class="grow space-y-1">
              <div class="flex justify-between">
                <p class="font-medium">In Progress</p>
                <p class="text-primary dark:text-accent-light">75%</p>
              </div>
              <div class="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                <div
                    class="w-9/12 rounded-full bg-primary dark:bg-accent"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <div
                class="mask is-squircle flex size-10 items-center justify-center bg-success/10"
            >
              <i
                  class="fa-regular fa-circle-check text-xl text-success"
              ></i>
            </div>
            <div class="grow space-y-1">
              <div class="flex justify-between">
                <p class="font-medium">Completed</p>
                <p class="text-success">25%</p>
              </div>
              <div class="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                <div class="w-3/12 rounded-full bg-success"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <div
                class="mask is-squircle flex size-10 items-center justify-center bg-error/10"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6 text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="grow space-y-1">
              <div class="flex justify-between">
                <p class="font-medium">Cancelled</p>
                <p class="text-error">25%</p>
              </div>
              <div class="progress h-1.5 bg-slate-150 dark:bg-navy-500">
                <div class="w-3/12 rounded-full bg-error"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-4 sm:p-5">
        <h3
            class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
        >
          Technologies
        </h3>
        <div class="mt-4 flex h-1.5 space-x-1">
          <div
              class="w-4/12 rounded-full bg-primary dark:bg-accent"
          ></div>
          <div class="w-3/12 rounded-full bg-secondary"></div>
          <div class="w-2/12 rounded-full bg-success"></div>
          <div class="w-2/12 rounded-full bg-warning"></div>
          <div class="w-1/12 rounded-full bg-error"></div>
        </div>
        <div class="inline-space mt-3 flex flex-wrap">
          <div
              class="badge space-x-2.5 p-0 text-primary dark:text-accent-light"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>HTML</span>
          </div>
          <div
              class="badge space-x-2.5 p-0 text-secondary dark:text-secondary-light"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>CSS</span>
          </div>
          <div class="badge space-x-2.5 p-0 text-success">
            <div class="size-2 rounded-full bg-current"></div>
            <span>JavaScript</span>
          </div>
          <div class="badge space-x-2.5 p-0 text-warning">
            <div class="size-2 rounded-full bg-current"></div>
            <span>Vue</span>
          </div>
          <div class="badge space-x-2.5 p-0 text-error">
            <div class="size-2 rounded-full bg-current"></div>
            <span>Go</span>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <div class="card">
        <div class="absolute top-0 left-0 p-4">
          <p>Daily Visits</p>
          <p class="text-3xl font-semibold text-slate-700 dark:text-navy-100">
            234
          </p>
        </div>
        <div>
          <div v-apex-charts="visitorsConfig"></div>
        </div>
      </div>
      <div class="card p-4 sm:p-5">
        <div class="flex items-center justify-between">
          <div
              class="mask is-squircle flex size-10 items-center justify-center bg-primary/10 dark:bg-accent-light/10"
          >
            <i
                class="fa fa-user text-xl text-primary dark:text-accent-light"
            ></i>
          </div>
          <div class="flex items-center space-x-2">
                  <span class="text-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fill-rule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                          clip-rule="evenodd"
                      />
                    </svg>
                  </span>
            <span
                class="text-base font-semibold text-slate-700 dark:text-navy-100"
            >
                    1.2%
                  </span>
          </div>
        </div>
        <div class="mt-4 flex items-end justify-between">
          <div>
            <p
                class="text-3xl font-semibold text-slate-700 dark:text-navy-100"
            >
              1024
            </p>
            <p>New Users</p>
          </div>
          <div class="mt-3 flex flex-wrap -space-x-2">
            <div class="avatar size-6 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="avatar size-6 hover:z-10">
              <div
                  class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
              >
                jd
              </div>
            </div>
            <div class="avatar size-6 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card flex-row justify-between p-4 sm:p-5">
        <div>
          <p
              class="text-base font-medium text-slate-700 dark:text-navy-100"
          >
            New Products
          </p>
          <div class="mt-4 flex items-baseline space-x-1">
            <p
                class="text-2xl font-semibold text-slate-700 dark:text-navy-100"
            >
              21
            </p>
            <p class="text-xs text-success">+21%</p>
          </div>
          <p class="text-xs+">Lorem ipsum dolor sit amet</p>
        </div>
        <div
            class="mask is-squircle flex size-10 items-center justify-center bg-warning/10"
        >
          <i class="fa fa-gift text-xl text-warning"></i>
        </div>
        <div class="absolute bottom-0 right-0 overflow-hidden rounded-lg">
          <i
              class="fa fa-gift translate-x-1/4 translate-y-1/4 text-5xl opacity-15"
          ></i>
        </div>
      </div>
      <div class="card bg-primary p-4 dark:bg-accent">
        <div class="flex items-center space-x-3">
          <div class="flex">
            <div class="avatar">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>
          <div>
            <p class="font-medium text-white">John Doe</p>
            <p class="text-xs text-indigo-100">55 min ago</p>
          </div>
        </div>
        <div class="mt-2">
          <p class="text-xs+ text-indigo-100">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div class="pt-2">
          <div class="badge rounded-full border border-white text-white">
            Tag 1
          </div>
        </div>
      </div>
      <div class="card p-4 sm:p-5">
        <div class="flex items-center space-x-2">
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
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p class="text-xs+">June 23, 2021</p>
        </div>

        <p
            class="mt-4 text-base font-medium text-slate-700 dark:text-navy-100"
        >
          UI/UX Design, Mobile Design
        </p>

        <div class="mt-2">
          <div
              class="badge h-5 bg-success/10 px-2 text-success dark:bg-success/15"
          >
            UI/UX Design
          </div>
          <div
              class="badge h-5 bg-warning/10 px-2 text-warning dark:bg-warning/15"
          >
            Mobile
          </div>
        </div>
        <div class="mt-5 flex flex-wrap -space-x-2">
          <div class="avatar size-6 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-6 hover:z-10">
            <div
                class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
            >
              jd
            </div>
          </div>
          <div class="avatar size-6 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
      </div>
      <div class="card">
        <h3
            class="p-4 text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100 sm:p-5"
        >
          New Followers
        </h3>
        <div
            class="is-scrollbar-hidden flex space-x-4 overflow-x-auto px-5 pb-4 sm:px-5"
        >
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              John
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Doe
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Raul
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Alfredo
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Travis
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Curtis
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Konnor
            </p>
          </div>
          <div class="text-center">
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <p
                class="mt-1.5 text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Guzman
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
