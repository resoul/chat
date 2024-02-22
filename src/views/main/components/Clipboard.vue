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
      Clipboard
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
      <li>Clipboard</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Usage -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Usage
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
          <code class="inline-code">$clipboard</code> magic function that
          can be used to copy data to the user's clipboard. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <div
              class="alert flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-white dark:bg-accent sm:px-5"
          >
            <p id="clipboardContent1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button
                id="getContent1"
                class="btn h-6 shrink-0 rounded bg-white/20 px-2 text-xs text-white active:bg-white/25"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;alert flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-white dark:bg-accent sm:px-5&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;p id=&quot;clipboardContent1&quot;&gt;Lorem ipsum dolor sit amet consectetur.&lt;/p&gt;&#13;&#10;    &lt;button&#13;&#10;      id=&quot;getContent1&quot;&#13;&#10;      class=&quot;btn h-6 shrink-0 rounded bg-white/20 px-2 text-xs text-white active:bg-white/25&quot;&#13;&#10;    &gt;&#13;&#10;      Copy&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const onSuccess = () =&gt;&#13;&#10;      $notification({ text: &quot;Text Copied&quot;, variant: &quot;success&quot; });&#13;&#10;&#13;&#10;    const onError = () =&gt; $notification({ text: &quot;Error&quot;, variant: &quot;error&quot; });&#13;&#10;&#13;&#10;    const contentEl = document.querySelector(&quot;#clipboardContent1&quot;);&#13;&#10;&#13;&#10;    const copyBtn = document.querySelector(&quot;#getContent1&quot;);&#13;&#10;&#13;&#10;    copyBtn.addEventListener(&quot;click&quot;, () =&gt; {&#13;&#10;      $clipboard({&#13;&#10;        content: contentEl.innerText,&#13;&#10;        success: onSuccess,&#13;&#10;        error: onError,&#13;&#10;      });&#13;&#10;    });&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Advanced Usage -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Advanced Usage
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
          <code class="inline-code">$clipboard</code> magic function that
          can be used to copy data to the user's clipboard. Check out code
          for detail of usage.
        </p>
        <div class="mt-5">
          <div class="flex -space-x-px">
            <input
                id="clipboardContent2"
                class="form-input w-full rounded-l-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter text"
                type="text"
            />

            <button
                id="getContent2"
                class="btn z-2 rounded-l-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;input&#13;&#10;      id=&quot;clipboardContent2&quot;&#13;&#10;      class=&quot;form-input w-full rounded-l-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Enter text&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;&#13;&#10;    &lt;button&#13;&#10;      id=&quot;getContent2&quot;&#13;&#10;      class=&quot;btn z-2 rounded-l-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90&quot;&#13;&#10;    &gt;&#13;&#10;      Copy&#13;&#10;    &lt;/button&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const onSuccess = () =&gt;&#13;&#10;      $notification({ text: &quot;Text Copied&quot;, variant: &quot;success&quot; });&#13;&#10;&#13;&#10;    const onError = () =&gt; $notification({ text: &quot;Error&quot;, variant: &quot;error&quot; });&#13;&#10;&#13;&#10;    const contentEl = document.querySelector(&quot;#clipboardContent2&quot;);&#13;&#10;&#13;&#10;    const copyBtn = document.querySelector(&quot;#getContent2&quot;);&#13;&#10;&#13;&#10;    copyBtn.addEventListener(&quot;click&quot;, () =&gt; {&#13;&#10;      $clipboard({&#13;&#10;        content: contentEl.value,&#13;&#10;        success: onSuccess,&#13;&#10;        error: onError,&#13;&#10;      });&#13;&#10;    });&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
