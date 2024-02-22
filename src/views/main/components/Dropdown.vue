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
      Dropdown
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
      <li>Dropdown</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Dropdown -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Dropdown
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
          Dropdowns are lightweight context menus for housing navigation
          and actions. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap items-end">
          <div id="dropdown-wrapper1" class="inline-flex">
            <button
                class="btn popper-ref space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&.is-active_svg]:rotate-180"
            >
              <span>Dropdown</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Action</a
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
          <div id="dropdown-wrapper2" class="inline-flex">
            <button
                class="btn popper-ref space-x-2 rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&.is-active_svg]:rotate-180"
            >
              <span>Dropdown</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Action</a
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
          <div id="dropdown-wrapper3" class="inline-flex">
            <button
                class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 [&.is-active_svg]:rotate-180"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>

            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Action</a
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
          <div id="dropdown-wrapper4" class="inline-flex">
            <button
                class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 [&.is-active_svg]:rotate-180"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>

            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Action</a
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
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
            <code class="language-html">
  &lt;!-- Dropdown Example 1 --&gt;&#13;&#10;  &lt;div id=&quot;dropdown-wrapper1&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn popper-ref space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;span&gt;Dropdown&lt;/span&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4 transition-transform duration-200&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M19 9l-7 7-7-7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Another Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;        &lt;div class=&quot;my-1 h-px bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Separated Link&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Dropdown Example 2 --&gt;&#13;&#10;  &lt;div id=&quot;dropdown-wrapper2&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn popper-ref space-x-2 rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;span&gt;Dropdown&lt;/span&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4 transition-transform duration-200&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M19 9l-7 7-7-7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Another Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;        &lt;div class=&quot;my-1 h-px bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Separated Link&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Dropdown Example 3 --&gt;&#13;&#10;  &lt;div id=&quot;dropdown-wrapper3&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Another Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;        &lt;div class=&quot;my-1 h-px bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Separated Link&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Dropdown Example 4 --&gt;&#13;&#10;  &lt;div id=&quot;dropdown-wrapper4&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Another Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;        &lt;div class=&quot;my-1 h-px bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Separated Link&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;bottom-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 4],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    new Popper(&quot;#dropdown-wrapper1&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;    new Popper(&quot;#dropdown-wrapper2&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;    new Popper(&quot;#dropdown-wrapper3&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;    new Popper(&quot;#dropdown-wrapper4&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;
            </code>
              </pre>
      </div>
    </div>

    <!-- Primary Actions -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Primary Actions
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
          Dropdowns are lightweight context menus for housing navigation
          and actions. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="dropdown-wrapper5" class="inline-flex">
            <button
                class="popper-ref btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 [&.is-active_svg]:rotate-180"
            >
              <span>Dropdown</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent"
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent"
                    >Another Action</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent"
                    >Something Else</a
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
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent"
                    >Separated Link</a
                    >
                  </li>
                </ul>
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
  &lt;div id=&quot;dropdown-wrapper5&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;span&gt;Dropdown&lt;/span&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4 transition-transform duration-200&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M19 9l-7 7-7-7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent&quot;&#13;&#10;              &gt;Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent&quot;&#13;&#10;              &gt;Another Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent&quot;&#13;&#10;              &gt;Something Else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;        &lt;div class=&quot;my-1 h-px bg-slate-150 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-primary hover:text-white focus:bg-primary focus:text-white dark:hover:bg-accent dark:focus:bg-accent&quot;&#13;&#10;              &gt;Separated Link&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;bottom-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 4],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    new Popper(&quot;#dropdown-wrapper5&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;&#13;&#10;            </code>
          </pre>
      </div>
    </div>

    <!-- Dropdown Icons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Dropdown Icons
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
          Dropdowns are lightweight context menus for housing navigation
          and actions. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="dropdown-wrapper6" class="inline-flex">
            <button
                class="popper-ref btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&.is-active_svg]:rotate-180"
            >
              <span>Dropdown</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="mt-px size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span> View</span></a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      <span> Edit</span></a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span> Update</span></a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1.5"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <span> Delete item</span></a
                    >
                  </li>
                </ul>
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
  &lt;div id=&quot;dropdown-wrapper6&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;span&gt;Dropdown&lt;/span&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4 transition-transform duration-200&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M19 9l-7 7-7-7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;mt-px size-4.5&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;                stroke-width=&quot;1.5&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot;&#13;&#10;                /&gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  d=&quot;M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;              &lt;span&gt; View&lt;/span&gt;&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;size-4.5&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;                stroke-width=&quot;1.5&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  d=&quot;M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;              &lt;span&gt; Edit&lt;/span&gt;&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;size-4.5&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;                stroke-width=&quot;1.5&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  d=&quot;M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;              &lt;span&gt; Update&lt;/span&gt;&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;size-4.5&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;                stroke-width=&quot;1.5&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  d=&quot;M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;              &lt;span&gt; Delete item&lt;/span&gt;&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;bottom-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 4],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;    &#13;&#10;    new Popper(&quot;#dropdown-wrapper6&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;&#13;&#10;            </code>
          </pre>
      </div>
    </div>

    <!-- Scrolled Dropdown -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Scrolled Dropdown
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
          Dropdowns are lightweight context menus for housing navigation
          and actions. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="dropdown-wrapper7" class="inline-flex">
            <button
                class="popper-ref btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&.is-active_svg]:rotate-180"
            >
              <span>Dropdown</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box h-36 overflow-y-auto rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-600 dark:bg-navy-700"
              >
                <ul>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Action</a
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
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
                    >
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >Something else</a
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
  &lt;div id=&quot;dropdown-wrapper7&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;span&gt;Dropdown&lt;/span&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4 transition-transform duration-200&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M19 9l-7 7-7-7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box h-36 overflow-y-auto rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;ul&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Another Action&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100&quot;&#13;&#10;              &gt;Something else&lt;/a&#13;&#10;            &gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;bottom-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 4],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    new Popper(&quot;#dropdown-wrapper7&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;&#13;&#10;            </code>
          </pre>
      </div>
    </div>

    <!-- HTML Content Dropdown -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          HTML Content
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
          Dropdowns are lightweight context menus for housing navigation
          and actions. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="dropdown-wrapper8" class="inline-flex">
            <button
                class="popper-ref btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&.is-active_svg]:rotate-180"
            >
              <span>Dropdown</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div class="popper-root">
              <div
                  class="popper-box w-72 rounded-md border border-slate-150 bg-white dark:border-navy-600 dark:bg-navy-700"
              >
                <h3
                    class="px-4 py-3 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                >
                  Only Selected People
                </h3>
                <label class="relative flex">
                  <input
                      type="text"
                      class="form-input peer w-full border-y border-slate-150 bg-transparent px-4 py-2 pl-9 text-xs+ placeholder:text-slate-400/70 dark:border-navy-600"
                      placeholder="Type username..."
                  />
                  <span
                      class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                  >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="size-4.5 transition-colors duration-200"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                          >
                            <path
                                d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                            />
                          </svg>
                        </span>
                </label>
                <ul class="my-2">
                  <li>
                    <a
                        href="#"
                        class="flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    >
                      <div class="avatar size-10">
                        <img
                            class="rounded-full"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <div>
                        <p
                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                        >
                          Simon Tods
                        </p>
                        <p
                            class="text-xs text-slate-500 dark:text-navy-300"
                        >
                          Web Developer
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    >
                      <div class="avatar size-10">
                        <div
                            class="is-initial rounded-full border border-success/30 bg-success/10 uppercase text-success"
                        >
                          jd
                        </div>
                      </div>

                      <div>
                        <p
                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                        >
                          John Doe
                        </p>
                        <p
                            class="text-xs text-slate-500 dark:text-navy-300"
                        >
                          Web Developer
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    >
                      <div class="avatar size-10">
                        <div
                            class="is-initial rounded-full bg-warning uppercase text-white"
                        >
                          KG
                        </div>
                      </div>
                      <div>
                        <p
                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                        >
                          Konnor Guzman
                        </p>
                        <p
                            class="text-xs text-slate-500 dark:text-navy-300"
                        >
                          Frontend Developer
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    >
                      <div class="avatar size-10">
                        <img
                            class="rounded-full"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <div>
                        <p
                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                        >
                          Samantha Shelton
                        </p>
                        <p
                            class="text-xs text-slate-500 dark:text-navy-300"
                        >
                          Web Developer
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        class="flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    >
                      <div class="avatar size-10">
                        <img
                            class="rounded-full"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <div>
                        <p
                            class="text-slate-700 line-clamp-1 dark:text-navy-100"
                        >
                          Derrick Simmons
                        </p>
                        <p
                            class="text-xs text-slate-500 dark:text-navy-300"
                        >
                          UI/UX Designer
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
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
  &lt;div id=&quot;dropdown-wrapper8&quot; class=&quot;inline-flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 [&amp;.is-active_svg]:rotate-180&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;span&gt;Dropdown&lt;/span&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4 transition-transform duration-200&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          d=&quot;M19 9l-7 7-7-7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;popper-box w-72 rounded-md border border-slate-150 bg-white dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;h3&#13;&#10;          class=&quot;px-4 py-3 font-medium tracking-wide text-slate-700 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          Only Selected People&#13;&#10;        &lt;/h3&gt;&#13;&#10;        &lt;label class=&quot;relative flex&quot;&gt;&#13;&#10;          &lt;input&#13;&#10;            type=&quot;text&quot;&#13;&#10;            class=&quot;form-input peer w-full border-y border-slate-150 bg-transparent px-4 py-2 pl-9 text-xs+ placeholder:text-slate-400/70 dark:border-navy-600&quot;&#13;&#10;            placeholder=&quot;Type username...&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;span&#13;&#10;            class=&quot;pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-4.5 transition-colors duration-200&quot;&#13;&#10;              fill=&quot;currentColor&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                d=&quot;M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/span&gt;&#13;&#10;        &lt;/label&gt;&#13;&#10;        &lt;ul class=&quot;my-2&quot;&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;              &lt;div&gt;&#13;&#10;                &lt;p class=&quot;text-slate-700 line-clamp-1 dark:text-navy-100&quot;&gt;&#13;&#10;                  Simon Tods&#13;&#10;                &lt;/p&gt;&#13;&#10;                &lt;p class=&quot;text-xs text-slate-500 dark:text-navy-300&quot;&gt;&#13;&#10;                  Web Developer&#13;&#10;                &lt;/p&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;div&#13;&#10;                  class=&quot;is-initial rounded-full border border-success/30 bg-success/10 uppercase text-success&quot;&#13;&#10;                &gt;&#13;&#10;                  jd&#13;&#10;                &lt;/div&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div&gt;&#13;&#10;                &lt;p class=&quot;text-slate-700 line-clamp-1 dark:text-navy-100&quot;&gt;&#13;&#10;                  John Doe&#13;&#10;                &lt;/p&gt;&#13;&#10;                &lt;p class=&quot;text-xs text-slate-500 dark:text-navy-300&quot;&gt;&#13;&#10;                  Web Developer&#13;&#10;                &lt;/p&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;div&#13;&#10;                  class=&quot;is-initial rounded-full bg-warning uppercase text-white&quot;&#13;&#10;                &gt;&#13;&#10;                  KG&#13;&#10;                &lt;/div&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;              &lt;div&gt;&#13;&#10;                &lt;p class=&quot;text-slate-700 line-clamp-1 dark:text-navy-100&quot;&gt;&#13;&#10;                  Konnor Guzman&#13;&#10;                &lt;/p&gt;&#13;&#10;                &lt;p class=&quot;text-xs text-slate-500 dark:text-navy-300&quot;&gt;&#13;&#10;                  Frontend Developer&#13;&#10;                &lt;/p&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;              &lt;div&gt;&#13;&#10;                &lt;p class=&quot;text-slate-700 line-clamp-1 dark:text-navy-100&quot;&gt;&#13;&#10;                  Samantha Shelton&#13;&#10;                &lt;/p&gt;&#13;&#10;                &lt;p class=&quot;text-xs text-slate-500 dark:text-navy-300&quot;&gt;&#13;&#10;                  Web Developer&#13;&#10;                &lt;/p&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;          &lt;li&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;flex items-center space-x-3.5 px-4 py-2 pr-8 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;              &lt;div&gt;&#13;&#10;                &lt;p class=&quot;text-slate-700 line-clamp-1 dark:text-navy-100&quot;&gt;&#13;&#10;                  Derrick Simmons&#13;&#10;                &lt;/p&gt;&#13;&#10;                &lt;p class=&quot;text-xs text-slate-500 dark:text-navy-300&quot;&gt;&#13;&#10;                  UI/UX Designer&#13;&#10;                &lt;/p&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/li&gt;&#13;&#10;        &lt;/ul&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;bottom-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 4],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    new Popper(&quot;#dropdown-wrapper8&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;&#13;&#10;            </code>
          </pre>
      </div>
    </div>
  </div>
</template>
