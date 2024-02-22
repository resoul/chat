<script>
import Forms from "@/views/main/forms/Forms.vue";

export default {
  extends: Forms
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Range
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
      <li>Range</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Input Range -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Input Range
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
      <div class="max-w-xl">
        <p>
          Use our custom range inputs for consistent cross-browser styling
          and built-in customization. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
            <input
                class="form-range text-slate-500 dark:text-navy-300"
                type="range"
            />
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input class=&quot;form-range text-slate-500 dark:text-navy-300&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Colored Input Range -->
    <div class="card px-4 pb-6 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Colored Input Range
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
      <div class="max-w-xl">
        <p>
          Input Range Thumb can have different colors. Check out code for
          detail of usage.
        </p>
        <div class="mt-5 space-y-6">
          <label class="block">
            <input
                value="50"
                class="form-range text-primary dark:text-accent"
                type="range"
            />
          </label>
          <label class="block">
            <input
                value="50"
                class="form-range text-secondary dark:text-secondary-light"
                type="range"
            />
          </label>
          <label class="block">
            <input value="50" class="form-range text-info" type="range" />
          </label>
          <label class="block">
            <input
                value="50"
                class="form-range text-success"
                type="range"
            />
          </label>
          <label class="block">
            <input
                value="50"
                class="form-range text-warning"
                type="range"
            />
          </label>
          <label class="block">
            <input
                value="50"
                class="form-range text-error"
                type="range"
            />
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      value=&quot;50&quot;&#13;&#10;      class=&quot;form-range text-primary dark:text-accent&quot;&#13;&#10;      type=&quot;range&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      value=&quot;50&quot;&#13;&#10;      class=&quot;form-range text-secondary dark:text-secondary-light&quot;&#13;&#10;      type=&quot;range&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-info&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-success&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-warning&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input value=&quot;50&quot; class=&quot;form-range text-error&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Input Range Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Input Range Size
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
      <div class="max-w-xl">
        <p>
          Input Ranges can have various sizes. Check out code for detail
          of usage.
        </p>
        <div class="mt-5 space-y-6">
          <label class="block">
            <input
                class="form-range text-slate-500 [--range-track-h:3px] [--range-thumb-size:12px] dark:text-navy-300"
                type="range"
            />
          </label>
          <label class="block">
            <input
                class="form-range text-slate-500 dark:text-navy-300"
                type="range"
            />
          </label>
          <label class="block">
            <input
                class="form-range text-slate-500 [--range-track-h:8px] [--range-thumb-size:24px] dark:text-navy-300"
                type="range"
            />
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-range text-slate-500 [--range-track-h:3px] [--range-thumb-size:12px] dark:text-navy-300&quot;&#13;&#10;      type=&quot;range&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input class=&quot;form-range text-slate-500 dark:text-navy-300&quot; type=&quot;range&quot; /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-range text-slate-500 [--range-track-h:8px] [--range-thumb-size:24px] dark:text-navy-300&quot;&#13;&#10;      type=&quot;range&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>
  </div>
</template>
