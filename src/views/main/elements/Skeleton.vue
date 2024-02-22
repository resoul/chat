<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Skeleton",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Skeleton
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
      <li>Skeleton</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Skeleton -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Skeleton
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
          Display a placeholder preview of your content before the data
          gets loaded to reduce load-time frustration. Check out code for
          detail of usage.
        </p>
        <div class="mt-5 max-w-md">
          <div
              class="flex flex-col border border-slate-150 dark:border-navy-500"
          >
            <div class="flex space-x-5 px-5 py-4">
              <div
                  class="skeleton animate-wave size-16 rounded-full bg-slate-150 dark:bg-navy-500"
              ></div>
              <div class="flex flex-1 flex-col justify-between py-2">
                <div
                    class="skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500"
                ></div>
                <div
                    class="skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500"
                ></div>
              </div>
            </div>
            <div
                class="skeleton animate-wave h-48 w-full bg-slate-150 dark:bg-navy-500"
            ></div>
            <div class="w-full px-6 py-4">
              <div
                  class="skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500"
              ></div>
              <div
                  class="skeleton animate-wave mt-4 h-3 w-8/12 rounded bg-slate-150 dark:bg-navy-500"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex flex-col border border-slate-150 dark:border-navy-500&quot;&gt;&#13;&#10;    &lt;div class=&quot;flex space-x-5 px-5 py-4&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave size-16 rounded-full bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;flex flex-1 flex-col justify-between py-2&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;skeleton animate-wave h-48 w-full bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;w-full px-6 py-4&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave h-3 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave mt-4 h-3 w-8/12 rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Post Skeleton -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Post Skeleton
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
          Display a placeholder preview of your content before the data
          gets loaded to reduce load-time frustration. Check out code for
          detail of usage.
        </p>
        <div class="mt-5 max-w-md">
          <div class="flex flex-col">
            <div
                class="skeleton animate-wave h-48 w-full rounded-lg bg-slate-150 dark:bg-navy-500"
            ></div>
            <div class="flex space-x-5 py-4">
              <div
                  class="skeleton animate-wave size-16 rounded-full bg-slate-150 dark:bg-navy-500"
              ></div>
              <div class="flex flex-1 flex-col justify-between py-2">
                <div
                    class="skeleton animate-wave h-3 w-10/12 rounded bg-slate-150 dark:bg-navy-500"
                ></div>
                <div
                    class="skeleton animate-wave h-6 w-full rounded bg-slate-150 dark:bg-navy-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex flex-col&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;skeleton animate-wave h-48 w-full rounded-lg bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;flex space-x-5 py-4&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave size-16 rounded-full bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;flex flex-1 flex-col justify-between py-2&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;skeleton animate-wave h-3 w-10/12 rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;skeleton animate-wave h-6 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Post Skeleton 2-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Post Skeleton
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
          Display a placeholder preview of your content before the data
          gets loaded to reduce load-time frustration. Check out code for
          detail of usage.
        </p>
        <div class="mt-5 max-w-md">
          <div
              class="flex flex-col space-y-4 border border-slate-150 dark:border-navy-500"
          >
            <div class="px-4 pt-4">
              <div
                  class="skeleton animate-wave h-8 w-10/12 rounded-full bg-slate-150 dark:bg-navy-500"
              ></div>
            </div>
            <div
                class="skeleton animate-wave h-48 w-full bg-slate-150 dark:bg-navy-500"
            ></div>
            <div
                class="flex flex-1 flex-col justify-between space-y-4 p-4"
            >
              <div
                  class="skeleton animate-wave h-4 w-9/12 rounded bg-slate-150 dark:bg-navy-500"
              ></div>
              <div
                  class="skeleton animate-wave h-4 w-6/12 rounded bg-slate-150 dark:bg-navy-500"
              ></div>
              <div
                  class="skeleton animate-wave h-4 w-full rounded bg-slate-150 dark:bg-navy-500"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;flex flex-col space-y-4 border border-slate-150 dark:border-navy-500&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;px-4 pt-4&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave h-8 w-10/12 rounded-full bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;skeleton animate-wave h-48 w-full bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;flex flex-1 flex-col justify-between space-y-4 p-4&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave h-4 w-9/12 rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave h-4 w-6/12 rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;skeleton animate-wave h-4 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Pulse Skeleton -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Pulse Skeleton
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
          You can also use the
          <code class="inline-code">animate-pulse</code> to fade in and
          out skeleton. Check out code for detail of usage.
        </p>
        <div class="mt-5 max-w-md">
          <div
              class="flex animate-pulse flex-col border border-slate-150 dark:border-navy-500"
          >
            <div class="flex space-x-5 px-5 py-4">
              <div
                  class="size-16 rounded-full bg-slate-150 dark:bg-navy-500"
              ></div>
              <div class="flex flex-1 flex-col justify-between py-2">
                <div
                    class="h-3 w-full rounded bg-slate-150 dark:bg-navy-500"
                ></div>
                <div
                    class="h-3 w-full rounded bg-slate-150 dark:bg-navy-500"
                ></div>
              </div>
            </div>
            <div class="h-48 w-full bg-slate-150 dark:bg-navy-500"></div>
            <div class="w-full px-6 py-4">
              <div
                  class="h-3 w-full rounded bg-slate-150 dark:bg-navy-500"
              ></div>
              <div
                  class="mt-4 h-3 w-8/12 rounded bg-slate-150 dark:bg-navy-500"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;flex animate-pulse flex-col border border-slate-150 dark:border-navy-500&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;flex space-x-5 px-5 py-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;size-16 rounded-full bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;flex flex-1 flex-col justify-between py-2&quot;&gt;&#13;&#10;        &lt;div class=&quot;h-3 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;        &lt;div class=&quot;h-3 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;h-48 w-full bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;w-full px-6 py-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;h-3 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;mt-4 h-3 w-8/12 rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Pulse Skeleton Post-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Pulse Skeleton
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
          You can also use the
          <code class="inline-code">animate-pulse</code> to fade in and
          out skeleton. Check out code for detail of usage.
        </p>
        <div class="mt-5 max-w-md">
          <div class="flex animate-pulse flex-col">
            <div
                class="h-48 w-full rounded-lg bg-slate-150 dark:bg-navy-500"
            ></div>
            <div class="flex space-x-5 py-4">
              <div
                  class="size-16 rounded-full bg-slate-150 dark:bg-navy-500"
              ></div>
              <div class="flex flex-1 flex-col justify-between py-2">
                <div
                    class="h-3 w-10/12 rounded bg-slate-150 dark:bg-navy-500"
                ></div>
                <div
                    class="h-6 w-full rounded bg-slate-150 dark:bg-navy-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex animate-pulse flex-col&quot;&gt;&#13;&#10;    &lt;div class=&quot;h-48 w-full rounded-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;flex space-x-5 py-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;size-16 rounded-full bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;flex flex-1 flex-col justify-between py-2&quot;&gt;&#13;&#10;        &lt;div class=&quot;h-3 w-10/12 rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;        &lt;div class=&quot;h-6 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Pulse Skeleton Post-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Pulse Skeleton
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
          You can also use the
          <code class="inline-code">animate-pulse</code> to fade in and
          out skeleton. Check out code for detail of usage.
        </p>
        <div class="mt-5 max-w-md">
          <div
              class="flex animate-pulse flex-col space-y-4 border border-slate-150 dark:border-navy-500"
          >
            <div class="px-4 pt-4">
              <div
                  class="h-8 w-10/12 rounded-full bg-slate-150 dark:bg-navy-500"
              ></div>
            </div>
            <div class="h-48 w-full bg-slate-150 dark:bg-navy-500"></div>
            <div
                class="flex flex-1 flex-col justify-between space-y-4 p-4"
            >
              <div
                  class="h-4 w-9/12 rounded bg-slate-150 dark:bg-navy-500"
              ></div>
              <div
                  class="h-4 w-6/12 rounded bg-slate-150 dark:bg-navy-500"
              ></div>
              <div
                  class="h-4 w-full rounded bg-slate-150 dark:bg-navy-500"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;flex animate-pulse flex-col space-y-4 border border-slate-150 dark:border-navy-500&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;px-4 pt-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;h-8 w-10/12 rounded-full bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;h-48 w-full bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;flex flex-1 flex-col justify-between space-y-4 p-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;h-4 w-9/12 rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;h-4 w-6/12 rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;h-4 w-full rounded bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>
  </div>
</template>