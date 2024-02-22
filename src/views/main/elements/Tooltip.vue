<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Tooltip",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Tooltip
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
      <li>Tooltip</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Tooltip -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Tooltip
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
          A tooltip is often used to specify extra information about
          something when the user moves the mouse pointer over an element.
          Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              data-tooltip="Default"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            Default
          </button>
          <button
              data-tooltip="Light"
              data-tooltip-theme="light"
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
          >
            Light
          </button>
          <button
              data-tooltip="Primary"
              data-tooltip-theme="primary"
              class="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Primary
          </button>
          <button
              data-tooltip="Secondary"
              data-tooltip-theme="secondary"
              class="btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          >
            Secondary
          </button>
          <button
              data-tooltip="Info"
              data-tooltip-theme="info"
              class="btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
          >
            Info
          </button>
          <button
              data-tooltip="Success"
              data-tooltip-theme="success"
              class="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
          >
            Success
          </button>
          <button
              data-tooltip="Warning"
              data-tooltip-theme="warning"
              class="btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
          >
            Warning
          </button>
          <button
              data-tooltip="Error"
              data-tooltip-theme="error"
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
  &lt;div class=&quot;inline-space flex flex-wrap&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Default&quot;&#13;&#10;      class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    &gt;&#13;&#10;      Default&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Light&quot;&#13;&#10;      data-tooltip-theme=&quot;light&quot;&#13;&#10;      class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80&quot;&#13;&#10;    &gt;&#13;&#10;      Light&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Primary&quot;&#13;&#10;      data-tooltip-theme=&quot;primary&quot;&#13;&#10;      class=&quot;btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Primary&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Secondary&quot;&#13;&#10;      data-tooltip-theme=&quot;secondary&quot;&#13;&#10;      class=&quot;btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Secondary&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Info&quot;&#13;&#10;      data-tooltip-theme=&quot;info&quot;&#13;&#10;      class=&quot;btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Info&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Success&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      class=&quot;btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Success&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Warning&quot;&#13;&#10;      data-tooltip-theme=&quot;warning&quot;&#13;&#10;      class=&quot;btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Warning&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Error&quot;&#13;&#10;      data-tooltip-theme=&quot;error&quot;&#13;&#10;      class=&quot;btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;    &gt;&#13;&#10;      Error&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;
                </code>
              </pre>
      </div>
    </div>

    <!-- Tooltip Position -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Tooltip Position
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
          Tooltip can be placed in four base ways in relation to the
          reference element. Check out code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <div
              class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            <button
                data-tooltip="Top"
                data-tooltip-theme="success"
                data-placement="top"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Top
            </button>
            <button
                data-tooltip="Top Start"
                data-tooltip-theme="success"
                data-placement="top-start"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Top Start
            </button>
            <button
                data-tooltip="Top End"
                data-tooltip-theme="success"
                data-placement="top-end"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Top End
            </button>
            <button
                data-tooltip="Right"
                data-tooltip-theme="success"
                data-placement="right"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Right
            </button>
            <button
                data-tooltip="Right End"
                data-tooltip-theme="success"
                data-placement="right-end"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Right End
            </button>
            <button
                data-tooltip="Right Start"
                data-tooltip-theme="success"
                data-placement="right-start"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Right Start
            </button>
            <button
                data-tooltip="Bottom"
                data-tooltip-theme="success"
                data-placement="bottom"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Bottom
            </button>
            <button
                data-tooltip="Bottom Start"
                data-tooltip-theme="success"
                data-placement="bottom-start"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Bottom Start
            </button>
            <button
                data-tooltip="Bottom End"
                data-tooltip-theme="success"
                data-placement="bottom-end"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Bottom End
            </button>
            <button
                data-tooltip="Left"
                data-tooltip-theme="success"
                data-placement="left"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Left
            </button>
            <button
                data-tooltip="Left Start"
                data-tooltip-theme="success"
                data-placement="left-start"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Left Start
            </button>
            <button
                data-tooltip="Left End"
                data-tooltip-theme="success"
                data-placement="left-end"
                class="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
            >
              Left End
            </button>
          </div>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Top&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;top&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Top&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Top Start&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;top-start&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Top Start&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Top End&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;top-end&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Top End&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Right&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;right&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Right&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Right End&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;right-end&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Right End&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Right Start&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;right-start&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Right Start&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Bottom&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;bottom&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Bottom&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Bottom Start&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;bottom-start&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Bottom Start&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Bottom End&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;bottom-end&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Bottom End&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Left&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;left&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Left&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Left Start&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;left-start&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Left Start&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;button&#13;&#10;      data-tooltip=&quot;Left End&quot;&#13;&#10;      data-tooltip-theme=&quot;success&quot;&#13;&#10;      data-placement=&quot;left-end&quot;&#13;&#10;      class=&quot;btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Left End&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Tooltip Delay, Duration -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Tooltip Delay, Duration
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
          Tooltip can delay hiding or showing after a trigger. Check out
          code for detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Debounce 500 millisecond"
              data-tooltip-delay="500"
          >
            Delay
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Duration 500 millisecond animate tooltip"
              data-tooltip-duration="500"
          >
            Duration
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Debounce 500 millisecond&quot;&#13;&#10;    data-tooltip-delay=&quot;500&quot;&#13;&#10;  &gt;&#13;&#10;    Delay&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Duration 500 millisecond animate tooltip&quot;&#13;&#10;    data-tooltip-duration=&quot;500&quot;&#13;&#10;  &gt;&#13;&#10;    Duration&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Tooltip Trigger -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Tooltip Trigger
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
          Tooltip can be triggered by a variety of different events,
          including click, focus, or any other even. Check out code for
          detail of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Hover me"
              data-tooltip-trigger="mouseenter"
          >
            Hover
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Click me"
              data-tooltip-trigger="click"
          >
            Click
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Focus me"
              data-tooltip-trigger="focusin"
          >
            Focus
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Hover me&quot;&#13;&#10;    data-tooltip-trigger=&quot;mouseenter&quot;&#13;&#10;  &gt;&#13;&#10;    Hover&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Click me&quot;&#13;&#10;    data-tooltip-trigger=&quot;click&quot;&#13;&#10;  &gt;&#13;&#10;    Click&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Focus me&quot;&#13;&#10;    data-tooltip-trigger=&quot;focusin&quot;&#13;&#10;  &gt;&#13;&#10;    Focus&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Follow Cursor -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Follow Cursor
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
          Tooltip can follow the mouse cursor and abide by a certain axis.
          Additionally, the tooltip can follow the cursor until it shows,
          at which point it will stop following. Check out code for detail
          of usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Follow Cursor"
              data-tooltip-follow-cursor
          >
            Cursor
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Follow Cursor horizontal"
              data-tooltip-follow-cursor="x"
          >
            Horizontal
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Follow Cursor Vertical"
              data-tooltip-follow-cursor="y"
          >
            Vertical
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="Follow Cursor initial"
              data-tooltip-follow-cursor="initial"
              data-tooltip-trigger="click"
          >
            Click me
          </button>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Follow Cursor&quot;&#13;&#10;    data-tooltip-follow-cursor&#13;&#10;  &gt;&#13;&#10;    Cursor&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Follow Cursor horizontal&quot;&#13;&#10;    data-tooltip-follow-cursor=&quot;x&quot;&#13;&#10;  &gt;&#13;&#10;    Horizontal&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Follow Cursor Vertical&quot;&#13;&#10;    data-tooltip-follow-cursor=&quot;y&quot;&#13;&#10;  &gt;&#13;&#10;    Vertical&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;Follow Cursor initial&quot;&#13;&#10;    data-tooltip-follow-cursor=&quot;initial&quot;&#13;&#10;    data-tooltip-trigger=&quot;click&quot;&#13;&#10;  &gt;&#13;&#10;    Click me&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- HTML Content Tooltip -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          HTML Content Tooltip
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
          Tooltip tippy can contain HTML. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              data-tooltip="#content1"
              data-content-html
          >
            Content
          </button>

          <template id="content1">
            <div
                class="flex space-x-3 rounded-lg bg-slate-150 p-3 dark:bg-navy-500"
            >
              <div class="avatar">
                <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="image"
                />
              </div>
              <div>
                <p class="font-medium text-slate-700 dark:text-navy-100">
                  John Doe
                </p>
                <p class="text-xs text-slate-500 dark:text-navy-200">
                  Product Manager
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    data-tooltip=&quot;#content1&quot;&#13;&#10;    data-content-html&#13;&#10;  &gt;&#13;&#10;    Content&#13;&#10;  &lt;/button&gt;&#13;&#10;&#13;&#10;  &lt;template id=&quot;content1&quot;&gt;&#13;&#10;    &lt;div class=&quot;flex space-x-3 rounded-lg bg-slate-150 p-3 dark:bg-navy-500&quot;&gt;&#13;&#10;      &lt;div class=&quot;avatar&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;rounded-full&quot;&#13;&#10;          src=&quot;images/200x200.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div&gt;&#13;&#10;        &lt;p class=&quot;font-medium text-slate-700 dark:text-navy-100&quot;&gt;John Doe&lt;/p&gt;&#13;&#10;        &lt;p class=&quot;text-xs text-slate-500 dark:text-navy-200&quot;&gt;Product Manager&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/template&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>