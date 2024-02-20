<script>
import Popper from "@/components/popper.js";
import Tab from "@/components/tab.js";
import Swiper from "swiper/bundle";
import Drawer from "@/components/drawer.js";
export default {
  name: "Home",
  data() {
    return {
      isShowChatInfo: false
    }
  },
  mounted() {
    const mainEl = document.querySelector("main.chat-app");
    const historySlide = document.querySelector("#history-slide");
    const chatDetailToggleEl = document.querySelector("#chat-detail-toggle");

    historySlide._swiper = new Swiper(historySlide, {
      slidesPerView: "auto",
      spaceBetween: 10,
      slidesPerGroup: 3,
    });

    const onToggleChatDetail = (isActive) => {
      if (isActive) {
        mainEl.classList.add("lg:mr-80");
        chatDetailToggleEl.classList.add(
            "text-primary",
            "dark:text-accent-light"
        );
      } else {
        mainEl.classList.remove("lg:mr-80");
        chatDetailToggleEl.classList.remove(
            "text-primary",
            "dark:text-accent-light"
        );
      }
    };

    const chatDetailsDrawer = new Drawer("#chat-detail", onToggleChatDetail);

    // if ($breakpoint.lgAndUp) {
    //   chatDetailsDrawer.open();
    // }

    // window.addEventListener("change:breakpoint", () => {
    //   if (chatDetailsDrawer.isActive) chatDetailsDrawer.close();
    // });

    new Popper("#chat-menu", ".popper-ref", ".popper-root", {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
      ],
    });

    new Tab("#tab-media");
  }
}
</script>

<template>
  <div class="chat-header relative z-10 flex h-[61px] w-full shrink-0 items-center justify-between border-b border-slate-150 bg-white px-[calc(var(--margin-x)-.5rem)] shadow-sm transition-[padding,width] duration-[.25s] dark:border-navy-700 dark:bg-navy-800">
    <div class="flex items-center space-x-5">
      <div class="ml-1 size-7">
        <button
            class="sidebar-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
          data-toggle="drawer"
          data-target="#chat-detail"
          class="flex cursor-pointer items-center space-x-4 font-inter"
      >
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div>
          <p
              class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Konnor Guzman
          </p>
          <p class="mt-0.5 text-xs">Last seen recently</p>
        </div>
      </div>
    </div>
    <div class="-mr-1 flex items-center">
      <button
          class="btn hidden size-9 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:flex"
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </button>
      <button
          class="btn size-9 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      </button>
      <button
          data-toggle="drawer"
          data-target="#chat-detail"
          id="chat-detail-toggle"
          @click="isShowChatInfo = !isShowChatInfo"
          :class="isShowChatInfo ? 'text-primary dark:text-accent-light' : 'text-slate-500 dark:text-navy-200'"
          class="btn hidden size-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:flex">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.25 21.167h5.5c4.584 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417ZM13.834 2.833v18.334"
          />
        </svg>
      </button>
      <div id="chat-menu" class="inline-flex">
        <button class="popper-ref btn size-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mt-px size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        clip-rule="evenodd"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  </svg>
                  <span>Unmute</span></a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mt-px size-5"
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
                  <span>Chat Setting</span></a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mt-px size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  <span>Block User</span></a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span> Delete chat</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="scrollbar-sm grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]">
    <div class="space-y-5">
      <div class="mx-4 flex items-center space-x-3">
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <p>Sunday</p>
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>

      <div class="flex items-start space-x-2.5 sm:space-x-5">
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>

        <div class="flex flex-col items-start space-y-3.5">
          <div class="mr-4 max-w-lg sm:mr-10">
            <div
                class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
            >
              Hello My Dear. Lorem ipsum dolor sit amet, consectetur.
            </div>
            <p
                class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start justify-end space-x-2.5 sm:space-x-5">
        <div class="flex flex-col items-end space-y-3.5">
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda necessitatibus, ratione. Voluptatum.
            </div>
          </div>
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              And that’s why a 15th century
            </div>
            <p
                class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
      </div>

      <div class="flex items-start space-x-2.5 sm:space-x-5">
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>

        <div class="flex flex-col items-start space-y-3.5">
          <div class="mr-4 max-w-lg sm:mr-10">
            <div
                class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eius.
            </div>
            <p
                class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
          <div class="mr-4 max-w-lg sm:mr-10">
            <div class="grid grid-cols-12 gap-2">
              <div class="group relative col-span-12 sm:col-span-4">
                <img
                    class="h-full rounded-lg object-cover"
                    src="/images/800x600.png"
                    alt="image"
                />
                <div
                    class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  <button
                      class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                  >
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
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                  class="col-span-12 grid grid-cols-2 gap-2 sm:col-span-8"
              >
                <div class="group relative">
                  <img
                      class="h-full rounded-lg object-cover"
                      src="/images/800x600.png"
                      alt="image"
                  />
                  <div
                      class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <button
                        class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                    >
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="group relative">
                  <img
                      class="h-full rounded-lg object-cover"
                      src="/images/800x600.png"
                      alt="image"
                  />
                  <div
                      class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <button
                        class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                    >
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="group relative">
                  <img
                      class="h-full rounded-lg object-cover"
                      src="/images/800x600.png"
                      alt="image"
                  />
                  <div
                      class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <button
                        class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                    >
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="group relative">
                  <img
                      class="h-full rounded-lg object-cover"
                      src="/images/800x600.png"
                      alt="image"
                  />
                  <div
                      class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <button
                        class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                    >
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p
                class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              08:21
            </p>
          </div>
        </div>
      </div>

      <div class="mx-4 flex items-center space-x-3">
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <p>Monday</p>
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>

      <div class="flex items-start justify-end space-x-2.5 sm:space-x-5">
        <div class="flex flex-col items-end space-y-3.5">
          <div class="ml-4 max-w-lg sm:ml-10">
            <div class="group relative">
              <img
                  class="h-48 rounded-lg object-cover"
                  src="/images/800x600.png"
                  alt="image"
              />
              <div
                  class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <button
                    class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
                >
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              Please Download This File
            </div>
            <p
                class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
      </div>

      <div class="mx-4 flex items-center space-x-3">
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <p>Yesterday</p>
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>

      <div class="flex items-start space-x-2.5 sm:space-x-5">
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>

        <div class="flex flex-col items-start space-y-3.5">
          <div class="mr-4 max-w-lg sm:mr-10">
            <div
                class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
            >
              Hello My Dear. Lorem ipsum dolor sit amet, consectetur.
            </div>
            <p
                class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start justify-end space-x-2.5 sm:space-x-5">
        <div class="flex flex-col items-end space-y-3.5">
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda necessitatibus, ratione. Voluptatum.
            </div>
          </div>
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              And that’s why a 15th century
            </div>
            <p
                class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
      </div>

      <div class="mx-4 flex items-center space-x-3">
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <p>Sunday</p>
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>

      <div class="flex items-start space-x-2.5 sm:space-x-5">
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>

        <div class="flex flex-col items-start space-y-3.5">
          <div class="mr-4 max-w-lg sm:mr-10">
            <div
                class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
            >
              Hello My Dear. Lorem ipsum dolor sit amet, consectetur.
            </div>
            <p
                class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start justify-end space-x-2.5 sm:space-x-5">
        <div class="flex flex-col items-end space-y-3.5">
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda necessitatibus, ratione. Voluptatum.
            </div>
          </div>
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              And that’s why a 15th century
            </div>
            <p
                class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
      </div>

      <div class="flex items-start space-x-2.5 sm:space-x-5">
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>

        <div class="flex flex-col items-start space-y-3.5">
          <div class="mr-4 max-w-lg sm:mr-10">
            <div
                class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
            >
              Ei eum populo dictas, ad sed tempor minimum voluptatibus,
            </div>
            <p
                class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start justify-end space-x-2.5 sm:space-x-5">
        <div class="flex flex-col items-end space-y-3.5">
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              No mei stet periculis consequat, agam nostro
            </div>
          </div>
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              at has eius harum
            </div>
            <p
                class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
      </div>

      <div class="mx-4 flex items-center space-x-3">
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <p>Today</p>
        <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>

      <div class="flex items-start space-x-2.5 sm:space-x-5">
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>

        <div class="flex flex-col items-start space-y-3.5">
          <div class="mr-4 max-w-lg sm:mr-10">
            <div
                class="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100"
            >
              Recusabo mandamus cum ex, ius unum nibh an, usu liber oratio
              liberavisse ea.
            </div>
            <p
                class="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start justify-end space-x-2.5 sm:space-x-5">
        <div class="flex flex-col items-end space-y-3.5">
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              Ocurreret rationibus intellegebat eu eos,
            </div>
          </div>
          <div class="ml-4 max-w-lg sm:ml-10">
            <div
                class="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white"
            >
              Veri dolorum cu ius. Vim id nullam putent invidunt.
            </div>
            <p
                class="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"
            >
              08:16
            </p>
          </div>
        </div>
        <div class="avatar">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="chat-footer relative flex h-12 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800">
    <div class="-ml-1.5 flex flex-1 space-x-2">
      <button
          class="btn size-9 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
      </button>

      <input
          type="text"
          class="form-input h-9 w-full bg-transparent placeholder:text-slate-400/70"
          placeholder="Write the message"
      />
    </div>

    <div class="-mr-1.5 flex">
      <button
          class="btn size-9 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
          class="btn size-9 shrink-0 rounded-full p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
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
              d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341"
          />
        </svg>
      </button>
    </div>
  </div>

  <div id="chat-detail" class="drawer drawer-right">
    <div
        class="drawer-content fixed right-0 top-0 z-[101] hidden h-full w-full sm:w-80"
    >
      <div
          class="flex h-full w-full flex-col border-l border-slate-150 bg-white transition-transform duration-200 dark:border-navy-600 dark:bg-navy-750"
      >
        <div class="flex h-[60px] items-center justify-between p-4">
          <h3
              class="text-base font-medium text-slate-700 dark:text-navy-100"
          >
            Chat Info
          </h3>
          <div class="-mr-1.5 flex space-x-1">
            <button
                data-toggle="drawer"
                data-target="#right-sidebar"
                class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5 text-slate-500 dark:text-navy-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>

            <button
                class="darkmode-toggle btn size-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="darkmode-moon size-6 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z"
                />
              </svg>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="darkmode-sun size-6 text-amber-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                />
              </svg>
            </button>

            <button
                data-toggle="drawer"
                data-target="#chat-detail"
                class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-5 flex flex-col items-center">
          <div class="avatar size-20">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <h3
              class="mt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
          >
            Konnor Guzman
          </h3>
          <p>Frontend Developer</p>
          <div class="mt-2 flex space-x-1.5">
            <button
                class="btn size-10 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6"
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
                class="btn size-10 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button
                class="btn size-10 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div id="tab-media" class="tabs mt-6 flex flex-col">
          <div class="is-scrollbar-hidden overflow-x-auto px-4">
            <div class="tabs-list flex">
              <button
                  class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                  data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                  data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                  data-target="#tab-media-images"
              >
                Images
              </button>
              <button
                  class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                  data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                  data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                  data-target="#tab-media-files"
              >
                Files
              </button>
            </div>
          </div>
          <div class="px-4 pt-4">
            <div class="tab-content tab-shift-left" id="tab-media-images">
              <div class="grid grid-cols-4 gap-2">
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />

                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />

                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
                <img
                    class="aspect-square rounded-lg object-cover object-center"
                    src="/images/800x600.png"
                    alt="image"
                />
              </div>
            </div>
            <div class="tab-content tab-shift-left" id="tab-media-files">
              <div class="flex flex-col space-y-3.5">
                <div class="flex items-center space-x-3">
                  <div
                      class="mask is-squircle flex size-11 items-center justify-center bg-secondary text-white"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >
                      Slow Music
                    </p>
                    <div
                        class="flex text-xs text-slate-400 dark:text-navy-300"
                    >
                      <span>03:12</span>
                      <div
                          class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                      ></div>

                      <span>8.32 MB</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <div
                      class="mask is-squircle flex size-11 items-center justify-center bg-info text-white"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >
                      Final.fig
                    </p>
                    <div
                        class="flex text-xs text-slate-400 dark:text-navy-300"
                    >
                      <span>45 MB</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <div
                      class="mask is-squircle flex size-11 items-center justify-center bg-warning text-white"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >
                      Report.docx
                    </p>
                    <div
                        class="flex text-xs text-slate-400 dark:text-navy-300"
                    >
                      <span>3.5 MB</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <div
                      class="mask is-squircle flex size-11 items-center justify-center bg-success text-white"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >
                      TheBook.pdf
                    </p>
                    <div
                        class="flex text-xs text-slate-400 dark:text-navy-300"
                    >
                      <span>14 MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>