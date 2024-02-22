<script>
import Components from "@/views/main/components/Components.vue";

export default {
  extends: Components
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Steps
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Components</a
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
      <li>Steps</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Step -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Steps
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
      <div class="max-w-xl">
        <p>
          Steps can be used to show a list of steps in a process. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <div>
            <ol class="steps">
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  1
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 1</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  2
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 2</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  3
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 3</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  4
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 4</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;steps&quot;&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        1&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        2&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        3&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        4&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Primary Steps -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Primary Steps
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
      <div class="max-w-xl">
        <p>
          Steps can be used to show a list of steps in a process. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <div>
            <ol class="steps">
              <li class="step before:bg-primary dark:before:bg-accent">
                <div
                    class="step-header rounded-full bg-primary text-white dark:bg-accent"
                >
                  1
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 1</h3>
              </li>
              <li class="step before:bg-primary dark:before:bg-accent">
                <div
                    class="step-header rounded-full bg-primary text-white dark:bg-accent"
                >
                  2
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 2</h3>
              </li>
              <li class="step before:bg-primary dark:before:bg-accent">
                <div
                    class="step-header rounded-full bg-primary text-white dark:bg-accent"
                >
                  3
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 3</h3>
              </li>
              <li class="step before:bg-primary dark:before:bg-accent">
                <div
                    class="step-header rounded-full bg-primary text-white dark:bg-accent"
                >
                  4
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 4</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;steps&quot;&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-primary dark:before:bg-accent&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-primary text-white dark:bg-accent&quot;&#13;&#10;      &gt;&#13;&#10;        1&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-primary dark:before:bg-accent&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-primary text-white dark:bg-accent&quot;&#13;&#10;      &gt;&#13;&#10;        2&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-primary dark:before:bg-accent&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-primary text-white dark:bg-accent&quot;&#13;&#10;      &gt;&#13;&#10;        3&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-primary dark:before:bg-accent&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-primary text-white dark:bg-accent&quot;&#13;&#10;      &gt;&#13;&#10;        4&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- With Line Space -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          With Line Space
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
      <div class="max-w-xl">
        <p>
          Steps can be used to show a list of steps in a process. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <div>
            <ol class="steps line-space">
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  1
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 1</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  2
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 2</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  3
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 3</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  4
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 4</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;steps line-space&quot;&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        1&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        2&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        3&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        4&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Steps Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Steps Size
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
      <div class="max-w-xl">
        <p>
          Steps can be used to show a list of steps in a process. Check
          out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div>
            <ol class="steps [--size:1rem] [--line:1px]">
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                ></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 1
                </h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                ></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 2
                </h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                ></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 3
                </h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                ></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 4
                </h3>
              </li>
            </ol>
          </div>
          <div>
            <ol class="steps">
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  1
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 1</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  2
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 2</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  3
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 3</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  4
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 4</h3>
              </li>
            </ol>
          </div>
          <div>
            <ol class="steps [--size:2.75rem] [--line:.5rem]">
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  1
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 1</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  2
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 2</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  3
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 3</h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  4
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 4</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&gt;&#13;&#10;    &lt;ol class=&quot;steps [--size:1rem] [--line:1px]&quot;&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;    &lt;/ol&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&gt;&#13;&#10;    &lt;ol class=&quot;steps&quot;&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          1&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          2&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          3&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          4&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;    &lt;/ol&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div&gt;&#13;&#10;    &lt;ol class=&quot;steps [--size:2.75rem] [--line:.5rem]&quot;&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          1&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          2&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          3&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;      &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;        &gt;&#13;&#10;          4&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;      &lt;/li&gt;&#13;&#10;    &lt;/ol&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Vertical Steps -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Vertical Steps
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
      <div class="max-w-xl">
        <p>
          Steps can be used to show a list of steps in a process. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <div>
            <ol class="steps is-vertical">
              <li
                  class="step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  1
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 1</h3>
              </li>
              <li
                  class="step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  2
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 2</h3>
              </li>
              <li
                  class="step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  3
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 3</h3>
              </li>
              <li
                  class="step space-x-4 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  4
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 4</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;steps is-vertical&quot;&gt;&#13;&#10;    &lt;li class=&quot;step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        1&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        2&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        3&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step space-x-4 before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        4&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Vertical Steps With Line Space -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Vertical With Line Space
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
      <div class="max-w-xl">
        <p>
          Steps can be used to show a list of steps in a process. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <div>
            <ol class="steps is-vertical line-space">
              <li
                  class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  1
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 1</h3>
              </li>
              <li
                  class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  2
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 2</h3>
              </li>
              <li
                  class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  3
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 3</h3>
              </li>
              <li
                  class="step space-x-4 before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white"
                >
                  4
                </div>
                <h3 class="text-slate-600 dark:text-navy-100">Step 4</h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;steps is-vertical line-space&quot;&gt;&#13;&#10;    &lt;li&#13;&#10;      class=&quot;step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        1&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&#13;&#10;      class=&quot;step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        2&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&#13;&#10;      class=&quot;step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        3&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 3&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step space-x-4 before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white&quot;&#13;&#10;      &gt;&#13;&#10;        4&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-slate-600 dark:text-navy-100&quot;&gt;Step 4&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Colored Steps -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Colored Steps
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
      <div class="max-w-xl">
        <p>
          Steps can be used to show a list of steps in a process. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <div>
            <ol class="steps line-space [--line:1px] [--size:.75rem]">
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-primary dark:bg-accent"
                ></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 1
                </h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div
                    class="step-header rounded-full bg-secondary dark:bg-secondary-light"
                >
                        <span
                            class="inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80 dark:bg-secondary-light"
                        ></span>
                </div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 2
                </h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div class="step-header rounded-full bg-info"></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 2
                </h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div class="step-header rounded-full bg-error"></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 2
                </h3>
              </li>
              <li
                  class="step before:bg-slate-200 dark:before:bg-navy-500"
              >
                <div class="step-header rounded-full bg-warning"></div>
                <h3 class="text-xs+ text-slate-600 dark:text-navy-100">
                  Step 2
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;steps line-space [--size:.75rem] [--line:1px]&quot;&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div class=&quot;step-header rounded-full bg-primary dark:bg-accent&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 1&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;step-header rounded-full bg-secondary dark:bg-secondary-light&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;span&#13;&#10;          class=&quot;inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80 dark:bg-secondary-light&quot;&#13;&#10;        &gt;&lt;/span&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div class=&quot;step-header rounded-full bg-info&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div class=&quot;step-header rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;step before:bg-slate-200 dark:before:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div class=&quot;step-header rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;h3 class=&quot;text-xs+ text-slate-600 dark:text-navy-100&quot;&gt;Step 2&lt;/h3&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
