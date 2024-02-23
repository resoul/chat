<script>
import Components from "@/views/main/components/Components.vue";

export default {
  extends: Components
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Modal
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Components</a
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
              stroke-width="2"
              d="M9 5l7 7-7 7"
          />
        </svg>
      </li>
      <li>Modal</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Modal -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 h-8">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Modal
        </h2>
      </div>
      <div>
        <p class="max-w-xl">
          The Modal component inform users about a specific task and may
          contain critical information, require decisions, or involve
          multiple tasks.
        </p>
        <div class="mt-5">
          <button
              data-toggle="modal"
              data-target="#modal1"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Basic Modal
          </button>
        </div>
      </div>
    </div>

    <!-- Backdrop Blur -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 h-8">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Backdrop Blur
        </h2>
      </div>
      <div>
        <p class="max-w-xl">
          The Modal component inform users about a specific task and may
          contain critical information, require decisions, or involve
          multiple tasks.
        </p>
        <div class="mt-5">
          <button
              data-toggle="modal"
              data-target="#modal2"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Backdrop Blur
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Transition -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 h-8">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Modal Transition
        </h2>
      </div>
      <div>
        <p class="max-w-xl">
          The Modal component inform users about a specific task and may
          contain critical information, require decisions, or involve
          multiple tasks.
        </p>
        <div class="inline-space mt-5 flex">
          <button
              data-toggle="modal"
              data-target="#modal3"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Shift Up
          </button>
          <button
              data-toggle="modal"
              data-target="#modal4"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Shift Down
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Scale -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 h-8">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Modal Scale
        </h2>
      </div>
      <div>
        <p class="max-w-xl">
          The Modal component inform users about a specific task and may
          contain critical information, require decisions, or involve
          multiple tasks.
        </p>
        <div class="inline-space mt-5 flex">
          <button
              data-toggle="modal"
              data-target="#modal5"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Origin Top
          </button>
          <button
              data-toggle="modal"
              data-target="#modal6"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Origin bottom
          </button>
        </div>
      </div>
    </div>
  </div>

  <teleport to="#app">
    <div
        class="modal fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        id="modal1"
        role="dialog"
    >
      <div class="modal-overlay absolute inset-0 bg-slate-900/60"></div>
      <div
          class="modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg bg-white px-4 py-10 text-center dark:bg-navy-700 sm:px-5"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline size-28 shrink-0 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div class="mt-4">
          <h2 class="text-2xl text-slate-700 dark:text-navy-100">
            Success Message
          </h2>
          <p class="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur dignissimos soluta totam?
          </p>
          <button
              data-close-modal
              class="btn mt-6 bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <div
        class="modal fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        id="modal2"
        role="dialog"
    >
      <div
          class="modal-overlay absolute inset-0 bg-slate-900/60 backdrop-blur"
      ></div>
      <div
          class="modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg bg-white px-4 py-10 text-center dark:bg-navy-700 sm:px-5"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline size-28 shrink-0 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div class="mt-4">
          <h2 class="text-2xl text-slate-700 dark:text-navy-100">
            Success Message
          </h2>
          <p class="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur dignissimos soluta totam?
          </p>
          <button
              data-close-modal
              class="btn mt-6 bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <div
        id="modal3"
        class="modal shift-up fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
    >
      <div class="modal-overlay absolute inset-0 bg-slate-900/60"></div>
      <div
          class="modal-content scrollbar-sm relative flex max-w-md flex-col overflow-y-auto rounded-lg bg-white pt-10 pb-4 text-center dark:bg-navy-700"
      >
        <div class="avatar mx-auto size-20">
          <img
              class="rounded-full"
              src="/images/200x200.png"
              alt="avatar"
          />
          <div
              class="absolute right-0 m-1 size-4 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
          ></div>
        </div>
        <div class="mt-4 px-4 sm:px-12">
          <h3 class="text-lg text-slate-800 dark:text-navy-50">
            Follow Request
          </h3>
          <p class="mt-1 text-slate-500 dark:text-navy-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            sunt vel vero.
          </p>
        </div>
        <div class="my-4 mt-16 h-px bg-slate-200 dark:bg-navy-500"></div>

        <div class="space-x-3">
          <button
              data-close-modal
              class="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            Cancel
          </button>
          <button
              data-close-modal
              class="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Apply
          </button>
        </div>
      </div>
    </div>

    <div
        id="modal4"
        class="modal shift-down fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
    >
      <div class="modal-overlay absolute inset-0 bg-slate-900/60"></div>
      <div
          class="modal-content scrollbar-sm relative flex max-w-sm flex-col overflow-y-auto rounded-lg bg-white px-4 pb-4 dark:bg-navy-700 sm:px-5"
      >
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Table Settings
          </h2>

          <button
              data-close-modal
              class="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          dignissimos.
        </p>
        <div class="mt-4 grid grid-cols-2 gap-4">
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
            />
            <p>ID</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
            />
            <p>Name</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
            />
            <p>Email</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
            />
            <p>Address</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
            />
            <p>Created at</p>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
            />
            <p>Updated at</p>
          </label>
          <label class="col-span-2 inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent"
                type="checkbox"
            />
            <span>Show Avatar</span>
          </label>
        </div>
        <div class="mt-4 text-right">
          <button
              class="btn h-8 rounded-full text-xs+ font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            Cancel
          </button>
          <button
              data-close-modal
              class="btn h-8 rounded-full bg-primary text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Apply
          </button>
        </div>
      </div>
    </div>

    <div
        id="modal5"
        class="modal modal-scale fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
    >
      <div class="modal-overlay absolute inset-0 bg-slate-900/60"></div>
      <div
          class="modal-content relative flex w-full max-w-lg origin-top flex-col overflow-hidden rounded-lg bg-white dark:bg-navy-700"
      >
        <div
            class="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5"
        >
          <h3 class="text-base font-medium text-slate-700 dark:text-navy-100">
            Edit Pin
          </h3>
          <button
              data-close-modal
              class="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="scrollbar-sm overflow-y-auto px-4 py-4 sm:px-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda incidunt
          </p>
          <div class="mt-4 space-y-4">
            <label class="block">
              <span>Choose category :</span>
              <select
                  class="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
              >
                <option>Laravel</option>
                <option>Node JS</option>
                <option>Django</option>
                <option>Other</option>
              </select>
            </label>
            <label class="block">
              <span>Description:</span>
              <textarea
                  rows="4"
                  placeholder=" Enter Text"
                  class="form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              ></textarea>
            </label>
            <label class="block">
              <span>Website Address:</span>
              <input
                  class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="URL Address"
                  type="text"
              />
            </label>
            <label class="inline-flex items-center space-x-2">
              <input
                  class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent"
                  type="checkbox"
              />
              <span>Public pin</span>
            </label>
            <div class="space-x-2 text-right">
              <button
                  data-close-modal
                  class="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
              >
                Cancel
              </button>
              <button
                  data-close-modal
                  class="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
        id="modal6"
        class="modal modal-scale fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
    >
      <div class="modal-overlay absolute inset-0 bg-slate-900/60"></div>
      <div
          class="modal-content relative flex w-full max-w-2xl origin-bottom flex-col overflow-hidden rounded-lg bg-white pb-4 dark:bg-navy-700"
      >
        <div
            class="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5"
        >
          <h3 class="text-base font-medium text-slate-700 dark:text-navy-100">
            Users Status
          </h3>
          <button
              data-close-modal
              class="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="scrollbar-sm min-w-full overflow-auto">
          <table class="w-full text-left">
            <thead>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <th
                  class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
              >
                #
              </th>
              <th
                  class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
              >
                Name
              </th>
              <th
                  class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
              >
                Role
              </th>
              <th
                  class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
              >
                Status
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Cy Ganderton
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">Admin</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge space-x-2.5 rounded-full bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                >
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Online</span>
                </div>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Travis Fuller
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">Teacher</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge space-x-2.5 rounded-full bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                >
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Online</span>
                </div>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Konnor Guzman
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">Moderator</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge space-x-2.5 rounded-full bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                >
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Online</span>
                </div>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Alfredo Elliott
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">Admin</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge space-x-2.5 rounded-full bg-warning/10 text-warning dark:bg-warning/15"
                >
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Offline</span>
                </div>
              </td>
            </tr>
            <tr
                class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
            >
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">5</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                Derrick Simmons
              </td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">Teacher</td>
              <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                <div
                    class="badge space-x-2.5 rounded-full bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
                >
                  <div class="size-2 rounded-full bg-current"></div>
                  <span>Offline</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="text-center">
          <button
              data-close-modal
              class="btn mt-4 border border-primary/30 bg-primary/10 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>
