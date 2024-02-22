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
      Form Radio
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
      <li>Form Radio</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Radio -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Radio
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
          Radio are generally used in radio groups collections of radio
          buttons describing a set of related options. Check out code for
          detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-slate-500 checked:bg-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:checked:bg-navy-400"
                name="basic"
                type="radio"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="basic"
                type="radio"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-400 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                name="basic"
                type="radio"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-info checked:bg-info hover:!border-info focus:!border-info dark:border-navy-400"
                name="basic"
                type="radio"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-success checked:bg-success hover:!border-success focus:!border-success dark:border-navy-400"
                name="basic"
                type="radio"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-warning checked:bg-warning hover:!border-warning focus:!border-warning dark:border-navy-400"
                name="basic"
                type="radio"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-error checked:bg-error hover:!border-error focus:!border-error dark:border-navy-400"
                name="basic"
                type="radio"
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
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-slate-500 checked:bg-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:checked:bg-navy-400&quot;&#13;&#10;      name=&quot;basic&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Default&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;basic&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Primary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-400 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light&quot;&#13;&#10;      name=&quot;basic&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Secondary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-info checked:bg-info hover:!border-info focus:!border-info dark:border-navy-400&quot;&#13;&#10;      name=&quot;basic&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Info&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-success checked:bg-success hover:!border-success focus:!border-success dark:border-navy-400&quot;&#13;&#10;      name=&quot;basic&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Success&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-warning checked:bg-warning hover:!border-warning focus:!border-warning dark:border-navy-400&quot;&#13;&#10;      name=&quot;basic&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Warning&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:!border-error checked:bg-error hover:!border-error focus:!border-error dark:border-navy-400&quot;&#13;&#10;      name=&quot;basic&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Error&lt;/p&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Filled Radio -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Filled Radio
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
          The radio component can be filled. Check out code for detail of
          usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-slate-500 checked:bg-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-500 dark:bg-navy-900 dark:checked:border-navy-400 dark:checked:bg-navy-400"
                name="basic_filled"
                type="radio"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="basic_filled"
                type="radio"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                name="basic_filled"
                type="radio"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-info checked:!bg-info hover:!border-info focus:!border-info dark:border-navy-500 dark:bg-navy-900"
                name="basic_filled"
                type="radio"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-success checked:!bg-success hover:!border-success focus:!border-success dark:border-navy-500 dark:bg-navy-900"
                name="basic_filled"
                type="radio"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-warning checked:!bg-warning hover:!border-warning focus:!border-warning dark:border-navy-500 dark:bg-navy-900"
                name="basic_filled"
                type="radio"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-error checked:!bg-error hover:!border-error focus:!border-error dark:border-navy-500 dark:bg-navy-900"
                name="basic_filled"
                type="radio"
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
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-slate-500 checked:bg-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-500 dark:bg-navy-900 dark:checked:border-navy-400 dark:checked:bg-navy-400&quot;&#13;&#10;      name=&quot;basic_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Default&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;basic_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Primary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light&quot;&#13;&#10;      name=&quot;basic_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Secondary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-info checked:!bg-info hover:!border-info focus:!border-info dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;basic_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Info&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-success checked:!bg-success hover:!border-success focus:!border-success dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;basic_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Success&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-warning checked:!bg-warning hover:!border-warning focus:!border-warning dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;basic_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Warning&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 bg-slate-100 checked:!border-error checked:!bg-error hover:!border-error focus:!border-error dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;basic_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Error&lt;/p&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outline Radio -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outline Radio
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
          The radio component can be outtlined. Check out code for detail
          of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:checked:border-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200"
                name="outline"
                type="radio"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                name="outline"
                type="radio"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 before:bg-secondary checked:border-secondary hover:border-secondary focus:border-secondary dark:border-navy-400 dark:before:bg-secondary-light dark:checked:border-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                name="outline"
                type="radio"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-info checked:!border-info hover:!border-info focus:!border-info dark:border-navy-400"
                name="outline"
                type="radio"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-success checked:!border-success hover:!border-success focus:!border-success dark:border-navy-400"
                name="outline"
                type="radio"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-warning checked:!border-warning hover:!border-warning focus:!border-warning dark:border-navy-400"
                name="outline"
                type="radio"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-error checked:!border-error hover:!border-error focus:!border-error dark:border-navy-400"
                name="outline"
                type="radio"
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
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:checked:border-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200&quot;&#13;&#10;      name=&quot;outline&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Default&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;outline&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Primary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 before:bg-secondary checked:border-secondary hover:border-secondary focus:border-secondary dark:border-navy-400 dark:before:bg-secondary-light dark:checked:border-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light&quot;&#13;&#10;      name=&quot;outline&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Secondary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-info checked:!border-info hover:!border-info focus:!border-info dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Info&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-success checked:!border-success hover:!border-success focus:!border-success dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Success&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-warning checked:!border-warning hover:!border-warning focus:!border-warning dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Warning&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 before:!bg-error checked:!border-error hover:!border-error focus:!border-error dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Error&lt;/p&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outline And Filled Radio -->
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
          The radio component can be outlined and filled. Check out code
          for detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-200 dark:checked:border-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200"
                name="outline_filled"
                type="radio"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                name="outline_filled"
                type="radio"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:bg-secondary checked:border-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-secondary-light dark:checked:border-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                name="outline_filled"
                type="radio"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-info checked:!border-info hover:!border-info focus:!border-info dark:border-navy-500 dark:bg-navy-900"
                name="outline_filled"
                type="radio"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-success checked:!border-success hover:!border-success focus:!border-success dark:border-navy-500 dark:bg-navy-900"
                name="outline_filled"
                type="radio"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-warning checked:!border-warning hover:!border-warning focus:!border-warning dark:border-navy-500 dark:bg-navy-900"
                name="outline_filled"
                type="radio"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-error checked:!border-error hover:!border-error focus:!border-error dark:border-navy-500 dark:bg-navy-900"
                name="outline_filled"
                type="radio"
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
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-200 dark:checked:border-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200&quot;&#13;&#10;      name=&quot;outline_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Default&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;outline_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Primary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:bg-secondary checked:border-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-secondary-light dark:checked:border-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light&quot;&#13;&#10;      name=&quot;outline_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Secondary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-info checked:!border-info hover:!border-info focus:!border-info dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;outline_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Info&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-success checked:!border-success hover:!border-success focus:!border-success dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;outline_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Success&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-warning checked:!border-warning hover:!border-warning focus:!border-warning dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;outline_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Warning&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-full border-slate-400/70 bg-slate-100 before:!bg-error checked:!border-error hover:!border-error focus:!border-error dark:border-navy-500 dark:bg-navy-900&quot;&#13;&#10;      name=&quot;outline_filled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Error&lt;/p&gt;&#13;&#10;  &lt;/label&gt;</code>
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
          The radio component can have a squircle shape. Check out code
          for detail of usage
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-radio is-outline size-5 rounded-md border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200"
                name="outline_squircle"
                type="radio"
            />
            <span>Default</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-md border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                name="outline_squircle"
                type="radio"
            />
            <span>Primary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-md border-slate-400/70 before:bg-secondary checked:border-secondary hover:border-secondary focus:border-secondary dark:border-navy-400 dark:before:bg-secondary-light dark:checked:border-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                name="outline_squircle"
                type="radio"
            />
            <span>Secondary</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-info checked:!border-info hover:!border-info focus:!border-info dark:border-navy-400"
                name="outline_squircle"
                type="radio"
            />
            <span>Info</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-success checked:!border-success hover:!border-success focus:!border-success dark:border-navy-400"
                name="outline_squircle"
                type="radio"
            />
            <span>Success</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-warning checked:!border-warning hover:!border-warning focus:!border-warning dark:border-navy-400"
                name="outline_squircle"
                type="radio"
            />
            <span>Warning</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-error checked:!border-error hover:!border-error focus:!border-error dark:border-navy-400"
                name="outline_squircle"
                type="radio"
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
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-md border-slate-400/70 before:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:before:bg-navy-200 dark:hover:border-navy-200 dark:focus:border-navy-200&quot;&#13;&#10;      name=&quot;outline_squircle&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Default&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-md border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;outline_squircle&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Primary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-md border-slate-400/70 before:bg-secondary checked:border-secondary hover:border-secondary focus:border-secondary dark:border-navy-400 dark:before:bg-secondary-light dark:checked:border-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light&quot;&#13;&#10;      name=&quot;outline_squircle&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Secondary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-info checked:!border-info hover:!border-info focus:!border-info dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline_squircle&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Info&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-success checked:!border-success hover:!border-success focus:!border-success dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline_squircle&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Success&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-warning checked:!border-warning hover:!border-warning focus:!border-warning dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline_squircle&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Warning&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-outline size-5 rounded-md border-slate-400/70 before:!bg-error checked:!border-error hover:!border-error focus:!border-error dark:border-navy-400&quot;&#13;&#10;      name=&quot;outline_squircle&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Error&lt;/p&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Disabled Radio-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Disabled Radio
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
          The radio have their own style when disabled. Check out code for
          detail of usage.
        </p>
        <div
            class="mt-5 grid grid-cols-2 place-items-start gap-6 sm:grid-cols-3"
        >
          <label class="inline-flex items-center space-x-2">
            <input
                disabled
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary disabled:pointer-events-none disabled:border-slate-300 disabled:opacity-60 dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent dark:disabled:border-navy-450"
                name="disabled"
                type="radio"
            />
            <span>Primary</span>
          </label>

          <label class="inline-flex items-center space-x-2">
            <input
                disabled
                checked
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary disabled:pointer-events-none disabled:border-slate-300 disabled:opacity-60 dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent dark:disabled:border-navy-450"
                name="disabled"
                type="radio"
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
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      disabled&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary disabled:pointer-events-none disabled:border-slate-300 disabled:opacity-60 dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent dark:disabled:border-navy-450&quot;&#13;&#10;      name=&quot;disabled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Primary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      disabled&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary disabled:pointer-events-none disabled:border-slate-300 disabled:opacity-60 dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent dark:disabled:border-navy-450&quot;&#13;&#10;      name=&quot;disabled&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;Primary&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Radio Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Radio Size
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
          The radio component can have various sizes. Check out code for
          detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap items-center">
          <label class="inline-flex items-center space-x-2">
            <input
                checked
                class="form-radio is-basic size-3 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="size"
                type="radio"
            />
            <span>1</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-3.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="size"
                type="radio"
            />
            <span>2</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="size"
                type="radio"
            />
            <span>3</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-4.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="size"
                type="radio"
            />
            <span>4</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="size"
                type="radio"
            />
            <span>5</span>
          </label>
          <label class="inline-flex items-center space-x-2">
            <input
                class="form-radio is-basic size-6 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                name="size"
                type="radio"
            />
            <span>6</span>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      checked&#13;&#10;      class=&quot;form-radio is-basic size-3 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;1&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-3.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;2&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;3&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-4.5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;4&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;5&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-radio is-basic size-6 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;      name=&quot;size&quot;&#13;&#10;      type=&quot;radio&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;p&gt;6&lt;/p&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>
  </div>
</template>
