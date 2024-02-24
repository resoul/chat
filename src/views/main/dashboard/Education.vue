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
      timelineConfig: {
        series: [
          {
            data: [
              {
                x: "Analysis",
                y: [
                  new Date("2019-02-27").getTime(),
                  new Date("2019-03-04").getTime(),
                ],
                fillColor: "#008FFB",
              },
              {
                x: "Design",
                y: [
                  new Date("2019-03-04").getTime(),
                  new Date("2019-03-09").getTime(),
                ],
                fillColor: "#00E396",
              },
              {
                x: "Coding",
                y: [
                  new Date("2019-03-07").getTime(),
                  new Date("2019-03-10").getTime(),
                ],
                fillColor: "#775DD0",
              },
              {
                x: "Testing",
                y: [
                  new Date("2019-03-08").getTime(),
                  new Date("2019-03-12").getTime(),
                ],
                fillColor: "#FEB019",
              },
              {
                x: "Deployment",
                y: [
                  new Date("2019-03-12").getTime(),
                  new Date("2019-03-17").getTime(),
                ],
                fillColor: "#FF4560",
              },
            ],
          },
        ],
        chart: {
          type: "rangeBar",
          height: "200px",
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        grid: {
          padding: {
            top: -16,
            bottom: 0,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          show: false,
        },
      }
    }
  }
}
</script>

<template>
  <div class="mt-5 px-[var(--margin-x)] transition-all duration-[.25s]">
    <p class="text-base font-medium text-slate-700 dark:text-navy-100">
      My Courses
    </p>
  </div>
  <div class="flex">
    <div v-swiper="{ slidesPerView: 'auto', spaceBetween: 18 }" class="swiper mx-0 mt-4 px-[var(--margin-x)] transition-all duration-[.25s]">
      <div class="swiper-wrapper">
        <div class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-primary p-4">
          <div>
            <p
                class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100"
            >
              Design For Beginners
            </p>
            <a
                href="#"
                class="mt-0.5 text-xs+ text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
            >Konnor Guzman</a
            >
          </div>

          <div class="mt-6">
            <div
                data-tooltip="25% Completed"
                data-theme="primary"
                class="progress h-1 bg-slate-150 dark:bg-navy-500"
            >
              <div
                  class="w-4/12 rounded-full bg-primary dark:bg-accent"
              ></div>
            </div>

            <div
                class="mt-2 flex items-center justify-between text-primary dark:text-accent-light"
            >
              <p class="font-medium">Advanced</p>
              <a href="#">
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
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
            class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-secondary p-4"
        >
          <div>
            <p
                class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100"
            >
              Social Media Marketing
            </p>
            <a
                href="#"
                class="mt-0.5 text-xs+ text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
            >Eric Fox</a
            >
          </div>

          <div class="mt-6">
            <div
                data-tooltip="25% Completed"
                data-theme="secondary"
                class="progress h-1 bg-slate-150 dark:bg-navy-500"
            >
              <div class="w-4/12 rounded-full bg-secondary"></div>
            </div>

            <div
                class="mt-2 flex items-center justify-between text-secondary dark:text-secondary-light"
            >
              <p class="font-medium">Beginner</p>
              <a href="#">
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
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
            class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-warning p-4"
        >
          <div>
            <p
                class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100"
            >
              Fundamentals of digital marketing
            </p>
            <a
                href="#"
                class="mt-0.5 text-xs+ text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
            >Travis Fuller</a
            >
          </div>

          <div class="mt-6">
            <div
                data-tooltip="50% Completed"
                data-theme="warning"
                class="progress h-1 bg-slate-150 dark:bg-navy-500"
            >
              <div class="w-6/12 rounded-full bg-warning"></div>
            </div>

            <div
                class="mt-2 flex items-center justify-between text-warning"
            >
              <p class="font-medium">Intermediate</p>
              <a href="#">
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
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
            class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-primary p-4"
        >
          <div>
            <p
                class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100"
            >
              Figma: Create Design System
            </p>
            <a
                href="#"
                class="mt-0.5 text-xs+ text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
            >Derrick Simmons</a
            >
          </div>

          <div class="mt-6">
            <div
                data-tooltip="25% Completed"
                data-theme="primary"
                class="progress h-1 bg-slate-150 dark:bg-navy-500"
            >
              <div
                  class="w-4/12 rounded-full bg-primary dark:bg-accent"
              ></div>
            </div>

            <div
                class="mt-2 flex items-center justify-between text-primary dark:text-accent-light"
            >
              <p class="font-medium">Advanced</p>
              <a href="#">
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
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
            class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-secondary p-4"
        >
          <div>
            <p
                class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100"
            >
              Getting started with Vue
            </p>
            <a
                href="#"
                class="mt-0.5 text-xs+ text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
            >Katrina West</a
            >
          </div>

          <div class="mt-6">
            <div
                data-tooltip="25% Completed"
                data-theme="secondary"
                class="progress h-1 bg-slate-150 dark:bg-navy-500"
            >
              <div class="w-4/12 rounded-full bg-secondary"></div>
            </div>

            <div
                class="mt-2 flex items-center justify-between text-secondary dark:text-secondary-light"
            >
              <p class="font-medium">Beginner</p>
              <a href="#">
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
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
            class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-warning p-4"
        >
          <div>
            <p
                class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100"
            >
              Object-oriented JavaScript for beginners
            </p>
            <a
                href="#"
                class="mt-0.5 text-xs+ text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
            >Travis Fuller</a
            >
          </div>

          <div class="mt-6">
            <div
                data-tooltip="50% Completed"
                data-theme="warning"
                class="progress h-1 bg-slate-150 dark:bg-navy-500"
            >
              <div class="w-6/12 rounded-full bg-warning"></div>
            </div>

            <div
                class="mt-2 flex items-center justify-between text-warning"
            >
              <p class="font-medium">Intermediate</p>
              <a href="#">
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
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div class="card col-span-12 pb-3 lg:col-span-6">
      <div
          class="mt-3 flex h-8 items-center justify-between px-4 sm:px-5"
      >
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Courses Timeline
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

      <div class="course-schedule-chart pr-2">
        <div v-apex-charts="timelineConfig"></div>
      </div>
    </div>
    <div
        class="order-first col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:order-none lg:col-span-6 lg:gap-6"
    >
      <div class="card justify-between p-5">
        <p class="font-medium">Courses In Progress</p>
        <div class="flex items-center justify-between pt-4">
          <p
              class="text-3xl font-semibold text-slate-700 dark:text-navy-100"
          >
            32
          </p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-10 text-primary dark:text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <div class="card justify-between p-5">
        <p class="font-medium">Completed Courses</p>
        <div class="flex items-center justify-between pt-4">
          <p
              class="text-3xl font-semibold text-slate-700 dark:text-navy-100"
          >
            14
          </p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-10 text-secondary dark:text-secondary-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
      </div>
      <div class="card justify-between p-5">
        <p class="font-medium">Watching Time</p>
        <div class="flex items-center justify-between pt-4">
          <p class="text-slate-700 dark:text-navy-100">
            <span class="text-3xl font-semibold">214h</span>
            <span class="text-xl font-medium">21m</span>
          </p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-10 text-warning"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <div class="card justify-between p-5">
        <p class="font-medium">Earning Points</p>
        <div class="flex items-center justify-between pt-4">
          <p
              class="text-3xl font-semibold text-slate-700 dark:text-navy-100"
          >
            8
          </p>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-10 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="col-span-12 flex flex-col sm:col-span-6 lg:col-span-4">
      <div class="m-auto px-5">
        <img
            class="w-full max-w-xs"
            src="/images/illustrations/awards-man.svg"
            alt="image"
        />
      </div>
      <div class="mt-4 space-y-4 sm:mt-5 lg:mt-6">
        <div class="card p-4">
          <div class="flex items-center space-x-3">
            <div>
              <img
                  class="size-10"
                  src="/images/awards/award-31.svg"
                  alt="image"
              />
            </div>
            <div>
              <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
              >
                Advanced Level
              </p>
              <p
                  class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div class="card p-4">
          <div class="flex items-center space-x-3">
            <div>
              <img
                  class="size-10"
                  src="/images/awards/award-27.svg"
                  alt="image"
              />
            </div>
            <div>
              <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
              >
                Boss Level
              </p>
              <p
                  class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div class="card p-4">
          <div class="flex items-center space-x-3">
            <div>
              <img
                  class="size-10"
                  src="/images/awards/award-5.svg"
                  alt="image"
              />
            </div>
            <div>
              <p
                  class="text-base font-medium text-slate-700 dark:text-navy-100"
              >
                Expert Level
              </p>
              <p
                  class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 sm:col-span-6 lg:col-span-4">
      <div class="flex items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
        >
          Group Lessons
        </h2>
        <div v-popper class="inline-flex">
          <button class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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
      <div class="mt-3 flex flex-col justify-between space-y-4">
        <div class="card p-4">
          <p class="font-medium text-slate-700 dark:text-navy-100">
            Social Media Marketing
          </p>
          <p class="mt-1 text-xs+">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div class="mt-4 flex flex-wrap -space-x-2">
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

            <div class="avatar size-7 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>
          <div class="mt-2 flex items-end justify-between">
            <p
                class="flex items-center space-x-2 text-slate-400 dark:text-navy-300"
            >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">25 May, 2022</span>
            </p>
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
        <div class="card p-4">
          <p class="font-medium text-slate-700 dark:text-navy-100">
            Figma: Create Design System
          </p>
          <p class="mt-1 text-xs+">Lonsectetur adipisicing elit.</p>
          <div class="mt-4 flex flex-wrap -space-x-2">
            <div class="avatar size-7 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-7 hover:z-10">
              <div
                  class="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
              >
                nb
              </div>
            </div>

            <div class="avatar size-7 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-7 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>
          <div class="mt-2 flex items-end justify-between">
            <p
                class="flex items-center space-x-2 text-slate-400 dark:text-navy-300"
            >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">25 May, 2022</span>
            </p>
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
        <div class="card p-4">
          <p class="font-medium text-slate-700 dark:text-navy-100">
            Getting started with Vue
          </p>
          <p class="mt-1 text-xs+">Ossumenda ratione repellat aliquid?</p>
          <div class="mt-4 flex flex-wrap -space-x-2">
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
                uh
              </div>
            </div>

            <div class="avatar size-7 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-7 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>
          <div class="mt-2 flex items-end justify-between">
            <p
                class="flex items-center space-x-2 text-slate-400 dark:text-navy-300"
            >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-xs">06 June, 2022</span>
            </p>
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
    <div class="col-span-12 lg:col-span-4">
      <div class="flex items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
        >
          Completed Course
        </h2>
        <div v-popper class="inline-flex">
          <button class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
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
      <div
          class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-1"
      >
        <div class="card p-2.5">
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors line-clamp-2 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Learn JavaScript Unit Testing</a
                >
                <a
                    href="#"
                    class="text-xs text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
                >Konnor Guzman</a
                >
              </div>
              <div class="flex items-center space-x-2 text-xs">
                <div class="flex shrink-0 items-center space-x-1">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>10h 32m</p>
                </div>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="line-clamp-1">124 Students</span>
              </div>
            </div>
            <img
                class="size-24 rounded-lg object-cover"
                src="/images/600x400.png"
                alt="image"
            />
          </div>
        </div>
        <div class="card p-2.5">
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors line-clamp-2 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Basic of digital marketing</a
                >
                <a
                    href="#"
                    class="text-xs text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
                >Alfredo Elliott</a
                >
              </div>
              <div class="flex items-center space-x-2 text-xs">
                <div class="flex shrink-0 items-center space-x-1">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>16h 14m</p>
                </div>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="line-clamp-1">475 Students </span>
              </div>
            </div>
            <img
                class="size-24 rounded-lg object-cover"
                src="/images/illustrations/store-ui.svg"
                alt="image"
            />
          </div>
        </div>
        <div class="card p-2.5">
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors line-clamp-2 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Sales Analytics Advanced Complete Course</a
                >
                <a
                    href="#"
                    class="text-xs text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
                >Travis Fuller</a
                >
              </div>
              <div class="flex items-center space-x-2 text-xs">
                <div class="flex shrink-0 items-center space-x-1">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>4h 47m</p>
                </div>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="line-clamp-1">985 Students </span>
              </div>
            </div>
            <img
                class="size-24 rounded-lg object-cover"
                src="/images/600x400.png"
                alt="image"
            />
          </div>
        </div>
        <div class="card p-2.5">
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors line-clamp-2 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Learn UI/UX Design</a
                >
                <a
                    href="#"
                    class="text-xs text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100"
                >Henry Curtis</a
                >
              </div>
              <div class="flex items-center space-x-2 text-xs">
                <div class="flex shrink-0 items-center space-x-1">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>7h 56m</p>
                </div>
                <div
                    class="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="line-clamp-1">369 Students </span>
              </div>
            </div>
            <img
                class="size-24 rounded-lg object-cover"
                src="/images/600x400.png"
                alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
