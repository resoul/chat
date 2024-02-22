<script>
import { useThemeStore } from "@/components/theme/theme.js";
import Popper from "@/components/popper.js";
import Tab from "@/components/tab.js";

export default {
  name: "NFT",
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')

    return { theme }
  },
  mounted() {
    new Popper("#balance-menu", ".popper-ref", ".popper-root", {
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

    // Featured Author Menu
    new Popper("#featured-author-menu", ".popper-ref", ".popper-root", {
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

    // Top NFT table tabs
    new Tab("#top-nft-tab");
  }
}
</script>

<template>
  <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
    <div class="col-span-12 lg:col-span-8 xl:col-span-9">
      <div class="flex items-center justify-between py-5">
        <h3 class="text-xl font-medium text-slate-800 dark:text-navy-50">
          Trending NFT's
        </h3>
        <a
            href="#"
            class="border-b border-dotted border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
        >View All</a
        >
      </div>
      <div class="is-scrollbar-hidden overflow-x-auto">
        <div class="flex w-max space-x-3">
          <a
              href="#"
              class="tag h-7 rounded-full bg-primary text-xs+ text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            🔥 All
          </a>

          <a
              href="#"
              class="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            🎨 Art
          </a>
          <a
              href="#"
              class="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            🎵 Music
          </a>
          <a
              href="#"
              class="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            🎯 Game
          </a>
          <a
              href="#"
              class="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            👗 Fashion
          </a>
          <a
              href="#"
              class="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            📸 Photograpgy
          </a>
          <a
              href="#"
              class="tag h-7 rounded-full bg-slate-150 text-xs+ text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-700 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            🤽‍♂️ Sport
          </a>
        </div>
      </div>
      <div
          class="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5 lg:mt-6 lg:gap-6"
      >
        <div class="card p-2 pb-3">
          <div class="relative w-full">
            <img
                class="h-56 w-full rounded-xl object-cover object-center"
                src="images/800x600.png"
                alt="image"
            />
            <div
                class="absolute inset-0 flex h-full w-full flex-col justify-between p-3"
            >
              <div class="flex justify-end">
                <button
                    class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4 text-white"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <div
                    class="badge rounded-full bg-white text-slate-800 dark:bg-navy-600 dark:text-navy-50"
                >
                  2 days left
                </div>
              </div>
            </div>
          </div>
          <div class="mx-2 mt-3">
            <div class="flex justify-between text-xs">
              <a
                  href="#"
                  class="text-slate-400 hover:underline dark:text-navy-300"
              >
                Konnor Guzman
              </a>
              <p>
                <i class="fa-regular fa-heart"></i>
                <span>164</span>
              </p>
            </div>
            <a
                href="#"
                class="mt-1.5 text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              The Runner #265
            </a>
            <div class="mt-2 flex items-center justify-between">
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Current bid
              </p>
              <p>
                      <span
                          class="font-semibold text-slate-700 dark:text-navy-100"
                      >
                        <i class="fa-brands fa-ethereum text-sm+"></i>
                        5.01
                      </span>
                <span class="text-slate-400 dark:text-navy-300">ETH</span>
              </p>
            </div>
          </div>
        </div>

        <div class="card p-2 pb-3">
          <div class="relative w-full">
            <img
                class="h-56 w-full rounded-xl object-cover object-center"
                src="images/800x600.png"
                alt="image"
            />
            <div
                class="absolute inset-0 flex h-full w-full flex-col justify-between p-3"
            >
              <div class="flex justify-end">
                <button
                    class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4 text-white"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <div
                    class="badge rounded-full bg-white text-slate-800 dark:bg-navy-600 dark:text-navy-50"
                >
                  3 days left
                </div>
              </div>
            </div>
          </div>
          <div class="mx-2 mt-3">
            <div class="flex justify-between text-xs">
              <a
                  href="#"
                  class="text-slate-400 hover:underline dark:text-navy-300"
              >
                Katrina West
              </a>
              <p>
                <i class="fa-regular fa-heart"></i>
                <span>614</span>
              </p>
            </div>
            <a
                href="#"
                class="mt-1.5 text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Punkiber #015
            </a>
            <div class="mt-2 flex items-center justify-between">
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Current bid
              </p>
              <p>
                      <span
                          class="font-semibold text-slate-700 dark:text-navy-100"
                      >
                        <i class="fa-brands fa-ethereum text-sm+"></i>
                        9.15
                      </span>
                <span class="text-slate-400 dark:text-navy-300">ETH</span>
              </p>
            </div>
          </div>
        </div>

        <div class="card p-2 pb-3">
          <div class="relative w-full">
            <img
                class="h-56 w-full rounded-xl object-cover object-center"
                src="images/800x600.png"
                alt="image"
            />
            <div
                class="absolute inset-0 flex h-full w-full flex-col justify-between p-3"
            >
              <div class="flex justify-end">
                <button
                    class="btn size-7 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4 text-white"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <div
                    class="badge rounded-full bg-white text-slate-800 dark:bg-navy-600 dark:text-navy-50"
                >
                  5 days left
                </div>
              </div>
            </div>
          </div>
          <div class="mx-2 mt-3">
            <div class="flex justify-between text-xs">
              <a
                  href="#"
                  class="text-slate-400 hover:underline dark:text-navy-300"
              >
                Travis Fuller
              </a>
              <p>
                <i class="fa-regular fa-heart"></i>
                <span>233</span>
              </p>
            </div>
            <a
                href="#"
                class="mt-1.5 text-base font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Cube Store #015
            </a>
            <div class="mt-2 flex items-center justify-between">
              <p class="text-xs text-slate-400 dark:text-navy-300">
                Current bid
              </p>
              <p>
                      <span
                          class="font-semibold text-slate-700 dark:text-navy-100"
                      >
                        <i class="fa-brands fa-ethereum text-sm+"></i>
                        4.69
                      </span>
                <span class="text-slate-400 dark:text-navy-300">ETH</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 sm:mt-5 lg:mt-6" id="top-nft-tab">
        <div class="flex items-center justify-between space-x-2">
          <h2
              class="text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Top NFT's
          </h2>

          <div
              class="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
          >
            <div class="tabs-list flex p-1">
              <button
                  data-target="#last7days"
                  class="tab btn shrink-0 px-3 py-1 text-xs+ font-medium"
                  data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                  data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                Last 7 days
              </button>
              <button
                  data-target="#alltimes"
                  class="tab btn shrink-0 px-3 py-1 text-xs+ font-medium"
                  data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                  data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                All Time
              </button>
            </div>
          </div>
        </div>
        <div class="card mt-4">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table class="is-hoverable w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Collection
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Volume
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  24h%
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Owners
                </th>

                <th
                    class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Items
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div class="avatar">
                      <img
                          class="rounded-full"
                          src="images/800x600.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Abstrac Point</span
                    >
                  </div>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  $3,225.00
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-success sm:px-5"
                >
                  +13.4%
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  6.7k
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  286
                </td>
              </tr>

              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div class="avatar">
                      <img
                          class="rounded-full"
                          src="images/800x600.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >3D Cube Art</span
                    >
                  </div>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  $6,923.00
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-error sm:px-5"
                >
                  -8.8%
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  2.75k
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  49
                </td>
              </tr>

              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div class="flex items-center space-x-4">
                    <div class="avatar">
                      <img
                          class="rounded-full"
                          src="images/800x600.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >The Digital Art</span
                    >
                  </div>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  $8,367.00
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-success sm:px-5"
                >
                  +32.4%
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  8.46k
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  1,856
                </td>
              </tr>

              <tr class="border-y border-transparent">
                <td
                    class="whitespace-nowrap rounded-bl-lg px-4 py-3 sm:px-5"
                >
                  <div class="flex items-center space-x-4">
                    <div class="avatar">
                      <img
                          class="rounded-full"
                          src="images/800x600.png"
                          alt="avatar"
                      />
                    </div>

                    <span
                        class="font-medium text-slate-700 dark:text-navy-100"
                    >Geomatro Art</span
                    >
                  </div>
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  $35,496.00
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 font-medium text-success sm:px-5"
                >
                  +29.7%
                </td>
                <td
                    class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  16.4k
                </td>
                <td
                    class="whitespace-nowrap rounded-br-lg px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
                >
                  5,644
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
        class="col-span-12 space-y-4 sm:space-y-5 lg:col-span-4 lg:mt-6 lg:space-y-6 xl:col-span-3"
    >
      <div
          class="card bg-gradient-to-br from-purple-500 to-indigo-600 px-4 pb-4"
      >
        <div class="mt-3 flex items-center justify-between text-white">
          <h2 class="text-sm+ font-medium tracking-wide">Your Balance</h2>
          <div id="balance-menu" class="inline-flex">
            <button
                class="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
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
        <div class="flex w-9/12 items-center space-x-1">
          <p class="text-xs text-indigo-100 line-clamp-1">
            0x9CDBC28F0A6C13BB42ACBD3A3B366BFCAB07B8B1
          </p>
          <button
              class="btn size-5 shrink-0 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
              />
              <path
                  d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
              />
            </svg>
          </button>
        </div>
        <div class="mt-4 text-3xl font-semibold text-white">
          $5,566.00
        </div>
        <p class="mt-3 text-xs text-indigo-100">Offers</p>
        <div class="flex justify-between">
          <span class="font-medium text-white">USD 35,000</span>
          <span class="text-right text-xs text-indigo-100"
          >(55%) <i class="fa-solid fa-up-long text-tiny"></i
          ></span>
        </div>

        <button
            class="btn mt-6 w-full border border-white/10 bg-white/20 text-white hover:bg-white/30 focus:bg-white/30"
        >
          Up Your Balance
        </button>
      </div>

      <div class="card px-4 pb-4">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="text-sm+ font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Top Artists
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
          <div class="flex items-center justify-between space-x-2">
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
                >Katrina West</a
                >
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  1,588 items
                </p>
              </div>
            </div>
            <button
                class="btn h-7 rounded-full bg-primary/10 px-2.5 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
            >
              Follow
            </button>
          </div>
          <div class="flex items-center justify-between space-x-2">
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
                >Henry Curtis
                </a>
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  359 items
                </p>
              </div>
            </div>
            <button
                class="btn h-7 rounded-full bg-primary/10 px-2.5 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
            >
              Follow
            </button>
          </div>
          <div class="flex items-center justify-between space-x-2">
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
                >Lance Tucker
                </a>
                <p class="text-xs text-slate-400 dark:text-navy-300">
                  9,568 items
                </p>
              </div>
            </div>
            <button
                class="btn h-7 rounded-full bg-primary/10 px-2.5 text-xs font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
            >
              Follow
            </button>
          </div>
        </div>
      </div>

      <div class="card pb-4">
        <div class="flex items-start justify-between p-4">
          <div class="flex items-center space-x-3">
            <div class="avatar size-10">
              <img
                  class="mask is-squircle"
                  src="images/200x200.png"
                  alt="avatar"
              />
            </div>

            <div>
              <p class="text-slate-700 line-clamp-1 dark:text-navy-100">
                Konnor Guzman
              </p>
              <p class="text-xs text-slate-400 dark:text-navy-300">
                15.155 items
              </p>
            </div>
          </div>
          <div id="featured-author-menu" class="inline-flex">
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

        <div
            class="is-scrollbar-hidden flex space-x-4 overflow-y-auto px-4"
        >
          <div class="w-28 shrink-0 text-xs">
            <img
                class="w-28 rounded-lg object-cover object-center"
                src="images/800x600.png"
                alt="images"
            />
            <a
                href="#"
                class="mt-1.5 font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >Cube Store #025</a
            >
            <p class="mt-1.5">
                    <span
                        class="font-semibold text-slate-700 dark:text-navy-100"
                    >
                      <i class="fa-brands fa-ethereum text-sm+"></i>
                      5.01
                    </span>
              <span class="text-slate-400 dark:text-navy-300">ETH</span>
            </p>
          </div>

          <div class="w-28 shrink-0 text-xs">
            <img
                class="w-28 rounded-lg object-cover object-center"
                src="images/800x600.png"
                alt="images"
            />
            <a
                href="#"
                class="mt-1.5 font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >Punkiber #5764</a
            >
            <p class="mt-1.5">
                    <span
                        class="font-semibold text-slate-700 dark:text-navy-100"
                    >
                      <i class="fa-brands fa-ethereum text-sm+"></i>
                      7.63
                    </span>
              <span class="text-slate-400 dark:text-navy-300">ETH</span>
            </p>
          </div>

          <div class="w-28 shrink-0 text-xs">
            <img
                class="w-28 rounded-lg object-cover object-center"
                src="images/800x600.png"
                alt="images"
            />
            <a
                href="#"
                class="mt-1.5 font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >The Runner #0456</a
            >
            <p class="mt-1.5">
                    <span
                        class="font-semibold text-slate-700 dark:text-navy-100"
                    >
                      <i class="fa-brands fa-ethereum text-sm+"></i>
                      19.33
                    </span>
              <span class="text-slate-400 dark:text-navy-300">ETH</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>