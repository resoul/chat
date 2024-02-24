<script>
import Dashboards from "@/views/main/dashboard/Dashboards.vue";

export default {
  name: "Meetings",
  extends: Dashboards
}
</script>

<template>
  <div
      class="mt-6 flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-left"
  >
    <div>
      <h3 class="text-xl font-semibold text-slate-700 dark:text-navy-100">
        Your Meetings
      </h3>
      <p class="mt-1 hidden sm:block">Recent meetings in your team</p>
    </div>
    <div>
      <p class="font-medium text-slate-700 dark:text-navy-100">
        Team Members
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
  <div class="mt-4">
    <h3 class="text-base font-medium text-slate-600 dark:text-navy-100">
      Today
    </h3>
    <div
        class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
    >
      <div
          class="card justify-between bg-primary p-4 dark:bg-accent sm:p-5"
      >
        <div class="flex items-center space-x-3 text-white">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/200x200.png"
              alt="image"
          />
          <div>
            <h3 class="text-base font-medium">Product Roadmap Q4</h3>
            <p class="text-xs text-indigo-100">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+ text-indigo-100">Today</p>
          <p class="text-xl font-medium text-white">11:30 - 13:00</p>
          <div class="badge mt-2 rounded-full bg-white/20 text-white">
            13 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring-1 ring-primary dark:ring-accent"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring-1 ring-primary dark:ring-accent"
                >
                  qa
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring-1 ring-primary dark:ring-accent"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
      <div class="card justify-between p-4 sm:p-5">
        <div class="flex items-center space-x-3">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/600x400.png"
              alt="image"
          />
          <div>
            <h3
                class="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              Design Review
            </h3>
            <p class="text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+">Today</p>
          <p
              class="text-xl font-medium text-slate-700 dark:text-navy-100"
          >
            16:00 - 16:30
          </p>
          <div
              class="badge mt-2 bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            6 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                >
                  iu
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
      <div class="card justify-between p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/600x400.png"
              alt="image"
          />
          <div>
            <h3
                class="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              Weekly meeting
            </h3>
            <p class="text-xs">Consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+">Today</p>
          <p
              class="text-xl font-medium text-slate-700 dark:text-navy-100"
          >
            18:00 - 18:45
          </p>
          <div
              class="badge mt-2 bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            20 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                >
                  tg
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
  </div>
  <div class="mt-4 sm:mt-5 lg:mt-6">
    <h3 class="text-base font-medium text-slate-600 dark:text-navy-100">
      This week
    </h3>
    <div
        class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
    >
      <div class="card justify-between p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/600x400.png"
              alt="image"
          />
          <div>
            <h3
                class="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              Sales Presentation
            </h3>
            <p class="text-xs">Iure odio placeat temporibus.</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+">Tomorrow</p>
          <p
              class="text-xl font-medium text-slate-700 dark:text-navy-100"
          >
            11:30 - 12:00
          </p>
          <div
              class="badge mt-2 bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            7 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                >
                  yt
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
      <div class="card justify-between p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/600x400.png"
              alt="image"
          />
          <div>
            <h3
                class="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              Testing Vol.1
            </h3>
            <p class="text-xs">In iste labore odit sapiente?</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+">THU, May 25, 2022</p>
          <p
              class="text-xl font-medium text-slate-700 dark:text-navy-100"
          >
            14:30 - 15:00
          </p>
          <div
              class="badge mt-2 bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            5 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                >
                  ou
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
  </div>
  <div class="mt-4 sm:mt-5 lg:mt-6">
    <h3 class="text-base font-medium text-slate-600 dark:text-navy-100">
      This month
    </h3>
    <div
        class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
    >
      <div class="card justify-between p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/illustrations/dashboard-meet-dark.svg"
              alt="image"
          />
          <div>
            <h3
                class="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              New App Analysis
            </h3>
            <p class="text-xs">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+">Mon, June 18, 2022</p>
          <p
              class="text-xl font-medium text-slate-700 dark:text-navy-100"
          >
            08:00 - 09:00
          </p>
          <div
              class="badge mt-2 bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            10 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                >
                  cv
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
      <div class="card justify-between p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/100x100.png"                 alt="image"
          />
          <div>
            <h3
                class="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              React Conf
            </h3>
            <p class="text-xs">In iste labore odit sapiente?</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+">SAT, June 21, 2022</p>
          <p
              class="text-xl font-medium text-slate-700 dark:text-navy-100"
          >
            10:00 - 12:00
          </p>
          <div
              class="badge mt-2 bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            14 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                >
                  qd
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
      <div class="card justify-between p-4 sm:p-5">
        <div class="flex items-center space-x-4">
          <img
              class="size-10 shrink-0 rounded-lg object-cover"
              src="/images/600x400.png"
              alt="image"
          />
          <div>
            <h3
                class="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              Monthly meeting
            </h3>
            <p class="text-xs">Consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-xs+">MON, 31 June, 2022</p>
          <p
              class="text-xl font-medium text-slate-700 dark:text-navy-100"
          >
            18:00 - 19:00
          </p>
          <div
              class="badge mt-2 bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            12 Members
          </div>
          <div class="mt-5 flex items-center justify-between space-x-2">
            <div class="flex -space-x-3">
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="avatar size-8 hover:z-10">
                <div
                    class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                >
                  mh
                </div>
              </div>
              <div class="avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
            </div>
            <button
                class="btn size-8 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
  </div>
</template>