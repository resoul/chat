<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Typography",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Typography
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
      <li>Typography</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
    <!-- Basic Heading -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Heading
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

      <div class="max-w-2xl">
        <p>
          HTML headings are titles or subtitles that you want to display
          on a webpage. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <h1 class="text-3xl">Heading H1</h1>
          <h2 class="text-2xl">Heading H2</h2>
          <h3 class="text-xl">Heading H3</h3>
          <h4 class="text-lg">Heading H4</h4>
          <h5 class="text-base">Heading H5</h5>
          <h6 class="text-sm">Heading H6</h6>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;h1 class=&quot;text-3xl&quot;&gt;Heading H1&lt;/h1&gt;&#13;&#10;  &lt;h2 class=&quot;text-2xl&quot;&gt;Heading H2&lt;/h2&gt;&#13;&#10;  &lt;h3 class=&quot;text-xl&quot;&gt;Heading H3&lt;/h3&gt;&#13;&#10;  &lt;h4 class=&quot;text-lg&quot;&gt;Heading H4&lt;/h4&gt;&#13;&#10;  &lt;h5 class=&quot;text-base&quot;&gt;Heading H5&lt;/h5&gt;&#13;&#10;  &lt;h6 class=&quot;text-sm&quot;&gt;Heading H6&lt;/h6&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Light Heading -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Light Heading
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

      <div class="max-w-2xl">
        <p>
          HTML headings are available with light variant. Check out code
          for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <h1 class="text-3xl font-light">Heading H1</h1>
          <h2 class="text-2xl font-light">Heading H2</h2>
          <h3 class="text-xl font-light">Heading H3</h3>
          <h4 class="text-lg font-light">Heading H4</h4>
          <h5 class="text-base font-light">Heading H5</h5>
          <h6 class="text-sm font-light">Heading H6</h6>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;h1 class=&quot;text-3xl font-light&quot;&gt;Heading H1&lt;/h1&gt;&#13;&#10;  &lt;h2 class=&quot;text-2xl font-light&quot;&gt;Heading H2&lt;/h2&gt;&#13;&#10;  &lt;h3 class=&quot;text-xl font-light&quot;&gt;Heading H3&lt;/h3&gt;&#13;&#10;  &lt;h4 class=&quot;text-lg font-light&quot;&gt;Heading H4&lt;/h4&gt;&#13;&#10;  &lt;h5 class=&quot;text-base font-light&quot;&gt;Heading H5&lt;/h5&gt;&#13;&#10;  &lt;h6 class=&quot;text-sm font-light&quot;&gt;Heading H6&lt;/h6&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Bold Heading -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Bold Heading
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

      <div class="max-w-2xl">
        <p>
          HTML headings are available with bold variant. Check out code
          for detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <h1 class="text-3xl font-semibold">Heading H1</h1>
          <h2 class="text-2xl font-semibold">Heading H2</h2>
          <h3 class="text-xl font-semibold">Heading H3</h3>
          <h4 class="text-lg font-semibold">Heading H4</h4>
          <h5 class="text-base font-semibold">Heading H5</h5>
          <h6 class="text-sm font-semibold">Heading H6</h6>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;h1 class=&quot;text-3xl font-semibold&quot;&gt;Heading H1&lt;/h1&gt;&#13;&#10;  &lt;h2 class=&quot;text-2xl font-semibold&quot;&gt;Heading H2&lt;/h2&gt;&#13;&#10;  &lt;h3 class=&quot;text-xl font-semibold&quot;&gt;Heading H3&lt;/h3&gt;&#13;&#10;  &lt;h4 class=&quot;text-lg font-semibold&quot;&gt;Heading H4&lt;/h4&gt;&#13;&#10;  &lt;h5 class=&quot;text-base font-semibold&quot;&gt;Heading H5&lt;/h5&gt;&#13;&#10;  &lt;h6 class=&quot;text-sm font-semibold&quot;&gt;Heading H6&lt;/h6&gt;&#13;&#10;</code>
              </pre>
      </div>
    </div>

    <!-- Colored Heading -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Colored Heading
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

      <div class="max-w-2xl">
        <p>
          HTML headings can be used in various colors. Check out code for
          detail of usage.
        </p>
        <div class="mt-5 space-y-4">
          <h1 class="text-3xl text-primary dark:text-accent-light">
            Heading H1
          </h1>
          <h2 class="text-2xl text-secondary dark:text-secondary-light">
            Heading H2
          </h2>
          <h3 class="text-xl text-info">Heading H3</h3>
          <h4 class="text-lg text-success">Heading H4</h4>
          <h5 class="text-base text-warning">Heading H5</h5>
          <h6 class="text-sm text-error">Heading H6</h6>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
  &lt;h1 class=&quot;text-3xl text-primary dark:text-accent-light&quot;&gt;Heading H1&lt;/h1&gt;&#13;&#10;  &lt;h2 class=&quot;text-2xl text-secondary dark:text-secondary-light&quot;&gt;Heading H2&lt;/h2&gt;&#13;&#10;  &lt;h3 class=&quot;text-xl text-info&quot;&gt;Heading H3&lt;/h3&gt;&#13;&#10;  &lt;h4 class=&quot;text-lg text-success&quot;&gt;Heading H4&lt;/h4&gt;&#13;&#10;  &lt;h5 class=&quot;text-base text-warning&quot;&gt;Heading H5&lt;/h5&gt;&#13;&#10;  &lt;h6 class=&quot;text-sm text-error&quot;&gt;Heading H6&lt;/h6&gt;&#13;&#10;</code>
                  </pre>
      </div>
    </div>

    <!-- Display Heading -->
    <div class="card px-4 pb-4 sm:px-5 lg:col-span-2">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Display Heading
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

      <div class="max-w-2xl">
        <p>
          Traditional heading elements are designed to work best in the
          meat of your page content. Check out code for detail of usage.
        </p>
        <div class="mt-5 space-y-6">
          <h1 class="text-8xl">Display 1</h1>
          <h1 class="text-7xl">Display 2</h1>
          <h1 class="text-6xl">Display 3</h1>
          <h1 class="text-5xl">Display 4</h1>
          <h1 class="text-4xl">Display 5</h1>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
  &lt;h1 class=&quot;text-8xl&quot;&gt;Display 1&lt;/h1&gt;&#13;&#10;  &lt;h1 class=&quot;text-7xl&quot;&gt;Display 2&lt;/h1&gt;&#13;&#10;  &lt;h1 class=&quot;text-6xl&quot;&gt;Display 3&lt;/h1&gt;&#13;&#10;  &lt;h1 class=&quot;text-5xl&quot;&gt;Display 4&lt;/h1&gt;&#13;&#10;  &lt;h1 class=&quot;text-4xl&quot;&gt;Display 5&lt;/h1&gt;&#13;&#10;</code>
                  </pre>
      </div>
    </div>

    <!-- Gradient Text -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Gradient Text
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

      <div class="max-w-2xl">
        <p>
          The Text can be in gradient variants. Check out code for detail
          of usage.
        </p>
        <div class="mt-5 flex flex-col space-y-3">
          <p>
                  <span
                      class="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent"
                  >
                    The quick brown fox jumps over the lazy dog.
                  </span>
          </p>
          <p>
                  <span
                      class="bg-gradient-to-r from-green-400 to-fuchsia-400 bg-clip-text text-lg font-semibold text-transparent"
                  >
                    The quick brown fox jumps over the lazy dog.
                  </span>
          </p>
          <p>
                  <span
                      class="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-lg font-semibold text-transparent"
                  >
                    The quick brown fox jumps over the lazy dog.
                  </span>
          </p>
          <p>
                  <span
                      class="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-lg font-semibold text-transparent"
                  >
                    The quick brown fox jumps over the lazy dog.
                  </span>
          </p>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
  &lt;p&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent&quot;&#13;&#10;    &gt;&#13;&#10;      The quick brown fox jumps over the lazy dog.&#13;&#10;    &lt;/span&gt;&#13;&#10;  &lt;/p&gt;&#13;&#10;  &lt;p&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;bg-gradient-to-r from-green-400 to-fuchsia-400 bg-clip-text text-lg font-semibold text-transparent&quot;&#13;&#10;    &gt;&#13;&#10;      The quick brown fox jumps over the lazy dog.&#13;&#10;    &lt;/span&gt;&#13;&#10;  &lt;/p&gt;&#13;&#10;  &lt;p&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-lg font-semibold text-transparent&quot;&#13;&#10;    &gt;&#13;&#10;      The quick brown fox jumps over the lazy dog.&#13;&#10;    &lt;/span&gt;&#13;&#10;  &lt;/p&gt;&#13;&#10;  &lt;p&gt;&#13;&#10;    &lt;span&#13;&#10;      class=&quot;bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-lg font-semibold text-transparent&quot;&#13;&#10;    &gt;&#13;&#10;      The quick brown fox jumps over the lazy dog.&#13;&#10;    &lt;/span&gt;&#13;&#10;  &lt;/p&gt;</code>
                  </pre>
      </div>
    </div>

    <!-- Text Decoration -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Text Decoration
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

      <div class="max-w-2xl">
        <p>
          Utilities for controlling the decoration of text. Check out code
          for detail of usage.
        </p>
        <div class="mt-5 flex flex-col space-y-3">
          <p class="text-lg underline">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p class="text-lg overline">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p class="text-lg line-through">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p class="text-lg no-underline">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
  &lt;p class=&quot;text-lg underline&quot;&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;&#13;&#10;  &lt;p class=&quot;text-lg overline&quot;&gt;The quick brown fox jumps over the lazy dog.&lt;/p&gt;&#13;&#10;  &lt;p class=&quot;text-lg line-through&quot;&gt;&#13;&#10;    The quick brown fox jumps over the lazy dog.&#13;&#10;  &lt;/p&gt;&#13;&#10;  &lt;p class=&quot;text-lg no-underline&quot;&gt;&#13;&#10;    The quick brown fox jumps over the lazy dog.&#13;&#10;  &lt;/p&gt;&#13;&#10;</code>
                  </pre>
      </div>
    </div>

    <!-- Text Decoration Color -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Text Decoration Color
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

      <div class="max-w-2xl">
        <p>
          Utilities for controlling the color of text decorations. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <p class="text-sm leading-6">
            I’m Derek, an astro-engineer based in Tattooine. I like to
            build X-Wings at
            <a
                href="#"
                class="font-semibold underline decoration-info decoration-2"
            >My Company, Inc</a
            >. Outside of work, I like to
            <a
                href="#"
                class="font-semibold underline decoration-secondary decoration-2"
            >watch pod-racing</a
            >
            and have
            <a
                href="#"
                class="font-semibold underline decoration-primary decoration-2"
            >light-saber</a
            >
            fights.
          </p>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
  &lt;p class=&quot;text-sm leading-6&quot;&gt;&#13;&#10;    I&rsquor;m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at&#13;&#10;    &lt;a href=&quot;#&quot; class=&quot;font-semibold underline decoration-info decoration-2&quot;&#13;&#10;      &gt;My Company, Inc&lt;/a&#13;&#10;    &gt;. Outside of work, I like to&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;font-semibold underline decoration-secondary decoration-2&quot;&#13;&#10;      &gt;watch pod-racing&lt;/a&#13;&#10;    &gt;&#13;&#10;    and have&#13;&#10;    &lt;a href=&quot;#&quot; class=&quot;font-semibold underline decoration-primary decoration-2&quot;&#13;&#10;      &gt;light-saber&lt;/a&#13;&#10;    &gt;&#13;&#10;    fights.&#13;&#10;  &lt;/p&gt;&#13;&#10;</code>
                  </pre>
      </div>
    </div>

    <!-- Text Decoration Style -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Text Decoration Style
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

      <div class="max-w-2xl">
        <p>
          Utilities for controlling the style of text decorations. Check
          out code for detail of usage.
        </p>
        <div class="mt-5">
          <p class="text-sm leading-6">
            I’m Derek, an astro-engineer based in
            <a
                href="#"
                class="font-semibold underline decoration-info decoration-wavy decoration-2"
            >
              Tattooine </a
            >. I like to build X-Wings at
            <a
                href="#"
                class="font-semibold underline decoration-info decoration-double decoration-2"
            >My Company, Inc</a
            >. Outside of work, I like to
            <a
                href="#"
                class="font-semibold underline decoration-secondary decoration-dotted decoration-2"
            >watch pod-racing</a
            >
            and have
            <a
                href="#"
                class="font-semibold underline decoration-primary decoration-dashed decoration-2"
            >light-saber</a
            >
            fights.
          </p>
        </div>
      </div>

      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                    <code class="language-html">
  &lt;p class=&quot;text-sm leading-6&quot;&gt;&#13;&#10;    I&rsquor;m Derek, an astro-engineer based in&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;font-semibold underline decoration-info decoration-wavy decoration-2&quot;&#13;&#10;    &gt;&#13;&#10;      Tattooine &lt;/a&#13;&#10;    &gt;. I like to build X-Wings at&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;font-semibold underline decoration-info decoration-double decoration-2&quot;&#13;&#10;      &gt;My Company, Inc&lt;/a&#13;&#10;    &gt;. Outside of work, I like to&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;font-semibold underline decoration-secondary decoration-dotted decoration-2&quot;&#13;&#10;      &gt;watch pod-racing&lt;/a&#13;&#10;    &gt;&#13;&#10;    and have&#13;&#10;    &lt;a&#13;&#10;      href=&quot;#&quot;&#13;&#10;      class=&quot;font-semibold underline decoration-primary decoration-dashed decoration-2&quot;&#13;&#10;      &gt;light-saber&lt;/a&#13;&#10;    &gt;&#13;&#10;    fights.&#13;&#10;  &lt;/p&gt;</code>
                  </pre>
      </div>
    </div>
  </div>
</template>