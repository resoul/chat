<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Divider",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Divider
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
      <li>Divider</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Divider Vertical -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Divider Vertical
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
      <div class="flex flex-col">
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
        <div class="my-4 flex items-center space-x-3">
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>OR</p>
          <div class="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex flex-col&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;my-4 flex items-center space-x-3&quot;&gt;&#13;&#10;      &lt;div class=&quot;h-px flex-1 bg-slate-200 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;p&gt;OR&lt;/p&gt;&#13;&#10;      &lt;div class=&quot;h-px flex-1 bg-slate-200 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Vertical Divider with no text  -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Without Text
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
      <div class="flex flex-col">
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
        <div class="my-4 h-px bg-slate-200 dark:bg-navy-500"></div>
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex flex-col&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;my-4 h-px  bg-slate-200 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Divider Horizontal -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Divider Horizontal
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
      <div class="flex">
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
        <div class="mx-4 flex flex-col items-center space-y-3">
          <div class="w-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>OR</p>
          <div class="w-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;mx-4 flex flex-col items-center space-y-3&quot;&gt;&#13;&#10;      &lt;div class=&quot;w-px flex-1 bg-slate-200 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;p&gt;OR&lt;/p&gt;&#13;&#10;      &lt;div class=&quot;w-px flex-1 bg-slate-200 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Horizontal Divider with no text -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Without Text
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
      <div class="flex">
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
        <div class="mx-4 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
        <div
            class="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
        >
          <p class="text-xl">Content</p>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;mx-4 my-1 w-px bg-slate-200 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;p class=&quot;text-xl&quot;&gt;Content&lt;/p&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>
  </div>
</template>