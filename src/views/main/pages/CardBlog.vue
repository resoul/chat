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
        Responsive Posts
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">Frameworks</a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu1" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is Tailwind CSS?</a
          >
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eveniet, provident quasi recusandae repudiandae rerum
          temporibus!
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">John Doe</span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >June 23, 2021
                  </span>
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">Frameworks</a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu2" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example
          </a>
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          repellat nisi corrupti. Lorem, ipsum.
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Konnor Guzman </span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >May 25, 2021
                  </span>
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">Programming Language</a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu3" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?
          </a>
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eveniet, provident quasi recusandae repudiandae rerum
          temporibus!
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Travis Fuller </span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >March 14, 2022
                  </span>
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">UI/UX</a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu4" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Top Design Systems
          </a>
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quibusdam, ipsam in eveniet quod voluptatum!
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Alfredo Elliott </span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >March 14, 2022
                  </span>
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">UI/UX </a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu5" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >313 Pattern and Color ideas
          </a>
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates impedit odio consectetur! Voluptatem ipsa nulla
          excepturi voluptatibus.
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Derrick Simmons </span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >December 27, 2021</span
            >
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">Programming Language </a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu6" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >NodeJS Design Patterns
          </a>
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          rerum aliquam maiores dolorum itaque?
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Katrina West </span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >November 9, 2021</span
            >
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">Frameworks</a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu7" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is Tailwind CSS?</a
          >
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eveniet, provident quasi recusandae repudiandae rerum
          temporibus!
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">John Doe</span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >June 23, 2021
                  </span>
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
    <div class="card lg:flex-row">
      <img
          class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
          src="images/800x600.png"
          alt="image"
      />
      <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
        <div class="flex items-center justify-between">
          <a class="text-xs+ text-info" href="#">Frameworks</a>
          <div class="-mr-1.5 flex space-x-1">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            <div id="cardMenu8" class="inline-flex">
              <button
                  class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div>
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example
          </a>
        </div>
        <p class="mt-1 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          repellat nisi corrupti. Lorem, ipsum.
        </p>
        <div class="grow">
          <div class="mt-2 flex items-center text-xs">
            <a
                href="#"
                class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
            >
              <div class="avatar size-6">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                />
              </div>
              <span class="line-clamp-1">Konnor Guzman </span>
            </a>
            <div
                class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
            ></div>
            <span class="shrink-0 text-slate-400 dark:text-navy-300"
            >May 25, 2021
                  </span>
          </div>
        </div>
        <div class="mt-1 flex justify-end">
          <a
              href="pages-blog-details.html"
              class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            READ ARTICLE
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        Blog Cards
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
  >
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div><a class="text-xs+ text-info" href="#">Frameworks</a></div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is Tailwind CSS?</a
          >
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>June 23, 2021</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eveniet, provident quasi recusandae repudiandae rerum
          temporibus!
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div><a class="text-xs+ text-info" href="#">Frameworks</a></div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example
          </a>
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>May 25, 2021</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          repellat nisi corrupti. Lorem, ipsum.
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div>
          <a class="text-xs+ text-info" href="#">Programming Language</a>
        </div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?
          </a>
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>March 14, 2022</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eveniet, provident quasi recusandae repudiandae rerum
          temporibus!
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div>
          <a class="text-xs+ text-info" href="#">UI/UX</a>
        </div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Top Design Systems
          </a>
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>March 14, 2022</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quibusdam, ipsam in eveniet quod voluptatum!
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div>
          <a class="text-xs+ text-info" href="#">UI/UX</a>
        </div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >313 Pattern and Color ideas
          </a>
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>December 27, 2021</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates impedit odio consectetur! Voluptatem ipsa nulla
          excepturi voluptatibus.
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div>
          <a class="text-xs+ text-info" href="#">Programming Language</a>
        </div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >NodeJS Design Patterns
          </a>
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>November 9, 2021</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates impedit odio consectetur! Voluptatem ipsa nulla
          excepturi voluptatibus.
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div><a class="text-xs+ text-info" href="#">Frameworks</a></div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is Tailwind CSS?</a
          >
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>June 23, 2021</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eveniet, provident quasi recusandae repudiandae rerum
          temporibus!
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div><a class="text-xs+ text-info" href="#">Frameworks</a></div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example
          </a>
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>May 25, 2021</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          repellat nisi corrupti. Lorem, ipsum.
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="p-2.5">
        <img
            src="images/800x600.png"
            class="h-48 w-full rounded-lg object-cover object-center"
            alt="image"
        />
      </div>
      <div class="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
        <div>
          <a class="text-xs+ text-info" href="#">Programming Language</a>
        </div>
        <div class="mt-1">
          <a
              href="#"
              class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?
          </a>
        </div>
        <div class="my-2 flex items-center space-x-3 text-xs">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>March 14, 2022</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <p class="my-2 grow text-left line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eveniet, provident quasi recusandae repudiandae rerum
          temporibus!
        </p>
        <div>
          <button
              class="btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        Blog Cards
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
  >
    <div class="card grow p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div id="userInfo1" class="flex">
            <div class="popper-ref avatar size-10">
              <img
                  class="mask is-squircle"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Konnor Guzman
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@konnoraccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Konnor Guzman
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              55 min ago
            </p>
          </div>
        </div>
        <div id="cardMenu1" class="inline-flex">
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
      <div class="mt-5">
        <img
            class="h-48 w-full rounded-lg object-cover object-center"
            src="images/800x600.png"
            alt="image"
        />
      </div>
      <div class="mt-4 grow">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >What is Tailwind CSS?</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          delectus dolor dolores dolorum eos mollitia odio quaerat
          sapiente, voluptates! Odio.
        </p>
        <div class="mt-2">
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
      <div class="mt-3">
        <div class="flex items-center justify-between">
          <div class="-ml-1.5 flex">
            <button
                data-tooltip="12k Like"
                data-tooltip-theme="secondary"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-secondary focus:bg-slate-300/20 focus:text-secondary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-secondary-light dark:focus:bg-navy-300/20 dark:focus:text-secondary-light dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
                data-tooltip="5k Commnets"
                data-tooltip-theme="success"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-success focus:bg-slate-300/20 focus:text-success active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button
                data-tooltip="Share"
                data-tooltip-theme="info"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-info focus:bg-slate-300/20 focus:text-info active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>136</span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between space-x-3">
        <div class="avatar size-8">
          <img
              class="rounded-full"
              src="images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full rounded-full border border-slate-300 bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card grow p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div id="userInfo6" class="flex">
            <div class="popper-ref avatar size-10">
              <img
                  class="mask is-squircle"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Travis Fuller
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@travisaccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Travis Fuller
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              55 min ago
            </p>
          </div>
        </div>
        <div id="cardMenu2" class="inline-flex">
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
      <div class="mt-5">
        <img
            class="h-48 w-full rounded-lg object-cover object-center"
            src="images/800x600.png"
            alt="image"
        />
      </div>
      <div class="mt-4 grow">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >Tailwind CSS Card Example</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          delectus dolor dolores dolorum eos mollitia odio quaerat
          sapiente, voluptates! Odio.
        </p>
        <div class="mt-2">
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#TailwindCSS  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#RemixJS  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#AlpineJS  </a
          >
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center justify-between">
          <div class="-ml-1.5 flex">
            <button
                data-tooltip="12k Like"
                data-tooltip-theme="secondary"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-secondary focus:bg-slate-300/20 focus:text-secondary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-secondary-light dark:focus:bg-navy-300/20 dark:focus:text-secondary-light dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
                data-tooltip="5k Commnets"
                data-tooltip-theme="success"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-success focus:bg-slate-300/20 focus:text-success active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button
                data-tooltip="Share"
                data-tooltip-theme="info"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-info focus:bg-slate-300/20 focus:text-info active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>665</span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between space-x-3">
        <div class="avatar size-8">
          <img
              class="rounded-full"
              src="images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full rounded-full border border-slate-300 bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card grow p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div id="userInfo2" class="flex">
            <div class="popper-ref avatar size-10">
              <img
                  class="mask is-squircle"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Alfredo Elliott
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@alfredaccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Alfredo Elliott
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              2 hour ago
            </p>
          </div>
        </div>
        <div id="cardMenu3" class="inline-flex">
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
      <div class="mt-5">
        <img
            class="h-48 w-full rounded-lg object-cover object-center"
            src="images/800x600.png"
            alt="image"
        />
      </div>
      <div class="mt-4 grow">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >What is PHP?</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Pariatur blanditiis id facilis.
        </p>
        <div class="mt-2">
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#OOP  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Laravel  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#NextJS  </a
          >
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center justify-between">
          <div class="-ml-1.5 flex">
            <button
                data-tooltip="12k Like"
                data-tooltip-theme="secondary"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-secondary focus:bg-slate-300/20 focus:text-secondary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-secondary-light dark:focus:bg-navy-300/20 dark:focus:text-secondary-light dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
                data-tooltip="5k Commnets"
                data-tooltip-theme="success"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-success focus:bg-slate-300/20 focus:text-success active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button
                data-tooltip="Share"
                data-tooltip-theme="info"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-info focus:bg-slate-300/20 focus:text-info active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>665</span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between space-x-3">
        <div class="avatar size-8">
          <img
              class="rounded-full"
              src="images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full rounded-full border border-slate-300 bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card grow p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div id="userInfo3" class="flex">
            <div class="popper-ref avatar size-10">
              <img
                  class="mask is-squircle"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Katrina West
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@katrinaccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Katrina West
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              a day ago
            </p>
          </div>
        </div>
        <div id="cardMenu4" class="inline-flex">
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
      <div class="mt-5">
        <img
            class="h-48 w-full rounded-lg object-cover object-center"
            src="images/800x600.png"
            alt="image"
        />
      </div>
      <div class="mt-4 grow">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >Top Design Systems</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tempore, excepturi. Itaque est cum vitae repellat voluptatem!
        </p>
        <div class="mt-2">
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#DesignSystem  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#MaterialUI  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#FluentDesign  </a
          >
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center justify-between">
          <div class="-ml-1.5 flex">
            <button
                data-tooltip="12k Like"
                data-tooltip-theme="secondary"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-secondary focus:bg-slate-300/20 focus:text-secondary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-secondary-light dark:focus:bg-navy-300/20 dark:focus:text-secondary-light dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
                data-tooltip="5k Commnets"
                data-tooltip-theme="success"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-success focus:bg-slate-300/20 focus:text-success active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button
                data-tooltip="Share"
                data-tooltip-theme="info"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-info focus:bg-slate-300/20 focus:text-info active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>665</span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between space-x-3">
        <div class="avatar size-8">
          <img
              class="rounded-full"
              src="images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full rounded-full border border-slate-300 bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card grow p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div id="userInfo4" class="flex">
            <div class="popper-ref avatar size-10">
              <img
                  class="mask is-squircle"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Henry Curtis
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@henryaccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Henry Curtis
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              3 days ago
            </p>
          </div>
        </div>
        <div id="cardMenu5" class="inline-flex">
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
      <div class="mt-5">
        <img
            class="h-48 w-full rounded-lg object-cover object-center"
            src="images/800x600.png"
            alt="image"
        />
      </div>
      <div class="mt-4 grow">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >10 Meetups About Food You Should Attend</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem officia earum est accusamus, ratione tenetur
          adipisci praesentium autem sunt totam!
        </p>
        <div class="mt-2">
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Colors  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Spectrum  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Warmcolors  </a
          >
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center justify-between">
          <div class="-ml-1.5 flex">
            <button
                data-tooltip="12k Like"
                data-tooltip-theme="secondary"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-secondary focus:bg-slate-300/20 focus:text-secondary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-secondary-light dark:focus:bg-navy-300/20 dark:focus:text-secondary-light dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
                data-tooltip="5k Commnets"
                data-tooltip-theme="success"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-success focus:bg-slate-300/20 focus:text-success active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button
                data-tooltip="Share"
                data-tooltip-theme="info"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-info focus:bg-slate-300/20 focus:text-info active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>665</span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between space-x-3">
        <div class="avatar size-8">
          <img
              class="rounded-full"
              src="images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full rounded-full border border-slate-300 bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card grow p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div id="userInfo5" class="flex">
            <div class="popper-ref avatar size-10">
              <img
                  class="mask is-squircle"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Samantha Shelton
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@Samanthashelton
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Samantha Shelton
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              7 days ago
            </p>
          </div>
        </div>
        <div id="cardMenu6" class="inline-flex">
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
      <div class="mt-5">
        <img
            class="h-48 w-full rounded-lg object-cover object-center"
            src="images/800x600.png"
            alt="image"
        />
      </div>
      <div class="mt-4 grow">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >NodeJS Design Patterns</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          delectus dolor dolores dolorum eos mollitia odio quaerat
          sapiente, voluptates! Odio.
        </p>
        <div class="mt-2">
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#NodeJS  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#MVC  </a
          >
          <a
              href="#"
              class="text-xs+ text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >#Javascript  </a
          >
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center justify-between">
          <div class="-ml-1.5 flex">
            <button
                data-tooltip="12k Like"
                data-tooltip-theme="secondary"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-secondary focus:bg-slate-300/20 focus:text-secondary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-secondary-light dark:focus:bg-navy-300/20 dark:focus:text-secondary-light dark:active:bg-navy-300/25"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
                data-tooltip="5k Commnets"
                data-tooltip-theme="success"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-success focus:bg-slate-300/20 focus:text-success active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button
                data-tooltip="Share"
                data-tooltip-theme="info"
                class="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-info focus:bg-slate-300/20 focus:text-info active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>665</span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between space-x-3">
        <div class="avatar size-8">
          <img
              class="rounded-full"
              src="images/200x200.png"
              alt="avatar"
          />
        </div>
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full rounded-full border border-slate-300 bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-6 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        Blog Cards
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
  >
    <div class="card">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-3">
          <div id="userInfo1" class="flex">
            <div class="popper-ref avatar size-9">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Konnor Guzman
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@konnoraccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Konnor Guzman
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              55 min ago
            </p>
          </div>
        </div>
        <div id="cardMenu6" class="inline-flex">
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
      <img
          class="h-48 w-full object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="grow px-4 pt-4">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >Food: A Simple Definition</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          delectus dolor dolores dolorum eos mollitia odio quaerat
          sapiente, voluptates! Odio.
        </p>
        <div class="inline-space mt-3 flex flex-wrap">
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Food
          </a>
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Health
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Sport
          </a>
        </div>
      </div>
      <div class="flex justify-between px-4 py-4">
        <div class="flex flex-wrap -space-x-2">
          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
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
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
        <div class="-mr-1.5 flex">
          <button
              data-tooltip="Like"
              data-tooltip-theme="secondary"
              class="btn size-7 rounded-full p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
              data-tooltip="Save"
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
          class="border-t border-slate-200 px-2 py-1.5 dark:border-navy-500"
      >
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-3">
          <div id="userInfo2" class="flex">
            <div class="popper-ref avatar size-9">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Travis Fuller
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@travisaccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Travis Fuller
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              2 hours ago
            </p>
          </div>
        </div>
        <div id="cardMenu1" class="inline-flex">
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
      <img
          class="h-48 w-full object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="grow px-4 pt-4">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >How Did We Get Here? The History of Music Told Through
          Tweets</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          delectus dolor.
        </p>
        <div class="inline-space mt-3 flex flex-wrap">
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Music
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-primary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Art
          </a>
          <a
              href="#"
              class="tag rounded-full bg-error/10 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            SoundTrack
          </a>
        </div>
      </div>
      <div class="flex justify-between px-4 py-4">
        <div class="flex flex-wrap -space-x-2">
          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <div
                class="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
            >
              SM
            </div>
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
        <div class="-mr-1.5 flex">
          <button
              data-tooltip="Like"
              data-tooltip-theme="secondary"
              class="btn size-7 rounded-full p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
              data-tooltip="Save"
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
          class="border-t border-slate-200 px-2 py-1.5 dark:border-navy-500"
      >
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-3">
          <div id="userInfo3" class="flex">
            <div class="popper-ref avatar size-9">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Alfredo Elliott
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@alfredaccount
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Alfredo Elliott
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              a day ago
            </p>
          </div>
        </div>
        <div id="cardMenu2" class="inline-flex">
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
      <img
          class="h-48 w-full object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="grow px-4 pt-4">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >The 12 Worst Types Business Accounts You Follow on Twitter</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis voluptas deserunt nemo?
        </p>
        <div class="inline-space mt-3 flex flex-wrap">
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Business
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Twitter
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-primary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Development
          </a>
        </div>
      </div>
      <div class="flex justify-between px-4 py-4">
        <div class="flex flex-wrap -space-x-2">
          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <div
                class="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
            >
              SM
            </div>
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
        <div class="-mr-1.5 flex">
          <button
              data-tooltip="Like"
              data-tooltip-theme="secondary"
              class="btn size-7 rounded-full p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
              data-tooltip="Save"
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
          class="border-t border-slate-200 px-2 py-1.5 dark:border-navy-500"
      >
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-3">
          <div id="userInfo4" class="flex">
            <div class="popper-ref avatar size-9">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Katrina West
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@katrinawest
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Katrina West
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              3 days ago
            </p>
          </div>
        </div>
        <div id="cardMenu3" class="inline-flex">
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
      <img
          class="h-48 w-full object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="grow px-4 pt-4">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >10 Tips for Making a Good Camera Even Better</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Recusandae, pariatur voluptatem numquam soluta nemo ratione
          nobis minus aliquam?
        </p>
        <div class="inline-space mt-3 flex flex-wrap">
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Phorograpy
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Camera
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-primary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Shot
          </a>
        </div>
      </div>
      <div class="flex justify-between px-4 py-4">
        <div class="flex flex-wrap -space-x-2">
          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <div
                class="is-initial rounded-full bg-primary text-xs+ uppercase text-white ring ring-white dark:bg-accent dark:ring-navy-700"
            >
              SM
            </div>
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
        <div class="-mr-1.5 flex">
          <button
              data-tooltip="Like"
              data-tooltip-theme="secondary"
              class="btn size-7 rounded-full p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
              data-tooltip="Save"
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
          class="border-t border-slate-200 px-2 py-1.5 dark:border-navy-500"
      >
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-3">
          <div id="userInfo5" class="flex">
            <div class="popper-ref avatar size-9">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Henry Curtis
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@Henrycurtis
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Henry Curtis
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              8 days ago
            </p>
          </div>
        </div>
        <div id="cardMenu4" class="inline-flex">
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
      <img
          class="h-48 w-full object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="grow px-4 pt-4">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >10 Meetups About Food You Should Attend</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Recusandae, pariatur voluptatem numquam soluta nemo ratione
          nobis minus aliquam?
        </p>
        <div class="inline-space mt-3 flex flex-wrap">
          <a
              href="#"
              class="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Food
          </a>
          <a
              href="#"
              class="tag rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Health
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Sport
          </a>
        </div>
      </div>
      <div class="flex justify-between px-4 py-4">
        <div class="flex flex-wrap -space-x-2">
          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <div
                class="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
            >
              ZI
            </div>
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
        <div class="-mr-1.5 flex">
          <button
              data-tooltip="Like"
              data-tooltip-theme="secondary"
              class="btn size-7 rounded-full p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
              data-tooltip="Save"
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
          class="border-t border-slate-200 px-2 py-1.5 dark:border-navy-500"
      >
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-3">
          <div id="userInfo6" class="flex">
            <div class="popper-ref avatar size-9">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div class="popper-root">
              <div class="popper-box">
                <div
                    class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                >
                  <div class="avatar size-16">
                    <img
                        class="rounded-full"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <p
                      class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                  >
                    Samantha Shelton
                  </p>
                  <a
                      href="#"
                      class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                  >@Samanthashelton
                  </a>
                  <button
                      class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Follow
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
              Samantha Shelton
            </p>
            <p class="text-xs text-slate-400 dark:text-navy-300">
              12 days ago
            </p>
          </div>
        </div>
        <div id="cardMenu5" class="inline-flex">
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
      <img
          class="h-48 w-full object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="grow px-4 pt-4">
        <a
            href="#"
            class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
        >25 Surprising Facts About Chair</a
        >
        <p class="mt-2 line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Recusandae, pariatur voluptatem numquam soluta nemo ratione
          nobis minus aliquam?
        </p>

        <div class="inline-space mt-3 flex flex-wrap">
          <a
              href="#"
              class="tag rounded-full bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Chair
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-primary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Facts
          </a>
          <a
              href="#"
              class="tag rounded-full bg-error/10 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            Products
          </a>
        </div>
      </div>
      <div class="flex justify-between px-4 py-4">
        <div class="flex flex-wrap -space-x-2">
          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <div
                class="is-initial rounded-full bg-warning text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
            >
              Yt
            </div>
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>

          <div class="avatar size-7 hover:z-10">
            <img
                class="rounded-full ring ring-white dark:ring-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>
        </div>
        <div class="-mr-1.5 flex">
          <button
              data-tooltip="Like"
              data-tooltip-theme="secondary"
              class="btn size-7 rounded-full p-0 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
              data-tooltip="Save"
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
          class="border-t border-slate-200 px-2 py-1.5 dark:border-navy-500"
      >
        <div class="relative flex w-full">
          <input
              class="form-input peer h-8 w-full bg-transparent px-8 py-2 text-xs+ placeholder:text-slate-400/70"
              placeholder="Write the commnet..."
              type="text"
          />
          <div
              class="pointer-events-none absolute flex h-full w-8 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
          >
            <i class="fa fa-paper-plane"></i>
          </div>
          <div
              class="absolute right-0 z-10 flex size-8 items-center justify-center"
          >
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent-light dark:focus:bg-navy-300/20 dark:focus:text-accent-light dark:active:bg-navy-300/25"
            >
              <i class="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        Blog Cards
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
  >
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              10 Tips for Making a Good Camera Even Better
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span class="line-clamp-1">Technology</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">48 min ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              How Did We Get Here? The History of Music Told Through
              Tweets
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span class="line-clamp-1">Music</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">a hour ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              The 12 Worst Types Business Accounts You Follow on Twitter
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="line-clamp-1">Business</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">a day ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              25 Surprising Facts About Chair
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="line-clamp-1">Home</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">3 days ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              10 Meetups About Food You Should Attend
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="line-clamp-1">Home</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">5 days ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              Food: A Simple Definition
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="line-clamp-1">Home</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">12 days ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              10 Tips for Making a Good Camera Even Better
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="line-clamp-1">Business</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">16 days ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              How Did We Get Here? The History of Music Told Through
              Tweets
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span class="line-clamp-1">Technology</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">22 days ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          class="h-72 w-full rounded-lg object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div
          class="absolute inset-0 flex h-full w-full flex-col justify-end"
      >
        <div
            class="space-y-1.5 rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 pb-3 pt-12"
        >
          <div class="line-clamp-2">
            <a href="#" class="text-base font-medium text-white">
              The 12 Worst Types Business Accounts You Follow on Twitter
            </a>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-xs text-slate-200">
              <p class="flex items-center space-x-1">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="line-clamp-1">Business</span>
              </p>
              <div
                  class="mx-3 my-0.5 w-px self-stretch bg-white/20"
              ></div>
              <p class="shrink-0 text-tiny+">25 days ago</p>
            </div>
            <div class="-mr-1.5 flex">
              <button
                  data-tooltip="Like"
                  data-tooltip-theme="secondary"
                  class="btn size-7 rounded-full p-0 text-secondary-light hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                  data-tooltip="Save"
                  class="btn size-7 rounded-full p-0 text-navy-100 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        Blog Cards
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
  >
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is Tailwind CSS?</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">John D.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                2 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Travis F.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                5 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >10 Tips for Making a Good Camera Even Better</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Alfredo E .</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                4 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Top Design Systems</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Katrina W.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                1 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >NodeJS Design Patterns</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Henry C.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                6 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >313 Pattern and Color ideas</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Derrick S.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                3 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >10 Tips for Making a Good Camera Even Better</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Raul B.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                2 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Food: A Simple Definition</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Samantha S.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                11 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >The 12 Worst Types Business Accounts You Follow on Twitter</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Corey E.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                3 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >10 Meetups About Food You Should Attend</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">John D.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                2 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >25 Surprising Facts About Chair</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Travis F.</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                5 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
    <div class="card flex-row justify-between space-x-2 p-2.5">
      <div class="flex flex-1 flex-col justify-between">
        <div class="line-clamp-3">
          <a
              href="#"
              class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >How Did We Get Here? The History of Music Told Through
            Tweets</a
          >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="avatar size-7">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <div>
              <p class="text-xs font-medium line-clamp-1">Alfredo E .</p>
              <p
                  class="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300"
              >
                4 min read
              </p>
            </div>
          </div>
          <div class="flex">
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
            <button
                class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
          src="images/800x600.png"
          class="size-28 rounded-lg object-cover object-center"
          alt="image"
      />
    </div>
  </div>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        Blog Cards
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >Frameworks</a
          >
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >a hour ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Food: A Simple Definition</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          necessitatibus repellat voluptatibus?
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 32 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >Frameworks</a
          >
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >12 min ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
          the sit.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 65 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1">Music</a>
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >a day ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?</a
          >
        </div>

        <p class="grow pt-2">
          How Did We Get Here? The History of Music Told Through Tweets
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 125 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >UI/UX Design</a
          >
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >2 days ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Top Design Systems</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto assumenda.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 669 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >UI/UX Design</a
          >
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >2 days ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Top Design Systems</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto assumenda.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 321 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1">Music</a>
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >5 days ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >How Did We Get Here? The History of Music Told Through
            Tweets</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 38 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >Programming
          </a>
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >11 days ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >NodeJS Design Patterns</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 74 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >UI/UX Design
          </a>
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >14 days ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >313 Pattern and Color ideas</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 142 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1">Home </a>
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >16 days ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >25 Surprising Facts About Chair</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 215 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1">Music</a>
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >a day ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?</a
          >
        </div>

        <p class="grow pt-2">
          How Did We Get Here? The History of Music Told Through Tweets
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 125 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >Frameworks</a
          >
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >a hour ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Food: A Simple Definition</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          necessitatibus repellat voluptatibus?
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 32 </span>
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img
          src="images/800x600.png"
          class="h-48 w-full rounded-t-lg object-cover object-center"
          alt="images"
      />
      <div class="flex grow flex-col p-4">
        <div class="flex">
          <a href="#" class="text-xs text-info line-clamp-1"
          >Frameworks</a
          >
          <div
              class="mx-2 my-0.5 w-px bg-slate-200 dark:bg-navy-500"
          ></div>

          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >12 min ago</span
          >
        </div>

        <div class="pt-2 line-clamp-2">
          <a
              href="#"
              class="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example</a
          >
        </div>

        <p class="grow pt-2">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
          the sit.
        </p>

        <div class="mt-3 text-right">
          <button
              class="btn h-8 space-x-1.5 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span> 65 </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between py-5 lg:py-6">
    <div class="flex items-center space-x-1">
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl"
      >
        Blog Cards
      </h2>
      <div id="top-header-menu" class="inline-flex">
        <button
            class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  <span> New Post</span></a
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
                  <span>Export Posts</span></a
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
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is Tailwind CSS?</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          distinctio dolorum harum.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">John Doe</span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">25 May, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
          the sit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Konnor Guzman </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">30 May, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
          the sit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Travis Fuller </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">10 June, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Top Design Systems</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto assumenda.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Alfredo Elliott </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">19 June, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >How Did We Get Here?</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Katrina West </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">26 June, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >NodeJS Design Patterns</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Henry Curtis </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">12 June, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >313 Pattern and Color ideas</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Samantha Shelton </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">30 June, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >25 Surprising Facts About Chair</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Konnor Guzman </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">03 July, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          How Did We Get Here? The History of Music Told Through Tweets
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1"> Travis Fuller </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">08 July, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is PHP?</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
          the sit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Travis Fuller </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">10 June, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >What is Tailwind CSS?</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          distinctio dolorum harum.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">John Doe</span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">25 May, 2022</span>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <img
          class="h-44 w-full rounded-2xl object-cover object-center"
          src="images/800x600.png"
          alt="image"
      />
      <div class="card -mt-8 grow rounded-2xl p-4">
        <div>
          <a
              href="#"
              class="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
          >Tailwind CSS Card Example</a
          >
        </div>
        <p class="mt-2 grow line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor on
          the sit.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <a
              href="#"
              class="flex items-center space-x-2 text-xs hover:text-slate-800 dark:hover:text-navy-100"
          >
            <div class="avatar size-6">
              <img
                  class="rounded-full"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>
            <span class="line-clamp-1">Konnor Guzman </span>
          </a>
          <p
              class="flex shrink-0 items-center space-x-1.5 text-slate-400 dark:text-navy-300"
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
                  stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-xs">30 May, 2022</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>