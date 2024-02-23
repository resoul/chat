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
      Popover
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
      <li>Popover</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Popover -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Popover
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
          The Popover component is similar to tooltips. The difference is
          that the popover can contain much more content. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <div id="popover-wrapper1" class="flex">
            <button
                class="btn popper-ref bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Basic Popover
            </button>
            <div class="popper-root">
              <div class="popper-box max-w-xs">
                <div
                    class="rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700"
                >
                  <h3
                      class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
                  >
                    UI/UX Design
                  </h3>
                  <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                  <div class="mt-3 flex space-x-2">
                    <a
                        href="#"
                        class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                    >
                      Tag 2
                    </a>
                    <a
                        href="#"
                        class="tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                    >
                      Tag 3
                    </a>
                  </div>
                  <p
                      class="mt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet, elit.
                  </p>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
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
  &lt;div id=&quot;popover-wrapper1&quot; class=&quot;flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn popper-ref bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Basic Popover&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-box max-w-xs&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;h3&#13;&#10;            class=&quot;text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100&quot;&#13;&#10;          &gt;&#13;&#10;            UI/UX Design&#13;&#10;          &lt;/h3&gt;&#13;&#10;          &lt;p class=&quot;mt-2&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipisicing elit.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;mt-3 flex space-x-2&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 3&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;p class=&quot;mt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet, elit.&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;          &lt;svg&#13;&#10;            viewBox=&quot;0 0 16 9&quot;&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;absolute size-4&quot;&#13;&#10;            fill=&quot;currentColor&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;              d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;            /&gt;&#13;&#10;            &lt;path&#13;&#10;              class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;              d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;right-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        { name: &quot;flip&quot;, options: { fallbackPlacements: [&quot;bottom&quot;, &quot;top&quot;] } },&#13;&#10;        { name: &quot;preventOverflow&quot;, options: { padding: 10 } },&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 12],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    // Basic popover&#13;&#10;    new Popper(&quot;#popover-wrapper1&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Advanced Popover -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Advanced Popover
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
          The Popover component is similar to tooltips. The difference is
          that the popover can contain much more content. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <div id="popover-wrapper2" class="flex">
            <button
                class="popper-ref btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Lessons
            </button>
            <div class="popper-root">
              <div class="popper-box max-w-xs">
                <div
                    class="rounded-md border border-slate-150 bg-white py-3 px-4 dark:border-navy-600 dark:bg-navy-700"
                >
                  <h3
                      class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
                  >
                    Group Lesson
                  </h3>

                  <div class="mt-3">
                    <p
                        class="font-medium text-slate-600 dark:text-navy-100"
                    >
                      Social Media Marketing
                    </p>
                    <p class="mt-1 text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.
                    </p>
                  </div>
                  <div class="mt-4 flex flex-wrap -space-x-2">
                    <div class="avatar size-8 hover:z-10">
                      <img
                          class="rounded-full ring ring-white dark:ring-navy-700"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <div class="avatar size-8 hover:z-10">
                      <div
                          class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                      >
                        jd
                      </div>
                    </div>

                    <div class="avatar size-8 hover:z-10">
                      <img
                          class="rounded-full ring ring-white dark:ring-navy-700"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>

                    <div class="avatar size-8 hover:z-10">
                      <img
                          class="rounded-full ring ring-white dark:ring-navy-700"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                  </div>
                  <div class="mt-4 flex items-center justify-between">
                    <p class="flex items-center space-x-2">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5 text-slate-400 dark:text-navy-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span class="text-xs">25 May, 2022</span>
                    </p>
                    <button
                        class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5 rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
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
  &lt;div id=&quot;popover-wrapper2&quot; class=&quot;flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Lessons&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-box max-w-xs&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;rounded-md border border-slate-150 bg-white py-3 px-4 dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;h3&#13;&#10;            class=&quot;text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100&quot;&#13;&#10;          &gt;&#13;&#10;            Group Lesson&#13;&#10;          &lt;/h3&gt;&#13;&#10;&#13;&#10;          &lt;div class=&quot;mt-3&quot;&gt;&#13;&#10;            &lt;p class=&quot;font-medium text-slate-600 dark:text-navy-100&quot;&gt;&#13;&#10;              Social Media Marketing&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;p class=&quot;mt-1 text-xs&quot;&gt;&#13;&#10;              Lorem ipsum dolor sit amet consectetur adipisicing elit.&#13;&#10;            &lt;/p&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;mt-4 flex flex-wrap -space-x-2&quot;&gt;&#13;&#10;            &lt;div class=&quot;avatar size-8 hover:z-10&quot;&gt;&#13;&#10;              &lt;img&#13;&#10;                class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                src=&quot;images/200x200.png&quot;&#13;&#10;                alt=&quot;avatar&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;&#13;&#10;            &lt;div class=&quot;avatar size-8 hover:z-10&quot;&gt;&#13;&#10;              &lt;div&#13;&#10;                class=&quot;is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700&quot;&#13;&#10;              &gt;&#13;&#10;                jd&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;&#13;&#10;            &lt;div class=&quot;avatar size-8 hover:z-10&quot;&gt;&#13;&#10;              &lt;img&#13;&#10;                class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                src=&quot;images/200x200.png&quot;&#13;&#10;                alt=&quot;avatar&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;&#13;&#10;            &lt;div class=&quot;avatar size-8 hover:z-10&quot;&gt;&#13;&#10;              &lt;img&#13;&#10;                class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                src=&quot;images/200x200.png&quot;&#13;&#10;                alt=&quot;avatar&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;mt-4 flex items-center justify-between&quot;&gt;&#13;&#10;            &lt;p class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;size-4.5 text-slate-400 dark:text-navy-300&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  stroke-width=&quot;1.5&quot;&#13;&#10;                  d=&quot;M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;              &lt;span class=&quot;text-xs&quot;&gt;25 May, 2022&lt;/span&gt;&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;button&#13;&#10;              class=&quot;btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;size-5 rotate-45&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  stroke-width=&quot;2&quot;&#13;&#10;                  d=&quot;M7 11l5-5m0 0l5 5m-5-5v12&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;            &lt;/button&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;          &lt;svg&#13;&#10;            viewBox=&quot;0 0 16 9&quot;&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;absolute size-4&quot;&#13;&#10;            fill=&quot;currentColor&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;              d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;            /&gt;&#13;&#10;            &lt;path&#13;&#10;              class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;              d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;right-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        { name: &quot;flip&quot;, options: { fallbackPlacements: [&quot;bottom&quot;, &quot;top&quot;] } },&#13;&#10;        { name: &quot;preventOverflow&quot;, options: { padding: 10 } },&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 12],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    // Basic popover&#13;&#10;    new Popper(&quot;#popover-wrapper2&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Form Popover -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Form Popover
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
          The Popover component is similar to tooltips. The difference is
          that the popover can contain much more content. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <div id="popover-wrapper3" class="flex">
            <button
                class="popper-ref btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Choose Columns
            </button>
            <div class="popper-root">
              <div class="popper-box max-w-[16rem]">
                <div
                    class="rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700"
                >
                  <h3
                      class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
                  >
                    Select Columns
                  </h3>
                  <p class="mt-1 text-xs+">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <div
                      class="mt-4 flex flex-col space-y-4 text-slate-600 dark:text-navy-100"
                  >
                    <label class="inline-flex items-center space-x-2">
                      <input
                          checked
                          class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                          type="checkbox"
                      />
                      <span>ID</span>
                    </label>
                    <label class="inline-flex items-center space-x-2">
                      <input
                          checked
                          class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                          type="checkbox"
                      />
                      <span>Name</span>
                    </label>
                    <label class="inline-flex items-center space-x-2">
                      <input
                          checked
                          class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                          type="checkbox"
                      />
                      <span>Email</span>
                    </label>
                    <label class="inline-flex items-center space-x-2">
                      <input
                          class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                          type="checkbox"
                      />
                      <p>Address</p>
                    </label>
                  </div>
                  <div
                      class="my-4 h-px bg-slate-200 dark:bg-navy-500"
                  ></div>
                  <div
                      class="flex flex-col space-y-4 text-slate-600 dark:text-navy-100"
                  >
                    <label class="inline-flex items-center space-x-2">
                      <input
                          checked
                          class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                          type="checkbox"
                      />
                      <span>Created at</span>
                    </label>
                    <label class="inline-flex items-center space-x-2">
                      <input
                          class="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                          type="checkbox"
                      />
                      <span>Updated at</span>
                    </label>
                  </div>
                  <button
                      class="btn mt-4 h-8 w-full rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Apply
                  </button>
                </div>
                <div class="size-4" data-popper-arrow>
                  <svg
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute size-4"
                      fill="currentColor"
                  >
                    <path
                        class="text-slate-150 dark:text-navy-600"
                        d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                    />
                    <path
                        class="text-white dark:text-navy-700"
                        d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                    />
                  </svg>
                </div>
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
  &lt;div id=&quot;popover-wrapper3&quot; class=&quot;flex&quot;&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;popper-ref btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Choose Columns&#13;&#10;    &lt;/button&gt;&#13;&#10;    &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-box max-w-[16rem]&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;rounded-md border border-slate-150 bg-white p-4 dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;h3&#13;&#10;            class=&quot;text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100&quot;&#13;&#10;          &gt;&#13;&#10;            Select Columns&#13;&#10;          &lt;/h3&gt;&#13;&#10;          &lt;p class=&quot;mt-1 text-xs+&quot;&gt;Lorem ipsum dolor sit amet, consectetur.&lt;/p&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;mt-4 flex flex-col space-y-4 text-slate-600 dark:text-navy-100&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;              &lt;input&#13;&#10;                checked&#13;&#10;                class=&quot;form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;                type=&quot;checkbox&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;span&gt;ID&lt;/span&gt;&#13;&#10;            &lt;/label&gt;&#13;&#10;            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;              &lt;input&#13;&#10;                checked&#13;&#10;                class=&quot;form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;                type=&quot;checkbox&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;span&gt;Name&lt;/span&gt;&#13;&#10;            &lt;/label&gt;&#13;&#10;            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;              &lt;input&#13;&#10;                checked&#13;&#10;                class=&quot;form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;                type=&quot;checkbox&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;span&gt;Email&lt;/span&gt;&#13;&#10;            &lt;/label&gt;&#13;&#10;            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;              &lt;input&#13;&#10;                class=&quot;form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;                type=&quot;checkbox&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;p&gt;Address&lt;/p&gt;&#13;&#10;            &lt;/label&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;my-4 h-px bg-slate-200 dark:bg-navy-500&quot;&gt;&lt;/div&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;flex flex-col space-y-4 text-slate-600 dark:text-navy-100&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;              &lt;input&#13;&#10;                checked&#13;&#10;                class=&quot;form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;                type=&quot;checkbox&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;span&gt;Created at&lt;/span&gt;&#13;&#10;            &lt;/label&gt;&#13;&#10;            &lt;label class=&quot;inline-flex items-center space-x-2&quot;&gt;&#13;&#10;              &lt;input&#13;&#10;                class=&quot;form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent&quot;&#13;&#10;                type=&quot;checkbox&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;span&gt;Updated at&lt;/span&gt;&#13;&#10;            &lt;/label&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;btn mt-4 h-8 w-full rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;          &gt;&#13;&#10;            Apply&#13;&#10;          &lt;/button&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;          &lt;svg&#13;&#10;            viewBox=&quot;0 0 16 9&quot;&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;absolute size-4&quot;&#13;&#10;            fill=&quot;currentColor&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;              d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;            /&gt;&#13;&#10;            &lt;path&#13;&#10;              class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;              d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;right-start&quot;,&#13;&#10;      modifiers: [&#13;&#10;        { name: &quot;flip&quot;, options: { fallbackPlacements: [&quot;bottom&quot;, &quot;top&quot;] } },&#13;&#10;        { name: &quot;preventOverflow&quot;, options: { padding: 10 } },&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 12],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    // Basic popover&#13;&#10;    new Popper(&quot;#popover-wrapper3&quot;, &quot;.popper-ref&quot;, &quot;.popper-root&quot;, config);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Profile Popover -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Profile Popover
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
          The Popover component is similar to tooltips. The difference is
          that the popover can contain much more content. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <div
              class="flex flex-wrap justify-center -space-x-2 sm:justify-start"
          >
            <div id="popover-wrapper4" class="flex">
              <div class="popper-ref avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="popper-root">
                <div class="popper-box">
                  <div
                      class="w-48 rounded-md border border-slate-150 bg-white px-4 py-5 text-center dark:border-navy-600 dark:bg-navy-700"
                  >
                    <div class="avatar size-16">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                    <p
                        class="pt-2 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
                    >
                      John Doe
                    </p>
                    <a
                        href="#"
                        class="font-inter tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@johndoeaccount</a
                    >
                    <button
                        class="btn mt-4 h-8 rounded-full bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    >
                      Follow
                    </button>
                  </div>
                  <div class="size-4" data-popper-arrow>
                    <svg
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute size-4"
                        fill="currentColor"
                    >
                      <path
                          class="text-slate-150 dark:text-navy-600"
                          d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                      />
                      <path
                          class="text-white dark:text-navy-700"
                          d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="popover-wrapper5" class="flex">
              <div class="popper-ref avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="popper-root">
                <div class="popper-box">
                  <div
                      class="w-48 rounded-md border border-slate-150 bg-white px-4 py-5 text-center dark:border-navy-600 dark:bg-navy-700"
                  >
                    <div class="avatar size-16">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                    <p
                        class="pt-2 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
                    >
                      Sally Ramos
                    </p>
                    <a
                        href="#"
                        class="font-inter tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@sallyramos
                    </a>
                    <button
                        class="btn mt-4 h-8 rounded-full bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    >
                      Follow
                    </button>
                  </div>
                  <div class="size-4" data-popper-arrow>
                    <svg
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute size-4"
                        fill="currentColor"
                    >
                      <path
                          class="text-slate-150 dark:text-navy-600"
                          d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                      />
                      <path
                          class="text-white dark:text-navy-700"
                          d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="popover-wrapper6" class="flex">
              <div class="popper-ref avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="popper-root">
                <div class="popper-box">
                  <div
                      class="w-48 rounded-md border border-slate-150 bg-white px-4 py-5 text-center dark:border-navy-600 dark:bg-navy-700"
                  >
                    <div class="avatar size-16">
                      <img
                          class="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                    <p
                        class="pt-2 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100"
                    >
                      Katrina West
                    </p>
                    <a
                        href="#"
                        class="font-inter tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                    >@katrinawest
                    </a>
                    <button
                        class="btn mt-4 h-8 rounded-full bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    >
                      Follow
                    </button>
                  </div>
                  <div class="size-4" data-popper-arrow>
                    <svg
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute size-4"
                        fill="currentColor"
                    >
                      <path
                          class="text-slate-150 dark:text-navy-600"
                          d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                      />
                      <path
                          class="text-white dark:text-navy-700"
                          d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                      />
                    </svg>
                  </div>
                </div>
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
  &lt;div class=&quot;flex flex-wrap justify-center -space-x-2 sm:justify-start&quot;&gt;&#13;&#10;    &lt;div id=&quot;popover-wrapper4&quot; class=&quot;flex&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-ref avatar size-8 hover:z-10&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;          src=&quot;images/200x200.png&quot;&#13;&#10;          alt=&quot;avatar&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;        &lt;div class=&quot;popper-box&quot;&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;w-48 rounded-md border border-slate-150 bg-white px-4 py-5 text-center dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;div class=&quot;avatar size-16&quot;&gt;&#13;&#10;              &lt;img&#13;&#10;                class=&quot;rounded-full&quot;&#13;&#10;                src=&quot;images/200x200.png&quot;&#13;&#10;                alt=&quot;avatar&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;p&#13;&#10;              class=&quot;pt-2 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100&quot;&#13;&#10;            &gt;&#13;&#10;              John Doe&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;font-inter tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light&quot;&#13;&#10;              &gt;@johndoeaccount&lt;/a&#13;&#10;            &gt;&#13;&#10;            &lt;button&#13;&#10;              class=&quot;btn mt-4 h-8 rounded-full bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;            &gt;&#13;&#10;              Follow&#13;&#10;            &lt;/button&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;            &lt;svg&#13;&#10;              viewBox=&quot;0 0 16 9&quot;&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;absolute size-4&quot;&#13;&#10;              fill=&quot;currentColor&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;                d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;                d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div id=&quot;popover-wrapper5&quot; class=&quot;flex&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-ref avatar size-8 hover:z-10&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;          src=&quot;images/200x200.png&quot;&#13;&#10;          alt=&quot;avatar&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;        &lt;div class=&quot;popper-box&quot;&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;w-48 rounded-md border border-slate-150 bg-white px-4 py-5 text-center dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;div class=&quot;avatar size-16&quot;&gt;&#13;&#10;              &lt;img&#13;&#10;                class=&quot;rounded-full&quot;&#13;&#10;                src=&quot;images/200x200.png&quot;&#13;&#10;                alt=&quot;avatar&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;p&#13;&#10;              class=&quot;pt-2 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100&quot;&#13;&#10;            &gt;&#13;&#10;              Sally Ramos&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;font-inter tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light&quot;&#13;&#10;              &gt;@sallyramos&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;button&#13;&#10;              class=&quot;btn mt-4 h-8 rounded-full bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;            &gt;&#13;&#10;              Follow&#13;&#10;            &lt;/button&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;            &lt;svg&#13;&#10;              viewBox=&quot;0 0 16 9&quot;&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;absolute size-4&quot;&#13;&#10;              fill=&quot;currentColor&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;                d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;                d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div id=&quot;popover-wrapper6&quot; class=&quot;flex&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-ref avatar size-8 hover:z-10&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;          src=&quot;images/200x200.png&quot;&#13;&#10;          alt=&quot;avatar&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;        &lt;div class=&quot;popper-box&quot;&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;w-48 rounded-md border border-slate-150 bg-white px-4 py-5 text-center dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;div class=&quot;avatar size-16&quot;&gt;&#13;&#10;              &lt;img&#13;&#10;                class=&quot;rounded-full&quot;&#13;&#10;                src=&quot;images/200x200.png&quot;&#13;&#10;                alt=&quot;avatar&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;p&#13;&#10;              class=&quot;pt-2 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100&quot;&#13;&#10;            &gt;&#13;&#10;              Katrina West&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;font-inter tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light&quot;&#13;&#10;              &gt;@katrinawest&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;button&#13;&#10;              class=&quot;btn mt-4 h-8 rounded-full bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;            &gt;&#13;&#10;              Follow&#13;&#10;            &lt;/button&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;            &lt;svg&#13;&#10;              viewBox=&quot;0 0 16 9&quot;&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;absolute size-4&quot;&#13;&#10;              fill=&quot;currentColor&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;                d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;                d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;top&quot;,&#13;&#10;      modifiers: [&#13;&#10;        { name: &quot;preventOverflow&quot;, options: { padding: 10 } },&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 12],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    // Profile Popover 1&#13;&#10;    new Popper(&#13;&#10;      &quot;#popover-wrapper4&quot;,&#13;&#10;      &quot;.popper-ref&quot;,&#13;&#10;      &quot;.popper-root&quot;,&#13;&#10;      config,&#13;&#10;      &quot;hover&quot;&#13;&#10;    );&#13;&#10;&#13;&#10;    new Popper(&#13;&#10;      &quot;#popover-wrapper5&quot;,&#13;&#10;      &quot;.popper-ref&quot;,&#13;&#10;      &quot;.popper-root&quot;,&#13;&#10;      config,&#13;&#10;      &quot;hover&quot;&#13;&#10;    );&#13;&#10;&#13;&#10;    new Popper(&#13;&#10;      &quot;#popover-wrapper6&quot;,&#13;&#10;      &quot;.popper-ref&quot;,&#13;&#10;      &quot;.popper-root&quot;,&#13;&#10;      config,&#13;&#10;      &quot;hover&quot;&#13;&#10;    );&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Profile Popover -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Profile Popover
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
          The Popover component is similar to tooltips. The difference is
          that the popover can contain much more content. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <div
              class="flex flex-wrap justify-center -space-x-2 sm:justify-start"
          >
            <div id="popover-wrapper7" class="flex">
              <div class="popper-ref avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="popper-root">
                <div class="popper-box">
                  <div
                      class="w-72 rounded-md border border-slate-150 bg-white p-3 dark:border-navy-600 dark:bg-navy-700"
                  >
                    <div class="flex space-x-3">
                      <div class="avatar size-10">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <div
                          class="flex w-full items-start justify-between"
                      >
                        <div>
                          <p
                              class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                          >
                            Konnor G.
                          </p>
                          <p
                              class="text-xs text-primary line-clamp-1 dark:text-accent-light"
                          >
                            Web Developer
                          </p>
                        </div>
                        <div
                            class="badge h-5 space-x-1.5 rounded-full bg-success/10 px-1.5 text-success dark:bg-success/15"
                        >
                          <div
                              class="h-1.5 w-1.5 rounded-full bg-current"
                          ></div>
                          <span>Free</span>
                        </div>
                      </div>
                    </div>
                    <p
                        class="pt-2 text-xs text-slate-400 dark:text-navy-300"
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Consequuntur.
                    </p>
                    <div class="flex justify-end space-x-1 pt-4">
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </button>
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-4.5"
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
                    </div>
                  </div>
                  <div class="size-4" data-popper-arrow>
                    <svg
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute size-4"
                        fill="currentColor"
                    >
                      <path
                          class="text-slate-150 dark:text-navy-600"
                          d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                      />
                      <path
                          class="text-white dark:text-navy-700"
                          d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="popover-wrapper8" class="flex">
              <div class="popper-ref avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="popper-root">
                <div class="popper-box">
                  <div
                      class="w-72 rounded-md border border-slate-150 bg-white p-3 dark:border-navy-600 dark:bg-navy-700"
                  >
                    <div class="flex space-x-3">
                      <div class="avatar size-10">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <div
                          class="flex w-full items-start justify-between"
                      >
                        <div>
                          <p
                              class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                          >
                            John D.
                          </p>
                          <p
                              class="text-xs text-primary line-clamp-1 dark:text-accent-light"
                          >
                            UI/UX Designer
                          </p>
                        </div>
                        <div
                            class="badge h-5 space-x-1.5 rounded-full bg-error/10 px-1.5 text-error dark:bg-error/15"
                        >
                          <div
                              class="h-1.5 w-1.5 rounded-full bg-current"
                          ></div>
                          <span>Busy</span>
                        </div>
                      </div>
                    </div>
                    <p
                        class="pt-2 text-xs text-slate-400 dark:text-navy-300"
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Consequuntur.
                    </p>
                    <div class="flex justify-end space-x-1 pt-4">
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </button>
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-4.5"
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
                    </div>
                  </div>
                  <div class="size-4" data-popper-arrow>
                    <svg
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute size-4"
                        fill="currentColor"
                    >
                      <path
                          class="text-slate-150 dark:text-navy-600"
                          d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                      />
                      <path
                          class="text-white dark:text-navy-700"
                          d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div id="popover-wrapper9" class="flex">
              <div class="popper-ref avatar size-8 hover:z-10">
                <img
                    class="rounded-full ring ring-white dark:ring-navy-700"
                    src="/images/200x200.png"
                    alt="avatar"
                />
              </div>
              <div class="popper-root">
                <div class="popper-box">
                  <div
                      class="w-72 rounded-md border border-slate-150 bg-white p-3 dark:border-navy-600 dark:bg-navy-700"
                  >
                    <div class="flex space-x-3">
                      <div class="avatar size-10">
                        <img
                            class="rounded-full"
                            src="/images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <div
                          class="flex w-full items-start justify-between"
                      >
                        <div>
                          <p
                              class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                          >
                            Simon T.
                          </p>
                          <p
                              class="text-xs text-primary line-clamp-1 dark:text-accent-light"
                          >
                            Fronend Developer
                          </p>
                        </div>
                        <div
                            class="badge h-5 space-x-1.5 rounded-full bg-warning/10 px-1.5 text-warning dark:bg-warning/15"
                        >
                          <div
                              class="h-1.5 w-1.5 rounded-full bg-current"
                          ></div>
                          <span>At work</span>
                        </div>
                      </div>
                    </div>
                    <p
                        class="pt-2 text-xs text-slate-400 dark:text-navy-300"
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Consequuntur.
                    </p>
                    <div class="flex justify-end space-x-1 pt-4">
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </button>
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                      <button
                          class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-4.5"
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
                    </div>
                  </div>
                  <div class="size-4" data-popper-arrow>
                    <svg
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute size-4"
                        fill="currentColor"
                    >
                      <path
                          class="text-slate-150 dark:text-navy-600"
                          d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                      />
                      <path
                          class="text-white dark:text-navy-700"
                          d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                      />
                    </svg>
                  </div>
                </div>
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
  &lt;div class=&quot;flex flex-wrap justify-center -space-x-2 sm:justify-start&quot;&gt;&#13;&#10;    &lt;div id=&quot;popover-wrapper7&quot; class=&quot;flex&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-ref avatar size-8 hover:z-10&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;          src=&quot;images/200x200.png&quot;&#13;&#10;          alt=&quot;avatar&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;        &lt;div class=&quot;popper-box&quot;&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;w-72 rounded-md border border-slate-150 bg-white p-3 dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;div class=&quot;flex space-x-3&quot;&gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;              &lt;div class=&quot;flex w-full items-start justify-between&quot;&gt;&#13;&#10;                &lt;div&gt;&#13;&#10;                  &lt;p&#13;&#10;                    class=&quot;text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100&quot;&#13;&#10;                  &gt;&#13;&#10;                    Konnor G.&#13;&#10;                  &lt;/p&gt;&#13;&#10;                  &lt;p&#13;&#10;                    class=&quot;text-xs text-primary line-clamp-1 dark:text-accent-light&quot;&#13;&#10;                  &gt;&#13;&#10;                    Web Developer&#13;&#10;                  &lt;/p&gt;&#13;&#10;                &lt;/div&gt;&#13;&#10;                &lt;div&#13;&#10;                  class=&quot;badge h-5 space-x-1.5 rounded-full bg-success/10 px-1.5 text-success dark:bg-success/15&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;div class=&quot;h-1.5 w-1.5 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;                  &lt;span&gt;Free&lt;/span&gt;&#13;&#10;                &lt;/div&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;p class=&quot;pt-2 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;              Lorem ipsum dolor sit, amet consectetur adipisicing elit.&#13;&#10;              Consequuntur.&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;div class=&quot;flex justify-end space-x-1 pt-4&quot;&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;1.5&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;1.5&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;2&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;            &lt;svg&#13;&#10;              viewBox=&quot;0 0 16 9&quot;&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;absolute size-4&quot;&#13;&#10;              fill=&quot;currentColor&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;                d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;                d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div id=&quot;popover-wrapper8&quot; class=&quot;flex&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-ref avatar size-8 hover:z-10&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;          src=&quot;images/200x200.png&quot;&#13;&#10;          alt=&quot;avatar&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;        &lt;div class=&quot;popper-box&quot;&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;w-72 rounded-md border border-slate-150 bg-white p-3 dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;div class=&quot;flex space-x-3&quot;&gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;              &lt;div class=&quot;flex w-full items-start justify-between&quot;&gt;&#13;&#10;                &lt;div&gt;&#13;&#10;                  &lt;p&#13;&#10;                    class=&quot;text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100&quot;&#13;&#10;                  &gt;&#13;&#10;                    John D.&#13;&#10;                  &lt;/p&gt;&#13;&#10;                  &lt;p&#13;&#10;                    class=&quot;text-xs text-primary line-clamp-1 dark:text-accent-light&quot;&#13;&#10;                  &gt;&#13;&#10;                    UI/UX Designer&#13;&#10;                  &lt;/p&gt;&#13;&#10;                &lt;/div&gt;&#13;&#10;                &lt;div&#13;&#10;                  class=&quot;badge h-5 space-x-1.5 rounded-full bg-error/10 px-1.5 text-error dark:bg-error/15&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;div class=&quot;h-1.5 w-1.5 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;                  &lt;span&gt;Busy&lt;/span&gt;&#13;&#10;                &lt;/div&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;p class=&quot;pt-2 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;              Lorem ipsum dolor sit, amet consectetur adipisicing elit.&#13;&#10;              Consequuntur.&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;div class=&quot;flex justify-end space-x-1 pt-4&quot;&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;1.5&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;1.5&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;2&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;            &lt;svg&#13;&#10;              viewBox=&quot;0 0 16 9&quot;&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;absolute size-4&quot;&#13;&#10;              fill=&quot;currentColor&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;                d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;                d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div id=&quot;popover-wrapper9&quot; class=&quot;flex&quot;&gt;&#13;&#10;      &lt;div class=&quot;popper-ref avatar size-8 hover:z-10&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;          src=&quot;images/200x200.png&quot;&#13;&#10;          alt=&quot;avatar&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;popper-root&quot;&gt;&#13;&#10;        &lt;div class=&quot;popper-box&quot;&gt;&#13;&#10;          &lt;div&#13;&#10;            class=&quot;w-72 rounded-md border border-slate-150 bg-white p-3 dark:border-navy-600 dark:bg-navy-700&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;div class=&quot;flex space-x-3&quot;&gt;&#13;&#10;              &lt;div class=&quot;avatar size-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;              &lt;div class=&quot;flex w-full items-start justify-between&quot;&gt;&#13;&#10;                &lt;div&gt;&#13;&#10;                  &lt;p&#13;&#10;                    class=&quot;text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100&quot;&#13;&#10;                  &gt;&#13;&#10;                    Simon T.&#13;&#10;                  &lt;/p&gt;&#13;&#10;                  &lt;p&#13;&#10;                    class=&quot;text-xs text-primary line-clamp-1 dark:text-accent-light&quot;&#13;&#10;                  &gt;&#13;&#10;                    Fronend Developer&#13;&#10;                  &lt;/p&gt;&#13;&#10;                &lt;/div&gt;&#13;&#10;                &lt;div&#13;&#10;                  class=&quot;badge h-5 space-x-1.5 rounded-full bg-warning/10 px-1.5 text-warning dark:bg-warning/15&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;div class=&quot;h-1.5 w-1.5 rounded-full bg-current&quot;&gt;&lt;/div&gt;&#13;&#10;                  &lt;span&gt;At work&lt;/span&gt;&#13;&#10;                &lt;/div&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;p class=&quot;pt-2 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;              Lorem ipsum dolor sit, amet consectetur adipisicing elit.&#13;&#10;              Consequuntur.&#13;&#10;            &lt;/p&gt;&#13;&#10;            &lt;div class=&quot;flex justify-end space-x-1 pt-4&quot;&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;1.5&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;1.5&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;              &lt;button&#13;&#10;                class=&quot;btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;svg&#13;&#10;                  xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                  class=&quot;size-4.5&quot;&#13;&#10;                  fill=&quot;none&quot;&#13;&#10;                  viewBox=&quot;0 0 24 24&quot;&#13;&#10;                  stroke=&quot;currentColor&quot;&#13;&#10;                  stroke-width=&quot;2&quot;&#13;&#10;                &gt;&#13;&#10;                  &lt;path&#13;&#10;                    stroke-linecap=&quot;round&quot;&#13;&#10;                    stroke-linejoin=&quot;round&quot;&#13;&#10;                    d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;                  /&gt;&#13;&#10;                &lt;/svg&gt;&#13;&#10;              &lt;/button&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;          &lt;div class=&quot;size-4&quot; data-popper-arrow&gt;&#13;&#10;            &lt;svg&#13;&#10;              viewBox=&quot;0 0 16 9&quot;&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;absolute size-4&quot;&#13;&#10;              fill=&quot;currentColor&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-slate-150 dark:text-navy-600&quot;&#13;&#10;                d=&quot;M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z&quot;&#13;&#10;              /&gt;&#13;&#10;              &lt;path&#13;&#10;                class=&quot;text-white dark:text-navy-700&quot;&#13;&#10;                d=&quot;M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config = {&#13;&#10;      placement: &quot;top&quot;,&#13;&#10;      modifiers: [&#13;&#10;        { name: &quot;preventOverflow&quot;, options: { padding: 10 } },&#13;&#10;        {&#13;&#10;          name: &quot;offset&quot;,&#13;&#10;          options: {&#13;&#10;            offset: [0, 12],&#13;&#10;          },&#13;&#10;        },&#13;&#10;      ],&#13;&#10;    };&#13;&#10;&#13;&#10;    new Popper(&#13;&#10;      &quot;#popover-wrapper7&quot;,&#13;&#10;      &quot;.popper-ref&quot;,&#13;&#10;      &quot;.popper-root&quot;,&#13;&#10;      config,&#13;&#10;      &quot;hover&quot;&#13;&#10;    );&#13;&#10;&#13;&#10;    new Popper(&#13;&#10;      &quot;#popover-wrapper8&quot;,&#13;&#10;      &quot;.popper-ref&quot;,&#13;&#10;      &quot;.popper-root&quot;,&#13;&#10;      config,&#13;&#10;      &quot;hover&quot;&#13;&#10;    );&#13;&#10;&#13;&#10;    new Popper(&#13;&#10;      &quot;#popover-wrapper9&quot;,&#13;&#10;      &quot;.popper-ref&quot;,&#13;&#10;      &quot;.popper-root&quot;,&#13;&#10;      config,&#13;&#10;      &quot;hover&quot;&#13;&#10;    );&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
