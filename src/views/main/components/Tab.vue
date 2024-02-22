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
      Tabs
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
      <li>Tabs</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Tabs -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Tabs
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
          Tabs make it easy to explore and switch between different views.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="tab-wrapper-1" class="tabs flex flex-col">
            <div class="is-scrollbar-hidden overflow-x-auto">
              <div class="tabs-list flex">
                <button
                    class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                    data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                    data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-target="#tab1-home"
                >
                  Home
                </button>
                <button
                    class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                    data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                    data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-target="#tab1-profile"
                >
                  Profile
                </button>

                <button
                    class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                    data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                    data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-target="#tab1-messages"
                >
                  Messages
                </button>

                <button
                    class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                    data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                    data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-target="#tab1-settings"
                >
                  Settings
                </button>
              </div>
            </div>
            <div class="pt-4">
              <div class="tab-content tab-shift-left" id="tab1-home">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Praesent elementum finibus arcu vitae
                    scelerisque. Etiam rutrum blandit condimentum.
                    Maecenas condimentum massa vitae quam interdum, et
                    lacinia urna tempor
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab1-profile">
                <div>
                  <p>
                    Pellentesque pulvinar, sapien eget fermentum sodales,
                    felis lacus viverra magna, id pulvinar odio metus non
                    enim. Ut id augue interdum, ultrices felis eu,
                    tincidunt libero.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab1-messages">
                <div>
                  <p>
                    Cras iaculis ipsum quis lectus faucibus, in mattis
                    nulla molestie. Vestibulum vel tristique libero. Morbi
                    vulputate odio at viverra sodales. Curabitur accumsan
                    justo eu libero porta ultrices vitae eu leo.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab1-settings">
                <div>
                  <p>
                    Etiam nec ante eget lacus vulputate egestas non
                    iaculis tellus. Suspendisse tempus ex in tortor
                    venenatis malesuada. Aenean consequat dui vitae nibh
                    lobortis condimentum. Duis vel risus est.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
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
  &#60;div id=&#34;tab-wrapper-1&#34; class=&#34;tabs flex flex-col&#34;&#62;&#13;&#10;    &#60;div class=&#34;is-scrollbar-hidden overflow-x-auto&#34;&#62;&#13;&#10;      &#60;div class=&#34;tabs-list flex&#34;&#62;&#13;&#10;        &#60;button&#13;&#10;          class=&#34;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&#34;&#13;&#10;          data-active-class=&#34;border-primary dark:border-accent text-primary dark:text-accent-light&#34;&#13;&#10;          data-default-class=&#34;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&#34;&#13;&#10;          data-target=&#34;#tab1-home&#34;&#13;&#10;        &#62;&#13;&#10;          Home&#13;&#10;        &#60;/button&#62;&#13;&#10;        &#60;button&#13;&#10;          class=&#34;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&#34;&#13;&#10;          data-active-class=&#34;border-primary dark:border-accent text-primary dark:text-accent-light&#34;&#13;&#10;          data-default-class=&#34;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&#34;&#13;&#10;          data-target=&#34;#tab1-profile&#34;&#13;&#10;        &#62;&#13;&#10;          Profile&#13;&#10;        &#60;/button&#62;&#13;&#10;&#13;&#10;        &#60;button&#13;&#10;          class=&#34;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&#34;&#13;&#10;          data-active-class=&#34;border-primary dark:border-accent text-primary dark:text-accent-light&#34;&#13;&#10;          data-default-class=&#34;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&#34;&#13;&#10;          data-target=&#34;#tab1-messages&#34;&#13;&#10;        &#62;&#13;&#10;          Messages&#13;&#10;        &#60;/button&#62;&#13;&#10;&#13;&#10;        &#60;button&#13;&#10;          class=&#34;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&#34;&#13;&#10;          data-active-class=&#34;border-primary dark:border-accent text-primary dark:text-accent-light&#34;&#13;&#10;          data-default-class=&#34;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&#34;&#13;&#10;          data-target=&#34;#tab1-settings&#34;&#13;&#10;        &#62;&#13;&#10;          Settings&#13;&#10;        &#60;/button&#62;&#13;&#10;      &#60;/div&#62;&#13;&#10;    &#60;/div&#62;&#13;&#10;    &#60;div class=&#34;pt-4&#34;&#62;&#13;&#10;      &#60;div class=&#34;tab-content tab-shift-left&#34; id=&#34;tab1-home&#34;&#62;&#13;&#10;        &#60;div&#62;&#13;&#10;          &#60;p&#62;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent&#13;&#10;            elementum finibus arcu vitae scelerisque. Etiam rutrum blandit&#13;&#10;            condimentum. Maecenas condimentum massa vitae quam interdum, et&#13;&#10;            lacinia urna tempor&#13;&#10;          &#60;/p&#62;&#13;&#10;          &#60;div class=&#34;flex space-x-2 pt-3&#34;&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 1&#13;&#10;            &#60;/a&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 2&#13;&#10;            &#60;/a&#62;&#13;&#10;          &#60;/div&#62;&#13;&#10;&#13;&#10;          &#60;p class=&#34;pt-3 text-xs text-slate-400 dark:text-navy-300&#34;&#62;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &#60;/p&#62;&#13;&#10;        &#60;/div&#62;&#13;&#10;      &#60;/div&#62;&#13;&#10;      &#60;div class=&#34;tab-content tab-shift-left&#34; id=&#34;tab1-profile&#34;&#62;&#13;&#10;        &#60;div&#62;&#13;&#10;          &#60;p&#62;&#13;&#10;            Pellentesque pulvinar, sapien eget fermentum sodales, felis lacus&#13;&#10;            viverra magna, id pulvinar odio metus non enim. Ut id augue&#13;&#10;            interdum, ultrices felis eu, tincidunt libero.&#13;&#10;          &#60;/p&#62;&#13;&#10;          &#60;div class=&#34;flex space-x-2 pt-3&#34;&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 1&#13;&#10;            &#60;/a&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 2&#13;&#10;            &#60;/a&#62;&#13;&#10;          &#60;/div&#62;&#13;&#10;&#13;&#10;          &#60;p class=&#34;pt-3 text-xs text-slate-400 dark:text-navy-300&#34;&#62;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &#60;/p&#62;&#13;&#10;        &#60;/div&#62;&#13;&#10;      &#60;/div&#62;&#13;&#10;      &#60;div class=&#34;tab-content tab-shift-left&#34; id=&#34;tab1-messages&#34;&#62;&#13;&#10;        &#60;div&#62;&#13;&#10;          &#60;p&#62;&#13;&#10;            Cras iaculis ipsum quis lectus faucibus, in mattis nulla molestie.&#13;&#10;            Vestibulum vel tristique libero. Morbi vulputate odio at viverra&#13;&#10;            sodales. Curabitur accumsan justo eu libero porta ultrices vitae eu&#13;&#10;            leo.&#13;&#10;          &#60;/p&#62;&#13;&#10;          &#60;div class=&#34;flex space-x-2 pt-3&#34;&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 1&#13;&#10;            &#60;/a&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 2&#13;&#10;            &#60;/a&#62;&#13;&#10;          &#60;/div&#62;&#13;&#10;&#13;&#10;          &#60;p class=&#34;pt-3 text-xs text-slate-400 dark:text-navy-300&#34;&#62;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &#60;/p&#62;&#13;&#10;        &#60;/div&#62;&#13;&#10;      &#60;/div&#62;&#13;&#10;      &#60;div class=&#34;tab-content tab-shift-left&#34; id=&#34;tab1-settings&#34;&#62;&#13;&#10;        &#60;div&#62;&#13;&#10;          &#60;p&#62;&#13;&#10;            Etiam nec ante eget lacus vulputate egestas non iaculis tellus.&#13;&#10;            Suspendisse tempus ex in tortor venenatis malesuada. Aenean&#13;&#10;            consequat dui vitae nibh lobortis condimentum. Duis vel risus est.&#13;&#10;          &#60;/p&#62;&#13;&#10;          &#60;div class=&#34;flex space-x-2 pt-3&#34;&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 1&#13;&#10;            &#60;/a&#62;&#13;&#10;            &#60;a&#13;&#10;              href=&#34;#&#34;&#13;&#10;              class=&#34;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&#34;&#13;&#10;            &#62;&#13;&#10;              Tag 2&#13;&#10;            &#60;/a&#62;&#13;&#10;          &#60;/div&#62;&#13;&#10;&#13;&#10;          &#60;p class=&#34;pt-3 text-xs text-slate-400 dark:text-navy-300&#34;&#62;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &#60;/p&#62;&#13;&#10;        &#60;/div&#62;&#13;&#10;      &#60;/div&#62;&#13;&#10;    &#60;/div&#62;&#13;&#10;  &#60;/div&#62;&#13;&#10;&#13;&#10;  &#60;!-- Javascript --&#62;&#13;&#10;&#13;&#10;  &#60;script&#62;&#13;&#10;    new Tab(document.querySelector(&#34;#tab-wrapper-1&#34;));&#13;&#10;  &#60;/script&#62;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Border Bottom -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Border Bottom
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
          Tabs make it easy to explore and switch between different views.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="tab-wrapper-2" class="tabs flex flex-col">
            <div class="is-scrollbar-hidden overflow-x-auto">
              <div
                  class="border-b-2 border-slate-150 dark:border-navy-500"
              >
                <div class="tabs-list flex">
                  <button
                      class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                      data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                      data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      data-target="#tab2-home"
                  >
                    Home
                  </button>
                  <button
                      class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                      data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                      data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      data-target="#tab2-profile"
                  >
                    Profile
                  </button>

                  <button
                      class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                      data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                      data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      data-target="#tab2-messages"
                  >
                    Messages
                  </button>

                  <button
                      class="tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium"
                      data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                      data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      data-target="#tab2-settings"
                  >
                    Settings
                  </button>
                </div>
              </div>
            </div>
            <div class="pt-4">
              <div class="tab-content tab-shift-up" id="tab2-home">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Praesent elementum finibus arcu vitae
                    scelerisque. Etiam rutrum blandit condimentum.
                    Maecenas condimentum massa vitae quam interdum, et
                    lacinia urna tempor
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-up" id="tab2-profile">
                <div>
                  <p>
                    Pellentesque pulvinar, sapien eget fermentum sodales,
                    felis lacus viverra magna, id pulvinar odio metus non
                    enim. Ut id augue interdum, ultrices felis eu,
                    tincidunt libero.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-up" id="tab2-messages">
                <div>
                  <p>
                    Cras iaculis ipsum quis lectus faucibus, in mattis
                    nulla molestie. Vestibulum vel tristique libero. Morbi
                    vulputate odio at viverra sodales. Curabitur accumsan
                    justo eu libero porta ultrices vitae eu leo.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-up" id="tab2-settings">
                <div>
                  <p>
                    Etiam nec ante eget lacus vulputate egestas non
                    iaculis tellus. Suspendisse tempus ex in tortor
                    venenatis malesuada. Aenean consequat dui vitae nibh
                    lobortis condimentum. Duis vel risus est.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
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
  &lt;div id=&quot;tab-wrapper-2&quot; class=&quot;tabs flex flex-col&quot;&gt;&#13;&#10;    &lt;div class=&quot;is-scrollbar-hidden overflow-x-auto&quot;&gt;&#13;&#10;      &lt;div class=&quot;border-b-2 border-slate-150 dark:border-navy-500&quot;&gt;&#13;&#10;        &lt;div class=&quot;tabs-list flex&quot;&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&quot;&#13;&#10;            data-active-class=&quot;border-primary dark:border-accent text-primary dark:text-accent-light&quot;&#13;&#10;            data-default-class=&quot;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;            data-target=&quot;#tab2-home&quot;&#13;&#10;          &gt;&#13;&#10;            Home&#13;&#10;          &lt;/button&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&quot;&#13;&#10;            data-active-class=&quot;border-primary dark:border-accent text-primary dark:text-accent-light&quot;&#13;&#10;            data-default-class=&quot;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;            data-target=&quot;#tab2-profile&quot;&#13;&#10;          &gt;&#13;&#10;            Profile&#13;&#10;          &lt;/button&gt;&#13;&#10;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&quot;&#13;&#10;            data-active-class=&quot;border-primary dark:border-accent text-primary dark:text-accent-light&quot;&#13;&#10;            data-default-class=&quot;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;            data-target=&quot;#tab2-messages&quot;&#13;&#10;          &gt;&#13;&#10;            Messages&#13;&#10;          &lt;/button&gt;&#13;&#10;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium&quot;&#13;&#10;            data-active-class=&quot;border-primary dark:border-accent text-primary dark:text-accent-light&quot;&#13;&#10;            data-default-class=&quot;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;            data-target=&quot;#tab2-settings&quot;&#13;&#10;          &gt;&#13;&#10;            Settings&#13;&#10;          &lt;/button&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;pt-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-up&quot; id=&quot;tab2-home&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent&#13;&#10;            elementum finibus arcu vitae scelerisque. Etiam rutrum blandit&#13;&#10;            condimentum. Maecenas condimentum massa vitae quam interdum, et&#13;&#10;            lacinia urna tempor&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-up&quot; id=&quot;tab2-profile&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Pellentesque pulvinar, sapien eget fermentum sodales, felis lacus&#13;&#10;            viverra magna, id pulvinar odio metus non enim. Ut id augue&#13;&#10;            interdum, ultrices felis eu, tincidunt libero.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-up&quot; id=&quot;tab2-messages&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Cras iaculis ipsum quis lectus faucibus, in mattis nulla molestie.&#13;&#10;            Vestibulum vel tristique libero. Morbi vulputate odio at viverra&#13;&#10;            sodales. Curabitur accumsan justo eu libero porta ultrices vitae eu&#13;&#10;            leo.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-up&quot; id=&quot;tab2-settings&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Etiam nec ante eget lacus vulputate egestas non iaculis tellus.&#13;&#10;            Suspendisse tempus ex in tortor venenatis malesuada. Aenean&#13;&#10;            consequat dui vitae nibh lobortis condimentum. Duis vel risus est.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    new Tab(document.querySelector(&quot;#tab-wrapper-2&quot;));&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Tab With Icon -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Tab With Icon
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
          Tabs make it easy to explore and switch between different views.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div
              id="tab-wrapper-3"
              data-active-tab="#tab3-profile"
              class="tabs flex flex-col"
          >
            <div class="is-scrollbar-hidden overflow-x-auto">
              <div
                  class="border-b-2 border-slate-150 dark:border-navy-500"
              >
                <div class="tabs-list -mb-0.5 flex">
                  <button
                      class="tab btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium"
                      data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                      data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      data-target="#tab3-home"
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
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span>Home</span>
                  </button>
                  <button
                      class="tab btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium"
                      data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                      data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      data-target="#tab3-profile"
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Profile</span>
                  </button>
                  <button
                      class="tab btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium"
                      data-active-class="border-primary dark:border-accent text-primary dark:text-accent-light"
                      data-default-class="border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                      data-target="#tab3-messages"
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span> Messages </span>
                  </button>
                </div>
              </div>
            </div>
            <div class="pt-4">
              <div class="tab-content tab-shift-left" id="tab3-home">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Praesent elementum finibus arcu vitae
                    scelerisque. Etiam rutrum blandit condimentum.
                    Maecenas condimentum massa vitae quam interdum, et
                    lacinia urna tempor
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab3-profile">
                <div>
                  <p>
                    Pellentesque pulvinar, sapien eget fermentum sodales,
                    felis lacus viverra magna, id pulvinar odio metus non
                    enim. Ut id augue interdum, ultrices felis eu,
                    tincidunt libero.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab3-messages">
                <div>
                  <p>
                    Cras iaculis ipsum quis lectus faucibus, in mattis
                    nulla molestie. Vestibulum vel tristique libero. Morbi
                    vulputate odio at viverra sodales. Curabitur accumsan
                    justo eu libero porta ultrices vitae eu leo.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
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
  &lt;div&#13;&#10;    id=&quot;tab-wrapper-3&quot;&#13;&#10;    data-active-tab=&quot;#tab3-profile&quot;&#13;&#10;    class=&quot;tabs flex flex-col&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;div class=&quot;is-scrollbar-hidden overflow-x-auto&quot;&gt;&#13;&#10;      &lt;div class=&quot;border-b-2 border-slate-150 dark:border-navy-500&quot;&gt;&#13;&#10;        &lt;div class=&quot;tabs-list -mb-0.5 flex&quot;&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;tab btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium&quot;&#13;&#10;            data-active-class=&quot;border-primary dark:border-accent text-primary dark:text-accent-light&quot;&#13;&#10;            data-default-class=&quot;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;            data-target=&quot;#tab3-home&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-4.5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;            &lt;span&gt;Home&lt;/span&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;tab btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium&quot;&#13;&#10;            data-active-class=&quot;border-primary dark:border-accent text-primary dark:text-accent-light&quot;&#13;&#10;            data-default-class=&quot;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;            data-target=&quot;#tab3-profile&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-4.5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;            &lt;span&gt;Profile&lt;/span&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;          &lt;button&#13;&#10;            class=&quot;tab btn shrink-0 space-x-2 rounded-none border-b-2 px-3 py-2 font-medium&quot;&#13;&#10;            data-active-class=&quot;border-primary dark:border-accent text-primary dark:text-accent-light&quot;&#13;&#10;            data-default-class=&quot;border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;            data-target=&quot;#tab3-messages&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;svg&#13;&#10;              xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;              class=&quot;size-4.5&quot;&#13;&#10;              fill=&quot;none&quot;&#13;&#10;              viewBox=&quot;0 0 24 24&quot;&#13;&#10;              stroke=&quot;currentColor&quot;&#13;&#10;              stroke-width=&quot;1.5&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;path&#13;&#10;                stroke-linecap=&quot;round&quot;&#13;&#10;                stroke-linejoin=&quot;round&quot;&#13;&#10;                d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;&#13;&#10;              /&gt;&#13;&#10;            &lt;/svg&gt;&#13;&#10;            &lt;span&gt; Messages &lt;/span&gt;&#13;&#10;          &lt;/button&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;pt-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab3-home&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent&#13;&#10;            elementum finibus arcu vitae scelerisque. Etiam rutrum blandit&#13;&#10;            condimentum. Maecenas condimentum massa vitae quam interdum, et&#13;&#10;            lacinia urna tempor&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab3-profile&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Pellentesque pulvinar, sapien eget fermentum sodales, felis lacus&#13;&#10;            viverra magna, id pulvinar odio metus non enim. Ut id augue&#13;&#10;            interdum, ultrices felis eu, tincidunt libero.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab3-messages&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Cras iaculis ipsum quis lectus faucibus, in mattis nulla molestie.&#13;&#10;            Vestibulum vel tristique libero. Morbi vulputate odio at viverra&#13;&#10;            sodales. Curabitur accumsan justo eu libero porta ultrices vitae eu&#13;&#10;            leo.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    new Tab(document.querySelector(&quot;#tab-wrapper-3&quot;));&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Boxed Tabs -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Boxed Tabs
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
          Tabs make it easy to explore and switch between different views.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="tab-wrapper-4" class="tabs flex flex-col">
            <div
                class="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
            >
              <div class="tabs-list flex px-1.5 py-1">
                <button
                    class="tab btn shrink-0 px-3 py-1.5 font-medium"
                    data-target="#tab4-home"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                >
                  Home
                </button>
                <button
                    class="tab btn shrink-0 px-3 py-1.5 font-medium"
                    data-target="#tab4-profile"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                >
                  Profile
                </button>
                <button
                    class="tab btn shrink-0 px-3 py-1.5 font-medium"
                    data-target="#tab4-messages"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                >
                  Messages
                </button>
                <button
                    class="tab btn shrink-0 px-3 py-1.5 font-medium"
                    data-target="#tab4-settings"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
                >
                  Settings
                </button>
              </div>
            </div>
            <div class="pt-4">
              <div class="tab-content tab-shift-left" id="tab4-home">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Praesent elementum finibus arcu vitae
                    scelerisque. Etiam rutrum blandit condimentum.
                    Maecenas condimentum massa vitae quam interdum, et
                    lacinia urna tempor
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab4-profile">
                <div>
                  <p>
                    Pellentesque pulvinar, sapien eget fermentum sodales,
                    felis lacus viverra magna, id pulvinar odio metus non
                    enim. Ut id augue interdum, ultrices felis eu,
                    tincidunt libero.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab4-messages">
                <div>
                  <p>
                    Cras iaculis ipsum quis lectus faucibus, in mattis
                    nulla molestie. Vestibulum vel tristique libero. Morbi
                    vulputate odio at viverra sodales. Curabitur accumsan
                    justo eu libero porta ultrices vitae eu leo.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab4-settings">
                <div>
                  <p>
                    Etiam nec ante eget lacus vulputate egestas non
                    iaculis tellus. Suspendisse tempus ex in tortor
                    venenatis malesuada. Aenean consequat dui vitae nibh
                    lobortis condimentum. Duis vel risus est.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
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
  &lt;div id=&quot;tab-wrapper-4&quot; class=&quot;tabs flex flex-col&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;div class=&quot;tabs-list flex px-1.5 py-1&quot;&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;tab btn shrink-0 px-3 py-1.5 font-medium&quot;&#13;&#10;          data-target=&quot;#tab4-home&quot;&#13;&#10;          data-default-class=&quot;hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;          data-active-class=&quot;bg-white shadow dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          Home&#13;&#10;        &lt;/button&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;tab btn shrink-0 px-3 py-1.5 font-medium&quot;&#13;&#10;          data-target=&quot;#tab4-profile&quot;&#13;&#10;          data-default-class=&quot;hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;          data-active-class=&quot;bg-white shadow dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          Profile&#13;&#10;        &lt;/button&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;tab btn shrink-0 px-3 py-1.5 font-medium&quot;&#13;&#10;          data-target=&quot;#tab4-messages&quot;&#13;&#10;          data-default-class=&quot;hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;          data-active-class=&quot;bg-white shadow dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          Messages&#13;&#10;        &lt;/button&gt;&#13;&#10;        &lt;button&#13;&#10;          class=&quot;tab btn shrink-0 px-3 py-1.5 font-medium&quot;&#13;&#10;          data-target=&quot;#tab4-settings&quot;&#13;&#10;          data-default-class=&quot;hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;          data-active-class=&quot;bg-white shadow dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          Settings&#13;&#10;        &lt;/button&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;pt-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab4-home&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent&#13;&#10;            elementum finibus arcu vitae scelerisque. Etiam rutrum blandit&#13;&#10;            condimentum. Maecenas condimentum massa vitae quam interdum, et&#13;&#10;            lacinia urna tempor&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab4-profile&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Pellentesque pulvinar, sapien eget fermentum sodales, felis lacus&#13;&#10;            viverra magna, id pulvinar odio metus non enim. Ut id augue&#13;&#10;            interdum, ultrices felis eu, tincidunt libero.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab4-messages&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Cras iaculis ipsum quis lectus faucibus, in mattis nulla molestie.&#13;&#10;            Vestibulum vel tristique libero. Morbi vulputate odio at viverra&#13;&#10;            sodales. Curabitur accumsan justo eu libero porta ultrices vitae eu&#13;&#10;            leo.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab4-settings&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Etiam nec ante eget lacus vulputate egestas non iaculis tellus.&#13;&#10;            Suspendisse tempus ex in tortor venenatis malesuada. Aenean&#13;&#10;            consequat dui vitae nibh lobortis condimentum. Duis vel risus est.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    new Tab(document.querySelector(&quot;#tab-wrapper-4&quot;));&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Boxed Tabs With Icon -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Boxed Tabs With Icon
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
          Tabs make it easy to explore and switch between different views.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <div id="tab-wrapper-5" class="tabs flex flex-col">
            <div
                class="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200"
            >
              <div class="tabs-list flex px-1.5 py-1">
                <button
                    data-target="#tab5-home"
                    class="tab btn shrink-0 space-x-2 px-3 py-1.5 font-medium"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span> Home </span>
                </button>
                <button
                    data-target="#tab5-profile"
                    class="tab btn shrink-0 space-x-2 px-3 py-1.5 font-medium"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Profile</span>
                </button>
                <button
                    data-target="#tab5-messages"
                    class="tab btn shrink-0 space-x-2 px-3 py-1.5 font-medium"
                    data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                    data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Messages</span>
                </button>
              </div>
            </div>
            <div class="pt-4">
              <div class="tab-content tab-shift-left" id="tab5-home">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Praesent elementum finibus arcu vitae
                    scelerisque. Etiam rutrum blandit condimentum.
                    Maecenas condimentum massa vitae quam interdum, et
                    lacinia urna tempor
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab5-profile">
                <div>
                  <p>
                    Pellentesque pulvinar, sapien eget fermentum sodales,
                    felis lacus viverra magna, id pulvinar odio metus non
                    enim. Ut id augue interdum, ultrices felis eu,
                    tincidunt libero.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
                </div>
              </div>
              <div class="tab-content tab-shift-left" id="tab5-messages">
                <div>
                  <p>
                    Cras iaculis ipsum quis lectus faucibus, in mattis
                    nulla molestie. Vestibulum vel tristique libero. Morbi
                    vulputate odio at viverra sodales. Curabitur accumsan
                    justo eu libero porta ultrices vitae eu leo.
                  </p>
                  <div class="flex space-x-2 pt-3">
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 1
                    </a>
                    <a
                        href="#"
                        class="tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light"
                    >
                      Tag 2
                    </a>
                  </div>

                  <p
                      class="pt-3 text-xs text-slate-400 dark:text-navy-300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore dolore non atque?
                  </p>
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
  &lt;div id=&quot;tab-wrapper-5&quot; class=&quot;tabs flex flex-col&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;div class=&quot;tabs-list flex px-1.5 py-1&quot;&gt;&#13;&#10;        &lt;button&#13;&#10;          data-target=&quot;#tab5-home&quot;&#13;&#10;          class=&quot;tab btn shrink-0 space-x-2 px-3 py-1.5 font-medium&quot;&#13;&#10;          data-default-class=&quot;hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;          data-active-class=&quot;bg-white shadow dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;svg&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;size-4.5&quot;&#13;&#10;            fill=&quot;none&quot;&#13;&#10;            viewBox=&quot;0 0 24 24&quot;&#13;&#10;            stroke=&quot;currentColor&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              stroke-linecap=&quot;round&quot;&#13;&#10;              stroke-linejoin=&quot;round&quot;&#13;&#10;              d=&quot;M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;          &lt;span&gt; Home &lt;/span&gt;&#13;&#10;        &lt;/button&gt;&#13;&#10;        &lt;button&#13;&#10;          data-target=&quot;#tab5-profile&quot;&#13;&#10;          class=&quot;tab btn shrink-0 space-x-2 px-3 py-1.5 font-medium&quot;&#13;&#10;          data-default-class=&quot;hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;          data-active-class=&quot;bg-white shadow dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;svg&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;size-4.5&quot;&#13;&#10;            fill=&quot;none&quot;&#13;&#10;            viewBox=&quot;0 0 24 24&quot;&#13;&#10;            stroke=&quot;currentColor&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              stroke-linecap=&quot;round&quot;&#13;&#10;              stroke-linejoin=&quot;round&quot;&#13;&#10;              d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;          &lt;span&gt;Profile&lt;/span&gt;&#13;&#10;        &lt;/button&gt;&#13;&#10;        &lt;button&#13;&#10;          data-target=&quot;#tab5-messages&quot;&#13;&#10;          class=&quot;tab btn shrink-0 space-x-2 px-3 py-1.5 font-medium&quot;&#13;&#10;          data-default-class=&quot;hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100&quot;&#13;&#10;          data-active-class=&quot;bg-white shadow dark:bg-navy-500 dark:text-navy-100&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;svg&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;size-4.5&quot;&#13;&#10;            fill=&quot;none&quot;&#13;&#10;            viewBox=&quot;0 0 24 24&quot;&#13;&#10;            stroke=&quot;currentColor&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              stroke-linecap=&quot;round&quot;&#13;&#10;              stroke-linejoin=&quot;round&quot;&#13;&#10;              d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;          &lt;span&gt;Messages&lt;/span&gt;&#13;&#10;        &lt;/button&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;pt-4&quot;&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab5-home&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent&#13;&#10;            elementum finibus arcu vitae scelerisque. Etiam rutrum blandit&#13;&#10;            condimentum. Maecenas condimentum massa vitae quam interdum, et&#13;&#10;            lacinia urna tempor&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab5-profile&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Pellentesque pulvinar, sapien eget fermentum sodales, felis lacus&#13;&#10;            viverra magna, id pulvinar odio metus non enim. Ut id augue&#13;&#10;            interdum, ultrices felis eu, tincidunt libero.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;tab-content tab-shift-left&quot; id=&quot;tab5-messages&quot;&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Cras iaculis ipsum quis lectus faucibus, in mattis nulla molestie.&#13;&#10;            Vestibulum vel tristique libero. Morbi vulputate odio at viverra&#13;&#10;            sodales. Curabitur accumsan justo eu libero porta ultrices vitae eu&#13;&#10;            leo.&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;div class=&quot;flex space-x-2 pt-3&quot;&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 1&#13;&#10;            &lt;/a&gt;&#13;&#10;            &lt;a&#13;&#10;              href=&quot;#&quot;&#13;&#10;              class=&quot;tag rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light&quot;&#13;&#10;            &gt;&#13;&#10;              Tag 2&#13;&#10;            &lt;/a&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;&#13;&#10;          &lt;p class=&quot;pt-3 text-xs text-slate-400 dark:text-navy-300&quot;&gt;&#13;&#10;            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore&#13;&#10;            dolore non atque?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    new Tab(document.querySelector(&quot;#tab-wrapper-5&quot;));&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
