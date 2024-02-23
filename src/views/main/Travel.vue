<script>
import { useThemeStore } from "@/components/theme/theme.js";
import Popper from "@/components/popper.js";
export default {
  name: "Travel",
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')
  },
  mounted() {
    new Popper(this.$refs.hotels, this.$refs["hotels-ref"], this.$refs["hotels-root"], {
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
    new Popper(this.$refs.plan, this.$refs.ref, this.$refs.root, {
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
  }
}
</script>

<template>
  <div class="flex items-center justify-between space-x-2 py-5">
    <h3
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Travel
    </h3>

    <div>
      <a
          href="#"
          class="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
      >Explore the world</a
      >
    </div>
  </div>
  <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
    <div class="col-span-12 lg:col-span-8">
      <div
          class="flex items-center justify-between space-x-3 sm:space-x-5"
      >
        <div class="flex w-full max-w-lg">
          <label class="relative flex w-full">
            <input
                class="form-input peer h-9 w-full rounded-l-lg bg-white px-3 py-2 shadow-soft ring-primary/50 placeholder:text-slate-400 focus:ring dark:bg-navy-700 dark:shadow-none dark:ring-accent/50 dark:placeholder:text-navy-300 lg:pl-9"
                placeholder="Location, Country or Destination..."
                type="text"
            />
            <span
                class="pointer-events-none absolute hidden h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent lg:flex"
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
          <button
              class="btn h-9 rounded-l-none bg-primary px-3 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 lg:px-5"
          >
            <span class="hidden lg:inline-flex">Search</span>
            <svg
                class="size-4.5 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div class="flex">
          <button
              class="btn size-8 shrink-0 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
          <button
              class="btn size-8 shrink-0 rounded-full p-0 text-slate-700 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
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
        </div>
      </div>
      <div
          class="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3"
      >
        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  South Island
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">New Zealand</span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">5.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Bora Bora
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">French</span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.9</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Maui
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">Hana </span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.8</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Tahiti
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">French </span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.7</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Glacier National Park
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1"
                  >Unated States
                        </span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.5</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Argentine Patagonia
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">Argentine </span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.4</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Amalfi Coast
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">Italy </span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.3</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Niagara Falls
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">Niagara </span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.1</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <img
              class="h-80 w-full rounded-lg object-cover"
              src="/images/800x800.png"
              alt="image"
          />
          <div
              class="absolute inset-0 flex h-full w-full flex-col justify-between"
          >
            <div class="flex justify-end p-3">
              <button
                  class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5 text-white"
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
              </button>
            </div>
            <div
                class="rounded-lg bg-gradient-to-t from-[#19213299] via-[#19213266] to-transparent px-4 py-3 pt-14"
            >
              <div>
                <a
                    href="#"
                    class="text-base font-semibold text-white line-clamp-2"
                >
                  Great Barrier Reef
                </a>
              </div>
              <div
                  class="mt-1 flex items-center space-x-3 text-slate-200"
              >
                <p class="flex items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-xs+ line-clamp-1">Australia </span>
                </p>
                <p class="flex shrink-0 items-center space-x-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      class="size-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                    />
                  </svg>
                  <span class="text-xs+">4.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-4">
      <div class="card px-4 pb-5 sm:px-5">
        <div class="flex items-center justify-between py-3">
          <h2
              class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Top Hotels
          </h2>
          <div ref="hotels" class="inline-flex">
            <button ref="hotels-ref"
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

            <div class="popper-root" ref="hotels-root">
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

        <div class="space-y-4">
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-4">
              <img
                  class="mask is-squircle size-12 object-cover object-center"
                  src="/images/800x600.png"
                  alt="image"
              />
              <div class="space-y-1">
                <a
                    href="#"
                    class="font-medium text-slate-600 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Crowne Plaza</a
                >
                <div class="flex items-center space-x-3 text-xs">
                  <p class="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="line-clamp-1">French</span>
                  </p>
                  <p class="flex shrink-0 items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                      />
                    </svg>
                    <span>4.9</span>
                  </p>
                </div>
              </div>
            </div>
            <p class="shrink-0">
                    <span
                        class="text-base font-medium text-slate-700 dark:text-navy-100"
                    >$100</span
                    >
              <span class="text-xs text-slate-400 dark:text-navy-300"
              >/day</span
              >
            </p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-4">
              <img
                  class="mask is-squircle size-12 object-cover object-center"
                  src="/images/800x600.png"
                  alt="image"
              />
              <div class="space-y-1">
                <a
                    href="#"
                    class="font-medium text-slate-600 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Emerald Bay Inn.</a
                >
                <div class="flex items-center space-x-3 text-xs">
                  <p class="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="line-clamp-1">Italy</span>
                  </p>
                  <p class="flex shrink-0 items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                      />
                    </svg>
                    <span>4.6</span>
                  </p>
                </div>
              </div>
            </div>
            <p class="shrink-0">
                    <span
                        class="text-base font-medium text-slate-700 dark:text-navy-100"
                    >$80</span
                    >
              <span class="text-xs text-slate-400 dark:text-navy-300"
              >/day</span
              >
            </p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-4">
              <img
                  class="mask is-squircle size-12 object-cover object-center"
                  src="/images/800x600.png"
                  alt="image"
              />
              <div class="space-y-1">
                <a
                    href="#"
                    class="font-medium text-slate-600 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Hotel Bliss.</a
                >
                <div class="flex items-center space-x-3 text-xs">
                  <p class="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="line-clamp-1">Room</span>
                  </p>
                  <p class="flex shrink-0 items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                      />
                    </svg>
                    <span>4.4</span>
                  </p>
                </div>
              </div>
            </div>
            <p class="shrink-0">
                    <span
                        class="text-base font-medium text-slate-700 dark:text-navy-100"
                    >$110</span
                    >
              <span class="text-xs text-slate-400 dark:text-navy-300"
              >/day</span
              >
            </p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-4">
              <img
                  class="mask is-squircle size-12 object-cover object-center"
                  src="/images/800x600.png"
                  alt="image"
              />
              <div class="space-y-1">
                <a
                    href="#"
                    class="font-medium text-slate-600 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Sunset Lodge.</a
                >
                <div class="flex items-center space-x-3 text-xs">
                  <p class="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="line-clamp-1">Sydney</span>
                  </p>
                  <p class="flex shrink-0 items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                      />
                    </svg>
                    <span>4.7</span>
                  </p>
                </div>
              </div>
            </div>
            <p class="shrink-0">
                    <span
                        class="text-base font-medium text-slate-700 dark:text-navy-100"
                    >$180</span
                    >
              <span class="text-xs text-slate-400 dark:text-navy-300"
              >/day</span
              >
            </p>
          </div>
          <div class="flex items-center justify-between space-x-2">
            <div class="flex items-center space-x-4">
              <img
                  class="mask is-squircle size-12 object-cover object-center"
                  src="/images/800x600.png"
                  alt="image"
              />
              <div class="space-y-1">
                <a
                    href="#"
                    class="font-medium text-slate-600 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Hotel Elite.</a
                >
                <div class="flex items-center space-x-3 text-xs">
                  <p class="flex items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="line-clamp-1">New York</span>
                  </p>
                  <p class="flex shrink-0 items-center space-x-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        class="size-3.5 text-slate-400 dark:text-navy-300"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M13.948 4.29l1.643 3.169c.224.44.82.864 1.325.945l2.977.477c1.905.306 2.353 1.639.98 2.953l-2.314 2.233c-.392.378-.607 1.107-.486 1.63l.663 2.763c.523 2.188-.681 3.034-2.688 1.89l-2.791-1.593c-.504-.288-1.335-.288-1.848 0l-2.791 1.594c-1.997 1.143-3.21.288-2.688-1.89l.663-2.765c.12-.522-.094-1.251-.486-1.63l-2.315-2.232c-1.362-1.314-.924-2.647.98-2.953l2.978-.477c.495-.081 1.092-.504 1.316-.945l1.643-3.17c.896-1.719 2.352-1.719 3.239 0z"
                      />
                    </svg>
                    <span>4.6</span>
                  </p>
                </div>
              </div>
            </div>
            <p class="shrink-0">
                    <span
                        class="text-base font-medium text-slate-700 dark:text-navy-100"
                    >$220</span
                    >
              <span class="text-xs text-slate-400 dark:text-navy-300"
              >/day</span
              >
            </p>
          </div>
        </div>
      </div>

      <div class="mt-4 sm:mt-5">
        <div class="flex items-center justify-between">
          <h2
              class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            My Plan
          </h2>
          <div ref="plan" class="inline-flex">
            <button ref="ref"
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

            <div class="popper-root" ref="root">
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
        <div class="mt-3 space-y-4">
          <div class="card p-2">
            <div class="flex space-x-4">
              <img
                  class="size-18 rounded-lg object-cover object-center"
                  src="/images/600x400.png"
                  alt="image"
              />
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Picnic on forest</a
                >
                <p class="flex items-center space-x-1.5 text-xs">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5 text-slate-400 dark:text-navy-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="line-clamp-1">22 May - 28 May</span>
                </p>
                <div class="mt-2 flex -space-x-2">
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card p-2">
            <div class="flex space-x-4">
              <img
                  class="size-18 rounded-lg object-cover object-center"
                  src="/images/600x400.png"
                  alt="image"
              />
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Picnic with Family</a
                >
                <p class="flex items-center space-x-1.5 text-xs">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5 text-slate-400 dark:text-navy-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="line-clamp-1">12 Jun - 16 Jun </span>
                </p>
                <div class="mt-2 flex -space-x-2">
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card p-2">
            <div class="flex space-x-4">
              <img
                  class="size-18 rounded-lg object-cover object-center"
                  src="/images/travel/climber-man.jpg"
                  alt="image"
              />
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Turtaruga campy</a
                >
                <p class="flex items-center space-x-1.5 text-xs">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5 text-slate-400 dark:text-navy-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="line-clamp-1">03 Mar - 05 Mar </span>
                </p>
                <div class="mt-2 flex -space-x-2">
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card p-2">
            <div class="flex space-x-4">
              <img
                  class="size-18 rounded-lg object-cover object-center"
                  src="/images/600x400.png"
                  alt="image"
              />
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 outline-none transition-colors hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Gioc waterfall</a
                >
                <p class="flex items-center space-x-1.5 text-xs">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-3.5 text-slate-400 dark:text-navy-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="line-clamp-1">08 Aug - 12 Aug </span>
                </p>
                <div class="mt-2 flex -space-x-2">
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                  <div class="avatar size-6 hover:z-10">
                    <img
                        class="rounded-full ring-2 ring-white dark:ring-navy-700"
                        src="/images/200x200.png"
                        alt="avatar"
                    />
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
