<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";

export default {
  extends: Dashboards
}
</script>

<template>
  <div
      class="mt-4 grid grid-cols-12 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6"
  >
    <div class="col-span-12 lg:order-last lg:col-span-4">
      <div id="cards-carousel" class="swiper h-40 w-64">
        <div class="swiper-wrapper">
          <div
              class="swiper-slide relative flex h-full flex-col overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-5"
          >
            <div class="grow">
              <img
                  class="h-3"
                  src="images/payments/cc-visa-white.svg"
                  alt="image"
              />
            </div>
            <div class="text-white">
              <p class="text-lg font-semibold tracking-wide">$2,139.22</p>
              <p class="mt-1 text-xs font-medium">**** **** **** 8945</p>
            </div>
            <div
                class="absolute top-0 right-0 -m-3 h-24 w-24 rounded-full bg-white/20"
            ></div>
          </div>
          <div
              class="swiper-slide relative flex h-full flex-col overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-5"
          >
            <div class="grow">
              <img
                  class="h-3"
                  src="images/payments/cc-visa-white.svg"
                  alt="image"
              />
            </div>
            <div class="text-white">
              <p class="text-lg font-semibold tracking-wide">$2,139.22</p>
              <p class="mt-1 text-xs font-medium">**** **** **** 8945</p>
            </div>
            <div
                class="absolute bottom-0 right-0 -m-3 h-24 w-24 rounded-full bg-white/20"
            ></div>
          </div>
          <div
              class="swiper-slide relative flex h-full flex-col overflow-hidden rounded-xl bg-gradient-to-br from-info to-info-focus p-5"
          >
            <div class="grow">
              <img
                  class="h-3"
                  src="images/payments/cc-visa-white.svg"
                  alt="image"
              />
            </div>
            <div class="text-white">
              <p class="text-lg font-semibold tracking-wide">$2,139.22</p>
              <p class="mt-1 text-xs font-medium">**** **** **** 8945</p>
            </div>
            <div
                class="absolute top-0 right-0 -m-3 h-24 w-24 rounded-full bg-white/20"
            ></div>
          </div>
        </div>
      </div>

      <div class="card -mt-12 px-4 pb-5 sm:px-5">
        <div class="mt-12">
          <div class="flex items-center justify-between py-3">
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Send Money
            </h2>
            <div id="send-money-menu" class="inline-flex">
              <button
                  class="popper-ref btn -mr-1 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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

          <div class="flex space-x-2">
            <div class="avatar h-8 w-8 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="images/200x200.png"
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
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar h-8 w-8 hover:z-10">
              <img
                  class="rounded-full ring ring-white dark:ring-navy-700"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-2 flex items-center justify-between">
            <p class="text-xs+">View All Contacts</p>

            <button
                class="btn -mr-1 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
          <div class="mt-2 space-y-4">
            <label class="block">
              <span class="text-xs+">Pay to</span>
              <input
                  id="card-number"
                  class="form-input mt-1.5 h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="**** **** **** ****"
                  type="text"
              />
            </label>
            <div>
              <span class="text-xs+">Amount</span>

              <div class="mt-1.5 flex h-9 -space-x-px">
                <select
                    class="form-select rounded-l-lg border border-slate-300 bg-white px-3 py-2 pr-9 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                >
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </select>
                <input
                    class="form-input w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Price"
                    type="text"
                />
              </div>
            </div>
          </div>
          <div
              class="mt-5 flex justify-between text-slate-400 dark:text-navy-300"
          >
            <p class="text-xs+">Commission:</p>
            <p>3$</p>
          </div>
          <div class="mt-2 flex justify-between">
            <p>Total:</p>
            <p class="font-medium text-slate-700 dark:text-navy-100">
              3$
            </p>
          </div>

          <button
              class="btn mt-5 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-8">
      <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6"
      >
        <div class="card p-4 sm:p-5">
          <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-xl shadow-primary/50 dark:bg-accent dark:shadow-accent/50"
          >
            <i class="fa fa-dollar-sign text-xl text-white"></i>
          </div>
          <p class="mt-16">Income</p>
          <p class="mt-2 font-medium text-slate-700 dark:text-navy-100">
                  <span class="text-2xl">$35</span
                  ><span class="text-base">.3k</span>
          </p>
          <p class="mt-1 flex items-center text-xs text-success">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-success"
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
        <div class="card p-4 sm:p-5">
          <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-warning shadow-xl shadow-warning/50"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
          <p class="mt-16">Expense</p>
          <p class="mt-2 font-medium text-slate-700 dark:text-navy-100">
                  <span class="text-2xl">$7</span
                  ><span class="text-base">.14k</span>
          </p>
          <p class="mt-1 flex items-center text-xs text-error">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-error"
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
            <span>1.9%</span>
          </p>
        </div>
        <div class="card p-4 sm:p-5">
          <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-info shadow-xl shadow-info/50"
          >
            <i class="fa fa-coins text-xl text-white"></i>
          </div>
          <p class="mt-16">Upcoming</p>
          <p class="mt-2 font-medium text-slate-700 dark:text-navy-100">
                  <span class="text-2xl">$7</span
                  ><span class="text-base">.42k</span>
          </p>
          <p class="mt-1 flex items-center text-xs text-success">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-success"
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
            <span>7.11%</span>
          </p>
        </div>
        <div class="card p-4 sm:p-5">
          <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary shadow-xl shadow-secondary/50"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </div>
          <p class="mt-16">Saving</p>
          <p class="mt-2 font-medium text-slate-700 dark:text-navy-100">
                  <span class="text-2xl">$2</span
                  ><span class="text-base">.44k</span>
          </p>
          <p class="mt-1 flex items-center text-xs text-success">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-success"
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
            <span>3.47%</span>
          </p>
        </div>
        <div class="card col-span-2 px-4 pb-5 sm:px-5">
          <div class="my-3 flex h-8 items-center justify-between">
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              Transactions
            </h2>
            <a
                href="#"
                class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
            >
              View All
            </a>
          </div>
          <div class="space-y-4">
            <div class="flex cursor-pointer items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <p class="text-slate-700 dark:text-navy-100">
                    Konnor Guzman
                  </p>
                  <p
                      class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                  >
                    Dec 21, 2021 - 08:05
                  </p>
                </div>
              </div>
              <p class="font-medium text-success">$660.22</p>
            </div>
            <div class="flex cursor-pointer items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <p class="text-slate-700 dark:text-navy-100">
                    Henry Curtis
                  </p>
                  <p
                      class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                  >
                    Dec 19, 2021 - 11:55
                  </p>
                </div>
              </div>
              <p class="font-medium text-success">$33.63</p>
            </div>
            <div class="flex cursor-pointer items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <p class="text-slate-700 dark:text-navy-100">
                    Derrick Simmons
                  </p>
                  <p
                      class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                  >
                    Dec 16, 2021 - 14:45
                  </p>
                </div>
              </div>
              <p class="font-medium text-success">$674.63</p>
            </div>
            <div class="flex cursor-pointer items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <p class="text-slate-700 dark:text-navy-100">
                    Kartina West
                  </p>
                  <p
                      class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                  >
                    Dec 13, 2021 - 11:30
                  </p>
                </div>
              </div>
              <p class="font-medium text-error">$547.63</p>
            </div>
            <div class="flex cursor-pointer items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <img
                      class="rounded-full"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div>
                  <p class="text-slate-700 dark:text-navy-100">
                    Samantha Shelton
                  </p>
                  <p
                      class="text-xs text-slate-400 line-clamp-1 dark:text-navy-200"
                  >
                    Dec 10, 2021 - 09:41
                  </p>
                </div>
              </div>
              <p class="font-medium text-success">$736.24</p>
            </div>
          </div>
        </div>
        <div class="card col-span-2">
          <div
              class="mt-3 flex items-center justify-between px-4 sm:px-5"
          >
            <h2
                class="font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              History
            </h2>
            <div id="history-menu" class="inline-flex">
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
          <div class="pr-3 sm:pl-2">
            <div id="history-chart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
