<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Tag",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Tag
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
      <li>Tag</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Tag -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Tag
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>
      <div>
        <p class="max-w-2xl">
          Tags are compact elements that represent an input, attribute, or
          action. tags allow users to enter information, make selections,
          filter content, or trigger actions. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5">
          <a
              href="#"
              class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Default
          </a>
          <a
              href="#"
              class="tag bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Primary
          </a>
          <a
              href="#"
              class="tag bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            Secondary
          </a>
          <a
              href="#"
              class="tag bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
          >
            Info
          </a>
          <a
              href="#"
              class="tag bg-success text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            Success
          </a>
          <a
              href="#"
              class="tag bg-warning text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
          >
            Warning
          </a>
          <a
              href="#"
              class="tag bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
          >
            Error
          </a>
          <a
              href="#"
              class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
          >
            Light
          </a>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-success text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-warning text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80&quot;&#13;&#10;  &gt;&#13;&#10;    Light&#13;&#10;  &lt;/a&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Rounded Tags -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Rounded Tag
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>
      <div>
        <p class="max-w-2xl">
          Tags can have a rounded shape. To do this, you should use the
          <code class="inline-code">rounded-full</code> utility Check out
          code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <a
              href="#"
              class="tag rounded-full bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Default
          </a>
          <a
              href="#"
              class="tag rounded-full bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Primary
          </a>
          <a
              href="#"
              class="tag rounded-full bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            Secondary
          </a>
          <a
              href="#"
              class="tag rounded-full bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
          >
            Info
          </a>
          <a
              href="#"
              class="tag rounded-full bg-success text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            Success
          </a>
          <a
              href="#"
              class="tag rounded-full bg-warning text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
          >
            Warning
          </a>
          <a
              href="#"
              class="tag rounded-full bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
          >
            Error
          </a>
          <a
              href="#"
              class="tag rounded-full bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
          >
            Light
          </a>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-success text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-warning text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/a&gt;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80&quot;&#13;&#10;  &gt;&#13;&#10;    Light&#13;&#10;  &lt;/a&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Bordered Soft Tags -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Bordered Tag
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>
      <div>
        <p class="max-w-2xl">
          Tags can have a border. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5">
          <a
              href="#"
              class="tag rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Primary
          </a>

          <a
              href="#"
              class="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Secondary
          </a>

          <a
              href="#"
              class="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Info
          </a>

          <a
              href="#"
              class="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Success
          </a>

          <a
              href="#"
              class="tag rounded-full border border-warning/30 bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Warning
          </a>

          <a
              href="#"
              class="tag rounded-full border border-error/30 bg-error/10 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            Error
          </a>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/a&gt;&#13;&#10;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/a&gt;&#13;&#10;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/a&gt;&#13;&#10;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/a&gt;&#13;&#10;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full border border-warning/30 bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/a&gt;&#13;&#10;&#13;&#10;  &lt;a&#13;&#10;    href=&quot;#&quot;&#13;&#10;    class=&quot;tag rounded-full border border-error/30 bg-error/10 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/a&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Tag group -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Tag Group
        </h2>
        <label class="flex items-center space-x-2">
                <span class="text-xs text-slate-400 dark:text-navy-300"
                >Code</span
                >
          <input
              class="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:bg-primary checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-accent dark:checked:before:bg-white"
              type="checkbox"
          />
        </label>
      </div>
      <div>
        <p class="max-w-2xl">
          Tag group are an easy way to group a series of tags together.
          Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div class="flex -space-x-px">
            <a
                href="#"
                class="tag rounded-r-none bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              Primary
            </a>
            <a
                href="#"
                class="tag rounded-l-none bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              55
            </a>
          </div>

          <div class="flex -space-x-px">
            <a
                href="#"
                class="tag rounded-r-none bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
            >
              Message
            </a>
            <a
                href="#"
                class="tag rounded-l-none bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
            >
              65
            </a>
          </div>

          <div class="flex -space-x-px">
            <a
                href="#"
                class="tag rounded-full rounded-r-none border border-warning text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
            >
              Warnings
            </a>
            <a
                href="#"
                class="tag rounded-full rounded-l-none border border-warning bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
            >
              35
            </a>
          </div>

          <div class="flex -space-x-px">
            <a
                href="#"
                class="tag rounded-r-none bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              Message
            </a>
            <a
                href="#"
                class="badge bg-success text-white shadow-lg shadow-success/50"
            >
              14
            </a>
          </div>

          <div class="flex -space-x-px">
            <a
                href="#"
                class="tag rounded-r-none bg-slate-150 px-4 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              Star
            </a>
            <a
                href="#"
                class="tag rounded-l-none bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
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
            </a>
          </div>

          <div class="flex -space-x-px">
            <div
                class="badge rounded-r-none border border-error text-error"
            >
              Remove
            </div>
            <a
                href="#"
                class="tag rounded-l-none bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
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
                    d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </div>

          <div
              class="badge space-x-2 rounded-full bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
          >
            <i
                class="fa-solid fa-person-biking text-sm text-slate-600 dark:text-navy-200"
            ></i>
            <span>Default</span>
            <button
                class="btn size-4.5 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30 dark:bg-white/20 dark:hover:bg-white/30 dark:focus:bg-white/30"
            >
              <i class="fa-solid fa-xmark dark:text-navy-50"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-r-none bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    &gt;&#13;&#10;      Primary&#13;&#10;    &lt;/a&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-l-none bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      55&#13;&#10;    &lt;/a&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-r-none bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;    &gt;&#13;&#10;      Message&#13;&#10;    &lt;/a&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-l-none bg-info text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      65&#13;&#10;    &lt;/a&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-full rounded-r-none border border-warning text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25&quot;&#13;&#10;    &gt;&#13;&#10;      Warnings&#13;&#10;    &lt;/a&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-full rounded-l-none border border-warning bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25&quot;&#13;&#10;    &gt;&#13;&#10;      35&#13;&#10;    &lt;/a&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-r-none bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;    &gt;&#13;&#10;      Message&#13;&#10;    &lt;/a&gt;&#13;&#10;    &lt;a href=&quot;#&quot; class=&quot;badge bg-success text-white shadow-lg shadow-success/50&quot;&gt;&#13;&#10;      14&#13;&#10;    &lt;/a&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-r-none bg-slate-150 px-4 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    &gt;&#13;&#10;      Star&#13;&#10;    &lt;/a&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-l-none bg-secondary text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4&quot;&#13;&#10;        viewBox=&quot;0 0 20 20&quot;&#13;&#10;        fill=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          d=&quot;M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/a&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;div class=&quot;badge rounded-r-none border border-error text-error&quot;&gt;&#13;&#10;      Remove&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;tag rounded-l-none bg-error text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-4&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M6 18L18 6M6 6l12 12&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/a&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div&#13;&#10;    class=&quot;badge space-x-2 rounded-full bg-slate-150 text-slate-800 dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;i&#13;&#10;      class=&quot;fa-solid fa-person-biking text-sm text-slate-600 dark:text-navy-200&quot;&#13;&#10;    &gt;&lt;/i&gt;&#13;&#10;    &lt;span&gt;Default&lt;/span&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn size-4.5 rounded-full bg-black/20 p-0 hover:bg-black/30 focus:bg-black/30 dark:bg-white/20 dark:hover:bg-white/30 dark:focus:bg-white/30&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;i class=&quot;fa-solid fa-xmark dark:text-navy-50&quot;&gt;&lt;/i&gt;&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>
  </div>
</template>