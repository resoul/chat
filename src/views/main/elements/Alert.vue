<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Alert",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Alert
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
      <li>Alert</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
    <!-- Basic Alert -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Alert
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
          The alert component is used to convey important information to
          the user through the use of contextual types, icons, and colors
        </p>
        <div class="mt-5 space-y-4">
          <div
              class="alert flex rounded-lg bg-slate-200 px-4 py-4 text-slate-600 dark:bg-navy-500 dark:text-navy-100 sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg bg-primary px-4 py-4 text-white dark:bg-accent sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg bg-secondary px-4 py-4 text-white sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg bg-info px-4 py-4 text-white sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg bg-success px-4 py-4 text-white sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg bg-warning px-4 py-4 text-white sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg bg-error px-4 py-4 text-white sm:px-5"
          >
            This is simple alert
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg bg-slate-200 px-4 py-4 text-slate-600 dark:bg-navy-500 dark:text-navy-100 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg bg-primary px-4 py-4 text-white dark:bg-accent sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;alert flex rounded-lg bg-secondary px-4 py-4 text-white sm:px-5&quot;&gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;alert flex rounded-lg bg-info px-4 py-4 text-white sm:px-5&quot;&gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;alert flex rounded-lg bg-success px-4 py-4 text-white sm:px-5&quot;&gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;alert flex rounded-lg bg-warning px-4 py-4 text-white sm:px-5&quot;&gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;alert flex rounded-lg bg-error px-4 py-4 text-white sm:px-5&quot;&gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outlined Alert -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outlined Alert
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
        <p>Alerts can be outlied. Check out code for detail of usage.</p>
        <div class="mt-5 space-y-4">
          <div
              class="alert flex rounded-lg border border-slate-300 px-4 py-4 text-slate-800 dark:border-navy-450 dark:text-navy-50 sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg border border-primary px-4 py-4 text-primary dark:border-accent dark:text-accent-light sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg border border-secondary px-4 py-4 text-secondary dark:border-secondary dark:text-secondary-light sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg border border-info px-4 py-4 text-info sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg border border-success px-4 py-4 text-success sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg border border-warning px-4 py-4 text-warning sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-lg border border-error px-4 py-4 text-error sm:px-5"
          >
            This is simple alert
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-slate-300 px-4 py-4 text-slate-800 dark:border-navy-450 dark:text-navy-50 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-primary px-4 py-4 text-primary dark:border-accent dark:text-accent-light sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-secondary px-4 py-4 text-secondary dark:border-secondary dark:text-secondary-light sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-info px-4 py-4 text-info sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-success px-4 py-4 text-success sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-warning px-4 py-4 text-warning sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-error px-4 py-4 text-error sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Soft Color Alert -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outlined Alert
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
          Alerts can have a soft colors. To do this, you should use some
          opacity. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div
              class="alert flex rounded-full bg-primary/10 py-4 px-4 text-primary dark:bg-accent-light/15 dark:text-accent-light sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-full bg-secondary/10 py-4 px-4 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-full bg-info/10 py-4 px-4 text-info dark:bg-info/15 sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-full bg-success/10 py-4 px-4 text-success dark:bg-success/15 sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-full bg-warning/10 py-4 px-4 text-warning dark:bg-warning/15 sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex rounded-full bg-error/10 py-4 px-4 text-error dark:bg-error/15 sm:px-5"
          >
            This is simple alert
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;alert flex rounded-full bg-primary/10 py-4 px-4 text-primary dark:bg-accent-light/15 dark:text-accent-light sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-full bg-secondary/10 py-4 px-4 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-full bg-info/10 py-4 px-4 text-info dark:bg-info/15 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-full bg-success/10 py-4 px-4 text-success dark:bg-success/15 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-full bg-warning/10 py-4 px-4 text-warning dark:bg-warning/15 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-full bg-error/10 py-4 px-4 text-error dark:bg-error/15 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Bordered Alert -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Bordered Alert
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
          Alerts can have a border. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div
              class="alert flex rounded-full border border-primary bg-primary/10 py-4 px-4 text-primary dark:border-accent dark:bg-accent-light/15 dark:text-accent-light sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex overflow-hidden rounded-lg bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
          >
            <div class="w-1.5 bg-secondary"></div>
            <div class="p-4">This is simple alert</div>
          </div>

          <div
              class="alert flex overflow-hidden rounded-lg border border-info text-info"
          >
            <div class="bg-info p-3 text-white">
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
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="px-4 py-3 sm:px-5">This is simple alert</div>
          </div>

          <div
              class="alert flex rounded-lg border border-success/30 bg-success/10 py-4 px-4 text-success sm:px-5"
          >
            This is simple alert
          </div>

          <div
              class="alert flex overflow-hidden rounded-lg bg-warning/10 text-warning dark:bg-warning/15"
          >
            <div class="flex flex-1 items-center space-x-3 p-4">
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
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div class="flex-1">This is simple alert</div>
            </div>

            <div class="w-1.5 bg-warning"></div>
          </div>

          <div
              class="alert flex space-x-2 rounded-lg border border-error px-4 py-4 text-error"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
              />
            </svg>
            <p>This is simple alert</p>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;alert flex rounded-full border border-primary bg-primary/10 py-4 px-4 text-primary dark:border-accent dark:bg-accent-light/15 dark:text-accent-light sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex overflow-hidden rounded-lg bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;w-1.5 bg-secondary&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;p-4&quot;&gt;This is simple alert&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex overflow-hidden rounded-lg border border-info text-info&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;bg-info p-3 text-white&quot;&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;px-4 py-3 sm:px-5&quot;&gt;This is simple alert&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex rounded-lg border border-success/30 bg-success/10 py-4 px-4 text-success sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    This is simple alert&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex overflow-hidden rounded-lg bg-warning/10 text-warning dark:bg-warning/15&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;flex flex-1 items-center space-x-3 p-4&quot;&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;      &lt;div class=&quot;flex-1&quot;&gt;This is simple alert&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;&#13;&#10;    &lt;div class=&quot;w-1.5 bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;alert flex space-x-2 rounded-lg border border-error px-4 py-4 text-error&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;p&gt;This is simple alert&lt;/p&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Dismissable Alert (Required js) -->
    <div class="card px-4 pb-4 sm:px-5 lg:col-span-2">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Dismissable Alert
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
          Alerts can be dismissable. Check out code for detail of usage.
        </p>

        <div class="mt-5 space-y-4">
          <div
              id="alert-dismissable-1"
              data-dismiss-class="opacity-0 transition-opacity duration-300"
              class="alert flex items-center justify-between overflow-hidden rounded-lg border border-info text-info"
          >
            <div class="flex">
              <div class="bg-info p-3 text-white">
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
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="px-4 py-3 sm:px-5">This is simple alert</div>
            </div>
            <div class="px-2">
              <button
                  data-remove-alert
                  class="btn size-7 rounded-full p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
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
                      d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
              id="alert-dismissable-2"
              data-dismiss-class="opacity-0 transition-opacity duration-300"
              class="alert flex items-center justify-between overflow-hidden rounded-lg bg-navy-900 py-4 px-4 text-slate-200 dark:text-navy-100 sm:px-5"
          >
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <div class="inline-flex" id="alert-dismissable-2-popper">
              <button
                  id="alert-dismissable-2-popper-ref"
                  class="btn -mr-1.5 size-7 shrink-0 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
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
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
              <div
                  class="popper-root"
                  id="alert-dismissable-2-popper-box"
              >
                <div
                    class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                >
                  <ul>
                    <li>
                      <a
                          data-remove-alert
                          href="javascript:void(0);"
                          class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                      >Remove</a
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
              id="alert-dismissable-3"
              data-dismiss-class="opacity-0 transition-opacity duration-300"
              class="alert flex flex-col items-center justify-between space-y-4 rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-800 dark:border-navy-450 dark:text-navy-50 sm:flex-row sm:space-y-0 sm:px-5"
          >
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button
                data-remove-alert
                class="btn space-x-2 rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span>REMIND ME LATER</span>
            </button>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    id=&quot;alert-dismissable-1&quot;&#13;&#10;    data-dismiss-class=&quot;opacity-0 transition-opacity duration-300&quot;&#13;&#10;    class=&quot;alert flex items-center justify-between overflow-hidden rounded-lg border border-info text-info&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;flex&quot;&gt;&#13;&#10;      &lt;div class=&quot;bg-info p-3 text-white&quot;&gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;px-4 py-3 sm:px-5&quot;&gt;This is simple alert&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;px-2&quot;&gt;&#13;&#10;      &lt;button&#13;&#10;        data-remove-alert&#13;&#10;        class=&quot;btn size-7 rounded-full p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M6 18L18 6M6 6l12 12&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/button&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    id=&quot;alert-dismissable-2&quot;&#13;&#10;    data-dismiss-class=&quot;opacity-0 transition-opacity duration-300&quot;&#13;&#10;    class=&quot;alert flex items-center justify-between overflow-hidden rounded-lg bg-navy-900 py-4 px-4 text-slate-200 dark:text-navy-100 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;p&gt;Lorem ipsum dolor sit amet consectetur.&lt;/p&gt;&#13;&#10;&#13;&#10;    &lt;div class=&quot;inline-flex&quot; id=&quot;alert-dismissable-2-popper&quot;&gt;&#13;&#10;      &lt;button&#13;&#10;        id=&quot;alert-dismissable-2-popper-ref&quot;&#13;&#10;        class=&quot;btn -mr-1.5 size-7 shrink-0 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/button&gt;&#13;&#10;      &lt;div class=&quot;popper-root&quot; id=&quot;alert-dismissable-2-popper-box&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;ul&gt;&#13;&#10;            &lt;li&gt;&#13;&#10;              &lt;a&#13;&#10;                data-remove-alert&#13;&#10;                href=&quot;javascript:void(0);&quot;&#13;&#10;                class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;                &gt;Remove&lt;/a&#13;&#10;              &gt;&#13;&#10;            &lt;/li&gt;&#13;&#10;            &lt;li&gt;&#13;&#10;              &lt;a&#13;&#10;                href=&quot;#&quot;&#13;&#10;                class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;                &gt;Another Action&lt;/a&#13;&#10;              &gt;&#13;&#10;            &lt;/li&gt;&#13;&#10;            &lt;li&gt;&#13;&#10;              &lt;a&#13;&#10;                href=&quot;#&quot;&#13;&#10;                class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;                &gt;Something else&lt;/a&#13;&#10;              &gt;&#13;&#10;            &lt;/li&gt;&#13;&#10;          &lt;/ul&gt;&#13;&#10;          &lt;div class=&quot;my-1 h-px bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;          &lt;ul&gt;&#13;&#10;            &lt;li&gt;&#13;&#10;              &lt;a&#13;&#10;                href=&quot;#&quot;&#13;&#10;                class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;                &gt;Separated Link&lt;/a&#13;&#10;              &gt;&#13;&#10;            &lt;/li&gt;&#13;&#10;          &lt;/ul&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    id=&quot;alert-dismissable-3&quot;&#13;&#10;    data-dismiss-class=&quot;opacity-0 transition-opacity duration-300&quot;&#13;&#10;    class=&quot;alert flex flex-col items-center justify-between space-y-4 rounded-lg border border-slate-300 px-4 py-3 text-center text-slate-800 dark:border-navy-450 dark:text-navy-50 sm:flex-row sm:space-y-0 sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;p&gt;Lorem ipsum dolor sit amet consectetur.&lt;/p&gt;&#13;&#10;    &lt;button&#13;&#10;      data-remove-alert&#13;&#10;      class=&quot;btn space-x-2 rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;1.5&quot;&#13;&#10;          d=&quot;M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;      &lt;span&gt;REMIND ME LATER&lt;/span&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    // Dismissable alert 1&#13;&#10;    const alert1 = document.querySelector(&quot;#alert-dismissable-1&quot;);&#13;&#10;&#13;&#10;    alert1&#13;&#10;      .querySelector(&quot;[data-remove-alert]&quot;)&#13;&#10;      .addEventListener(&quot;click&quot;, () =&gt; {&#13;&#10;        alert1.classList.add(...alert1.dataset.dismissClass.trim().split(&quot; &quot;));&#13;&#10;        setTimeout(() =&gt; alert1.remove(), 300);&#13;&#10;      });&#13;&#10;&#13;&#10;    // Dismissable alert 2&#13;&#10;    const alert2 = document.querySelector(&quot;#alert-dismissable-2&quot;);&#13;&#10;    const popperConfig = {&#13;&#10;      placement: &quot;bottom-end&quot;,&#13;&#10;    };&#13;&#10;&#13;&#10;    alert2&#13;&#10;      .querySelector(&quot;[data-remove-alert]&quot;)&#13;&#10;      .addEventListener(&quot;click&quot;, () =&gt; {&#13;&#10;        alert2.classList.add(...alert2.dataset.dismissClass.trim().split(&quot; &quot;));&#13;&#10;        setTimeout(() =&gt; alert2.remove(), 300);&#13;&#10;      });&#13;&#10;&#13;&#10;    new Popper(&#13;&#10;      &quot;#alert-dismissable-2-popper&quot;,&#13;&#10;      &quot;#alert-dismissable-2-popper-ref&quot;,&#13;&#10;      &quot;#alert-dismissable-2-popper-box&quot;,&#13;&#10;      popperConfig&#13;&#10;    );&#13;&#10;&#13;&#10;    // Dismissable alert 3&#13;&#10;    const alert3 = document.querySelector(&quot;#alert-dismissable-3&quot;);&#13;&#10;&#13;&#10;    alert3&#13;&#10;      .querySelector(&quot;[data-remove-alert]&quot;)&#13;&#10;      .addEventListener(&quot;click&quot;, () =&gt; {&#13;&#10;        alert3.classList.add(...alert3.dataset.dismissClass.trim().split(&quot; &quot;));&#13;&#10;        setTimeout(() =&gt; alert3.remove(), 300);&#13;&#10;      });&#13;&#10;  &lt;/script&gt;  &#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>