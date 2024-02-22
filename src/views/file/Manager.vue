<script>
import Tab from "@/components/tab.js";
import Swiper from "swiper/bundle";
import Popper from "@/components/popper.js";
export default {
  name: "Manager",
  mounted() {
    new Tab("#tab-folders");

    new Swiper("#tab-folder-recent", { slidesPerView: "auto", spaceBetween: 20 });
    new Swiper("#tab-folder-pinned", { slidesPerView: "auto", spaceBetween: 20 });

    new Popper("#dropdown-tags", ".popper-ref", ".popper-root", {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
      ],
    });
    new Popper("#dropdown-folders-table", ".popper-ref", ".popper-root", {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
      ],
    });

    new Popper("#top-header-menu", ".popper-ref", ".popper-root", {
      placement: "bottom-start",
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
  <div
      class="flex items-center justify-between space-x-2 px-[var(--margin-x)] pb-4 pt-5 transition-all duration-[.25s]"
  >
    <div class="flex items-center space-x-1">
      <h3
          class="text-lg font-medium text-slate-700 line-clamp-1 dark:text-navy-50"
      >
        Home
      </h3>
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
                        d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>

                  <span> New Folder</span></a
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>

                  <span>Upload Folder</span></a
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

                  <span>Download Folder</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex">
      <button
          data-toggle="drawer"
          data-target="#filemanager-activity-drawer"
          class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <a
          href="pages-help-1.html"
          class="btn size-8 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
              stroke-width="1.5"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    </div>
  </div>
  <div class="flex flex-col" id="tab-folders">
    <div
        class="flex space-x-2 px-[var(--margin-x)] transition-all duration-[.25s]"
    >
      <button
          class="tab btn h-8 rounded-full text-xs+ font-medium"
          data-target="#tab-folder-recent"
          data-default-class="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100"
          data-active-class="bg-slate-150 text-slate-800 dark:bg-navy-600 dark:text-navy-50"
      >
        Recent
      </button>
      <button
          class="tab btn h-8 rounded-full text-xs+ font-medium"
          data-target="#tab-folder-pinned"
          data-default-class="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100"
          data-active-class="bg-slate-150 text-slate-800 dark:bg-navy-600 dark:text-navy-50"
      >
        Pinned
      </button>
    </div>
    <div>
      <div
          id="tab-folder-recent"
          class="tab-content tab-shift-left swiper px-[var(--margin-x)] pt-4 transition-all duration-[.25s]"
      >
        <div class="swiper-wrapper">
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-primary.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-primary dark:text-accent-light"
            >
              Dribble Shots
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                22 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                455 MB
              </p>
            </div>
          </div>
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-warning.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-warning"
            >
              Design
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                135 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                3.5 GB
              </p>
            </div>
          </div>
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-info.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-info"
            >
              My Portfolio
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                14 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                984 MB
              </p>
            </div>
          </div>
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-secondary.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-secondary dark:text-secondary-light"
            >
              Behance Files
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                14 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                984 MB
              </p>
            </div>
          </div>
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-success.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-success"
            >
              Backup Files
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                65 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                12 GB
              </p>
            </div>
          </div>
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-error.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-error"
            >
              Vue Apps
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                34 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                146 MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
          id="tab-folder-pinned"
          class="tab-content tab-shift-left swiper px-[var(--margin-x)] pt-4 transition-all duration-[.25s]"
      >
        <div class="swiper-wrapper">
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-error.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-error"
            >
              Vue Apps
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                34 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                146 MB
              </p>
            </div>
          </div>
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-warning.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-warning"
            >
              Design
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                135 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                3.5 GB
              </p>
            </div>
          </div>
          <div class="card swiper-slide w-56 shrink-0 p-3 pt-4">
            <div class="flex items-center justify-between">
              <img
                  class="w-14"
                  src="images/folders/folder-primary.svg"
                  alt="folder"
              />
              <button
                  class="btn -mr-2 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
            <div
                class="pt-5 text-base font-medium tracking-wide text-primary dark:text-accent-light"
            >
              Dribble Shots
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <p class="text-salte-400 text-xs+ dark:text-navy-300">
                22 files
              </p>
              <p class="font-medium text-slate-600 dark:text-navy-100">
                455 MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
      class="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:gap-6"
  >
    <div class="col-span-12 lg:col-span-8">
      <div class="flex items-center justify-between">
        <h2
            class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Folders
        </h2>
        <div class="flex">
          <div class="flex">
            <div class="table-search-wrapper flex items-center">
              <label class="block">
                <input
                    class="table-search-input form-input w-0 bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200"
                    placeholder="Search here..."
                    type="text"
                />
              </label>
              <button
                  class="table-search-toggle btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                      stroke-width="1.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <div id="dropdown-folders-table" class="inline-flex">
              <button
                  class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      </div>
      <div class="card mt-3">
        <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
          <table class="is-hoverable w-full text-left">
            <thead>
            <tr>
              <th
                  class="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Name
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Last edit
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Size
              </th>
              <th
                  class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              >
                Members
              </th>

              <th
                  class="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
              ></th>
            </tr>
            </thead>
            <tbody>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Designs</span
                  >
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                2 day ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                14.3GB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
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
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Movies</span
                  >
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                a month ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                31 GB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
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
                      sm
                    </div>
                  </div>
                  <div class="avatar size-7 hover:z-10">
                    <img
                        class="rounded-full ring ring-white dark:ring-navy-700"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-secondary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Media</span
                  >
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                2 hour ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                17.2 GB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
                  <div class="avatar size-7 hover:z-10">
                    <div
                        class="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                    >
                      uh
                    </div>
                  </div>
                  <div class="avatar size-7 hover:z-10">
                    <img
                        class="rounded-full ring ring-white dark:ring-navy-700"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Web Applications
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                42 minute ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                12.4 GB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
                  <div class="avatar size-7 hover:z-10">
                    <div
                        class="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                    >
                      nd
                    </div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Designs
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                2 day ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                4.33 GB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
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
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Archives
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                12 days ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                1.2 TB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
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
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Movies</span
                  >
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                a month ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                31 GB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
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
                      sm
                    </div>
                  </div>
                  <div class="avatar size-7 hover:z-10">
                    <img
                        class="rounded-full ring ring-white dark:ring-navy-700"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr class="border-y border-transparent">
              <td
                  class="whitespace-nowrap rounded-bl-lg px-4 py-3 sm:px-5"
              >
                <div class="flex items-center space-x-4">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-8 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path
                        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                  <span
                      class="font-medium text-slate-700 dark:text-navy-100"
                  >Documents
                          </span>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                a day ago
              </td>
              <td
                  class="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5"
              >
                602 MB
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div class="flex -space-x-2">
                  <div class="avatar size-7 hover:z-10">
                    <div
                        class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                    >
                      gh
                    </div>
                  </div>
                  <div class="avatar size-7 hover:z-10">
                    <img
                        class="rounded-full ring ring-white dark:ring-navy-700"
                        src="images/200x200.png"
                        alt="avatar"
                    />
                  </div>
                </div>
              </td>
              <td
                  class="whitespace-nowrap rounded-br-lg px-4 py-3 sm:px-5"
              >
                <button
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
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-4">
      <div class="flex items-center justify-between">
        <h2
            class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Tags
        </h2>

        <div id="dropdown-tags" class="inline-flex">
          <button
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
      <div class="card mt-3 space-y-3.5 p-4 text-xs+">
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-primary text-white dark:bg-accent"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#Image</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>654 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>1.5 GB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-secondary text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#Video</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>135 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>14 GB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-info text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
                />
                <path
                    d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#Documents</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>5477 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>1.2 GB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-success text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#adminui</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>120 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>166 MB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-warning text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#chatUI</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>54 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>121 MB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-error text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#uiux</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>565 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>756 MB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-primary text-white dark:bg-accent"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#Image</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>654 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>1.5 GB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-secondary text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#Video</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>135 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>14 GB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
        <div class="group flex items-center justify-between">
          <div class="flex space-x-3">
            <div
                class="flex size-10 items-center justify-center rounded-full bg-info text-white"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
                />
                <path
                    d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                />
              </svg>
            </div>
            <div>
              <a href="#" class="text-slate-600 dark:text-navy-100"
              >#Documents</a
              >
              <div
                  class="mt-1 flex text-xs text-slate-400 dark:text-navy-300"
              >
                <p>5477 Files</p>
                <div
                    class="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"
                ></div>
                <p>1.2 GB</p>
              </div>
            </div>
          </div>
          <button
              class="btn -mr-2 size-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
        </div>
      </div>
    </div>
  </div>
</template>