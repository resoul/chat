<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Progress",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Progress
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
      <li>Progress</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Progress -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Progress
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
          The Progress component displays a colored loading bar. Check out
          code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="w-4/12 rounded-full bg-slate-500 dark:bg-navy-400"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="w-5/12 rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div class="w-6/12 rounded-full bg-secondary"></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div class="w-7/12 rounded-full bg-info"></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div class="w-8/12 rounded-full bg-success"></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div class="w-9/12 rounded-full bg-warning"></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div class="w-10/12 rounded-full bg-error"></div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-4/12 rounded-full bg-slate-500 dark:bg-navy-400&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-5/12 rounded-full bg-primary dark:bg-accent&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-6/12 rounded-full bg-secondary&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-7/12 rounded-full bg-info&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-8/12 rounded-full bg-success&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-9/12 rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-10/12 rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Soft Progress -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Soft Color Progress
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
          Progress can have a soft colors. To do this, you should use some
          opacity. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="progress h-2 bg-primary/15 dark:bg-accent/25">
            <div
                class="w-5/12 rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
          <div
              class="progress h-2 bg-secondary/15 dark:bg-secondary-light/25"
          >
            <div class="w-6/12 rounded-full bg-secondary"></div>
          </div>
          <div class="progress h-2 bg-info/15 dark:bg-info/25">
            <div class="w-7/12 rounded-full bg-info"></div>
          </div>
          <div class="progress h-2 bg-success/15 dark:bg-success/25">
            <div class="w-8/12 rounded-full bg-success"></div>
          </div>
          <div class="progress h-2 bg-warning/15 dark:bg-warning/25">
            <div class="w-9/12 rounded-full bg-warning"></div>
          </div>
          <div class="progress h-2 bg-error/15 dark:bg-error/25">
            <div class="w-10/12 rounded-full bg-error"></div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;progress h-2 bg-primary/15 dark:bg-accent/25&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-5/12 rounded-full bg-primary dark:bg-accent&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-secondary/15 dark:bg-secondary-light/25&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-6/12 rounded-full bg-secondary&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-info/15 dark:bg-info/25&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-7/12 rounded-full bg-info&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-success/15 dark:bg-success/25&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-8/12 rounded-full bg-success&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-warning/15 dark:bg-warning/25&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-9/12 rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-error/15 dark:bg-error/25&quot;&gt;&#13;&#10;    &lt;div class=&quot;w-10/12 rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Progress size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Progress Size
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
          The Progress components can have various sizes. Check out code
          for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="w-5/12 rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="w-5/12 rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
          <div class="progress h-3 bg-slate-150 dark:bg-navy-500">
            <div
                class="w-5/12 rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
          <div class="progress h-4 bg-slate-150 dark:bg-navy-500">
            <div
                class="w-5/12 rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &#60;div class=&#34;progress h-1 bg-slate-150 dark:bg-navy-500&#34;&#62;&#13;&#10;    &#60;div&#13;&#10;      class=&#34;w-5/12 rounded-full bg-primary dark:bg-accent&#34;&#13;&#10;    &#62;&#60;/div&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div class=&#34;progress h-2 bg-slate-150 dark:bg-navy-500&#34;&#62;&#13;&#10;    &#60;div&#13;&#10;      class=&#34;w-5/12 rounded-full bg-primary dark:bg-accent&#34;&#13;&#10;    &#62;&#60;/div&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div class=&#34;progress h-3 bg-slate-150 dark:bg-navy-500&#34;&#62;&#13;&#10;    &#60;div&#13;&#10;      class=&#34;w-5/12 rounded-full bg-primary dark:bg-accent&#34;&#13;&#10;    &#62;&#60;/div&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;  &#60;div class=&#34;progress h-4 bg-slate-150 dark:bg-navy-500&#34;&#62;&#13;&#10;    &#60;div&#13;&#10;      class=&#34;w-5/12 rounded-full bg-primary dark:bg-accent&#34;&#13;&#10;    &#62;&#60;/div&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Active Progress -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Active Progress
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
          An indicating progress bar visually indicates the current level
          of progress of a task. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-active relative w-4/12 overflow-hidden rounded-full bg-slate-500 dark:bg-navy-400"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-active relative w-5/12 overflow-hidden rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-active relative w-6/12 overflow-hidden rounded-full bg-secondary"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-active relative w-7/12 overflow-hidden rounded-full bg-info"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-active relative w-8/12 overflow-hidden rounded-full bg-success"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-active relative w-9/12 overflow-hidden rounded-full bg-warning"
            ></div>
          </div>
          <div class="progress h-2 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-active relative w-10/12 overflow-hidden rounded-full bg-error"
            ></div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-active relative w-4/12 overflow-hidden rounded-full bg-slate-500 dark:bg-navy-400&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-active relative w-5/12 overflow-hidden rounded-full bg-primary dark:bg-accent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-active relative w-6/12 overflow-hidden rounded-full bg-secondary&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-active relative w-7/12 overflow-hidden rounded-full bg-info&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-active relative w-8/12 overflow-hidden rounded-full bg-success&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-active relative w-9/12 overflow-hidden rounded-full bg-warning&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-2 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-active relative w-10/12 overflow-hidden rounded-full bg-error&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Progress Indeterminate -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Progress Indeterminate
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
          You can use indeterminate mode for the progress bar when you do
          not know how long an operation will take. Check out code for
          detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-indeterminate relative w-4/12 rounded-full bg-slate-500 dark:bg-navy-400"
            ></div>
          </div>
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-indeterminate relative w-4/12 rounded-full bg-primary dark:bg-accent"
            ></div>
          </div>
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-indeterminate relative w-4/12 rounded-full bg-secondary"
            ></div>
          </div>
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-indeterminate relative w-4/12 rounded-full bg-info"
            ></div>
          </div>
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-indeterminate relative w-4/12 rounded-full bg-success"
            ></div>
          </div>
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-indeterminate relative w-4/12 rounded-full bg-warning"
            ></div>
          </div>
          <div class="progress h-1 bg-slate-150 dark:bg-navy-500">
            <div
                class="is-indeterminate relative w-4/12 rounded-full bg-error"
            ></div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;progress h-1 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-indeterminate relative w-4/12 rounded-full bg-slate-500 dark:bg-navy-400&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-1 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-indeterminate relative w-4/12 rounded-full bg-primary dark:bg-accent&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-1 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-indeterminate relative w-4/12 rounded-full bg-secondary&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-1 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;is-indeterminate relative w-4/12 rounded-full bg-info&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-1 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;is-indeterminate relative w-4/12 rounded-full bg-success&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-1 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;is-indeterminate relative w-4/12 rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;progress h-1 bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;is-indeterminate relative w-4/12 rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>
  </div>
</template>