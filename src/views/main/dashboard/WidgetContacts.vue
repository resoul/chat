<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";
export default {
  extends: Dashboards
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2 class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
      Contact Widgets
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
            stroke-width="2"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </li>
      <li>Contact Widgets</li>
    </ul>
  </div>
  <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
  >
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <div class="card items-center p-4 sm:p-5 lg:p-7">
        <div class="avatar size-16">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Konnor Guzman
        </h3>
        <p class="text-slate-400 dark:text-navy-300">is calling</p>
        <div class="mt-6 flex space-x-6">
          <button
              class="btn size-9 rounded-full bg-success p-0 font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            <i class="fa-solid fa-phone"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-error p-0 font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
          >
            <i class="fa-solid fa-phone rotate-[135deg]"></i>
          </button>
        </div>
      </div>
      <div class="card items-center p-4 sm:p-5 lg:p-7">
        <div class="avatar size-16">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="mt-3 text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Travis Fuller
        </h3>
        <p class="text-slate-400 dark:text-navy-300">00:01</p>
        <div class="mt-6 grid grid-cols-3 gap-4">
          <button
              class="btn size-9 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <i class="fa-regular fa-user text-base"></i>
          </button>
          <button
              class="btn size-9 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <i class="fa-solid fa-microphone-lines-slash"></i>
          </button>
          <button
              class="btn size-9 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <i class="fa-solid fa-voicemail"></i>
          </button>
          <button
              class="btn size-9 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <i class="fa-solid fa-volume-high"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-error p-0 font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
          >
            <i class="fa-solid fa-phone rotate-[135deg]"></i>
          </button>
          <button
              class="btn size-9 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  fill="currentColor"
                  d="M5.045 21c1.13 0 2.046-.96 2.046-2.143 0-1.183-.916-2.143-2.046-2.143S3 17.674 3 18.857C3 20.041 3.916 21 5.045 21zM12 14.143c1.13 0 2.046-.96 2.046-2.143 0-1.183-.916-2.143-2.046-2.143s-2.045.96-2.045 2.143c0 1.184.915 2.143 2.045 2.143zM12 7.286c1.13 0 2.046-.96 2.046-2.143C14.046 3.959 13.13 3 12 3s-2.045.96-2.045 2.143c0 1.183.915 2.143 2.045 2.143zM5.046 7.286c1.13 0 2.045-.96 2.045-2.143C7.091 3.959 6.176 3 5.046 3S3 3.96 3 5.143c0 1.183.916 2.143 2.046 2.143zM5.045 14.143c1.13 0 2.046-.96 2.046-2.143 0-1.183-.916-2.143-2.046-2.143S3 10.817 3 12c0 1.184.916 2.143 2.045 2.143zM12 21c1.13 0 2.046-.96 2.046-2.143 0-1.183-.916-2.143-2.046-2.143s-2.045.96-2.045 2.143C9.955 20.041 10.87 21 12 21zM18.954 21c1.13 0 2.046-.96 2.046-2.143 0-1.183-.916-2.143-2.046-2.143s-2.045.96-2.045 2.143c0 1.184.916 2.143 2.045 2.143zM18.954 7.286c1.13 0 2.046-.96 2.046-2.143C21 3.959 20.084 3 18.954 3s-2.045.96-2.045 2.143c0 1.183.916 2.143 2.045 2.143zM18.954 14.143c1.13 0 2.046-.96 2.046-2.143 0-1.183-.916-2.143-2.046-2.143s-2.045.96-2.045 2.143c0 1.184.916 2.143 2.045 2.143z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Contact List
        </h2>

        <div v-popper class="inline-flex">
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
      <label class="relative flex">
        <input
            class="form-input peer h-9 w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="112 Contacts"
            type="text"
        />
        <span
            class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
        >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path
                      d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                  />
                </svg>
              </span>
      </label>
      <div class="mt-4 space-y-3.5" v-accordion="{ duration: 200, openOnInit: [0] }">
        <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
          <div class="ac-header flex items-center justify-between">
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
                <p class="mt-1 text-xs line-clamp-1">(01) 22 888 4444</p>
              </div>
            </div>
            <button
                class="ac-trigger btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <i
                  class="ac-icon fas fa-chevron-down transition-transform"
              ></i>
            </button>
          </div>
          <div class="ac-panel">
            <div class="flex justify-between pt-4">
              <button
                  class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
              >
                <i class="fa-solid fa-phone text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
              >
                <i class="fa-solid fa-video text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
              >
                <i class="fa-regular fa-comment text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
              >
                <i class="fa-regular fa-envelope text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
          <div class="ac-header flex items-center justify-between">
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
                  Alfredo Elliott
                </h3>
                <p class="mt-1 text-xs line-clamp-1">(095)-800-8313</p>
              </div>
            </div>
            <button
                class="ac-trigger btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <i
                  class="ac-icon fas fa-chevron-down transition-transform"
              ></i>
            </button>
          </div>
          <div class="ac-panel">
            <div class="flex justify-between pt-4">
              <button
                  class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
              >
                <i class="fa-solid fa-phone text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
              >
                <i class="fa-solid fa-video text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
              >
                <i class="fa-regular fa-comment text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
              >
                <i class="fa-regular fa-envelope text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
          <div class="ac-header flex items-center justify-between">
            <div class="flex space-x-4">
              <div class="avatar size-10">
                <div
                    class="is-initial rounded-full bg-info text-sm+ uppercase text-white"
                >
                  ds
                </div>
              </div>
              <div>
                <h3
                    class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Derrick Simmons
                </h3>
                <p class="mt-1 text-xs line-clamp-1">(350)-813-3861</p>
              </div>
            </div>
            <button
                class="ac-trigger btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <i
                  class="ac-icon fas fa-chevron-down transition-transform"
              ></i>
            </button>
          </div>
          <div class="ac-panel">
            <div class="flex justify-between pt-4">
              <button
                  class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
              >
                <i class="fa-solid fa-phone text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
              >
                <i class="fa-solid fa-video text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
              >
                <i class="fa-regular fa-comment text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
              >
                <i class="fa-regular fa-envelope text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
          <div class="ac-header flex items-center justify-between">
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
                  Henry Curtis
                </h3>
                <p class="mt-1 text-xs line-clamp-1">(675)-975-0083</p>
              </div>
            </div>
            <button
                class="ac-trigger btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <i
                  class="ac-icon fas fa-chevron-down transition-transform"
              ></i>
            </button>
          </div>
          <div class="ac-panel">
            <div class="flex justify-between pt-4">
              <button
                  class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
              >
                <i class="fa-solid fa-phone text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
              >
                <i class="fa-solid fa-video text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
              >
                <i class="fa-regular fa-comment text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
              >
                <i class="fa-regular fa-envelope text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
          <div class="ac-header flex items-center justify-between">
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
                  John Doe
                </h3>
                <p class="mt-1 text-xs line-clamp-1">(727)-810-3880</p>
              </div>
            </div>
            <button
                class="ac-trigger btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <i
                  class="ac-icon fas fa-chevron-down transition-transform"
              ></i>
            </button>
          </div>
          <div class="ac-panel">
            <div class="flex justify-between pt-4">
              <button
                  class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
              >
                <i class="fa-solid fa-phone text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
              >
                <i class="fa-solid fa-video text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
              >
                <i class="fa-regular fa-comment text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
              >
                <i class="fa-regular fa-envelope text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
          <div class="ac-header flex items-center justify-between">
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
                  Travis Fuller
                </h3>
                <p class="mt-1 text-xs line-clamp-1">(654)-245-9324</p>
              </div>
            </div>
            <button
                class="ac-trigger btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <i
                  class="ac-icon fas fa-chevron-down transition-transform"
              ></i>
            </button>
          </div>
          <div class="ac-panel">
            <div class="flex justify-between pt-4">
              <button
                  class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
              >
                <i class="fa-solid fa-phone text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
              >
                <i class="fa-solid fa-video text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
              >
                <i class="fa-regular fa-comment text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
              >
                <i class="fa-regular fa-envelope text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="ac [&.is-active_.ac-header_.ac-icon]:rotate-180">
          <div class="ac-header flex items-center justify-between">
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
                  Raul Bradley
                </h3>
                <p class="mt-1 text-xs line-clamp-1">(350)-813-3861</p>
              </div>
            </div>
            <button
                class="ac-trigger btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <i
                  class="ac-icon fas fa-chevron-down transition-transform"
              ></i>
            </button>
          </div>
          <div class="ac-panel">
            <div class="flex justify-between pt-4">
              <button
                  class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
              >
                <i class="fa-solid fa-phone text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-warning/10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
              >
                <i class="fa-solid fa-video text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-secondary/10 p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
              >
                <i class="fa-regular fa-comment text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
              >
                <i class="fa-regular fa-envelope text-xs"></i>
              </button>
              <button
                  class="btn size-7 rounded-full bg-slate-150 p-0 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Contact Info
        </h2>
        <div v-popper class="inline-flex">
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
      <div class="avatar size-16">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <h3
          class="mt-2 text-base font-medium text-slate-700 dark:text-navy-100"
      >
        Travis Fuller
      </h3>
      <p class="text-xs text-slate-400 dark:text-navy-300">Family</p>
      <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between">
          <p class="line-clamp-1">(01) 22 888 4444</p>
          <div class="flex space-x-1.5">
            <button
                class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              <i class="fa-solid fa-phone text-xs"></i>
            </button>
            <button
                class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
            >
              <i class="fa-regular fa-envelope text-xs"></i>
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <p class="line-clamp-1">(727)-810-3880</p>
          <div class="flex space-x-1.5">
            <button
                class="btn size-7 rounded-full bg-success/10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              <i class="fa-solid fa-phone text-xs"></i>
            </button>
            <button
                class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
            >
              <i class="fa-regular fa-envelope text-xs"></i>
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <p class="line-clamp-1">raul@example.com</p>
          <div class="flex space-x-1.5">
            <button
                class="btn size-7 rounded-full bg-info/10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
            >
              <i class="fa-regular fa-envelope text-xs"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
      <div class="space-y-3.5">
        <div class="flex items-center justify-between">
          <div>
            <p>12 Sep. 20:30</p>
            <p class="text-xs">incoming call</p>
          </div>
          <div>
            <div
                class="badge rounded-full bg-error/10 text-error dark:bg-error/15"
            >
              Missed
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p>13 Sep. 21:45</p>
            <p class="text-xs">incoming call</p>
          </div>
          <div>
            <div
                class="badge rounded-full bg-info/10 text-info dark:bg-info/15"
            >
              1m 33s
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p>04 Oct. 12:14</p>
            <p class="text-xs">incoming call</p>
          </div>
          <div>
            <div
                class="badge rounded-full bg-info/10 text-info dark:bg-info/15"
            >
              45s
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p>21 Oct. 14:42</p>
            <p class="text-xs">incoming call</p>
          </div>
          <div>
            <div
                class="badge rounded-full bg-info/10 text-info dark:bg-info/15"
            >
              6m 14s
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="text-sm+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Call Setting
          </h2>
          <div v-popper class="inline-flex">
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div class="mt-4 space-y-3.5">
          <label class="flex items-center justify-between space-x-2">
            <span class="font-medium">Voice chat </span>
            <input
                checked
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
          </label>
          <label class="flex items-center justify-between space-x-2">
            <span class="font-medium">Video chat </span>
            <input
                checked
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent"
                type="checkbox"
            />
          </label>
          <label class="flex items-center justify-between space-x-2">
            <span class="font-medium">Realtime chat</span>
            <input
                checked
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light"
                type="checkbox"
            />
          </label>
          <label class="flex items-center justify-between space-x-2">
            <span class="font-medium">Incoming calls </span>
            <input
                checked
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
          </label>
        </div>
        <button
            class="btn mt-6 space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
        >
          <i class="fa-regular fa-check-circle"></i>
          <span> Apply Changes </span>
        </button>
      </div>
      <div class="card p-4 sm:p-5">
        <div class="flex space-x-4">
          <div>
            <div
                class="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
            >
              <i class="fa-solid fa-phone"></i>
            </div>
          </div>
          <div class="space-y-2">
            <p
                class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
            >
              WebRTC Module
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <div class="space-x-1.5">
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              <i class="fa-solid fa-info"></i>
            </button>
            <button
                class="btn size-8 rounded-full bg-error p-0 font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
            >
              <i class="fa-regular fa-trash-alt"></i>
            </button>
          </div>
          <input
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </div>
      </div>
    </div>
  </div>
</template>
