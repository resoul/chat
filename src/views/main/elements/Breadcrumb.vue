<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Breadcrumb",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Breadcrumb
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
      <li>Breadcrumb</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic breadcrumb -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Breadcrumb
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
          Breadcrumbs consist of a list of links that help a user
          visualize a page's location within the hierarchical structure of
          a website. Check out code for detail of usage.
        </p>
        <div class="mt-4">
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Home</a
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
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
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Elements</a
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
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
            <li>Breadcrumb</li>
          </ul>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
      &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Home&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;svg&#13;&#10;        &#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Elements&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;svg&#13;&#10;        &#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;Breadcrumb&lt;/li&gt;&#13;&#10;  &lt;/ul&gt;
                    </code>
                  </pre>
      </div>
    </div>

    <!-- Breadcrumbs Separators -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Separators
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
          Separators can be svg or any HTML chars. Check out code for
          detail of usage.
        </p>
        <div class="mt-4 space-y-4">
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Home</a
              >
              <span> &DoubleRightArrow; </span>
            </li>
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Elements</a
              >
              <span> &DoubleRightArrow; </span>
            </li>
            <li>Breadcrumb</li>
          </ul>
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Home</a
              >
              <span> &centerdot; </span>
            </li>
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Elements</a
              >
              <span> &centerdot; </span>
            </li>
            <li>Breadcrumb</li>
          </ul>
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Home</a
              >
              <span class="text-xs font-light"> | </span>
            </li>
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Elements</a
              >
              <span class="text-xs font-light"> | </span>
            </li>
            <li>Breadcrumb</li>
          </ul>
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Home</a
              >
              <span class="text-xs font-light"> / </span>
            </li>
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Elements</a
              >
              <span class="text-xs font-light"> / </span>
            </li>
            <li>Breadcrumb</li>
          </ul>
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Home</a
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </li>
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >Elements</a
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </li>
            <li>Breadcrumb</li>
          </ul>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
      &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Home&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span&gt; &amp;DoubleRightArrow; &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Elements&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span&gt; &amp;DoubleRightArrow; &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;Breadcrumb&lt;/li&gt;&#13;&#10;  &lt;/ul&gt;&#13;&#10;  &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Home&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span&gt; &amp;centerdot; &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Elements&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span&gt; &amp;centerdot; &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;Breadcrumb&lt;/li&gt;&#13;&#10;  &lt;/ul&gt;&#13;&#10;  &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Home&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span class=&quot;text-xs font-light&quot;&gt; | &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Elements&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span class=&quot;text-xs font-light&quot;&gt; | &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;Breadcrumb&lt;/li&gt;&#13;&#10;  &lt;/ul&gt;&#13;&#10;  &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Home&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span class=&quot;text-xs font-light&quot;&gt; / &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Elements&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;span class=&quot;text-xs font-light&quot;&gt; / &lt;/span&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;Breadcrumb&lt;/li&gt;&#13;&#10;  &lt;/ul&gt;&#13;&#10;  &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Home&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M13 7l5 5m0 0l-5 5m5-5H6&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;        &gt;Elements&lt;/a&#13;&#10;      &gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M13 7l5 5m0 0l-5 5m5-5H6&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;Breadcrumb&lt;/li&gt;&#13;&#10;  &lt;/ul&gt;&#13;&#10;
                    </code>
                  </pre>
      </div>
    </div>

    <!-- Breadcrumbs with Icon -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          With Icon
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
          Breadcrumb can have an icon. Check out code for detail of usage.
        </p>
        <div class="mt-4 space-y-4">
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
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
            <li class="flex items-center space-x-2">
              <a
                  class="flex items-center space-x-1.5 text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span>Elements</span>
              </a>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
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
            <li>
              <div class="flex items-center space-x-1.5">
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
                <span>Calendar</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
      &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;            d=&quot;M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;      &lt;svg&#13;&#10;        &#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;flex items-center space-x-1.5 text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;            d=&quot;M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;        &lt;span&gt;Elements&lt;/span&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;      &lt;svg&#13;&#10;        &#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;div class=&quot;flex items-center space-x-1.5&quot;&gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5 text-slate-400 dark:text-navy-300&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;            d=&quot;M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;        &lt;span&gt;Calendar&lt;/span&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ul&gt;</code>
                  </pre>
      </div>
    </div>

    <!-- Bordered Breadcrumbs -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Bordered Breadcrumb
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
          Breadcrumb can be bordered. Check out code for detail of usage.
        </p>
        <div class="mt-4 space-y-4">
          <ul class="flex flex-wrap items-center space-x-2">
            <li class="flex items-center space-x-2">
              <a
                  class="rounded-lg border border-slate-200 px-1.5 py-1 leading-none text-primary transition-colors hover:text-primary-focus dark:border-navy-500 dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
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
            <li class="flex items-center space-x-2">
              <a
                  class="flex items-center space-x-1.5 rounded-lg border border-slate-200 py-1 px-1.5 leading-none text-primary transition-colors hover:text-primary-focus dark:border-navy-500 dark:text-accent-light dark:hover:text-accent"
                  href="#"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span>Elements</span>
              </a>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3.5"
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
            <li>
              <div class="flex items-center space-x-1.5">
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
                <span>Calendar</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
      &lt;ul class=&quot;flex flex-wrap items-center space-x-2&quot;&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;rounded-lg border border-slate-200 px-1.5 py-1 leading-none text-primary transition-colors hover:text-primary-focus dark:border-navy-500 dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;            d=&quot;M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;      &lt;svg&#13;&#10;        &#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;a&#13;&#10;        class=&quot;flex items-center space-x-1.5 rounded-lg border border-slate-200 py-1 px-1.5 leading-none text-primary transition-colors hover:text-primary-focus dark:border-navy-500 dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;        href=&quot;#&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;            d=&quot;M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;        &lt;span&gt;Elements&lt;/span&gt;&#13;&#10;      &lt;/a&gt;&#13;&#10;      &lt;svg&#13;&#10;        &#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-3.5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M9 5l7 7-7 7&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li&gt;&#13;&#10;      &lt;div class=&quot;flex items-center space-x-1.5&quot;&gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-4.5 text-slate-400 dark:text-navy-300&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;            d=&quot;M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;        &lt;span&gt;Calendar&lt;/span&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ul&gt;</code>
                  </pre>
      </div>
    </div>
  </div>
</template>