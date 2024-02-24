<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";

export default {
  extends: Dashboards
}
</script>

<template>
  <div
      class="mt-6 flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-left"
  >
    <div>
      <h3 class="text-xl font-semibold text-slate-700 dark:text-navy-100">
        Projects Board
      </h3>
      <p class="mt-1 hidden sm:block">List of your ongoing projects</p>
    </div>
    <button
        class="btn space-x-2 bg-primary font-medium text-white shadow-lg shadow-primary/50 hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:shadow-accent/50 dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5 text-indigo-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <span> New Project </span>
    </button>
  </div>
  <div
      class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
  >
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-warning p-4 sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/200x200.png"
                alt="image"
            />
            <p class="text-xs+ text-amber-50">May 01, 2021</p>
          </div>
          <h3 class="mt-3 font-medium text-white line-clamp-2">
            Mobile App
          </h3>
          <p class="text-xs+ text-amber-50">Prototyping</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-white">Progress</p>
            <div class="progress my-2 h-1.5 bg-white/30">
              <span class="w-8/12 rounded-full bg-white"></span>
            </div>
            <p class="text-right text-xs+ font-medium text-white">78%</p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-warning"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-warning bg-info text-xs+ uppercase text-white"
              >
                jd
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-warning"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-warning"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-black/20 px-2 text-xs+ text-white"
            >
              1 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
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
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-info/15 p-4 dark:bg-transparent sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/600x400.png"
                alt="image"
            />
            <p class="text-xs+">June 04, 2021</p>
          </div>
          <h3
              class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
          >
            Design Learn Management System
          </h3>
          <p class="text-xs+">UI/UX Design</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-slate-700 dark:text-navy-100">
              Progress
            </p>
            <div class="progress my-2 h-1.5 bg-info/15 dark:bg-info/25">
              <div class="w-4/12 rounded-full bg-info"></div>
            </div>
            <p class="text-right text-xs+ font-medium text-info">25%</p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-white bg-warning text-xs+ uppercase text-white dark:border-navy-700"
              >
                ii
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-info px-2 text-xs+ text-white"
            >
              2 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-secondary/15 p-4 dark:bg-transparent sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/illustrations/chat-ui.svg"
                alt="image"
            />
            <p class="text-xs+">Oct 27, 2021</p>
          </div>
          <h3
              class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
          >
            Chat Mobile App
          </h3>
          <p class="text-xs+">Prototyping</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-slate-700 dark:text-navy-100">
              Progress
            </p>
            <div
                class="progress my-2 h-1.5 bg-secondary/15 dark:bg-secondary/25"
            >
              <div class="w-6/12 rounded-full bg-secondary"></div>
            </div>
            <p class="text-right text-xs+ font-medium text-secondary">
              52%
            </p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-white bg-error text-xs+ uppercase text-white dark:border-navy-700"
              >
                pl
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-secondary px-2 text-xs+ text-white"
            >
              6 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-success/15 p-4 dark:bg-transparent sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/illustrations/store-ui.svg"
                alt="image"
            />
            <p class="text-xs+">Sep 16, 2021</p>
          </div>
          <h3
              class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
          >
            Store Dashboard
          </h3>
          <p class="text-xs+">UI/UX Design</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-slate-700 dark:text-navy-100">
              Progress
            </p>
            <div
                class="progress my-2 h-1.5 bg-success/15 dark:bg-success/25"
            >
              <div class="w-4/12 rounded-full bg-success"></div>
            </div>
            <p class="text-right text-xs+ font-medium text-success">
              33%
            </p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-white bg-success text-xs+ uppercase text-white dark:border-navy-700"
              >
                rt
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-success px-2 text-xs+ text-white"
            >
              3 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-error/15 p-4 dark:bg-transparent sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/illustrations/nft.svg"
                alt="image"
            />
            <p class="text-xs+">Jan 03, 2021</p>
          </div>
          <h3
              class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
          >
            NFT Marketplace App
          </h3>
          <p class="text-xs+">Prototyping</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-slate-700 dark:text-navy-100">
              Progress
            </p>
            <div class="progress my-2 h-1.5 bg-error/15 dark:bg-error/25">
              <div class="w-6/12 rounded-full bg-error"></div>
            </div>
            <p class="text-right text-xs+ font-medium text-error">54%</p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-white bg-warning text-xs+ uppercase text-white dark:border-navy-700"
              >
                ew
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-error px-2 text-xs+ text-white"
            >
              1 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-primary/15 p-4 dark:bg-transparent sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/200x200.png"
                alt="image"
            />
            <p class="text-xs+">May 09, 2021</p>
          </div>
          <h3
              class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
          >
            Mobile App
          </h3>
          <p class="text-xs+">Prototyping</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-slate-700 dark:text-navy-100">
              Progress
            </p>
            <div
                class="progress my-2 h-1.5 bg-primary/15 dark:bg-accent/25"
            >
              <div
                  class="w-6/12 rounded-full bg-primary dark:bg-accent"
              ></div>
            </div>
            <p
                class="text-right text-xs+ font-medium text-primary dark:text-accent-light"
            >
              52%
            </p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-white bg-info text-xs+ uppercase text-white dark:border-navy-700"
              >
                vf
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-primary px-2 text-xs+ text-white dark:bg-accent"
            >
              3 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-warning/15 p-4 dark:bg-transparent sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/illustrations/lms-ui.svg"
                alt="image"
            />
            <p class="text-xs+">Jan 03, 2021</p>
          </div>
          <h3
              class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
          >
            LMS App Design
          </h3>
          <p class="text-xs+">UI/UX Design</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-slate-700 dark:text-navy-100">
              Progress
            </p>
            <div
                class="progress my-2 h-1.5 bg-warning/15 dark:bg-warning/25"
            >
              <div class="w-9/12 rounded-full bg-warning"></div>
            </div>
            <p class="text-right text-xs+ font-medium text-warning">
              78%
            </p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-white bg-info text-xs+ uppercase text-white dark:border-navy-700"
              >
                po
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-warning px-2 text-xs+ text-white"
            >
              2 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
    <div class="card shadow-none">
      <div
          class="flex flex-1 flex-col justify-between rounded-lg bg-info/15 p-4 dark:bg-transparent sm:p-5"
      >
        <div>
          <div class="flex items-start justify-between">
            <img
                class="size-12 rounded-lg object-cover object-center"
                src="/images/600x400.png"
                alt="image"
            />
            <p class="text-xs+">June 04, 2021</p>
          </div>
          <h3
              class="mt-3 font-medium text-slate-700 line-clamp-2 dark:text-navy-100"
          >
            Design Learn Management System
          </h3>
          <p class="text-xs+">UI/UX Design</p>
        </div>
        <div>
          <div class="mt-4">
            <p class="text-xs+ text-slate-700 dark:text-navy-100">
              Progress
            </p>
            <div class="progress my-2 h-1.5 bg-info/15 dark:bg-info/25">
              <div class="w-4/12 rounded-full bg-info"></div>
            </div>
            <p class="text-right text-xs+ font-medium text-info">25%</p>
          </div>

          <div class="mt-5 flex flex-wrap -space-x-3">
            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <div
                  class="is-initial rounded-full border-2 border-white bg-warning text-xs+ uppercase text-white dark:border-navy-700"
              >
                ii
              </div>
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div class="avatar size-8 hover:z-10">
              <img
                  class="rounded-full border-2 border-white dark:border-navy-700"
                  src="/images/200x200.png"
                  alt="avatar"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between space-x-2">
            <div
                class="badge h-5.5 rounded-full bg-info px-2 text-xs+ text-white"
            >
              2 week left
            </div>
            <div>
              <button
                  class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
</template>
