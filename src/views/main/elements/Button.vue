<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Button",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Button
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
      <li>Button</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Button
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
      <div>
        <p class="max-w-2xl">
          Use Button component for actions in forms, dialogs, and more
          with support for multiple sizes, states, and more. Check out
          code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Default
          </button>
          <button
              class="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Primary
          </button>
          <button
              class="btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            Secondary
          </button>
          <button
              class="btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
          >
            Info
          </button>
          <button
              class="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            Success
          </button>
          <button
              class="btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
          >
            Warning
          </button>
          <button
              class="btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Rounded Buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Rounded Button
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
      <div>
        <p class="max-w-2xl">
          Buttons can have a rounded shape. To do this, you should use the
          <code class="inline-code">rounded-full</code> utility. Check out
          code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Default
          </button>
          <button
              class="btn rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Primary
          </button>
          <button
              class="btn rounded-full bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            Secondary
          </button>
          <button
              class="btn rounded-full bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
          >
            Info
          </button>
          <button
              class="btn rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            Success
          </button>
          <button
              class="btn rounded-full bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
          >
            Warning
          </button>
          <button
              class="btn rounded-full bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn rounded-full bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn rounded-full bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn rounded-full bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn rounded-full bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn rounded-full bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Outlined Button -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outlined Button
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
      <div>
        <p class="max-w-2xl">
          Buttons can be outlied. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            Default
          </button>
          <button
              class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
          >
            Primary
          </button>
          <button
              class="btn border border-secondary font-medium text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary/90 dark:text-secondary-light dark:hover:bg-secondary dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white dark:active:bg-secondary/90"
          >
            Secondary
          </button>
          <button
              class="btn border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            Info
          </button>
          <button
              class="btn border border-success font-medium text-success hover:bg-success hover:text-white focus:bg-success focus:text-white active:bg-success/90"
          >
            Success
          </button>
          <button
              class="btn border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90"
          >
            Warning
          </button>
          <button
              class="btn border border-error font-medium text-error hover:bg-error hover:text-white focus:bg-error focus:text-white active:bg-error/90"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-secondary font-medium text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary/90 dark:text-secondary-light dark:hover:bg-secondary dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white dark:active:bg-secondary/90&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-success font-medium text-success hover:bg-success hover:text-white focus:bg-success focus:text-white active:bg-success/90&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-error font-medium text-error hover:bg-error hover:text-white focus:bg-error focus:text-white active:bg-error/90&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Soft Color buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Soft Color Button
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
      <div>
        <p class="max-w-2xl">
          Buttons can have a soft colors. To do this, you should use some
          opacity. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-primary/10 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Primary
          </button>
          <button
              class="btn bg-secondary/10 font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Secondary
          </button>
          <button
              class="btn bg-info/10 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Info
          </button>
          <button
              class="btn bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Success
          </button>
          <button
              class="btn bg-warning/10 font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Warning
          </button>
          <button
              class="btn bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-primary/10 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-secondary/10 font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-info/10 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-warning/10 font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;     &#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Bordered Soft Color Buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Bordered Button
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
      <div>
        <p class="max-w-2xl">
          Buttons can have a soft colors. To do this, you should use some
          opacity. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn border border-primary/30 bg-primary/10 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Primary
          </button>
          <button
              class="btn border border-secondary/30 bg-secondary/10 font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Secondary
          </button>
          <button
              class="btn border border-info/30 bg-info/10 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Info
          </button>
          <button
              class="btn border border-success/30 bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            Success
          </button>
          <button
              class="btn border border-warning/30 bg-warning/10 font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Warning
          </button>
          <button
              class="btn border border-error/30 bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn border border-primary/30 bg-primary/10 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-secondary/30 bg-secondary/10 font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-info/30 bg-info/10 font-medium text-info  hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-success/30 bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-warning/30 bg-warning/10 font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn border border-error/30 bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Flat Buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Flat Button
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
      <div>
        <p class="max-w-2xl">
          Buttons can be flat. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            Default
          </button>
          <button
              class="btn font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            Primary
          </button>
          <button
              class="btn font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
          >
            Secondary
          </button>
          <button
              class="btn font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            Info
          </button>
          <button
              class="btn font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            Warning
          </button>
          <button
              class="btn font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;
                </code>
              </pre>
      </div>
    </div>

    <!-- Glow buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Glow buttons
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
      <div>
        <p class="max-w-2xl">
          Buttons can be glow. To do this, you should use colored shadows.
          Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            Default
          </button>
          <button
              class="btn bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
          >
            Primary
          </button>
          <button
              class="btn bg-secondary font-medium text-white shadow-lg shadow-secondary/50 hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            Secondary
          </button>
          <button
              class="btn bg-info font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus focus:shadow-lg focus:shadow-info/50 active:bg-info-focus/90"
          >
            Info
          </button>
          <button
              class="btn bg-success font-medium text-white hover:bg-success-focus hover:shadow-lg hover:shadow-success/50 focus:bg-success-focus focus:shadow-lg focus:shadow-success/50 active:bg-success-focus/90"
          >
            Success
          </button>
          <button
              class="btn bg-warning font-medium text-white shadow-lg shadow-warning/50 hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
          >
            Warning
          </button>
          <button
              class="btn bg-error font-medium text-white hover:bg-error-focus hover:shadow-lg hover:shadow-error/50 focus:bg-error-focus focus:shadow-lg focus:shadow-error/50 active:bg-error-focus/90"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-secondary font-medium text-white shadow-lg shadow-secondary/50 hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-info font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus focus:shadow-lg focus:shadow-info/50 active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-success font-medium text-white hover:bg-success-focus hover:shadow-lg hover:shadow-success/50 focus:bg-success-focus focus:shadow-lg focus:shadow-success/50 active:bg-success-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-warning font-medium text-white shadow-lg shadow-warning/50 hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-error font-medium text-white hover:bg-error-focus hover:shadow-lg hover:shadow-error/50 focus:bg-error-focus focus:shadow-lg focus:shadow-error/50 active:bg-error-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Gradient buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Gradient Buttons
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
      <div>
        <p class="max-w-2xl">
          Buttons can be gradient. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-gradient-to-r from-fuchsia-600 to-pink-600 font-medium text-white"
          >
            Gradient
          </button>
          <button
              class="btn bg-gradient-to-br from-purple-500 to-indigo-600 font-medium text-white"
          >
            Gradient
          </button>
          <button
              class="btn bg-gradient-to-r from-sky-400 to-blue-600 font-medium text-white"
          >
            Gradient
          </button>
          <button
              class="btn bg-gradient-to-r from-amber-400 to-orange-600 font-medium text-white"
          >
            Gradient
          </button>
          <button
              class="btn bg-gradient-to-l from-pink-300 to-indigo-400 font-medium text-white"
          >
            Gradient
          </button>
          <button
              class="btn bg-gradient-to-r from-green-400 to-blue-600 font-medium text-white"
          >
            Gradient
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-fuchsia-600 to-pink-600 font-medium text-white&quot;&#13;&#10;  &gt;&#13;&#10;    Gradient&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-br from-purple-500 to-indigo-600 font-medium text-white&quot;&#13;&#10;  &gt;&#13;&#10;    Gradient&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-sky-400 to-blue-600 font-medium text-white&quot;&#13;&#10;  &gt;&#13;&#10;    Gradient&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-amber-400 to-orange-600 font-medium text-white&quot;&#13;&#10;  &gt;&#13;&#10;    Gradient&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-l from-pink-300 to-indigo-400 font-medium text-white&quot;&#13;&#10;  &gt;&#13;&#10;    Gradient&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-green-400 to-blue-600 font-medium text-white&quot;&#13;&#10;  &gt;&#13;&#10;    Gradient&#13;&#10;  &lt;/button&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outlined Gradient buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outlined Gradient Buttons
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
      <div>
        <p class="max-w-2xl">
          Buttons can be outlined gradient. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-gradient-to-r from-amber-400 to-orange-600 p-0.5 font-medium"
          >
            <span class="btn bg-white dark:bg-navy-700"> Outline </span>
          </button>
          <button
              class="btn bg-gradient-to-r from-sky-400 to-blue-600 p-0.5 font-medium"
          >
            <span class="btn bg-white dark:bg-navy-700"> Outline </span>
          </button>
          <button
              class="btn bg-gradient-to-l from-pink-300 to-indigo-400 p-0.5 font-medium"
          >
            <span class="btn bg-white dark:bg-navy-700"> Outline </span>
          </button>
          <button
              class="btn bg-gradient-to-r from-green-400 to-fuchsia-400 p-0.5 font-medium"
          >
            <span class="btn bg-white dark:bg-navy-700"> Outline </span>
          </button>
          <button
              class="btn bg-gradient-to-r from-fuchsia-600 to-pink-600 p-0.5 font-medium"
          >
            <span class="btn bg-white dark:bg-navy-700"> Outline </span>
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-amber-400 to-orange-600 p-0.5 font-medium&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span class=&quot;btn bg-white dark:bg-navy-700&quot;&gt; Outline &lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-sky-400 to-blue-600 p-0.5 font-medium&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span class=&quot;btn bg-white dark:bg-navy-700&quot;&gt; Outline &lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-l from-pink-300 to-indigo-400 p-0.5 font-medium&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span class=&quot;btn bg-white dark:bg-navy-700&quot;&gt; Outline &lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-green-400 to-fuchsia-400 p-0.5 font-medium&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span class=&quot;btn bg-white dark:bg-navy-700&quot;&gt; Outline &lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-gradient-to-r from-fuchsia-600 to-pink-600 p-0.5 font-medium&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span class=&quot;btn bg-white dark:bg-navy-700&quot;&gt; Outline &lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- With icons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          With Icons
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
      <div>
        <p class="max-w-2xl">
          Buttons can have an icon. Buttons components work well with
          FontAwesome and Heroicon Icons. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap items-end">
          <button
              class="btn space-x-2 bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>Like</span>
          </button>
          <button
              class="btn space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            <span> Primary </span>
          </button>
          <button
              class="btn space-x-2 bg-info font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus focus:shadow-lg focus:shadow-info/50 active:bg-info-focus/90"
          >
            <span>Cloud</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
              />
            </svg>
          </button>
          <button
              class="btn space-x-2 border border-warning/30 bg-warning/10 font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            <span>Trending</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </button>
          <button
              class="btn space-x-2 rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Refresh</span>
          </button>
          <button
              class="btn space-x-2 border border-secondary font-medium text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary/90 dark:text-secondary-light dark:hover:bg-secondary dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white dark:active:bg-secondary/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <span>Block</span>
          </button>
          <button
              class="btn space-x-2 bg-warning font-medium text-white shadow-lg shadow-warning/50 hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
          >
            <span>Low Energy</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn space-x-2 bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt;Like&lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn space-x-2 rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt; Primary &lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn space-x-2 bg-info font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus focus:shadow-lg focus:shadow-info/50 active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span&gt;Cloud&lt;/span&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      viewBox=&quot;0 0 20 20&quot;&#13;&#10;      fill=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        d=&quot;M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn space-x-2 border border-warning/30 bg-warning/10 font-medium text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span&gt;Trending&lt;/span&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M13 7h8m0 0v8m0-8l-8 8-4-4-6 6&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn space-x-2 rounded-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt;Refresh&lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn space-x-2 border border-secondary font-medium text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary/90 dark:text-secondary-light dark:hover:bg-secondary dark:hover:text-white dark:focus:bg-secondary dark:focus:text-white dark:active:bg-secondary/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;    &lt;span&gt;Block&lt;/span&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn space-x-2 bg-warning font-medium text-white shadow-lg shadow-warning/50 hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;span&gt;Low Energy&lt;/span&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M19 13l-7 7-7-7m14-8l-7 7-7-7&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Only icons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Only Icons
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
      <div>
        <p class="max-w-2xl">
          Buttons can have only icon. Buttons components work well with
          FontAwesome and Heroicon Icons. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap items-end">
          <button
              class="btn size-9 rounded-full bg-secondary p-0 font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
              class="btn size-9 rounded-full bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
          <button
              class="btn size-9 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </button>
          <button
              class="btn size-9 bg-success p-0 font-medium text-white hover:bg-success-focus hover:shadow-lg hover:shadow-success/50 focus:bg-success-focus focus:shadow-lg focus:shadow-success/50 active:bg-success-focus/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </button>
          <button
              class="btn size-9 border border-primary p-0 font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          </button>
          <button
              class="btn size-9 border border-warning/30 bg-warning/10 p-0 font-medium text-warning hover:bg-warning/20 hover:shadow-lg hover:shadow-warning/50 focus:bg-warning/20 focus:shadow-lg focus:shadow-warning/50 active:bg-warning/25"
          >
            <i class="fa-solid fa-bomb text-base"></i>
          </button>
          <button
              class="btn size-9 p-0 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button
              class="btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
          >
            <i class="fa-solid fa-house-chimney"></i>
          </button>
          <button
              class="btn mask is-hexagon size-9 bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </button>
          <button
              class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus active:bg-info-focus/90"
          >
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
                      &lt;button&#13;&#10;    class=&quot;btn size-9 rounded-full bg-secondary p-0 font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 rounded-full bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 bg-success p-0 font-medium text-white hover:bg-success-focus hover:shadow-lg hover:shadow-success/50 focus:bg-success-focus focus:shadow-lg focus:shadow-success/50 active:bg-success-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 border border-primary p-0 font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;1.5&quot;&#13;&#10;        d=&quot;M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 border border-warning/30 bg-warning/10 p-0 font-medium text-warning hover:bg-warning/20 hover:shadow-lg hover:shadow-warning/50 focus:bg-warning/20 focus:shadow-lg focus:shadow-warning/50 active:bg-warning/25&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;i class=&quot;fa-solid fa-bomb text-base&quot;&gt;&lt;/i&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 p-0 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;i class=&quot;fa-solid fa-house-chimney&quot;&gt;&lt;/i&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn mask is-hexagon size-9 bg-primary p-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;i class=&quot;fa-solid fa-paper-plane&quot;&gt;&lt;/i&gt;&#13;&#10;  &lt;/button&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Button Size -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Button Size
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
      <div>
        <p class="max-w-2xl">
          Button components can have various sizes. Check out code for
          detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap items-end">
          <button
              class="btn h-6 rounded bg-primary px-3 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Button
          </button>
          <button
              class="btn h-8 rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Button
          </button>
          <button
              class="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Button
          </button>
          <button
              class="btn h-11 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Button
          </button>
          <button
              class="btn h-12 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Button
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn h-6 rounded bg-primary px-3 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Button&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn h-8 rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Button&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Button&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn h-11 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Button&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn h-12 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Button&#13;&#10;  &lt;/button&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Disabled Buttons -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Disabled Button
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
      <div>
        <p class="max-w-2xl">
          Buttons have their own style when disabled. Check out code for
          detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              disabled
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Default
          </button>
          <button
              disabled
              class="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Primary
          </button>
          <button
              disabled
              class="btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60"
          >
            Secondary
          </button>
          <button
              disabled
              class="btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60"
          >
            Info
          </button>
          <button
              disabled
              class="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60"
          >
            Success
          </button>
          <button
              disabled
              class="btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60"
          >
            Warning
          </button>
          <button
              disabled
              class="btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60"
          >
            Error
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    disabled&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    disabled&#13;&#10;    class=&quot;btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    disabled&#13;&#10;    class=&quot;btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    disabled&#13;&#10;    class=&quot;btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    disabled&#13;&#10;    class=&quot;btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    disabled&#13;&#10;    class=&quot;btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    disabled&#13;&#10;    class=&quot;btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>
  </div>
</template>