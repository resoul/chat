<script>
import { useThemeStore } from "@/components/theme/theme.js";

export default {
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full place-items-center px-[var(--margin-x)] pb-12')
  }
}
</script>

<template>
  <div class="py-5 text-center lg:py-6">
    <p class="text-sm uppercase">Are you new here?</p>
    <h3
        class="mt-1 text-xl font-semibold text-slate-600 dark:text-navy-100"
    >
      Welcome. Where do you like to Start?
    </h3>
  </div>
  <div
      class="grid max-w-4xl grid-cols-1 gap-4 divide-y divide-slate-150 bg-white shadow-soft dark:divide-navy-500 dark:bg-navy-700 dark:shadow-none sm:grid-cols-3 sm:gap-5 sm:divide-x sm:divide-y-0 lg:gap-6"
  >
    <div class="p-4 text-center sm:p-5">
      <div class="mt-8">
        <i
            class="fa fa-car text-6xl text-primary dark:text-accent-light"
        ></i>
      </div>
      <div class="mt-5">
        <h4
            class="text-xl font-semibold text-slate-600 dark:text-navy-100"
        >
          Basic
        </h4>
        <p>the starter choise</p>
      </div>
      <div class="mt-5">
              <span
                  class="text-4xl tracking-tight text-primary dark:text-accent-light"
              >$5</span
              >/month
      </div>
      <div class="mt-8 space-y-4 text-left">
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem ipsum</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem set</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem ipsum dolor.</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-warning/10 text-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="font-medium"
          >Lorem ipsum dolor sit amet, consectetur.</span
          >
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-warning/10 text-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="font-medium">Only lorem</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-warning/10 text-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="font-medium">Lorem ipsum dolor.</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-warning/10 text-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="font-medium">Lorem ipsum.</span>
        </div>
      </div>
      <div class="mt-8">
        <button
            class="btn rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
        >
          Choose Plan
        </button>
      </div>
    </div>
    <div class="relative p-4 text-center sm:p-5">
      <div class="absolute top-0 right-0 p-3">
        <div
            class="badge rounded-full bg-info/10 text-info dark:bg-info/15"
        >
          Recommended
        </div>
      </div>
      <div class="mt-8">
        <i
            class="fa fa-plane text-6xl text-primary dark:text-accent-light"
        ></i>
      </div>
      <div class="mt-5">
        <h4
            class="text-xl font-semibold text-slate-600 dark:text-navy-100"
        >
          Pro
        </h4>
        <p>the starter choise</p>
      </div>
      <div class="mt-5">
              <span
                  class="text-4xl tracking-tight text-primary dark:text-accent-light"
              >$15</span
              >/month
      </div>
      <div class="mt-8 space-y-4 text-left">
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem ipsum</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem set</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem ipsum dolor.</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"
          >Lorem ipsum dolor sit amet, consectetur.</span
          >
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium">Only lorem</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-warning/10 text-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="font-medium">Lorem ipsum dolor.</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-warning/10 text-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="font-medium">Lorem ipsum.</span>
        </div>
      </div>
      <div class="mt-8">
        <button
            class="btn rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
        >
          Choose Plan
        </button>
      </div>
    </div>
    <div class="p-4 text-center sm:p-5">
      <div class="mt-8">
        <i
            class="fa fa-rocket text-6xl text-primary dark:text-accent-light"
        ></i>
      </div>
      <div class="mt-5">
        <h4
            class="text-xl font-semibold text-slate-600 dark:text-navy-100"
        >
          Enterprice
        </h4>
        <p>the starter choise</p>
      </div>
      <div class="mt-5">
              <span
                  class="text-4xl tracking-tight text-primary dark:text-accent-light"
              >$25</span
              >/month
      </div>
      <div class="mt-8 space-y-4 text-left">
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem ipsum</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem set</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"> Lorem ipsum dolor.</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium"
          >Lorem ipsum dolor sit amet, consectetur.</span
          >
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium">Only lorem</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium">Lorem ipsum dolor.</span>
        </div>
        <div class="flex items-start space-x-3">
          <div
              class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5"
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
          <span class="font-medium">Lorem ipsum.</span>
        </div>
      </div>
      <div class="mt-8">
        <button
            class="btn rounded-full border border-slate-200 font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
        >
          Choose Plan
        </button>
      </div>
    </div>
  </div>
</template>