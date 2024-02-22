<script>
import Forms from "@/views/main/forms/Forms.vue";

export default {
  name: "InputText",
  extends: Forms
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Input Text
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
      <li>Input Text</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Input Text -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Input Text
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
          The input element with a type attribute whose value is "text"
          represents a one-line plain text edit control for the input
          element’s value. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
            <input
                class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Label Text -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Label Text
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
          The label represents a caption for an item in a user interface.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
            <span>Choose Username:</span>
            <input
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                  <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Choose Username:&lt;/span&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
                </pre>
      </div>
    </div>

    <!-- Helper Text -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Helper Text
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
          Helper text conveys additional guidance about the input field,
          such as how it will be used. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
            <input
                class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >This is a help text</span
          >
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                  <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;span class=&quot;text-tiny+ text-slate-400 dark:text-navy-300&quot;&#13;&#10;    &gt;This is a help text&lt;/span&#13;&#10;  &gt;</code>
                </pre>
      </div>
    </div>

    <!-- Rounded Input -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Rounded Input
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
          Input text can have a rounded shape. To do this, you should use
          the
          <code class="inline-code">rounded-full</code> utility. Check out
          code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
            <input
                class="form-input w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                  <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
                </pre>
      </div>
    </div>

    <!-- Filled Input -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Filled Input
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
        <p>Inputs can be filled. Check out code for detail of usage.</p>
        <div class="mt-5">
          <label class="block">
            <input
                class="form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="Username"
                type="text"
            />
          </label>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Input Size-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Input Size
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
          Input text can have various sizes. Check out code for detail of
          usage.
        </p>
        <div class="mt-5 space-y-4">
          <label class="block">
            <input
                class="form-input h-8 w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
          <label class="block">
            <input
                class="form-input w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
          <label class="block">
            <input
                class="form-input h-12 w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 text-base placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input h-8 w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 text-xs+ placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input h-12 w-full rounded-full border border-slate-300 bg-transparent px-4 py-2 text-base placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Username&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Input Dataset -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Input Dataset
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
          A datalist with pre-defined options (connected to an
          <code class="inline-code">&lt;input&gt;</code> element): Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
            <input
                class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Choose browser"
                type="text"
                list="browsers"
            />
            <datalist id="browsers">
              <option value="Google Chrome"></option>
              <option value="Edge"></option>
              <option value="Firefox"></option>
              <option value="Safari"></option>
              <option value="Opera"></option>
            </datalist>
          </label>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Choose browser&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;      list=&quot;browsers&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;datalist id=&quot;browsers&quot;&gt;&#13;&#10;      &lt;option value=&quot;Google Chrome&quot;&gt;&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;Edge&quot;&gt;&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;Firefox&quot;&gt;&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;Safari&quot;&gt;&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;Opera&quot;&gt;&lt;/option&gt;&#13;&#10;    &lt;/datalist&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Disabled Text Input -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Disabled Text Input
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
          Disabled text input have their own style when disabled. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
            <input
                disabled
                class="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600"
                placeholder="Disabled"
                type="text"
            />
          </label>
          <span class="text-tiny+ text-slate-400 dark:text-navy-300"
          >This is a disabled input text</span
          >
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&gt;&#13;&#10;    &lt;label class=&quot;block&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        disabled&#13;&#10;        class=&quot;form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600&quot;&#13;&#10;        placeholder=&quot;Disabled&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;    &lt;span class=&quot;text-tiny+ text-slate-400 dark:text-navy-300&quot;&#13;&#10;      &gt;This is a disabled input text&lt;/span&#13;&#10;    &gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Input Validation -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Input Validation
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
          You can validate the input text value using any validation
          libraries. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div>
            <label class="block">
              <input
                  class="form-input w-full rounded-lg border border-success bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                  placeholder="Username"
                  type="text"
                  value="Some Value"
              />
            </label>
            <span class="text-tiny+ text-success">Username is valid</span>
          </div>
          <div>
            <label class="block">
              <input
                  class="form-input w-full rounded-lg border border-error bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                  placeholder="Username"
                  type="text"
                  value="Some Value"
              />
            </label>
            <span class="text-tiny+ text-error">Username is invalid</span>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&gt;&#13;&#10;    &lt;label class=&quot;block&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        class=&quot;form-input w-full rounded-lg border border-success bg-transparent px-3 py-2 placeholder:text-slate-400/70&quot;&#13;&#10;        placeholder=&quot;Username&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;        value=&quot;Some Value&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;    &lt;span class=&quot;text-tiny+ text-success&quot;&gt;Username is valid&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&gt;&#13;&#10;    &lt;label class=&quot;block&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        class=&quot;form-input w-full rounded-lg border border-error bg-transparent px-3 py-2 placeholder:text-slate-400/70&quot;&#13;&#10;        placeholder=&quot;Username&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;        value=&quot;Some Value&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;    &lt;span class=&quot;text-tiny+ text-error&quot;&gt;Username is invalid&lt;/span&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>
  </div>
</template>