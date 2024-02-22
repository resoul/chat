<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Spinner",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Spinner
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Elements</a
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
      <li>Spinner</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Spinner -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Spinner
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div class="max-w-2xl">
        <p>
          A Spinner component is used to show the user a timely process is
          currently taking place. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-slate-500 border-r-transparent dark:border-navy-300 dark:border-r-transparent"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent dark:border-accent dark:border-r-transparent"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-secondary border-r-transparent"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-info border-r-transparent"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-success border-r-transparent"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-warning border-r-transparent"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-error border-r-transparent"
          ></div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-slate-500 border-r-transparent dark:border-navy-300 dark:border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent dark:border-accent dark:border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-secondary border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-info border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-success border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-warning border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-error border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Elastic Timing Function -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Elastic Timing Function
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div class="max-w-2xl">
        <p>
          A Timing function describes how an animation will progress,
          allowing it to change speed during its course. Check out code
          for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-slate-500 border-r-transparent dark:border-navy-300 dark:border-r-transparent"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent dark:border-accent dark:border-r-transparent"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-secondary border-r-transparent"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-info border-r-transparent"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-success border-r-transparent"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-warning border-r-transparent"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-error border-r-transparent"
          ></div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-slate-500 border-r-transparent dark:border-navy-300 dark:border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent dark:border-accent dark:border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-secondary border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-info border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-success border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-warning border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-error border-r-transparent&quot;&#13;&#10;  &gt;&lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Soft Color Spinner -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Soft Color Spinner
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div class="max-w-2xl">
        <p>
          Spinner can have a soft colors. To do this, you should use some
          opacity. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-secondary/30 border-r-secondary"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-info/30 border-r-info"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-success/30 border-r-success"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-warning/30 border-r-warning"
          ></div>
          <div
              class="spinner size-7 animate-spin rounded-full border-[3px] border-error/30 border-r-error"
          ></div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-secondary/30 border-r-secondary&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-info/30 border-r-info&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-success/30 border-r-success&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-warning/30 border-r-warning&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-error/30 border-r-error&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Soft Elsatic Spinner -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Soft Elsatic Spinner
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div class="max-w-2xl">
        <p>
          A Timing function describes how an animation will progress,
          allowing it to change speed during its course. Check out code
          for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-secondary/30 border-r-secondary"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-info/30 border-r-info"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-success/30 border-r-success"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-warning/30 border-r-warning"
          ></div>
          <div
              class="spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-error/30 border-r-error"
          ></div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-secondary/30 border-r-secondary&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-info/30 border-r-info&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-success/30 border-r-success&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-warning/30 border-r-warning&quot;&#13;&#10;  &gt;&lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin rounded-full border-[3px] border-error/30 border-r-error&quot;&#13;&#10;  &gt;&lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Grow Spinner -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Grow Spinner
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div class="max-w-2xl">
        <p>
          If you don’t fancy a border spinner, switch to the grow spinner.
          Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div class="spinner is-grow relative size-7">
                  <span
                      class="absolute inline-block h-full w-full rounded-full bg-slate-500 opacity-75 dark:bg-navy-300"
                  ></span>
            <span
                class="absolute inline-block h-full w-full rounded-full bg-slate-500 opacity-75 dark:bg-navy-300"
            ></span>
          </div>
          <div class="spinner is-grow relative size-7">
                  <span
                      class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
                  ></span>
            <span
                class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
            ></span>
          </div>
          <div class="spinner is-grow relative size-7">
                  <span
                      class="absolute inline-block h-full w-full rounded-full bg-secondary opacity-75"
                  ></span>
            <span
                class="absolute inline-block h-full w-full rounded-full bg-secondary opacity-75"
            ></span>
          </div>
          <div class="spinner is-grow relative size-7">
                  <span
                      class="absolute inline-block h-full w-full rounded-full bg-info opacity-75"
                  ></span>
            <span
                class="absolute inline-block h-full w-full rounded-full bg-info opacity-75"
            ></span>
          </div>
          <div class="spinner is-grow relative size-7">
                  <span
                      class="absolute inline-block h-full w-full rounded-full bg-success opacity-75"
                  ></span>
            <span
                class="absolute inline-block h-full w-full rounded-full bg-success opacity-75"
            ></span>
          </div>
          <div class="spinner is-grow relative size-7">
                  <span
                      class="absolute inline-block h-full w-full rounded-full bg-warning opacity-75"
                  ></span>
            <span
                class="absolute inline-block h-full w-full rounded-full bg-warning opacity-75"
            ></span>
          </div>
          <div class="spinner is-grow relative size-7">
                  <span
                      class="absolute inline-block h-full w-full rounded-full bg-error opacity-75"
                  ></span>
            <span
                class="absolute inline-block h-full w-full rounded-full bg-error opacity-75"
            ></span>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-slate-500 opacity-75 dark:bg-navy-300&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-slate-500 opacity-75 dark:bg-navy-300&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-secondary opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-secondary opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-info opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-info opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-success opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-success opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-warning opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-warning opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-error opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;absolute inline-block h-full w-full rounded-full bg-error opacity-75&quot;&#13;&#10;    &gt;&lt;/span&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- SVG Spinner -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          SVG Spinner
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div class="max-w-2xl">
        <p>
          You can also use SVG shapes for spinners. Check out code for
          detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="spinner size-7 animate-spin text-slate-500 dark:text-navy-300"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
              class="spinner size-7 animate-spin text-primary dark:text-accent"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
              class="spinner size-7 animate-spin text-secondary dark:text-secondary-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="spinner size-7 animate-spin text-info">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="spinner size-7 animate-spin text-success">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="spinner size-7 animate-spin text-warning">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="spinner size-7 animate-spin text-error">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;spinner size-7 animate-spin text-slate-500 dark:text-navy-300&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner size-7 animate-spin text-primary dark:text-accent&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner size-7 animate-spin text-secondary dark:text-secondary-light&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner size-7 animate-spin text-info&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner size-7 animate-spin text-success&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner size-7 animate-spin text-warning&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner size-7 animate-spin text-error&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- SVG Spinner Elastic -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          SVG Spinner Elastic
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div class="max-w-2xl">
        <p>
          A Timing function describes how an animation will progress,
          allowing it to change speed during its course. Check out code
          for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="spinner is-elastic size-7 animate-spin text-slate-500 dark:text-navy-300"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
              class="spinner is-elastic size-7 animate-spin text-primary dark:text-accent"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
              class="spinner is-elastic size-7 animate-spin text-secondary dark:text-secondary-light"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="spinner is-elastic size-7 animate-spin text-info">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
              class="spinner is-elastic size-7 animate-spin text-success"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
              class="spinner is-elastic size-7 animate-spin text-warning"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="spinner is-elastic size-7 animate-spin text-error">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
                fill="none"
                viewBox="0 0 28 28"
            >
              <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin text-slate-500 dark:text-navy-300&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin text-primary dark:text-accent&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;spinner is-elastic size-7 animate-spin text-secondary dark:text-secondary-light&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-elastic size-7 animate-spin text-info&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-elastic size-7 animate-spin text-success&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-elastic size-7 animate-spin text-warning&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;spinner is-elastic size-7 animate-spin text-error&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-full w-full&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 28 28&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Spinner Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Spinner Size
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              onchange="helpers.toggleCode(event)"
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>

      <div>
        <p class="max-w-2xl">
          A Spinner component is used to show the user a timely process is
          currently taking place. Check out code for detail of usage.
        </p>
        <div class="inline-space flex flex-wrap">
          <!-- Basic Spinner -->
          <div class="inline-space mt-5 flex flex-wrap">
            <div
                class="spinner size-5 animate-spin rounded-full border-2 border-primary border-r-transparent dark:border-accent dark:border-r-transparent"
            ></div>
            <div
                class="spinner size-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent dark:border-accent dark:border-r-transparent"
            ></div>
            <div
                class="spinner size-10 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent"
            ></div>
            <div
                class="spinner size-12 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent"
            ></div>
            <div
                class="spinner size-16 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent"
            ></div>
          </div>

          <!-- Soft Color Spinner -->
          <div class="inline-space mt-5 flex flex-wrap">
            <div
                class="spinner size-5 animate-spin rounded-full border-2 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"
            ></div>
            <div
                class="spinner size-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"
            ></div>
            <div
                class="spinner size-10 animate-spin rounded-full border-4 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"
            ></div>
            <div
                class="spinner size-12 animate-spin rounded-full border-4 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"
            ></div>
            <div
                class="spinner size-16 animate-spin rounded-full border-4 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent"
            ></div>
          </div>

          <!-- Grow Spineer -->
          <div class="inline-space mt-5 flex flex-wrap">
            <div class="spinner is-grow relative size-5">
                    <span
                        class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
                    ></span>
              <span
                  class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
              ></span>
            </div>
            <div class="spinner is-grow relative size-7">
                    <span
                        class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
                    ></span>
              <span
                  class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
              ></span>
            </div>
            <div class="spinner is-grow relative size-10">
                    <span
                        class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
                    ></span>
              <span
                  class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
              ></span>
            </div>
            <div class="spinner is-grow relative size-12">
                    <span
                        class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
                    ></span>
              <span
                  class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
              ></span>
            </div>
            <div class="spinner is-grow relative size-16">
                    <span
                        class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
                    ></span>
              <span
                  class="absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;!-- Basic Spinner --&gt;&#13;&#10;  &lt;div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-5 animate-spin rounded-full border-2 border-primary border-r-transparent dark:border-accent dark:border-r-transparent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-primary border-r-transparent dark:border-accent dark:border-r-transparent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-10 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-12 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-16 animate-spin rounded-full border-4 border-primary border-r-transparent dark:border-accent dark:border-r-transparent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Soft Color Spinner --&gt;&#13;&#10;  &lt;div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-5 animate-spin rounded-full border-2 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-7 animate-spin rounded-full border-[3px] border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-10 animate-spin rounded-full border-4 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-12 animate-spin rounded-full border-4 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;spinner size-16 animate-spin rounded-full border-4 border-primary/30 border-r-primary dark:border-accent/30 dark:border-r-accent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Grow Spinner --&gt;&#13;&#10;  &lt;div&gt;&#13;&#10;    &lt;div class=&quot;spinner is-grow relative size-5&quot;&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;spinner is-grow relative size-7&quot;&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;spinner is-grow relative size-10&quot;&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;spinner is-grow relative size-12&quot;&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;spinner is-grow relative size-16&quot;&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;absolute inline-block h-full w-full rounded-full bg-primary opacity-75 dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>
  </div>
</template>