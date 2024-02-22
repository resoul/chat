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
      Rich Text Editor
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
      <li>Rich Text Editor</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Text Editor -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Text Editor
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
          The textarea provides a native and essential solution to almost
          any web application. But at some point you may need to add
          formatting to text input.
          <a
              href="https://github.com/quilljs/quill/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Quill</a
          >
          is a free, open source WYSIWYG editor built for the modern web.
        </p>
        <div class="mt-5">
          <div class="w-full">
            <div id="editor1" class="h-48"></div>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;w-full&quot;&gt;&#13;&#10;    &lt;div id=&quot;editor1&quot; class=&quot;h-48&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config1 = {&#13;&#10;      modules: {&#13;&#10;        toolbar: [&#13;&#10;          [&quot;bold&quot;, &quot;italic&quot;, &quot;underline&quot;, &quot;strike&quot;], // toggled buttons&#13;&#10;          [&quot;blockquote&quot;, &quot;code-block&quot;],&#13;&#10;          [{ header: 1 }, { header: 2 }], // custom button values&#13;&#10;          [{ list: &quot;ordered&quot; }, { list: &quot;bullet&quot; }],&#13;&#10;          [{ script: &quot;sub&quot; }, { script: &quot;super&quot; }], // superscript/subscript&#13;&#10;          [{ indent: &quot;-1&quot; }, { indent: &quot;+1&quot; }], // outdent/indent&#13;&#10;          [{ direction: &quot;rtl&quot; }], // text direction&#13;&#10;          [{ size: [&quot;small&quot;, false, &quot;large&quot;, &quot;huge&quot;] }], // custom dropdown&#13;&#10;          [{ header: [1, 2, 3, 4, 5, 6, false] }],&#13;&#10;          [{ color: [] }, { background: [] }], // dropdown with defaults from theme&#13;&#10;          [{ font: [] }],&#13;&#10;          [{ align: [] }],&#13;&#10;          [&quot;clean&quot;], // remove formatting button&#13;&#10;        ],&#13;&#10;      },&#13;&#10;      placeholder: &quot;Enter your content...&quot;,&#13;&#10;      theme: &quot;snow&quot;,&#13;&#10;    };&#13;&#10;&#13;&#10;    const editor1 = document.querySelector(&quot;#editor1&quot;);&#13;&#10;    editor1._editor = new Quill(editor1, config1);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Minimal -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Minimal
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
          The textarea provides a native and essential solution to almost
          any web application. But at some point you may need to add
          formatting to text input.
          <a
              href="https://github.com/quilljs/quill/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Quill</a
          >
          is a free, open source WYSIWYG editor built for the modern web.
        </p>
        <div class="mt-5 w-full">
          <div id="editor2" class="h-48"></div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;mt-5 w-full&quot;&gt;&#13;&#10;    &lt;div id=&quot;editor2&quot; class=&quot;h-48&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config2 = {&#13;&#10;      modules: {&#13;&#10;        toolbar: [&#13;&#10;          [&quot;bold&quot;, &quot;italic&quot;, &quot;underline&quot;],&#13;&#10;          [&#13;&#10;            { list: &quot;ordered&quot; },&#13;&#10;            { list: &quot;bullet&quot; },&#13;&#10;            { header: 1 },&#13;&#10;            { background: [] },&#13;&#10;          ],&#13;&#10;        ],&#13;&#10;      },&#13;&#10;      placeholder: &quot;Enter your content...&quot;,&#13;&#10;      theme: &quot;snow&quot;,&#13;&#10;    };&#13;&#10;&#13;&#10;    const editor2 = document.querySelector(&quot;#editor2&quot;);&#13;&#10;    editor2._editor = new Quill(editor2, config2);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Filled Header -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Filled Header
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
          The textarea provides a native and essential solution to almost
          any web application. But at some point you may need to add
          formatting to text input.
          <a
              href="https://github.com/quilljs/quill/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Quill</a
          >
          is a free, open source WYSIWYG editor built for the modern web.
        </p>
        <div class="mt-5">
          <div class="ql-header-filled w-full">
            <div id="editor3" class="h-48"></div>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;ql-header-filled w-full&quot;&gt;&#13;&#10;    &lt;div id=&quot;editor3&quot; class=&quot;h-48&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config3 = {&#13;&#10;      modules: {&#13;&#10;        toolbar: [&#13;&#10;          [&quot;bold&quot;, &quot;italic&quot;, &quot;underline&quot;, &quot;strike&quot;], // toggled buttons&#13;&#10;          [&quot;blockquote&quot;, &quot;code-block&quot;],&#13;&#10;          [{ header: 1 }, { header: 2 }], // custom button values&#13;&#10;          [{ list: &quot;ordered&quot; }, { list: &quot;bullet&quot; }],&#13;&#10;          [{ script: &quot;sub&quot; }, { script: &quot;super&quot; }], // superscript/subscript&#13;&#10;          [{ indent: &quot;-1&quot; }, { indent: &quot;+1&quot; }], // outdent/indent&#13;&#10;          [{ direction: &quot;rtl&quot; }], // text direction&#13;&#10;          [{ size: [&quot;small&quot;, false, &quot;large&quot;, &quot;huge&quot;] }], // custom dropdown&#13;&#10;          [{ header: [1, 2, 3, 4, 5, 6, false] }],&#13;&#10;          [{ color: [] }, { background: [] }], // dropdown with defaults from theme&#13;&#10;          [{ font: [] }],&#13;&#10;          [{ align: [] }],&#13;&#10;          [&quot;clean&quot;], // remove formatting button&#13;&#10;        ],&#13;&#10;      },&#13;&#10;      placeholder: &quot;Enter your content...&quot;,&#13;&#10;      theme: &quot;snow&quot;,&#13;&#10;    };&#13;&#10;&#13;&#10;    const editor3 = document.querySelector(&quot;#editor3&quot;);&#13;&#10;    editor3._editor = new Quill(editor3, config3);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Customizing -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Customizing
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
          The textarea provides a native and essential solution to almost
          any web application. But at some point you may need to add
          formatting to text input.
          <a
              href="https://github.com/quilljs/quill/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Quill</a
          >
          is a free, open source WYSIWYG editor built for the modern web.
        </p>
        <div class="mt-5">
          <div class="ql-header-filled w-full">
            <div id="editor4" class="h-48"></div>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;ql-header-filled w-full&quot;&gt;&#13;&#10;    &lt;div id=&quot;editor4&quot; class=&quot;h-48&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config4 = {&#13;&#10;      modules: {&#13;&#10;        toolbar: [&#13;&#10;          [&quot;bold&quot;, &quot;italic&quot;, &quot;underline&quot;, &quot;strike&quot;],&#13;&#10;          [&quot;blockquote&quot;, &quot;code-block&quot;],&#13;&#10;          [{ header: [1, 2, 3, 4, 5, 6, false] }],&#13;&#10;          [{ color: [] }, { background: [] }],&#13;&#10;          [&quot;clean&quot;],&#13;&#10;        ],&#13;&#10;      },&#13;&#10;      placeholder: &quot;Enter your content...&quot;,&#13;&#10;      theme: &quot;snow&quot;,&#13;&#10;    };&#13;&#10;&#13;&#10;    const editor4 = document.querySelector(&quot;#editor4&quot;);&#13;&#10;    editor4._editor = new Quill(editor4, config4);&#13;&#10;  &lt;/script&gt;
                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
