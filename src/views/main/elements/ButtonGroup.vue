<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "ButtonGroup",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Button Group
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
      <li>Button group</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Button Group -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Button Group
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
          Button groups are an easy way to group a series of buttons
          together. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="flex -space-x-px">
            <button
                class="btn rounded-r-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              1
            </button>
            <button
                class="btn rounded-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              2
            </button>
            <button
                class="btn rounded-none bg-primary-focus font-medium text-white active:bg-primary-focus/90 dark:bg-accent-focus dark:active:bg-accent/90"
            >
              3
            </button>
            <button
                class="btn rounded-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              4
            </button>
            <button
                class="btn rounded-l-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              5
            </button>
          </div>

          <div class="flex -space-x-px">
            <button
                class="btn rounded-r-none rounded-l-full bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
            >
              First
            </button>
            <button
                class="btn rounded-none bg-secondary-focus font-medium text-white active:bg-secondary-focus/90"
            >
              Second
            </button>
            <button
                class="btn rounded-l-none rounded-r-full bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
            >
              Third
            </button>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
            <code class="language-html">
&lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-r-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      1&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      2&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-primary-focus font-medium text-white active:bg-primary-focus/90 dark:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      3&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      4&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-l-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      5&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-r-none rounded-l-full bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      First&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-secondary-focus font-medium text-white active:bg-secondary-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Second&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-l-none rounded-r-full bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Third&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;                </code>
          </pre>
      </div>
    </div>

    <!-- Outlined Button Group -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outlined
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
          Buttons groups can be outlied. Check out code for detail of
          usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="flex -space-x-px">
            <button
                class="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
            >
              1
            </button>
            <button
                class="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
            >
              2
            </button>
            <button
                class="btn rounded-none bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
            >
              3
            </button>
            <button
                class="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
            >
              4
            </button>
            <button
                class="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
            >
              5
            </button>
          </div>
          <div class="flex -space-x-px">
            <button
                class="btn rounded-l-full rounded-r-none border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90"
            >
              First
            </button>
            <button
                class="btn rounded-none bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
            >
              Second
            </button>
            <button
                class="btn rounded-l-none rounded-r-full border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90"
            >
              Third
            </button>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
            <code class="language-html">
&lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90&quot;&#13;&#10;    &gt;&#13;&#10;      1&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90&quot;&#13;&#10;    &gt;&#13;&#10;      2&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      3&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90&quot;&#13;&#10;    &gt;&#13;&#10;      4&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90&quot;&#13;&#10;    &gt;&#13;&#10;      5&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-l-full rounded-r-none border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90&quot;&#13;&#10;    &gt;&#13;&#10;      First&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Second&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-l-none rounded-r-full border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90&quot;&#13;&#10;    &gt;&#13;&#10;      Third&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;
            </code>
          </pre>
      </div>
    </div>

    <!-- Soft Button Group -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Soft Button Group
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
          Buttons groups can have a soft colors. To do this, you should
          use some opacity. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <div class="flex -space-x-px">
            <button
                class="btn rounded-r-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              1
            </button>
            <button
                class="btn rounded-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              2
            </button>
            <button
                class="btn rounded-none bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
            >
              3
            </button>
            <button
                class="btn rounded-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              4
            </button>
            <button
                class="btn rounded-l-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
            >
              5
            </button>
          </div>
          <div class="flex -space-x-px">
            <button
                class="btn rounded-r-none rounded-l-full bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
            >
              First
            </button>
            <button
                class="btn rounded-none bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
            >
              Second
            </button>
            <button
                class="btn rounded-l-none rounded-r-full bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
            >
              Third
            </button>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
            <code class="language-html">
&lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-r-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;    &gt;&#13;&#10;      1&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;    &gt;&#13;&#10;      2&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      3&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;    &gt;&#13;&#10;      4&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-l-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;    &gt;&#13;&#10;      5&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-r-none rounded-l-full bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25&quot;&#13;&#10;    &gt;&#13;&#10;      First&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-none bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Second&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-l-none rounded-r-full bg-error/10 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25&quot;&#13;&#10;    &gt;&#13;&#10;      Third&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;    &#13;&#10;                </code>
          </pre>
      </div>
    </div>
  </div>
</template>