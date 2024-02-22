<script>
import Forms from "@/views/main/forms/Forms.vue";

export default {
  extends: Forms
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Input File
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Forms</a
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
      <li>Input File</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Input File -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Input File
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
      <div class="max-w-xl">
        <p>
          Input elements with type
          <code class="inline-code">"file"</code> let the user choose one
          or more files from their device storage. Once chosen, the files
          can be uploaded to a server using form submission.
        </p>
        <div class="inline-space mt-5 flex flex-wrap">
          <label
              class="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <input
                tabindex="-1"
                type="file"
                class="pointer-events-none absolute inset-0 h-full w-full opacity-0"
            />
            <span class="flex items-center space-x-2">
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
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <span>Choose File</span>
                  </span>
          </label>
          <label
              class="btn relative bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <input
                tabindex="-1"
                type="file"
                class="pointer-events-none absolute inset-0 h-full w-full opacity-0"
            />
            <span class="flex items-center space-x-2">
                    <i class="fa-solid fa-cloud-arrow-up text-base"></i>
                    <span>Choose File</span>
                  </span>
          </label>
          <label
              class="btn border border-slate-300 font-medium text-slate-600 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <input
                tabindex="-1"
                type="file"
                class="pointer-events-none absolute inset-0 h-full w-full opacity-0"
            />
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
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </label>
          <label
              class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus active:bg-info-focus/90"
          >
            <input
                tabindex="-1"
                type="file"
                class="pointer-events-none absolute inset-0 h-full w-full opacity-0"
            />
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label&#13;&#10;    class=&quot;btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;input&#13;&#10;      tabindex=&quot;-1&quot;&#13;&#10;      type=&quot;file&quot;&#13;&#10;      class=&quot;pointer-events-none absolute inset-0 h-full w-full opacity-0&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;div class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;svg&#13;&#10;        xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;        class=&quot;size-5&quot;&#13;&#10;        fill=&quot;none&quot;&#13;&#10;        viewBox=&quot;0 0 24 24&quot;&#13;&#10;        stroke=&quot;currentColor&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;path&#13;&#10;          stroke-linecap=&quot;round&quot;&#13;&#10;          stroke-linejoin=&quot;round&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;          d=&quot;M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/svg&gt;&#13;&#10;      &lt;span&gt;Choose File&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label&#13;&#10;    class=&quot;btn relative bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;input&#13;&#10;      tabindex=&quot;-1&quot;&#13;&#10;      type=&quot;file&quot;&#13;&#10;      class=&quot;pointer-events-none absolute inset-0 h-full w-full opacity-0&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;div class=&quot;flex items-center space-x-2&quot;&gt;&#13;&#10;      &lt;i class=&quot;fa-solid fa-cloud-arrow-up text-base&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;span&gt;Choose File&lt;/span&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label&#13;&#10;    class=&quot;btn border border-slate-300 font-medium text-slate-600 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;input&#13;&#10;      tabindex=&quot;-1&quot;&#13;&#10;      type=&quot;file&quot;&#13;&#10;      class=&quot;pointer-events-none absolute inset-0 h-full w-full opacity-0&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;label&#13;&#10;    class=&quot;btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus hover:shadow-lg hover:shadow-info/50 focus:bg-info-focus active:bg-info-focus/90&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;input&#13;&#10;      tabindex=&quot;-1&quot;&#13;&#10;      type=&quot;file&quot;&#13;&#10;      class=&quot;pointer-events-none absolute inset-0 h-full w-full opacity-0&quot;&#13;&#10;    /&gt;&#13;&#10;    &lt;svg&#13;&#10;      xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;      class=&quot;size-5&quot;&#13;&#10;      fill=&quot;none&quot;&#13;&#10;      viewBox=&quot;0 0 24 24&quot;&#13;&#10;      stroke=&quot;currentColor&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;path&#13;&#10;        stroke-linecap=&quot;round&quot;&#13;&#10;        stroke-linejoin=&quot;round&quot;&#13;&#10;        stroke-width=&quot;2&quot;&#13;&#10;        d=&quot;M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/svg&gt;&#13;&#10;  &lt;/label&gt;
                </code>
              </pre>
      </div>
    </div>

    <!-- Basic Filepond -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Filepond
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
      <div class="max-w-xl">
        <p>
          Filepond a JavaScript library that can upload anything you throw
          at it, optimizes images for faster uploads, and offers a great,
          accessible, silky smooth user experience. You can check the
          plugin documentation on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/pqina/filepond"
          >Github.</a
          >
        </p>
        <div class="mt-5">
          <div class="filepond fp-bordered">
            <input id="filepond1" type="file" multiple />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;filepond fp-bordered&quot;&gt;&#13;&#10;    &lt;input id=&quot;filepond1&quot; type=&quot;file&quot; multiple /&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const filepond1 = document.querySelector(&quot;#filepond1&quot;);&#13;&#10;    filepond1._filepond = FilePond.create(filepond1);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Filled Filepond -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Filled Filepond
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
      <div class="max-w-xl">
        <p>
          Filepond a JavaScript library that can upload anything you throw
          at it, optimizes images for faster uploads, and offers a great,
          accessible, silky smooth user experience. You can check the
          plugin documentation on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/pqina/filepond"
          >Github.</a
          >
        </p>
        <div class="mt-5">
          <div class="filepond fp-bg-filled">
            <input id="filepond2" type="file" multiple />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;filepond fp-bg-filled&quot;&gt;&#13;&#10;    &lt;input id=&quot;filepond2&quot; type=&quot;file&quot; multiple /&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const filepond2 = document.querySelector(&quot;#filepond2&quot;);&#13;&#10;    filepond2._filepond = FilePond.create(filepond2);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Filled & Bordered -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Filled & Bordered
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
      <div class="max-w-xl">
        <p>
          Filepond a JavaScript library that can upload anything you throw
          at it, optimizes images for faster uploads, and offers a great,
          accessible, silky smooth user experience. You can check the
          plugin documentation on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/pqina/filepond"
          >Github.</a
          >
        </p>
        <div class="mt-5">
          <div class="filepond fp-bordered fp-bg-filled">
            <input id="filepond3" type="file" multiple />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;filepond fp-bordered fp-bg-filled&quot;&gt;&#13;&#10;    &lt;input id=&quot;filepond3&quot; type=&quot;file&quot; multiple /&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const filepond3 = document.querySelector(&quot;#filepond3&quot;);&#13;&#10;    filepond3._filepond = FilePond.create(filepond3);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Two Grid -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Two Grid
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
      <div class="max-w-xl">
        <p>
          Filepond a JavaScript library that can upload anything you throw
          at it, optimizes images for faster uploads, and offers a great,
          accessible, silky smooth user experience. You can check the
          plugin documentation on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/pqina/filepond"
          >Github.</a
          >
        </p>
        <div class="mt-5">
          <div class="filepond fp-grid fp-bordered [--fp-grid:2]">
            <input id="filepond4" type="file" multiple />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;filepond fp-grid fp-bordered [--fp-grid:2]&quot;&gt;&#13;&#10;    &lt;input id=&quot;filepond4&quot; type=&quot;file&quot; multiple /&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const filepond4 = document.querySelector(&quot;#filepond4&quot;);&#13;&#10;    filepond4._filepond = FilePond.create(filepond4);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Three Grid -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Three Grid
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
      <div class="max-w-xl">
        <p>
          Filepond a JavaScript library that can upload anything you throw
          at it, optimizes images for faster uploads, and offers a great,
          accessible, silky smooth user experience. You can check the
          plugin documentation on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/pqina/filepond"
          >Github.</a
          >
        </p>
        <div class="mt-5">
          <div class="filepond fp-grid fp-bordered [--fp-grid:3]">
            <input id="filepond5" type="file" multiple />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;filepond fp-grid fp-bordered [--fp-grid:3]&quot;&gt;&#13;&#10;    &lt;input id=&quot;filepond5&quot; type=&quot;file&quot; multiple /&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const filepond5 = document.querySelector(&quot;#filepond5&quot;);&#13;&#10;    filepond5._filepond = FilePond.create(filepond5);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Four Grid -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Four Grid
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
      <div class="max-w-xl">
        <p>
          Filepond a JavaScript library that can upload anything you throw
          at it, optimizes images for faster uploads, and offers a great,
          accessible, silky smooth user experience. You can check the
          plugin documentation on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/pqina/filepond"
          >Github.</a
          >
        </p>
        <div class="mt-5">
          <div class="filepond fp-grid fp-bordered [--fp-grid:4]">
            <input id="filepond6" type="file" multiple />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;filepond fp-grid fp-bordered [--fp-grid:4]&quot;&gt;&#13;&#10;    &lt;input id=&quot;filepond6&quot; type=&quot;file&quot; multiple /&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const filepond6 = document.querySelector(&quot;#filepond6&quot;);&#13;&#10;    filepond6._filepond = FilePond.create(filepond6);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Circle Filepond -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Circle Filepond
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
      <div class="max-w-xl">
        <p>
          Filepond a JavaScript library that can upload anything you throw
          at it, optimizes images for faster uploads, and offers a great,
          accessible, silky smooth user experience. You can check the
          plugin documentation on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/pqina/filepond"
          >Github.</a
          >
        </p>
        <div class="inline-space mt-5 flex flex-wrap items-end">
          <div class="filepond fp-bordered label-icon w-28">
            <input
                type="file"
                id="filepond7"
                accept="image/png, image/jpeg, image/gif"
            />
          </div>
          <div class="filepond fp-bordered label-icon w-24">
            <input
                type="file"
                id="filepond8"
                accept="image/png, image/jpeg, image/gif"
            />
          </div>
          <div class="filepond fp-bg-filled label-icon w-20">
            <input
                type="file"
                id="filepond9"
                accept="image/png, image/jpeg, image/gif"
            />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex flex-wrap items-end&quot;&gt;&#13;&#10;    &lt;div class=&quot;filepond fp-bordered label-icon w-28&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        type=&quot;file&quot;&#13;&#10;        id=&quot;filepond7&quot;&#13;&#10;        accept=&quot;image/png, image/jpeg, image/gif&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;filepond fp-bordered label-icon w-24&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        type=&quot;file&quot;&#13;&#10;        id=&quot;filepond8&quot;&#13;&#10;        accept=&quot;image/png, image/jpeg, image/gif&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;filepond fp-bg-filled label-icon w-20&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        type=&quot;file&quot;&#13;&#10;        id=&quot;filepond9&quot;&#13;&#10;        accept=&quot;image/png, image/jpeg, image/gif&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config7 = {&#13;&#10;      stylePanelAspectRatio: &quot;1:1&quot;,&#13;&#10;      stylePanelLayout: &quot;compact circle&quot;,&#13;&#10;      labelIdle: `&lt;svg xmlns=&apos;http://www.w3.org/2000/svg&apos; class=&apos;size-8&apos; fill=&apos;none&apos; viewbox=&apos;0 0 24 24&apos; stroke=&apos;currentColor&apos;&gt;&#13;&#10;      &lt;path stroke-linecap=&apos;round&apos; stroke-linejoin=&apos;round&apos; stroke-width=&apos;2&apos; d=&apos;M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12&apos;/&gt;&#13;&#10;    &lt;/svg&gt;`,&#13;&#10;    };&#13;&#10;&#13;&#10;    const filepond7 = document.querySelector(&quot;#filepond7&quot;);&#13;&#10;    filepond7._filepond = FilePond.create(filepond7, config7);&#13;&#10;&#13;&#10;    const config8 = {&#13;&#10;      stylePanelAspectRatio: &quot;1:1&quot;,&#13;&#10;      stylePanelLayout: &quot;compact circle&quot;,&#13;&#10;      labelIdle: `&lt;svg xmlns=&apos;http://www.w3.org/2000/svg&apos; class=&apos;size-8&apos; fill=&apos;none&apos; viewbox=&apos;0 0 24 24&apos; stroke=&apos;currentColor&apos;&gt;&#13;&#10;      &lt;path stroke-linecap=&apos;round&apos; stroke-linejoin=&apos;round&apos; stroke-width=&apos;2&apos; d=&apos;M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12&apos;/&gt;&#13;&#10;    &lt;/svg&gt;`,&#13;&#10;    };&#13;&#10;&#13;&#10;    const filepond8 = document.querySelector(&quot;#filepond8&quot;);&#13;&#10;    filepond8._filepond = FilePond.create(filepond8, config8);&#13;&#10;&#13;&#10;    const config9 = {&#13;&#10;      stylePanelAspectRatio: &quot;1:1&quot;,&#13;&#10;      stylePanelLayout: &quot;compact circle&quot;,&#13;&#10;      labelIdle: `&lt;svg xmlns=&apos;http://www.w3.org/2000/svg&apos; class=&apos;size-8&apos; fill=&apos;none&apos; viewbox=&apos;0 0 24 24&apos; stroke=&apos;currentColor&apos;&gt;&#13;&#10;      &lt;path stroke-linecap=&apos;round&apos; stroke-linejoin=&apos;round&apos; stroke-width=&apos;2&apos; d=&apos;M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12&apos;/&gt;&#13;&#10;    &lt;/svg&gt;`,&#13;&#10;    };&#13;&#10;&#13;&#10;    const filepond9 = document.querySelector(&quot;#filepond9&quot;);&#13;&#10;    filepond9._filepond = FilePond.create(filepond9, config9);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
