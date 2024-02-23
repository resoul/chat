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
      Notification
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Components
        </a>
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
      <li>Notification</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Notification -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Notification
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
          The toast is used to show alerts on top of an overlay. The toast
          will close itself when the close button is clicked, or after a
          timeout — the default is 5 seconds. Check out code for detail of
          usage.
        </p>
        <div class="mt-5">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a simple notification'})"
          >
            Default
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Default&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Notification Variants -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Notification Variants
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
      <div>
        <p class="max-w-xl">
          The toast is used to show alerts on top of an overlay. The toast
          will close itself when the close button is clicked, or after a
          timeout — the default is 5 seconds. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5">
          <button
              class="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              onclick="$notification({text:'This is a simple notification',variant:'primary'})"
          >
            Primary
          </button>
          <button
              class="btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
              onclick="$notification({text:'This is a simple notification',variant:'secondary'})"
          >
            Secondary
          </button>
          <button
              class="btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
              onclick="$notification({text:'This is a simple notification',variant:'info'})"
          >
            Info
          </button>
          <button
              class="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90"
              onclick="$notification({text:'This is a simple notification',variant:'success'})"
          >
            Success
          </button>
          <button
              class="btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90"
              onclick="$notification({text:'This is a simple notification',variant:'warning'})"
          >
            Warning
          </button>
          <button
              class="btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90"
              onclick="$notification({text:'This is a simple notification',variant:'error'})"
          >
            Error
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80"
              onclick="$notification({text:'This is a simple notification',variant:'light'})"
          >
            Light
          </button>
          <button
              class="btn bg-navy-500 font-medium text-slate-200 hover:bg-navy-450 focus:bg-navy-450 active:bg-navy-450/90"
              onclick="$notification({text:'This is a simple notification',variant:'dark'})"
          >
            Dark
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;primary&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Primary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;secondary&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Secondary&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;info&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Info&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;success&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Success&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;warning&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Warning&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;error&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Error&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;light&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Light&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-navy-500 font-medium text-slate-200 hover:bg-navy-450 focus:bg-navy-450 active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;dark&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Dark&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Notification Position -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Notification Position
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
      <div>
        <p class="max-w-xl">
          The toast is used to show alerts on top of an overlay. The toast
          will close itself when the close button is clicked, or after a
          timeout — the default is 5 seconds. Check out code for detail of
          usage.
        </p>
        <div class="inline-space mt-5">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a left top notification',variant:'info',position:'left-top'})"
          >
            Left Top
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a left bottom notification',variant:'info',position:'left-bottom'})"
          >
            Left Bottom
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a center top notification',variant:'info',position:'center-top'})"
          >
            Center Top
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a center bottom notification',variant:'info',position:'center-bottom'})"
          >
            Center Bottom
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a right top notification',variant:'info',position:'right-top'})"
          >
            Right Top
          </button>
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a right bottom notification',variant:'info',position:'right-bottom'})"
          >
            Right Bottom
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a left top notification&apos;,variant:&apos;info&apos;,position:&apos;left-top&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Left Top&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a left bottom notification&apos;,variant:&apos;info&apos;,position:&apos;left-bottom&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Left Bottom&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a center top notification&apos;,variant:&apos;info&apos;,position:&apos;center-top&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Center Top&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a center bottom notification&apos;,variant:&apos;info&apos;,position:&apos;center-bottom&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Center Bottom&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a right top notification&apos;,variant:&apos;info&apos;,position:&apos;right-top&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Right Top&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a right bottom notification&apos;,variant:&apos;info&apos;,position:&apos;right-bottom&apos;})&quot;&#13;&#10;  &gt;&#13;&#10;    Right Bottom&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Notification Duration -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Notification Duration
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
      <div>
        <p class="max-w-xl">
          The toast is used to show alerts on top of an overlay. The toast
          will close itself when the close button is clicked, or after a
          timeout — the default is 5 seconds. Check out code for detail of
          usage.
        </p>
        <div class="mt-5">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({text:'This is a simple notification',variant:'info',duration:3000})"
          >
            3 Seconds
          </button>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({text:&apos;This is a simple notification&apos;,variant:&apos;info&apos;,duration:3000})&quot;&#13;&#10;  &gt;&#13;&#10;    3 Seconds&#13;&#10;  &lt;/button&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Custom HTML Content -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Custom HTML Content
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
      <div>
        <p class="max-w-xl">
          The toast is used to show alerts on top of an overlay. The toast
          will close itself when the close button is clicked, or after a
          timeout — the default is 5 seconds. Check out code for detail of
          usage.
        </p>
        <div class="mt-5">
          <button
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              onclick="$notification({content:'#custom-html-notif',duration:3000})"
          >
            HTML content
          </button>
          <template id="custom-html-notif">
            <div
                class="flex max-w-xs overflow-hidden rounded-lg bg-navy-600 font-normal"
            >
              <div class="flex items-start p-4">
                <div class="avatar size-10">
                  <img
                      class="rounded-full"
                      src="/images/200x200.png"
                      alt="avatar"
                  />
                  <div
                      class="absolute right-0 size-3 rounded-full border-2 border-navy-600 bg-primary dark:bg-accent"
                  ></div>
                </div>
              </div>
              <div class="p-2">
                <div class="flex items-center justify-between space-x-2">
                  <h5
                      class="font-medium tracking-wide text-navy-100 line-clamp-1 lg:text-base"
                  >
                    Message Header
                  </h5>
                  <button
                      data-notification-remove
                      class="btn size-7 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25"
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
                  </button>
                </div>
                <p class="text-navy-100">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <div class="flex justify-end px-3 py-1">
                  <a
                      href="#"
                      class="uppercase text-accent-light hover:underline"
                  >show</a
                  >
                </div>
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
  &lt;button&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;    onclick=&quot;$notification({content:&apos;#custom-html-notif&apos;,duration:3000})&quot;&#13;&#10;  &gt;&#13;&#10;    HTML content&#13;&#10;  &lt;/button&gt;&#13;&#10;  &lt;template id=&quot;custom-html-notif&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;flex max-w-xs overflow-hidden rounded-lg bg-navy-600 font-normal&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;div class=&quot;flex items-start p-4&quot;&gt;&#13;&#10;        &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-full&quot;&#13;&#10;            src=&quot;images/200x200.png&quot;&#13;&#10;            alt=&quot;avatar&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;absolute right-0 size-3 rounded-full border-2 border-navy-600 bg-primary dark:bg-accent&quot;&#13;&#10;          &gt;&lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;p-2&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex items-center justify-between space-x-2&quot;&gt;&#13;&#10;          &lt;h5&#13;&#10;            class=&quot;font-medium tracking-wide text-navy-100 line-clamp-1 lg:text-base&quot;&#13;&#10;          &gt;&#13;&#10;            Message Header&#13;&#10;          &lt;/h5&gt;&#13;&#10;          &lt;button&#13;&#10;            data-notification-remove&#13;&#10;            class=&quot;btn size-7 rounded-full p-0 text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-4&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                stroke-width=&quot;2&quot;&#13;&#10;                d=&quot;M6 18L18 6M6 6l12 12&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;text-navy-100&quot;&gt;Lorem ipsum dolor sit amet, consectetur&lt;/p&gt;&#13;&#10;        &lt;div class=&quot;flex justify-end px-3 py-1&quot;&gt;&#13;&#10;          &lt;a href=&quot;#&quot; class=&quot;uppercase text-accent-light hover:underline&quot;&#13;&#10;            &gt;show&lt;/a&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/template&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
