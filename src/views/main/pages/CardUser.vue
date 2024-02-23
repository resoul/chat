<script>
import { useThemeStore } from "@/components/theme/theme.js";

export default {
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')
  }
}
</script>

<template>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        User Card
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="btn popper-ref size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <i class="fas fa-chevron-down"></i>
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
                      class="mt-px size-4.5"
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
                  <span> New User</span></a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mt-px size-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Export Users</span></a
                >
              </li>
              <li>
                <a
                    href="#"
                    class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mt-px size-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
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
                  <span>Setting</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center space-x-2">
      <label class="relative hidden sm:flex">
        <input
            class="form-input peer h-9 w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="Search users..."
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

      <div class="flex">
        <button
            class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden sm:h-9 sm:w-9"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
          >
            <circle
                cx="10.2"
                cy="10.2"
                r="7.2"
                stroke-width="1.5"
            ></circle>
            <path
                stroke-width="1.5"
                stroke-linecap="round"
                d="M21 21l-3.6-3.6"
            />
          </svg>
        </button>
        <button
            class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-9 sm:w-9"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              fill="none"
              viewBox="0 0 24 24"
          >
            <path
                fill="currentColor"
                d="M3 5.109C3 4.496 3.47 4 4.05 4h16.79c.58 0 1.049.496 1.049 1.109 0 .612-.47 1.108-1.05 1.108H4.05C3.47 6.217 3 5.721 3 5.11zM5.798 12.5c0-.612.47-1.109 1.05-1.109H18.04c.58 0 1.05.497 1.05 1.109s-.47 1.109-1.05 1.109H6.848c-.58 0-1.05-.497-1.05-1.109zM9.646 18.783c-.58 0-1.05.496-1.05 1.108 0 .613.47 1.109 1.05 1.109h5.597c.58 0 1.05-.496 1.05-1.109 0-.612-.47-1.108-1.05-1.108H9.646z"
            />
          </svg>
        </button>
        <button
            class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-9 sm:w-9"
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
                stroke-width="1.5"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
  >
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu1" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Konnor Guzman
        </h3>
        <p class="text-xs+">Senior Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            PHP
          </a>
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Nodejs
          </a>
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            ReactJS
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu2" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Travis Fuller
        </h3>
        <p class="text-xs+">Web Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            React
          </a>
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Laravel
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu3" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-squircle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Alfredo Elliott
        </h3>
        <p class="text-xs+">UI/UX designer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Javascript
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            CSS
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            ES6
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu4" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Derrick Simmons
        </h3>
        <p class="text-xs+">React Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            AlpineJS
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            TailwindCSS
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu5" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-reuleaux-triangle"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Katrina West
        </h3>
        <p class="text-xs+">Android Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Ionic
          </a>
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            React
          </a>
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Flutter
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu6" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Henry Curtis
        </h3>
        <p class="text-xs+">Full Stack Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            AlpineJS
          </a>
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Tailwind
          </a>
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Laravel
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu7" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-diamond"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Raul Bradley
        </h3>
        <p class="text-xs+">Laravel Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-error/10 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            Laravel
          </a>
          <a
              href="#"
              class="tag rounded-full bg-error/10 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            TailwindCSS
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu8" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-hexagon"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Samantha Shelton
        </h3>
        <p class="text-xs+">Backend Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            PHP
          </a>
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Laravel
          </a>
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            NodeJS
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu9" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-hexagon-2"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Corey Evans
        </h3>
        <p class="text-xs+">Frontend Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            React
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Vue
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Bootstrap
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu10" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-star"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Lance Tucker
        </h3>
        <p class="text-xs+">NodeJs Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Javascript
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Express
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Remix
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu11" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-star-2"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Anthony Jensen
        </h3>
        <p class="text-xs+">UI/UX Designer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Figma
          </a>
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Sketch
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2 text-right">
        <div id="cardMenu12" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div class="avatar size-20">
          <img
              class="mask is-octagon"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Joe Perkins
        </h3>
        <p class="text-xs+">React Developer</p>
        <div class="inline-space mt-3 flex grow flex-wrap items-start">
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            ReactJS
          </a>
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Remix
          </a>
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            NextJS
          </a>
        </div>
        <div class="mt-6 grid w-full grid-cols-2 gap-2">
          <button
              class="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
            >
              <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"
              />
            </svg>
            <span>Profile</span>
          </button>
          <button
              class="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
  >
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Konnor Guzman
        </h3>
        <p class="text-xs">USA, Washington DC</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart1" class="ax-transparent-gridline"></div>
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
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Travis Fuller
        </h3>
        <p class="text-xs">UK, London</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart2" class="ax-transparent-gridline"></div>
          </div>
          <div class="w-3/12 text-center">
            <p
                class="text-xl font-medium text-slate-700 dark:text-navy-100"
            >
              11
            </p>
            <p class="text-xs+">Posts</p>
          </div>
        </div>
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Alfredo Elliott
        </h3>
        <p class="text-xs">Australia, Sydney</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart3" class="ax-transparent-gridline"></div>
          </div>
          <div class="w-3/12 text-center">
            <p
                class="text-xl font-medium text-slate-700 dark:text-navy-100"
            >
              171
            </p>
            <p class="text-xs+">Posts</p>
          </div>
        </div>
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Derrick Simmons
        </h3>
        <p class="text-xs">Austria, Vienna</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart4" class="ax-transparent-gridline"></div>
          </div>
          <div class="w-3/12 text-center">
            <p
                class="text-xl font-medium text-slate-700 dark:text-navy-100"
            >
              67
            </p>
            <p class="text-xs+">Posts</p>
          </div>
        </div>
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Raul Bradley
        </h3>
        <p class="text-xs">Germany, Berlin</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart5" class="ax-transparent-gridline"></div>
          </div>
          <div class="w-3/12 text-center">
            <p
                class="text-xl font-medium text-slate-700 dark:text-navy-100"
            >
              36
            </p>
            <p class="text-xs+">Posts</p>
          </div>
        </div>
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Katrina West
        </h3>
        <p class="text-xs">Sweden, Stockholm</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart6" class="ax-transparent-gridline"></div>
          </div>
          <div class="w-3/12 text-center">
            <p
                class="text-xl font-medium text-slate-700 dark:text-navy-100"
            >
              52
            </p>
            <p class="text-xs+">Posts</p>
          </div>
        </div>
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Samantha Shelton
        </h3>
        <p class="text-xs">Switzerland, Zurich</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart7" class="ax-transparent-gridline"></div>
          </div>
          <div class="w-3/12 text-center">
            <p
                class="text-xl font-medium text-slate-700 dark:text-navy-100"
            >
              96
            </p>
            <p class="text-xs+">Posts</p>
          </div>
        </div>
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
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
            class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Henry Curtis
        </h3>
        <p class="text-xs">Switzerland, Zurich</p>
        <div class="flex items-center space-x-4 pt-2">
          <div class="w-9/12">
            <div id="postChart8" class="ax-transparent-gridline"></div>
          </div>
          <div class="w-3/12 text-center">
            <p
                class="text-xl font-medium text-slate-700 dark:text-navy-100"
            >
              171
            </p>
            <p class="text-xs+">Posts</p>
          </div>
        </div>
        <div class="flex justify-center space-x-3 py-3">
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-video text-xs+"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
  >
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Konnor Guzman
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#PHP &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ReactJS &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#NextJS &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Travis Fuller
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Laravel &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ReactJS &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Alfredo Elliott
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Javascript &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#CSS &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ES6 &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Derrick Simmons
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ReactJS &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#NodeJS &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Katrina West
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Ionic &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ReactNative &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Flutter &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Henry Curtis
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Laravel &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#VueJS &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Raul Bradley
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#TailwindCSS &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Laravel &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Samantha Shelton
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#PHP &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Laravel &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>

    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Corey Evans
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ReactJS &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#AlpineJS &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Lance Tucker
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#RemixJS &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#ReactJS &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Anthony Jensen
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Figma &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Sketch &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
    <div class="card grow items-center p-4 text-center sm:p-5">
      <div class="avatar size-18">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
      </div>
      <div class="my-2 grow">
        <h3
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Joe Perkins
        </h3>
        <div>
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#NextJS &VeryThinSpace;</a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Bootstrap &VeryThinSpace;</a
          >
        </div>
      </div>
      <div class="mt-3 flex space-x-1">
        <button
            class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Follow
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="far fa-envelope"></i>
        </button>
        <button
            class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          <i class="fa fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Konnor Guzman
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">React Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu1" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Travis Fuller
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">Backend Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu2" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Alfredo Elliott
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">Android Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu3" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Derrick Simmons
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">Laravel Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu4" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Katrina West
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">Android Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu5" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Henry Curtis
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">NodeJS Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu6" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Raul Bradley
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">Android Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu7" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Samantha Shelton
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">NodeJS Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu8" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Corey Evans
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">Full Stack Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu9" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Lance Tucker
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">NodeJS Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu10" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Anthony Jensen
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">ReactJS Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu11" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
    <div class="card items-center justify-between lg:flex-row">
      <div
          class="flex flex-col items-center p-4 text-center sm:p-5 lg:flex-row lg:space-x-4 lg:text-left"
      >
        <div class="avatar size-18 lg:h-12 lg:w-12">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="mt-2 lg:mt-0">
          <div class="flex items-center justify-center space-x-1">
            <h4
                class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
            >
              Joe Perkins
            </h4>
            <button
                class="btn hidden h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
            >
              Follow
            </button>
          </div>
          <p class="text-xs+">VueJS Developer</p>
        </div>
        <button
            class="btn mt-4 rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90 lg:hidden"
        >
          Follow
        </button>
      </div>
      <div id="cardMenu12" class="absolute top-0 right-0 m-2 lg:static">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>

        <div class="popper-root">
          <div
              class="popper-box w-max rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
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
  </div>
  <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
  >
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Konnor Guzman
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @konnorguzman
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Travis Fuller
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Travisfuller
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Alfredo Elliott
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @alfredoelliott
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Derrick Simmons
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @derricksimmons
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Katrina West
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Katrinawest
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Henry Curtis
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Henrycurtis
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Raul Bradley
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Raulbradley
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Samantha Shelton
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Samanthashelton
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Corey Evans
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Coreyevans
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Lance Tucker
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Lancetucker
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Anthony Jensen
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Anthonyjensen
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Joe Perkins
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Joeperkins
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Konnor Guzman
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @konnorguzman
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Travis Fuller
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @travisfuller
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Alfredo Elliott
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Alfredoelliott
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Derrick Simmons
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @derricksimmons
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Katrina West
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Katrinawest
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
    <div class="card flex-row justify-between space-x-2 p-4 sm:p-5">
      <div>
        <div class="flex space-x-1">
          <h4
              class="text-base font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Raul Bradley
          </h4>
          <button
              class="btn h-6 rounded-full px-2 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25 lg:inline-flex"
          >
            Follow
          </button>
        </div>
        <a
            href="#"
            class="text-xs+ transition-colors duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"
        >
          @Raulbradley
        </a>
      </div>
      <div class="avatar size-10">
        <img
            class="mask is-squircle"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 -m-0.5 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
    </div>
  </div>
  <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
  >
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Konnor Guzman
        </h3>
        <p class="text-xs+">Senior Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-info text-xs+ uppercase text-white"
            >
              jd
            </div>
          </div>

          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Travis Fuller
        </h3>
        <p class="text-xs+">Backend Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-info/10 text-xs+ uppercase text-info"
            >
              sm
            </div>
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full border border-warning/30 bg-warning/10 text-xs+ uppercase text-warning"
            >
              uh
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Alfredo Elliott
        </h3>
        <p class="text-xs+">Android Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-secondary text-xs+ uppercase text-white"
            >
              TS
            </div>
          </div>
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Derrick Simmons
        </h3>
        <p class="text-xs+">Laravel Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-primary text-xs+ uppercase text-white dark:bg-accent"
            >
              AF
            </div>
          </div>
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Katrina West
        </h3>
        <p class="text-xs+">VueJS Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full border border-primary/30 bg-primary/10 text-xs+ uppercase text-primary dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light"
            >
              SI
            </div>
          </div>
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-success text-xs+ uppercase text-white"
            >
              Io
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Henry Curtis
        </h3>
        <p class="text-xs+">Full Stack Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full border border-success/30 bg-success/10 text-xs+ uppercase text-success"
            >
              tr
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Raul Bradley
        </h3>
        <p class="text-xs+">Android Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-warning text-xs+ uppercase text-white"
            >
              tr
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Samantha Shelton
        </h3>
        <p class="text-xs+">Laravel Developer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-secondary/10 text-xs+ uppercase text-secondary dark:bg-secondary-light/10 dark:text-secondary-light"
            >
              ec
            </div>
          </div>
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Corey Evans
        </h3>
        <p class="text-xs+">UI/UX Designer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-error text-xs+ uppercase text-white"
            >
              ve
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Lance Tucker
        </h3>
        <p class="text-xs+">Frontend Designer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-info text-xs+ uppercase text-white"
            >
              ip
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Joe Perkins
        </h3>
        <p class="text-xs+">React Designer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-8">
            <div
                class="is-initial rounded-full border border-info/30 bg-info/10 text-xs+ uppercase text-info"
            >
              ds
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
    <div class="card">
      <div class="flex flex-col items-center p-4 text-center sm:p-5">
        <div class="avatar size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
        </div>
        <h3
            class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
        >
          Joe Perkins
        </h3>
        <p class="text-xs+">React Designer</p>
        <div class="my-3.5 flex flex-wrap space-x-2">
          <div class="avatar size-8">
            <img
                class="rounded-full"
                src="/images/200x200.png"
                alt="avatar"
            />
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-warning text-xs+ uppercase text-white"
            >
              ds
            </div>
          </div>
          <div class="avatar size-8">
            <div
                class="is-initial rounded-full bg-primary/10 text-xs+ uppercase text-primary dark:bg-accent-light/10 dark:text-accent-light"
            >
              mf
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex divide-x divide-slate-150 border-t border-slate-150 dark:divide-navy-500 dark:border-navy-500"
      >
        <button
            class="btn h-11 w-full rounded-none rounded-bl-lg font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          Profile
        </button>
        <button
            class="btn h-11 w-full rounded-none rounded-br-lg font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
        >
          Chat
        </button>
      </div>
    </div>
  </div>
  <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
  >
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Konnor Guzman
      </h3>
      <p class="text-xs+">Senior Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(01) 22 888 4444</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>konnor@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.konnor.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Travis Fuller
      </h3>
      <p class="text-xs+">Web designer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(095)-800-8313</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>travis@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.travis-fuller.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Alfredo Elliott
      </h3>
      <p class="text-xs+">React Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(374)-961-6674</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>alfredo@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.alfredo.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Derrick Simmons
      </h3>
      <p class="text-xs+">React Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(350)-813-3861</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>derrick@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.derrick-sims.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Katrina West
      </h3>
      <p class="text-xs+">Android Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(052)-747-5542</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>katrina@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.katrina.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Henry Curtis
      </h3>
      <p class="text-xs+">Laravel Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(675)-975-0083</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>henry@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.henry.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Raul Bradley
      </h3>
      <p class="text-xs+">Laravel Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(381)-627-2351</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>raul-brad@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.bradley.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Samantha Shelton
      </h3>
      <p class="text-xs+">Backed Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(727)-810-3880</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>saman2@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.samantha.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Corey Evans
      </h3>
      <p class="text-xs+">Frontend Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(723)-756-2206</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>corey@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.corey-evans.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Lance Tucker
      </h3>
      <p class="text-xs+">NodeJs Developer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(040)-129-7702</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>lance@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.lance.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Anthony Jensen
      </h3>
      <p class="text-xs+">Web Designer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(631)-475-8183</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>jensen@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.jensen.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
    <div class="card grow items-center p-4 sm:p-5">
      <div class="avatar size-20">
        <img
            class="rounded-full"
            src="/images/200x200.png"
            alt="avatar"
        />
        <div
            class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
        ></div>
      </div>
      <h3
          class="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100"
      >
        Joe Perkins
      </h3>
      <p class="text-xs+">UI/UX Designer</p>
      <div class="my-4 h-px w-full bg-slate-200 dark:bg-navy-500"></div>
      <div class="grow space-y-4">
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-phone text-xs"></i>
          </div>
          <p>(832)-013-3691</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-envelope text-xs"></i>
          </div>
          <p>perkins@example.com</p>
        </div>
        <div class="flex items-center space-x-4">
          <div
              class="flex size-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light"
          >
            <i class="fa fa-link text-xs"></i>
          </div>
          <p>www.joe-perkins.com</p>
        </div>
      </div>
      <button
          class="btn mt-5 space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4.5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
          />
        </svg>
        <span> Profile </span>
      </button>
    </div>
  </div>
</template>
