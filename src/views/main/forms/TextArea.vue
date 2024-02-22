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
      Textarea
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
      <li>Textarea</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Textarea -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Textarea
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
          The Textarea defines a multi-line text input control. The
          Textarea is often used in a form, to collect user inputs like
          comments or reviews.
        </p>
        <div class="mt-5">
          <label class="block">
                  <textarea
                      rows="4"
                      placeholder=" Enter Text"
                      class="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  ></textarea>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;textarea&#13;&#10;      rows=&quot;4&quot;&#13;&#10;      placeholder=&quot; Enter Text&quot;&#13;&#10;      class=&quot;form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;    &gt;&lt;/textarea&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Filled Textarea -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Filled Textarea
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
          The Textarea can be filled. Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
                  <textarea
                      rows="4"
                      placeholder=" Enter Text"
                      class="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"
                  ></textarea>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;textarea&#13;&#10;      rows=&quot;4&quot;&#13;&#10;      placeholder=&quot; Enter Text&quot;&#13;&#10;      class=&quot;form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300&quot;&#13;&#10;    &gt;&lt;/textarea&gt;&#13;&#10;  &lt;/label&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Resizeabele Textarea -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Resizeabele Textarea
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
          The textarea can be resizeabele. Check out code for detail of
          usage.
        </p>
        <div class="mt-5">
          <label class="block">
                  <textarea
                      rows="4"
                      placeholder=" Enter Text"
                      class="form-textarea w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  ></textarea>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;textarea&#13;&#10;      rows=&quot;4&quot;&#13;&#10;      placeholder=&quot; Enter Text&quot;&#13;&#10;      class=&quot;form-textarea w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;    &gt;&lt;/textarea&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Disabled Textarea -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Disabled Textarea
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
          The textarea have their own style when disabled. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <label class="block">
                  <textarea
                      disabled
                      rows="4"
                      placeholder=" Enter Text"
                      class="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600"
                  ></textarea>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;textarea&#13;&#10;      disabled&#13;&#10;      rows=&quot;4&quot;&#13;&#10;      placeholder=&quot; Enter Text&quot;&#13;&#10;      class=&quot;form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600&quot;&#13;&#10;    &gt;&lt;/textarea&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- With Header -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          With Header
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
          The textare can have header. Check out code for detail of usage.
        </p>
        <div
            class="mt-5 rounded-lg border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400"
        >
          <div class="flex justify-between">
            <label class="block w-full">
              <input
                  type="text"
                  class="form-input w-full bg-transparent p-3 text-lg font-medium placeholder:text-slate-400/70"
                  placeholder="Title"
              />
            </label>
            <div class="p-2">
              <button
                  class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
          </div>
          <label class="block">
                  <textarea
                      rows="5"
                      placeholder="Enter Text"
                      class="form-textarea w-full resize-none bg-transparent p-3 pt-0 placeholder:text-slate-400/70"
                  ></textarea>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;rounded-lg border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;flex justify-between&quot;&gt;&#13;&#10;      &lt;label class=&quot;block w-full&quot;&gt;&#13;&#10;        &lt;input&#13;&#10;          type=&quot;text&quot;&#13;&#10;          class=&quot;form-input w-full bg-transparent p-3 text-lg font-medium placeholder:text-slate-400/70&quot;&#13;&#10;          placeholder=&quot;Title&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/label&gt;&#13;&#10;      &lt;div class=&quot;p-2&quot;&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;svg&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;size-5&quot;&#13;&#10;            fill=&quot;none&quot;&#13;&#10;            viewBox=&quot;0 0 24 24&quot;&#13;&#10;            stroke=&quot;currentColor&quot;&#13;&#10;            stroke-width=&quot;2&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              stroke-linecap=&quot;round&quot;&#13;&#10;              stroke-linejoin=&quot;round&quot;&#13;&#10;              d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;        &lt;/button&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;label class=&quot;block&quot;&gt;&#13;&#10;      &lt;textarea&#13;&#10;        rows=&quot;5&quot;&#13;&#10;        placeholder=&quot;Enter Text&quot;&#13;&#10;        class=&quot;form-textarea w-full resize-none bg-transparent p-3 pt-0 placeholder:text-slate-400/70&quot;&#13;&#10;      &gt;&lt;/textarea&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- With Footer -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          With Footer
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
          The textare can have footer. Check out code for detail of usage.
        </p>
        <div class="mt-5 flex space-x-4 overflow-x-auto">
          <div class="avatar size-12">
            <img
                class="rounded-full"
                src="images/200x200.png"
                alt="avatar"
            />
            <div
                class="absolute right-0 size-3.5 rounded-full border-2 border-white bg-info dark:border-navy-700"
            ></div>
          </div>
          <div
              class="w-full rounded-xl rounded-tl-none border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400"
          >
            <label class="block">
                    <textarea
                        rows="5"
                        placeholder="Write a comment"
                        class="form-textarea w-full resize-none bg-transparent p-3 pb-0 placeholder:text-slate-400/70"
                    ></textarea>
            </label>
            <div class="flex justify-between p-2.5">
              <div class="flex items-end space-x-1">
                <button
                    class="btn -ml-1 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <button
                  class="btn rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex space-x-4 overflow-x-auto&quot;&gt;&#13;&#10;    &lt;div class=&quot;avatar size-12&quot;&gt;&#13;&#10;      &lt;img&#13;&#10;        class=&quot;rounded-full&quot;&#13;&#10;        src=&quot;images/200x200.png&quot;&#13;&#10;        alt=&quot;avatar&quot;&#13;&#10;      /&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;absolute right-0 size-3.5 rounded-full border-2 border-white bg-info dark:border-navy-700&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;w-full rounded-xl rounded-tl-none border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;label class=&quot;block&quot;&gt;&#13;&#10;        &lt;textarea&#13;&#10;          rows=&quot;5&quot;&#13;&#10;          placeholder=&quot;Write a comment&quot;&#13;&#10;          class=&quot;form-textarea w-full resize-none bg-transparent p-3 pb-0 placeholder:text-slate-400/70&quot;&#13;&#10;        &gt;&lt;/textarea&gt;&#13;&#10;      &lt;/label&gt;&#13;&#10;      &lt;div class=&quot;flex justify-between p-2.5&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex items-end space-x-1&quot;&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;btn -ml-1 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;btn rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;        &gt;&#13;&#10;          Comment&#13;&#10;        &lt;/button&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- With Header & Footer -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          With Header & Footer
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
          The textare can have header and footer. Check out code for
          detail of usage.
        </p>
        <div
            class="mt-5 rounded-lg border border-slate-300 transition-colors duration-200 focus-within:!border-primary hover:border-slate-400 dark:border-navy-450 dark:focus-within:!border-accent dark:hover:border-navy-400"
        >
          <div class="flex justify-between">
            <label class="block w-full">
              <input
                  type="text"
                  class="form-input w-full bg-transparent p-3 text-lg font-medium placeholder:text-slate-400/70"
                  placeholder="Title"
              />
            </label>
            <div class="p-2">
              <button
                  class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
            </div>
          </div>
          <label>
                  <textarea
                      rows="5"
                      placeholder="Write the post"
                      class="form-textarea w-full resize-none bg-transparent p-3 py-0 placeholder:text-slate-400/70"
                  ></textarea>
          </label>
          <div class="flex justify-between p-2.5">
            <div class="flex items-end space-x-1">
              <button
                  class="btn -ml-1 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <button
                  class="btn -ml-1 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </button>
            </div>
            <button
                class="btn rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:shadow-accent/50 dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Save Post
            </button>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex justify-between&quot;&gt;&#13;&#10;    &lt;label class=&quot;block w-full&quot;&gt;&#13;&#10;      &lt;input&#13;&#10;        type=&quot;text&quot;&#13;&#10;        class=&quot;form-input w-full bg-transparent p-3 text-lg font-medium placeholder:text-slate-400/70&quot;&#13;&#10;        placeholder=&quot;Title&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;    &lt;div class=&quot;p-2&quot;&gt;&#13;&#10;      &lt;button&#13;&#10;        class=&quot;btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;2&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/button&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;  &lt;label&gt;&#13;&#10;    &lt;textarea&#13;&#10;      rows=&quot;5&quot;&#13;&#10;      placeholder=&quot;Write the post&quot;&#13;&#10;      class=&quot;form-textarea w-full resize-none bg-transparent p-3 py-0 placeholder:text-slate-400/70&quot;&#13;&#10;    &gt;&lt;/textarea&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;  &lt;div class=&quot;flex justify-between p-2.5&quot;&gt;&#13;&#10;    &lt;div class=&quot;flex items-end space-x-1&quot;&gt;&#13;&#10;      &lt;button&#13;&#10;        class=&quot;btn -ml-1 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;1.5&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13&quot;&#13;&#10;          &gt;&lt;/path&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/button&gt;&#13;&#10;      &lt;button&#13;&#10;        class=&quot;btn -ml-1 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;svg&#13;&#10;          xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;          class=&quot;size-5&quot;&#13;&#10;          fill=&quot;none&quot;&#13;&#10;          viewBox=&quot;0 0 24 24&quot;&#13;&#10;          stroke=&quot;currentColor&quot;&#13;&#10;          stroke-width=&quot;1.5&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;path&#13;&#10;            stroke-linecap=&quot;round&quot;&#13;&#10;            stroke-linejoin=&quot;round&quot;&#13;&#10;            d=&quot;M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/svg&gt;&#13;&#10;      &lt;/button&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;button&#13;&#10;      class=&quot;btn rounded-md bg-primary px-4 text-xs+ font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:shadow-accent/50 dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Save Post&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>
  </div>
</template>
