<script>
import Forms from "@/views/main/forms/Forms.vue";

export default {
  name: "Layout",
  extends: Forms
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Form Layout 1
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Forms</a
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
      <li>Form Layout 1</li>
    </ul>
  </div>

  <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
    <div class="sm:order-last sm:col-span-4">
      <div class="sticky top-24 mt-3">
        <ol class="steps is-vertical line-space">
          <li class="step pb-8 before:bg-primary dark:before:bg-accent">
            <div
                class="step-header rounded-full bg-primary text-white dark:bg-accent"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="ml-4 text-slate-700 dark:text-navy-100">
              Create Account
            </h3>
          </li>
          <li class="step pb-8 before:bg-primary dark:before:bg-accent">
            <div
                class="step-header rounded-full bg-primary text-white dark:bg-accent"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="ml-4 text-slate-700 dark:text-navy-100">
              Select Service
            </h3>
          </li>
          <li
              class="step pb-8 before:bg-slate-200 dark:before:bg-navy-500"
          >
            <div
                class="step-header rounded-full bg-primary text-white dark:bg-accent"
            >
              3
            </div>
            <h3 class="ml-4 text-slate-700 dark:text-navy-100">
              Address
            </h3>
          </li>
          <li
              class="step pb-8 before:bg-slate-200 dark:before:bg-navy-500"
          >
            <div
                class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
            >
              4
            </div>
            <h3 class="ml-4 text-slate-700 dark:text-navy-100">Submit</h3>
          </li>
        </ol>
      </div>
    </div>
    <div class="col-span-12 sm:col-span-8">
      <div class="card p-4 sm:p-5">
        <p
            class="text-base font-medium text-slate-700 dark:text-navy-100"
        >
          Shipping Address
        </p>
        <div class="mt-4 space-y-4">
          <label class="block">
            <span>Company name</span>
            <span class="relative mt-1.5 flex">
                    <input
                        class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Your Company"
                        type="text"
                    />
                    <span
                        class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                    >
                      <i class="fa-regular fa-building text-base"></i>
                    </span>
                  </span>
          </label>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label class="block">
              <span>Client name</span>
              <span class="relative mt-1.5 flex">
                      <input
                          class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Your Name"
                          type="text"
                      />
                      <span
                          class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                      >
                        <i class="far fa-user text-base"></i>
                      </span>
                    </span>
            </label>
            <label class="block">
              <span>Phone number</span>
              <span class="relative mt-1.5 flex">
                      <input
                          class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="(999) 999-9999"
                          type="text"
                      />
                      <span
                          class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                      >
                        <i class="fa fa-phone"></i>
                      </span>
                    </span>
            </label>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <label class="block sm:col-span-8">
              <span>Email Address</span>
              <div class="relative mt-1.5 flex">
                <input
                    class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Email address"
                    type="text"
                />
                <span
                    class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                        <i class="fa-regular fa-envelope text-base"></i>
                      </span>
              </div>
            </label>
            <label class="block sm:col-span-4">
              <span>Pincode</span>
              <div class="relative mt-1.5 flex">
                <input
                    class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Pincode"
                    type="text"
                />
                <span
                    class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                        <i class="fa-solid fa-map-pin text-base"></i>
                      </span>
              </div>
            </label>
          </div>
          <label class="block">
            <span>Address</span>
            <textarea
                rows="4"
                placeholder="Your Address (Area and Street)"
                class="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            ></textarea>
          </label>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label class="block">
              <span>City</span>
              <span class="relative mt-1.5 flex">
                      <input
                          class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Your City/Town"
                          type="text"
                      />
                      <span
                          class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                      >
                        <i class="fa-solid fa-city text-base"></i>
                      </span>
                    </span>
            </label>
            <label class="block">
              <span>State</span>
              <span class="relative mt-1.5 flex">
                      <input
                          class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Your State"
                          type="text"
                      />
                      <span
                          class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                      >
                        <i class="fa-solid fa-flag"></i>
                      </span>
                    </span>
            </label>
          </div>

          <div>
            <label class="block pt-4">
              <span>Billing Address</span>
              <textarea
                  rows="4"
                  placeholder="Enter billing address"
                  class="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              ></textarea>
            </label>
          </div>
          <div class="flex justify-end space-x-2">
            <button
                class="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                />
              </svg>
              <span>Prev</span>
            </button>
            <button
                class="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              <span>Next</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>