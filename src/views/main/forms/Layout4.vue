<script>
import Forms from "@/views/main/forms/Forms.vue";

export default {
  name: "Layout4",
  extends: Forms
}
</script>

<template>
  <div
      class="flex flex-col items-center justify-between space-y-4 py-5 sm:flex-row sm:space-y-0 lg:py-6"
  >
    <div class="flex items-center space-x-1">
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
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <h2
          class="text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50"
      >
        New Post
      </h2>
    </div>
    <div class="flex justify-center space-x-2">
      <button
          class="btn min-w-[7rem] border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
      >
        Preview
      </button>
      <button
          class="btn min-w-[7rem] bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >
        Save
      </button>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
    <div class="col-span-12 lg:col-span-8">
      <div class="card">
        <div class="tabs flex flex-col">
          <div class="is-scrollbar-hidden overflow-x-auto">
            <div class="border-b-2 border-slate-150 dark:border-navy-500">
              <div class="tabs-list -mb-0.5 flex">
                <button
                    class="btn h-14 shrink-0 space-x-2 rounded-none border-b-2 border-primary px-4 font-medium text-primary dark:border-accent dark:text-accent-light sm:px-5"
                >
                  <i class="fa-solid fa-layer-group text-base"></i>
                  <span>General</span>
                </button>
                <button
                    class="btn h-14 shrink-0 space-x-2 rounded-none border-b-2 border-transparent px-4 font-medium hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 sm:px-5"
                >
                  <i class="fa-solid fa-tags text-base"></i>
                  <span>Meta Tags</span>
                </button>
                <button
                    class="btn h-14 shrink-0 space-x-2 rounded-none border-b-2 border-transparent px-4 font-medium hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100 sm:px-5"
                >
                  <i class="fa-solid fa-bars-staggered text-base"></i>
                  <span> Keywords </span>
                </button>
              </div>
            </div>
          </div>
          <div class="p-4 sm:p-5">
            <div class="space-y-5">
              <label class="block">
                      <span
                          class="font-medium text-slate-600 dark:text-navy-100"
                      >Title</span
                      >
                <input
                    class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Enter post title"
                    type="text"
                />
              </label>
              <label class="block">
                      <span
                          class="font-medium text-slate-600 dark:text-navy-100"
                      >Caption</span
                      >
                <input
                    class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Enter post caption"
                    type="text"
                />
              </label>
              <div>
                      <span
                          class="font-medium text-slate-600 dark:text-navy-100"
                      >Post Content</span
                      >
                <div class="mt-1.5 w-full">
                  <div id="postConent" class="h-48"></div>
                </div>
              </div>
              <div>
                      <span
                          class="font-medium text-slate-600 dark:text-navy-100"
                      >Post Images</span
                      >
                <div
                    class="filepond fp-bordered fp-grid mt-1.5 [--fp-grid:2]"
                >
                  <input id="postImages" type="file" multiple />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-4">
      <div class="card space-y-5 p-4 sm:p-5">
        <label class="block">
                <span class="font-medium text-slate-600 dark:text-navy-100"
                >Select Author</span
                >
          <select
              id="postAuthor"
              class="mt-1.5 w-full"
              placeholder="Select Author..."
          ></select>
        </label>
        <label class="block">
                <span class="font-medium text-slate-600 dark:text-navy-100"
                >Category</span
                >
          <select class="mt-1.5 w-full" id="postCategory">
            <option value>Select the category</option>
            <option value="digital">Digital</option>
            <option value="technology">Technology</option>
            <option value="home">Home</option>
            <option value="accessories">Accessories</option>
          </select>
        </label>
        <label class="block">
                <span class="font-medium text-slate-600 dark:text-navy-100"
                >Tags</span
                >
          <input
              id="postTags"
              class="mt-1.5 w-full"
              placeholder="Enter Tags"
          />
        </label>

        <label>
                <span class="font-medium text-slate-600 dark:text-navy-100"
                >Publish Date</span
                >
          <span class="relative mt-1.5 flex">
                  <input
                      id="postPublishDate"
                      class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Choose date..."
                      type="text"
                  />
                  <span
                      class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-5 transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </span>
        </label>
      </div>
    </div>
  </div>
</template>