<script>
import Swiper from "swiper/bundle";
import SidebarCloseButton from "@/components/theme/SidebarCloseButton.vue";
export default {
  name: "Sidebar",
  components: {
    'ui-sidebar-close-btn': SidebarCloseButton
  },
  mounted() {
    new Swiper(this.$refs.slide, {
      slidesPerView: "auto",
      spaceBetween: 10,
      slidesPerGroup: 3,
    });
  }
}
</script>

<template>
  <!-- Sidebar Panel -->
  <div class="sidebar-panel">
    <div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
      <!-- Sidebar Panel Header -->
      <div class="flex h-18 w-full items-center justify-between pl-4 pr-1">
        <div class="flex items-center">
          <div class="avatar mr-3 hidden size-9 lg:flex">
            <div
                class="is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
          </div>
          <p
              class="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100"
          >
            Chat
          </p>
        </div>
        <ui-sidebar-close-btn class="xl:hidden" />
      </div>

      <!-- Sidebar Panel Body -->
      <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
        <div>
          <div class="flex items-center justify-between px-4">
            <span class="text-xs+ font-medium uppercase">History</span>
            <div class="-mr-1.5 flex">
              <button
                  class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div ref="slide" class="swiper px-4">
            <div class="swiper-wrapper mt-1">
              <div class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center">
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Konnor
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Travis
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Fuller
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Alfredo
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Elliott
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Derrick
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Simmons
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Katrina
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Henry
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Curtis
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Bradley
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Samantha
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Corey
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Lance
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Tucker
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Jensen
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Perkins
                </p>
              </div>
              <div
                  class="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
              >
                <div
                    class="size-11 rounded-full bg-gradient-to-r from-purple-500 to-orange-600 p-0.5"
                >
                  <img
                      class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <p
                    class="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100"
                >
                  Evans
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 flex px-4">
          <label class="relative mr-1.5 flex">
            <input
                class="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs+ ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="Search chats"
                type="text"
            />
            <span
                class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                      />
                    </svg>
                  </span>
          </label>

          <button
              class="btn -mr-2 size-8 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                  stroke-miterlimit="10"
                  d="M22 6.5h-9.5M6 6.5H2M9 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 17.5h-6M9.5 17.5H2M13 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
              />
            </svg>
          </button>
        </div>

        <div
            class="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto"
        >
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
              ></div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Alfredo Elliott
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >11:03</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  😂 Lorem ipsum dolor
                </p>
                <div
                    class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                >
                  5
                </div>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Konnor Guzman
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >09:16</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  💣 Adipisicing elit. Prov ident?
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
              >
                      <span
                          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                      ></span>
              </div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Travis Fuller
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >08:05</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Dolor set. Prov ident?
                </p>
                <div
                    class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-primary px-1.5 text-tiny+ font-medium leading-none text-white dark:bg-accent"
                >
                  4
                </div>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
              ></div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Derrick Simmons
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >06:21</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  And that’s why a 15th century
                </p>
                <div
                    class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                >
                  2
                </div>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
              ></div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Katrina West
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >06:21</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  he wanted people to focus
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Corey Evans
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >Tue</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Anthony Jensen
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >Tue</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Lance Tucker
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >Tue</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Duis aute irure dolor in
                </p>
              </div>
            </div>
          </div>

          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
              ></div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Alfredo Elliott
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >11:03</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  😂 Lorem ipsum dolor
                </p>
                <div
                    class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                >
                  5
                </div>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Konnor Guzman
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >09:16</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  💣 Adipisicing elit. Prov ident?
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
              >
                      <span
                          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                      ></span>
              </div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Travis Fuller
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >08:05</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Dolor set. Prov ident?
                </p>
                <div
                    class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-primary px-1.5 text-tiny+ font-medium leading-none text-white dark:bg-accent"
                >
                  4
                </div>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
              ></div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Derrick Simmons
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >06:21</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  And that’s why a 15th century
                </p>
                <div
                    class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                >
                  2
                </div>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
              <div
                  class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
              ></div>
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Katrina West
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >06:21</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  he wanted people to focus
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Corey Evans
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >Tue</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Anthony Jensen
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >Tue</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Excepteur sint occaecat cupidatat
                </p>
              </div>
            </div>
          </div>
          <div
              class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
          >
            <div class="avatar size-10">
              <img
                  class="rounded-full"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <div
                  class="flex items-baseline justify-between space-x-1.5"
              >
                <p
                    class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                >
                  Lance Tucker
                </p>
                <span class="text-tiny+ text-slate-400 dark:text-navy-300"
                >Tue</span
                >
              </div>
              <div
                  class="mt-1 flex items-center justify-between space-x-1"
              >
                <p
                    class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"
                >
                  Duis aute irure dolor in
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
            class="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600"
        >
          <a
              href="#"
              data-tooltip="All Chats"
              class="btn size-9 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
              />
              <path
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="Users"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="Groups"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="Channels"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </a>
          <a
              href="#"
              data-tooltip="More"
              class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Minimized Sidebar Panel -->
  <div class="sidebar-panel-min">
    <div class="flex h-full flex-col bg-white dark:bg-navy-750">
      <div class="flex h-18 shrink-0 items-center justify-center">
        <div class="avatar flex size-10">
          <div
              class="is-initial is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <svg
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
        <div
            class="is-scrollbar-hidden flex grow flex-col overflow-y-auto"
        >
          <ul
              class="mt-2 flex flex-col items-center justify-center space-y-1"
          >
            <li>
              <a
                  href="#"
                  class="btn size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  href="#"
                  class="btn size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div
              class="my-4 mx-4 h-px shrink-0 bg-slate-200 dark:bg-navy-500"
          ></div>
          <div class="flex flex-col">
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                ></div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />

                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                >
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                        ></span>
                </div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                ></div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                ></div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                ></div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                >
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                        ></span>
                </div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                ></div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
                <div
                    class="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                ></div>
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <div
                class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
            >
              <div class="avatar size-10">
                <img
                    class="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="py-3">
          <button
              class="btn size-10 rounded-full border border-slate-200 p-0 font-medium hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
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
  </div>
</template>
