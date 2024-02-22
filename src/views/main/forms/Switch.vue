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
      Form Switch
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
      <li>Form Switch</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Switch -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Switch
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The Switch component is used as an alternative for the checkbox.
          The option that the switch controls, as well as the state it's
          in, should be made clear from the corresponding inline label.
          Check out code for detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-secondary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-secondary-light dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-info checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-warning checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-error checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Error</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-secondary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-secondary-light dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Secondary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-info checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Info&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Success&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-warning checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-error checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Error&lt;/span&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Squircle Switch -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Squircle Switch
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The Switch component can have a squircle shape. Check out code
          for detail of usage.55
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-secondary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-secondary-light dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-info checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-warning checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-error checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Error</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-secondary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-secondary-light dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Secondary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-info checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Info&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Success&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-warning checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-lg bg-slate-300 before:rounded-md before:bg-slate-50 checked:!bg-error checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Error&lt;/span&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outline Switch -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outline Switch
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The Switch can be outlied. Check out code for detail of usage.
          Check out code for detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-navy-200 dark:checked:before:bg-navy-200"
                type="checkbox"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent"
                type="checkbox"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light"
                type="checkbox"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Error</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-navy-200 dark:checked:before:bg-navy-200&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Secondary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Info&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Success&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-transparent before:rounded-full before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Error&lt;/span&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outline Filled -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outline Filled
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The Switch component can be filled. Check out code for detail of
          usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400 dark:checked:border-navy-200 dark:checked:before:bg-navy-200"
                type="checkbox"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400 dark:checked:border-accent dark:checked:before:bg-accent"
                type="checkbox"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light"
                type="checkbox"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400"
                type="checkbox"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400"
                type="checkbox"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400"
                type="checkbox"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400"
                type="checkbox"
            />
            <span>Error</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400 dark:checked:border-navy-200 dark:checked:before:bg-navy-200&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400 dark:checked:border-accent dark:checked:before:bg-accent&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Secondary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Info&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Success&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Error&lt;/span&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outline Squircle -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outline Squircle
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The outline Switch component can have a squircle shape. Check
          out code for detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-navy-200 dark:checked:before:bg-navy-200"
                type="checkbox"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent"
                type="checkbox"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light"
                type="checkbox"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-400 dark:before:bg-navy-300"
                type="checkbox"
            />
            <span>Error</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:border-slate-500 checked:before:bg-slate-500 dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-navy-200 dark:checked:before:bg-navy-200&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:border-primary checked:before:bg-primary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-accent dark:checked:before:bg-accent&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:border-secondary checked:before:bg-secondary dark:border-navy-400 dark:before:bg-navy-300 dark:checked:border-secondary-light dark:checked:before:bg-secondary-light&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Secondary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-info checked:before:!bg-info dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Info&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Success&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-warning checked:before:!bg-warning dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Warning&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch is-outline h-5 w-10 rounded-lg border border-slate-400/70 bg-transparent before:rounded-md before:bg-slate-300 checked:!border-error checked:before:!bg-error dark:border-navy-400 dark:before:bg-navy-300&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Error&lt;/span&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Disabled Switch -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Disabled Switch
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The Switch have their own style when disabled. Check out code
          for detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                disabled
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                disabled
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Primary</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      disabled&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      disabled&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Primary&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Switch Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Switch Size
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The Switch component can have various sizes. Check out code for
          detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-3.5 w-7 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span class="text-xs">Small</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>Normal</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-switch h-7 w-14 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span class="text-base">Large</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-3.5 w-7 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span class=&quot;text-xs&quot;&gt;Small&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;Normal&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-switch h-7 w-14 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span class=&quot;text-base&quot;&gt;Large&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Thumb Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Thumb Size
        </h2>
        <label class="inline-flex items-center space-x-2">
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
          The Switch component can have various thumb sizes. Check out
          code for detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:6px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>label</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:5px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>label</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:4px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>label</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:3px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>label</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
                type="checkbox"
            />
            <span>label</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:6px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;label&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:5px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;label&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:4px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;label&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 [--thumb-border:3px] before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;label&lt;/span&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white&quot;&#13;&#10;      type=&quot;checkbox&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;span&gt;label&lt;/span&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>
  </div>
</template>
