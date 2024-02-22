<script>
import { useThemeStore } from "@/components/theme/theme.js";
import Tab from "@/components/tab.js";
export default {
  name: "NFT2",
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')

    return { theme }
  },
  mounted() {
    new Tab("#feed-tab");
  }
}
</script>

<template>
  <div class="mt-5 grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
    <div
        class="col-span-12 space-y-4 sm:space-y-5 lg:col-span-8 lg:space-y-6 xl:col-span-9"
    >
      <div>
        <div class="flex items-center justify-between">
          <h3
              class="text-xl font-medium text-slate-800 dark:text-navy-50"
          >
            Featured Artists
          </h3>
          <a
              href="#"
              class="border-b border-dotted border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
          >View All</a
          >
        </div>
        <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          <div class="card items-center pb-5 text-center">
            <img
                class="h-24 w-full rounded-t-lg object-cover object-center"
                src="images/800x600.png"
                alt="image"
            />
            <div class="avatar -mt-12 size-20">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="mt-1.5 px-2">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Travis Fuller
              </a>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                USA, Washington DC
              </p>
              <button
                  class="btn mt-4 h-8 min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="card items-center pb-5 text-center">
            <img
                class="h-24 w-full rounded-t-lg object-cover object-center"
                src="images/800x600.png"
                alt="image"
            />
            <div class="avatar -mt-12 size-20">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="mt-1.5 px-2">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Alfredo Elliott
              </a>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Australia, Sydney
              </p>
              <button
                  class="btn mt-4 h-8 min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="card items-center pb-5 text-center">
            <img
                class="h-24 w-full rounded-t-lg object-cover object-center"
                src="images/800x600.png"
                alt="image"
            />
            <div class="avatar -mt-12 size-20">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="mt-1.5 px-2">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Raul Bradley
              </a>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Germany, Berlin
              </p>
              <button
                  class="btn mt-4 h-8 min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Follow
              </button>
            </div>
          </div>
          <div class="card items-center pb-5 text-center">
            <img
                class="h-24 w-full rounded-t-lg object-cover object-center"
                src="images/800x600.png"
                alt="image"
            />
            <div class="avatar -mt-12 size-20">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="mt-1.5 px-2">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Henry Curtis
              </a>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Switzerland, Zurich
              </p>
              <button
                  class="btn mt-4 h-8 min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <h3
              class="text-xl font-medium text-slate-800 dark:text-navy-50"
          >
            Feed
          </h3>

          <div
              class="hidden w-full max-w-xs justify-between space-x-4 text-slate-700 dark:text-navy-100 sm:flex"
              id="feed-tab"
          >
            <button
                data-target="#tabAll"
                class="tab font-medium tracking-wide"
                data-active-class="text-primary dark:text-accent-light"
            >
              All
            </button>
            <button
                data-target="#tabArt"
                class="tab font-medium tracking-wide"
                data-active-class="text-primary dark:text-accent-light"
            >
              Art
            </button>
            <button
                data-target="#tabSport"
                class="tab font-medium tracking-wide"
                data-active-class="text-primary dark:text-accent-light"
            >
              Sport
            </button>
            <button
                data-target="#tabMusic"
                class="tab font-medium tracking-wide"
                data-active-class="text-primary dark:text-accent-light"
            >
              Music
            </button>
            <button
                data-target="#tabMore"
                class="tab font-medium tracking-wide"
                data-active-class="text-primary dark:text-accent-light"
            >
              More
            </button>
          </div>

          <div class="flex space-x-1 sm:hidden">
            <button
                class="btn size-7 shrink-0 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
              >
                <path
                    d="M3 2.5h-.5v4H6.501V6L6.5 3v-.5H3zM3 10h-.5v4H6.501v-.5l-.001-3V10H3zm0 7.5h-.5v4H6.501V21L6.5 18v-.5H3zM6 7H3c-.551 0-1-.45-1-1V3c0-.55.449-1 1-1h3c.551 0 1 .45 1 1v3c0 .55-.449 1-1 1zm15.75-2.75a.25.25 0 110 .5h-12a.25.25 0 110-.5h12zM6 14.5H3c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h3c.551 0 1 .45 1 1v3c0 .55-.449 1-1 1zm15.75-2.75a.25.25 0 110 .5h-12a.25.25 0 110-.5h12zM6 22H3c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h3c.551 0 1 .45 1 1v3c0 .55-.449 1-1 1zm15.75-2.75a.25.25 0 110 .5h-12a.25.25 0 110-.5h12z"
                />
              </svg>
            </button>

            <button
                class="btn size-7 shrink-0 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                    stroke-miterlimit="10"
                    d="M22 6.5h-9.5M6 6.5H2M9 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 17.5h-6M9.5 17.5H2M13 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
            class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          <div class="card group p-3">
            <div class="flex items-center justify-between space-x-2 px-1">
              <div class="flex items-center space-x-2">
                <div class="avatar size-9">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <a
                      href="#"
                      class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                  >Travis Fuller</a
                  >
                  <p class="text-xs text-primary dark:text-accent-light">
                    952 items
                  </p>
                </div>
              </div>
              <button
                  class="btn size-9 bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-regular fa-heart text-lg"></i>
              </button>
            </div>
            <div class="relative mt-4">
              <img
                  class="h-56 w-full rounded-lg object-cover object-center"
                  src="images/800x600.png"
                  alt="image"
              />
              <div
                  class="absolute top-0 h-full w-full rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div
                  class="absolute top-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button
                    class="btn min-w-[7rem] border border-white/10 bg-white/20 text-white backdrop-blur hover:bg-white/30 focus:bg-white/30"
                >
                  Place a Bid
                </button>
              </div>
            </div>
            <div class="mt-3 px-1">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                The Runner #265
              </a>
              <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
              <div class="flex justify-between">
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Ending in
                  </p>
                  <p
                      class="text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    9h 12m 33s
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Highest bid
                  </p>
                  <p
                      class="text-base font-medium text-primary dark:text-accent-light"
                  >
                    4.56 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card group p-3">
            <div class="flex items-center justify-between space-x-2 px-1">
              <div class="flex items-center space-x-2">
                <div class="avatar size-9">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <a
                      href="#"
                      class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                  >Katrina West</a
                  >
                  <p class="text-xs text-primary dark:text-accent-light">
                    896 items
                  </p>
                </div>
              </div>
              <button
                  class="btn size-9 bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-regular fa-heart text-lg"></i>
              </button>
            </div>
            <div class="relative mt-4">
              <img
                  class="h-56 w-full rounded-lg object-cover object-center"
                  src="images/800x600.png"
                  alt="image"
              />
              <div
                  class="absolute top-0 h-full w-full rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div
                  class="absolute top-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button
                    class="btn min-w-[7rem] border border-white/10 bg-white/20 text-white backdrop-blur hover:bg-white/30 focus:bg-white/30"
                >
                  Place a Bid
                </button>
              </div>
            </div>
            <div class="mt-3 px-1">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Punkiber #015
              </a>
              <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
              <div class="flex justify-between">
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Ending in
                  </p>
                  <p
                      class="text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    2h 48m 18s
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Highest bid
                  </p>
                  <p
                      class="text-base font-medium text-primary dark:text-accent-light"
                  >
                    11.06 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card group p-3">
            <div class="flex items-center justify-between space-x-2 px-1">
              <div class="flex items-center space-x-2">
                <div class="avatar size-9">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <a
                      href="#"
                      class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                  >Raul Bradley</a
                  >
                  <p class="text-xs text-primary dark:text-accent-light">
                    1,643 items
                  </p>
                </div>
              </div>
              <button
                  class="btn size-9 bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-heart text-lg text-error"></i>
              </button>
            </div>
            <div class="relative mt-4">
              <img
                  class="h-56 w-full rounded-lg object-cover object-center"
                  src="images/800x600.png"
                  alt="image"
              />
              <div
                  class="absolute top-0 h-full w-full rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div
                  class="absolute top-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button
                    class="btn min-w-[7rem] border border-white/10 bg-white/20 text-white backdrop-blur hover:bg-white/30 focus:bg-white/30"
                >
                  Place a Bid
                </button>
              </div>
            </div>

            <div class="mt-3 px-1">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Cube Store #015
              </a>
              <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
              <div class="flex justify-between">
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Ending in
                  </p>
                  <p
                      class="text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    1d 6s 16m
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Highest bid
                  </p>
                  <p
                      class="text-base font-medium text-primary dark:text-accent-light"
                  >
                    7.23 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card group p-3">
            <div class="flex items-center justify-between space-x-2 px-1">
              <div class="flex items-center space-x-2">
                <div class="avatar size-9">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <a
                      href="#"
                      class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                  >Henry Curtis</a
                  >
                  <p class="text-xs text-primary dark:text-accent-light">
                    163 items
                  </p>
                </div>
              </div>
              <button
                  class="btn size-9 bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-regular fa-heart text-lg"></i>
              </button>
            </div>
            <div class="relative mt-4">
              <img
                  class="h-56 w-full rounded-lg object-cover object-center"
                  src="images/800x600.png"
                  alt="image"
              />
              <div
                  class="absolute top-0 h-full w-full rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div
                  class="absolute top-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button
                    class="btn min-w-[7rem] border border-white/10 bg-white/20 text-white backdrop-blur hover:bg-white/30 focus:bg-white/30"
                >
                  Place a Bid
                </button>
              </div>
            </div>

            <div class="mt-3 px-1">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Abstraktio #699
              </a>
              <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
              <div class="flex justify-between">
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Ending in
                  </p>
                  <p
                      class="text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    2d 4s 52m
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Highest bid
                  </p>
                  <p
                      class="text-base font-medium text-primary dark:text-accent-light"
                  >
                    3.09 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card group p-3">
            <div class="flex items-center justify-between space-x-2 px-1">
              <div class="flex items-center space-x-2">
                <div class="avatar size-9">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <a
                      href="#"
                      class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                  >Lance Tucker
                  </a>
                  <p class="text-xs text-primary dark:text-accent-light">
                    533 items
                  </p>
                </div>
              </div>
              <button
                  class="btn size-9 bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-heart text-lg text-error"></i>
              </button>
            </div>
            <div class="relative mt-4">
              <img
                  class="h-56 w-full rounded-lg object-cover object-center"
                  src="images/800x600.png"
                  alt="image"
              />
              <div
                  class="absolute top-0 h-full w-full rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div
                  class="absolute top-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button
                    class="btn min-w-[7rem] border border-white/10 bg-white/20 text-white backdrop-blur hover:bg-white/30 focus:bg-white/30"
                >
                  Place a Bid
                </button>
              </div>
            </div>
            <div class="mt-3 px-1">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Galaxy #236
              </a>
              <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
              <div class="flex justify-between">
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Ending in
                  </p>
                  <p
                      class="text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    4d 5s 3m
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Highest bid
                  </p>
                  <p
                      class="text-base font-medium text-primary dark:text-accent-light"
                  >
                    1.49 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card group p-3">
            <div class="flex items-center justify-between space-x-2 px-1">
              <div class="flex items-center space-x-2">
                <div class="avatar size-9">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <a
                      href="#"
                      class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                  >Henry Curtis
                  </a>
                  <p class="text-xs text-primary dark:text-accent-light">
                    669 items
                  </p>
                </div>
              </div>
              <button
                  class="btn size-9 bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-regular fa-heart text-lg"></i>
              </button>
            </div>
            <div class="relative mt-4">
              <img
                  class="h-56 w-full rounded-lg object-cover object-center"
                  src="images/800x600.png"
                  alt="image"
              />
              <div
                  class="absolute top-0 h-full w-full rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div
                  class="absolute top-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button
                    class="btn min-w-[7rem] border border-white/10 bg-white/20 text-white backdrop-blur hover:bg-white/30 focus:bg-white/30"
                >
                  Place a Bid
                </button>
              </div>
            </div>
            <div class="mt-3 px-1">
              <a
                  href="#"
                  class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                Avrang #965
              </a>
              <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
              <div class="flex justify-between">
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Ending in
                  </p>
                  <p
                      class="text-base font-medium text-slate-700 dark:text-navy-100"
                  >
                    6d 2s 11m
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Highest bid
                  </p>
                  <p
                      class="text-base font-medium text-primary dark:text-accent-light"
                  >
                    3.63 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="col-span-12 space-y-4 sm:space-y-5 lg:col-span-4 lg:space-y-6 xl:col-span-3"
    >
      <div class="card bg-gradient-to-br from-info to-info-focus p-4">
        <div class="flex justify-between text-white">
          <i class="fa-brands fa-bitcoin text-2xl"></i>
          <p>**** **** 4995</p>
        </div>
        <div class="mt-10">
          <p class="text-sky-100">Bitcoin</p>
          <div class="flex justify-between">
            <p class="text-2xl font-semibold text-white">2.656651</p>
            <img
                src="images/payments/cc-visa-white.svg"
                class="w-10 rounded-lg"
                alt="creditcard"
            />
          </div>
        </div>
      </div>

      <div class="card p-3">
        <img
            class="h-56 w-full rounded-lg object-cover object-center"
            src="images/800x600.png"
            alt="image"
        />
        <div class="mt-3 p-1">
          <div class="flex items-center justify-between space-x-1">
            <a
                href="#"
                class="text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              The Runner #033
            </a>
            <button
                class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              <i class="fa-solid fa-heart text-error"></i>
            </button>
          </div>
          <p class="mt-2 text-xs+">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis optio laudantium
          </p>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-2">
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                >Travis Fuller</a
                >
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  952 items
                </p>
              </div>
            </div>
            <button
                class="btn h-7 rounded-full bg-primary/10 px-2.5 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
            >
              Follow
            </button>
          </div>
          <p class="mt-6 font-medium">Action End in</p>
          <div
              class="mt-3 grid grid-cols-3 gap-3 text-center font-inter text-4xl font-semibold text-primary dark:text-accent-light"
          >
            <div class="grid grid-cols-2 gap-1">
              <div
                  class="rounded-lg bg-primary/10 py-3 dark:bg-accent-light/10"
              >
                1
              </div>
              <div
                  class="rounded-lg bg-primary/10 py-3 dark:bg-accent-light/10"
              >
                4
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1">
              <div
                  class="rounded-lg bg-primary/10 py-3 dark:bg-accent-light/10"
              >
                3
              </div>
              <div
                  class="rounded-lg bg-primary/10 py-3 dark:bg-accent-light/10"
              >
                5
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1">
              <div
                  class="rounded-lg bg-primary/10 py-3 dark:bg-accent-light/10"
              >
                4
              </div>
              <div
                  class="rounded-lg bg-primary/10 py-3 dark:bg-accent-light/10"
              >
                5
              </div>
            </div>
          </div>
          <div class="mt-2 grid grid-cols-3 gap-3 text-center text-xs+">
            <p>hours</p>
            <p>minutes</p>
            <p>seconds</p>
          </div>
          <div class="my-5 h-px bg-slate-200 dark:bg-navy-500"></div>
          <div class="flex items-center justify-between">
            <p
                class="text-lg font-medium text-slate-700 dark:text-navy-100"
            >
              156 ETH
            </p>
            <button
                class="btn h-9 min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Place a Bid
            </button>
          </div>
        </div>
      </div>

      <div class="card px-4 pb-4">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            History
          </h2>
          <a
              href="#"
              class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
          >View All</a
          >
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-2">
              <div class="avatar size-10">
                <img
                    class="mask is-hexagon"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div>
                <p
                    class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  You Followed
                </p>
                <p></p>
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  Travis Fuller
                </p>
              </div>
            </div>
            <p class="text-xs">Just Now</p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-2">
              <div class="avatar size-10">
                <img
                    class="mask is-hexagon"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div>
                <p
                    class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  New NFT
                </p>
                <p></p>
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  by Alfredo Elliott
                </p>
              </div>
            </div>
            <p class="text-xs">1 hr ago</p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-2">
              <div class="avatar size-10">
                <img
                    class="mask is-hexagon"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div>
                <p
                    class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  You liked NFT
                </p>
                <p></p>
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  by Henry Curtis
                </p>
              </div>
            </div>
            <p class="text-xs">3 hr ago</p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-2">
              <div class="avatar size-10">
                <img
                    class="mask is-hexagon"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div>
                <p
                    class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  New NFT
                </p>
                <p></p>
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  by Kartina West
                </p>
              </div>
            </div>
            <p class="text-xs">5 hr ago</p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-2">
              <div class="avatar size-10">
                <img
                    class="mask is-hexagon"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div>
                <p
                    class="font-medium text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Followed
                </p>
                <p></p>
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  by Lance Tucker
                </p>
              </div>
            </div>
            <p class="text-xs">a day ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>