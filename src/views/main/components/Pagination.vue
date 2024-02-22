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
      Pagination
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
      <li>Pagination</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Pagination -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Pagination
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
          Pagination is a group of buttons that allow the user to navigate
          between a set of related content. Check out code for detail of
          usage.
        </p>
        <div class="mt-5">
          <ol class="pagination">
            <li class="rounded-l-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li class="rounded-r-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
              <code class="language-html">
  &lt;ol class=&quot;pagination&quot;&gt;&#13;&#10;    &lt;li class=&quot;rounded-l-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15 19l-7-7 7-7&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;1&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;2&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;3&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;4&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80  dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;5&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;rounded-r-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;
              </code>
            </pre>
      </div>
    </div>

    <!-- Rounded Pagination -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Rounded Pagination
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
          Pagination can have a rounded shape. Check out code for detail
          of usage.
        </p>
        <div class="mt-5">
          <ol class="pagination">
            <li class="rounded-l-full bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li class="rounded-r-full bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
&lt;ol class=&quot;pagination&quot;&gt;&#13;&#10;    &lt;li class=&quot;rounded-l-full bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15 19l-7-7 7-7&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;1&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;2&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;3&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;4&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80  dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;5&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;rounded-r-full bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;                </code>
              </pre>
      </div>
    </div>

    <!-- Divided Pagination -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Divided Pagination
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
          Pagination can be divided. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="pagination space-x-1.5">
            <li>
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                                  <code class="language-html">
  &lt;ol class=&quot;pagination space-x-1.5&quot;&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-lg bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15 19l-7-7 7-7&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;1&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;2&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;3&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;4&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500  dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;5&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-lg bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;
                                  </code>
                                </pre>
      </div>
    </div>

    <!-- Rounded & Divided -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Rounded & Divided
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
          Pagination can be rounded and divided. Check out code for detail
          of usage.
        </p>
        <div class="mt-5">
          <ol class="pagination space-x-1.5">
            <li>
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li>
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
              <code class="language-html">
  &lt;ol class=&quot;pagination space-x-1.5&quot;&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15 19l-7-7 7-7&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;1&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;2&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;3&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;4&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-slate-150 px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500  dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;5&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;              </code>
            </pre>
      </div>
    </div>

    <!-- Pagination Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Pagination Size
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
          Pagination is a group of buttons that allow the user to navigate
          between a set of related content. Check out code for detail of
          usage.
        </p>
        <div class="mt-5 space-y-4">
          <ol class="pagination">
            <li class="rounded-l-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg bg-primary px-2 text-xs+ leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li class="rounded-r-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </li>
          </ol>
          <ol class="pagination">
            <li class="rounded-l-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li class="rounded-r-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </li>
          </ol>
          <ol class="pagination">
            <li class="rounded-l-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >1</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg bg-primary px-3 text-sm+ leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >2</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >3</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >4</a
              >
            </li>
            <li class="bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >5</a
              >
            </li>
            <li class="rounded-r-lg bg-slate-150 dark:bg-navy-500">
              <a
                  href="#"
                  class="flex size-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
              <code class="language-html">
  &lt;!-- First --&gt;&#13;&#10;  &lt;ol class=&quot;pagination&quot;&gt;&#13;&#10;    &lt;li class=&quot;rounded-l-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15 19l-7-7 7-7&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;1&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg bg-primary px-2 text-xs+ leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;2&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;3&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;4&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg px-2 text-xs+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;5&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;rounded-r-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-7 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;&#13;&#10;  &lt;!-- Second --&gt;&#13;&#10;  &lt;ol class=&quot;pagination&quot;&gt;&#13;&#10;    &lt;li class=&quot;rounded-l-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15 19l-7-7 7-7&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;1&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;2&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;3&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;4&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80  dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;5&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;rounded-r-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;&#13;&#10;  &lt;!-- Third --&gt;&#13;&#10;  &lt;ol class=&quot;pagination&quot;&gt;&#13;&#10;    &lt;li class=&quot;rounded-l-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15 19l-7-7 7-7&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;1&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg bg-primary px-3 text-sm+ leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;2&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;3&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;4&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg px-3 text-sm+ leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;        &gt;5&lt;/a&#13;&#10;      &gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;rounded-r-lg bg-slate-150 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        href=&quot;#&quot;&#13;&#10;        class=&quot;flex size-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewbox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;            d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;
              </code>
            </pre>
      </div>
    </div>
  </div>
</template>
