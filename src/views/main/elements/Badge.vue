<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Badge",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Badge
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
      <li>Badge</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic badge -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Badge
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
          Badges are used to inform user of the status of specific data.
          Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <div
              class="badge bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
          >
            Default
          </div>
          <div class="badge bg-primary text-white dark:bg-accent">
            Primary
          </div>
          <div class="badge bg-secondary text-white">Secondary</div>
          <div class="badge bg-info text-white">Info</div>
          <div class="badge bg-success text-white">Success</div>
          <div class="badge bg-warning text-white">Warning</div>
          <div class="badge bg-error text-white">Error</div>
          <div class="badge bg-navy-700 text-white dark:bg-navy-900">
            Dark
          </div>
          <div class="badge bg-slate-150 text-slate-800">Light</div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;badge bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-primary text-white dark:bg-accent&quot;&gt;Primary&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-secondary text-white&quot;&gt;Secondary&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-info text-white&quot;&gt;Info&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-success text-white&quot;&gt;Success&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-warning text-white&quot;&gt;Warning&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-error text-white&quot;&gt;Error&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-navy-700 text-white dark:bg-navy-900&quot;&gt;Dark&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-slate-150 text-slate-800&quot;&gt;Light&lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Rounded badge -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Rounded Badge
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
          Badges can have a rounded shape. To do this, you should use the
          <code class="inline-code">rounded-full</code> utility Check out
          code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <div
              class="badge rounded-full bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
          >
            Default
          </div>
          <div
              class="badge rounded-full bg-primary text-white dark:bg-accent"
          >
            Primary
          </div>
          <div class="badge rounded-full bg-secondary text-white">
            Secondary
          </div>
          <div class="badge rounded-full bg-info text-white">Info</div>
          <div class="badge rounded-full bg-success text-white">
            Success
          </div>
          <div class="badge rounded-full bg-warning text-white">
            Warning
          </div>
          <div class="badge rounded-full bg-error text-white">Error</div>
          <div
              class="badge rounded-full bg-navy-700 text-white dark:bg-navy-900"
          >
            Dark
          </div>
          <div class="badge rounded-full bg-slate-150 text-slate-800">
            Light
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;badge rounded-full bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-primary text-white dark:bg-accent&quot;&gt;&#13;&#10;    Primary&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-secondary text-white&quot;&gt;Secondary&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-info text-white&quot;&gt;Info&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-success text-white&quot;&gt;Success&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-warning text-white&quot;&gt;Warning&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-error text-white&quot;&gt;Error&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-navy-700 text-white dark:bg-navy-900&quot;&gt;&#13;&#10;    Dark&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-slate-150 text-slate-800&quot;&gt;Light&lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Glow badge -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Glow Badge
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
          Badges can be glow. To do this, you should use colored shadows.
          Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <div
              class="badge bg-slate-150 text-slate-800 shadow-soft shadow-slate-200/50 dark:bg-navy-500 dark:text-navy-100 dark:shadow-navy-450/50"
          >
            Default
          </div>
          <div
              class="badge bg-primary text-white shadow-soft shadow-primary/50 dark:bg-accent dark:shadow-accent/50"
          >
            Primary
          </div>
          <div
              class="badge bg-secondary text-white shadow-soft shadow-secondary/50"
          >
            Secondary
          </div>
          <div
              class="badge bg-info text-white shadow-soft shadow-info/50"
          >
            Info
          </div>
          <div
              class="badge bg-success text-white shadow-soft shadow-success/50"
          >
            Success
          </div>
          <div
              class="badge bg-warning text-white shadow-soft shadow-warning/50"
          >
            Warning
          </div>
          <div
              class="badge bg-error text-white shadow-soft shadow-error/50"
          >
            Error
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;badge bg-slate-150 text-slate-800 shadow-soft shadow-slate-200/50 dark:bg-navy-500 dark:text-navy-100 dark:shadow-navy-450/50&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;badge bg-primary text-white shadow-soft shadow-primary/50 dark:bg-accent dark:shadow-accent/50&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-secondary text-white shadow-soft shadow-secondary/50&quot;&gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-info text-white shadow-soft shadow-info/50&quot;&gt;Info&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-success text-white shadow-soft shadow-success/50&quot;&gt;&#13;&#10;    Success&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-warning text-white shadow-soft shadow-warning/50&quot;&gt;&#13;&#10;    Warning&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-error text-white shadow-soft shadow-error/50&quot;&gt;Error&lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Soft badge -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Soft Color Badge
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
          Badges can have a soft colors. To do this, you should use some
          opacity. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <div
              class="badge bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            Primary
          </div>
          <div
              class="badge bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
          >
            Secondary
          </div>
          <div class="badge bg-info/10 text-info dark:bg-info/15">
            Info
          </div>
          <div
              class="badge bg-success/10 text-success dark:bg-success/15"
          >
            Success
          </div>
          <div
              class="badge bg-warning/10 text-warning dark:bg-warning/15"
          >
            Warning
          </div>
          <div class="badge bg-error/10 text-error dark:bg-error/15">
            Error
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;badge bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;badge bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-info/10 text-info dark:bg-info/15&quot;&gt;Info&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-success/10 text-success dark:bg-success/15&quot;&gt;Success&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-warning/10 text-warning dark:bg-warning/15&quot;&gt;Warning&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-error/10 text-error dark:bg-error/15&quot;&gt;Error&lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Outlined Badges -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outlined Badge
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
          Badges can be outlied. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <div
              class="badge rounded-full border border-slate-300 text-slate-800 dark:border-navy-450 dark:text-navy-50"
          >
            Default
          </div>
          <div
              class="badge rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
          >
            Primary
          </div>
          <div
              class="badge rounded-full border border-secondary text-secondary dark:border-secondary-light dark:text-secondary-light"
          >
            Secondary
          </div>
          <div class="badge rounded-full border border-info text-info">
            Info
          </div>
          <div
              class="badge rounded-full border border-success text-success"
          >
            Success
          </div>
          <div
              class="badge rounded-full border border-warning text-warning"
          >
            Warning
          </div>
          <div class="badge rounded-full border border-error text-error">
            Error
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;badge rounded-full border border-slate-300 text-slate-800 dark:border-navy-450 dark:text-navy-50&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;badge rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;badge rounded-full border border-secondary text-secondary dark:border-secondary-light dark:text-secondary-light&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full border border-info text-info&quot;&gt;Info&lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full border border-success text-success&quot;&gt;&#13;&#10;    Success&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full border border-warning text-warning&quot;&gt;&#13;&#10;    Warning&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full border border-error text-error&quot;&gt;Error&lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!--  Badge With Dots-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Badge With Dots
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
          Badges can be a dot attached to it. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5">
          <div
              class="badge space-x-2.5 text-slate-800 dark:text-navy-100"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Default</span>
          </div>
          <div
              class="badge space-x-2.5 text-primary dark:text-accent-light"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Primary</span>
          </div>
          <div
              class="badge space-x-2.5 text-secondary dark:text-secondary-light"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Primary</span>
          </div>
          <div class="badge space-x-2.5 text-info">
            <div class="size-2 rounded-full bg-current"></div>
            <span>Info</span>
          </div>
          <div class="badge space-x-2.5 text-success">
            <div class="size-2 rounded-full bg-current"></div>
            <span>Success</span>
          </div>
          <div class="badge space-x-2.5 text-warning">
            <div class="size-2 rounded-full bg-current"></div>
            <span>Warning</span>
          </div>
          <div class="badge space-x-2.5 text-error">
            <div class="size-2 rounded-full bg-current"></div>
            <span>Error</span>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;badge space-x-2.5 text-slate-800 dark:text-navy-100&quot;&gt;&#13;&#10;    &lt;div class=&quot;size-2 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2.5 text-primary dark:text-accent-light&quot;&gt;&#13;&#10;    &lt;div class=&quot;size-2 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2.5 text-secondary dark:text-secondary-light&quot;&gt;&#13;&#10;    &lt;div class=&quot;size-2 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2.5 text-info&quot;&gt;&#13;&#10;    &lt;div class=&quot;size-2 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;span&gt;Info&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2.5 text-success&quot;&gt;&#13;&#10;    &lt;div class=&quot;size-2 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;span&gt;Success&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2.5 text-warning&quot;&gt;&#13;&#10;    &lt;div class=&quot;size-2 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2.5 text-error&quot;&gt;&#13;&#10;    &lt;div class=&quot;size-2 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;span&gt;Error&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Soft Color Badge With Dots-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Badge With Dots
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
          Badges can have a soft colors and a dot attached to it. Check
          out code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <div
              class="badge space-x-2.5 rounded-full bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Primary</span>
          </div>
          <div
              class="badge space-x-2.5 rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Primary</span>
          </div>
          <div
              class="badge space-x-2.5 rounded-full bg-info/10 text-info dark:bg-info/15"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Info</span>
          </div>
          <div
              class="badge space-x-2.5 rounded-full bg-success/10 text-success dark:bg-success/15"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Success</span>
          </div>
          <div
              class="badge space-x-2.5 rounded-full bg-warning/10 text-warning dark:bg-warning/15"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Warning</span>
          </div>
          <div
              class="badge space-x-2.5 rounded-full bg-error/10 text-error dark:bg-error/15"
          >
            <div class="size-2 rounded-full bg-current"></div>
            <span>Error</span>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &#60;div&#13;&#10;    class=&#34;badge space-x-2.5 rounded-full bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light&#34;&#13;&#10;  &#62;&#13;&#10;    &#60;div class=&#34;size-2 rounded-full bg-current&#34;&#62;&#60;/div&#62;&#13;&#10;    &#60;span&#62;Primary&#60;/span&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div&#13;&#10;    class=&#34;badge space-x-2.5 rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light&#34;&#13;&#10;  &#62;&#13;&#10;    &#60;div class=&#34;size-2 rounded-full bg-current&#34;&#62;&#60;/div&#62;&#13;&#10;    &#60;span&#62;Primary&#60;/span&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div&#13;&#10;    class=&#34;badge space-x-2.5 rounded-full bg-info/10 text-info dark:bg-info/15&#34;&#13;&#10;  &#62;&#13;&#10;    &#60;div class=&#34;size-2 rounded-full bg-current&#34;&#62;&#60;/div&#62;&#13;&#10;    &#60;span&#62;Info&#60;/span&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div&#13;&#10;    class=&#34;badge space-x-2.5 rounded-full bg-success/10 text-success dark:bg-success/15&#34;&#13;&#10;  &#62;&#13;&#10;    &#60;div class=&#34;size-2 rounded-full bg-current&#34;&#62;&#60;/div&#62;&#13;&#10;    &#60;span&#62;Success&#60;/span&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div&#13;&#10;    class=&#34;badge space-x-2.5 rounded-full bg-warning/10 text-warning dark:bg-warning/15&#34;&#13;&#10;  &#62;&#13;&#10;    &#60;div class=&#34;size-2 rounded-full bg-current&#34;&#62;&#60;/div&#62;&#13;&#10;    &#60;span&#62;Warning&#60;/span&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div&#13;&#10;    class=&#34;badge space-x-2.5 rounded-full bg-error/10 text-error dark:bg-error/15&#34;&#13;&#10;  &#62;&#13;&#10;    &#60;div class=&#34;size-2 rounded-full bg-current&#34;&#62;&#60;/div&#62;&#13;&#10;    &#60;span&#62;Error&#60;/span&#62;&#13;&#10;  &#60;/div&#62;</code>
              </pre>
      </div>
    </div>

    <!-- Badge With Icon -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Badge With Icon
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
          Badges can have an icon. Badges components work well with
          FontAwesome and Heroicon Icons. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="badge space-x-2 bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
            <span>Default</span>
          </div>
          <div
              class="badge space-x-2 bg-primary text-white dark:bg-accent"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span>Primary</span>
          </div>
          <div class="badge space-x-2 bg-secondary text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
            <span>Secondary</span>
          </div>
          <div class="badge rounded-full bg-info text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
              />
            </svg>
          </div>
          <div class="badge bg-success text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
              class="badge space-x-2 bg-warning text-white shadow-soft shadow-warning/50"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
              />
            </svg>
            <span>Warning</span>
          </div>
          <div class="badge space-x-2 bg-error text-white">
            <span>Remove</span>
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
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;badge space-x-2 bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-4&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      &gt;&lt;/path&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2 bg-primary text-white dark:bg-accent&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-4&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        d=&quot;M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z&quot;&#13;&#10;      &gt;&lt;/path&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2 bg-secondary text-white&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-4&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      &gt;&lt;/path&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt;Secondary&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge rounded-full bg-info text-white&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-4&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        d=&quot;M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z&quot;&#13;&#10;      &gt;&lt;/path&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge bg-success text-white&quot;&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-4&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      &gt;&lt;/path&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;badge space-x-2 bg-warning text-white shadow-soft shadow-warning/50&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;h-4 w-5&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        fill-rule=&quot;evenodd&quot;&#13;&#10;        d=&quot;M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z&quot;&#13;&#10;        clip-rule=&quot;evenodd&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;badge space-x-2 bg-error text-white&quot;&gt;&#13;&#10;    &lt;span&gt;Remove&lt;/span&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-4&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M6 18L18 6M6 6l12 12&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>
  </div>
</template>