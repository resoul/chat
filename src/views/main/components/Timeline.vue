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
      Timeline
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
      <li>Timeline</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Timeline -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Timeline
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
          The timeline displays a list of events in chronological order.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="timeline max-w-sm">
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    User Photo Changed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >12 minute ago</span
                  >
                </div>
                <p class="py-1">John Doe changed his avatar photo</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Video Added
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >1 hour ago</span
                  >
                </div>
                <p class="py-1">Mores Clarke added new video</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-success"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Design Completed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >3 hours ago</span
                  >
                </div>
                <p class="py-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-warning"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    ER Diagram
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">Team completed the ER diagram app</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-error"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Weekly Report
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">The weekly report was uploaded</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;timeline max-w-sm&quot;&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            User Photo Changed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;12 minute ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;John Doe changed his avatar photo&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-primary dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Video Added&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;1 hour ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Mores Clarke added new video&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-success&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Design Completed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;3 hours ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;&#13;&#10;          Robert Nolan completed the design of the CRM application&#13;&#10;        &lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            ER Diagram&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Team completed the ER diagram app&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Weekly Report&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;The weekly report was uploaded&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;</code>
              </pre>
      </div>
    </div>

    <!-- TimeLine With Linespace -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          With Linespace
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
          The timeline displays a list of events in chronological order.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="timeline line-space max-w-sm">
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    User Photo Changed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >12 minute ago</span
                  >
                </div>
                <p class="py-1">John Doe changed his avatar photo</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Video Added
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >1 hour ago</span
                  >
                </div>
                <p class="py-1">Mores Clarke added new video</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-success"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Design Completed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >3 hours ago</span
                  >
                </div>
                <p class="py-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-warning"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    ER Diagram
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">Team completed the ER diagram app</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-error"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Weekly Report
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">The weekly report was uploaded</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;timeline line-space max-w-sm&quot;&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            User Photo Changed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;12 minute ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;John Doe changed his avatar photo&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-primary dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Video Added&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;1 hour ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Mores Clarke added new video&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-success&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Design Completed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;3 hours ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;&#13;&#10;          Robert Nolan completed the design of the CRM application&#13;&#10;        &lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            ER Diagram&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Team completed the ER diagram app&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Weekly Report&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;The weekly report was uploaded&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Outlined Point -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Outlined Point
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
          The timeline displays a list of events in chronological order.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="timeline line-space max-w-sm">
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border-2 border-slate-300 dark:border-navy-400"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    User Photo Changed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >12 minute ago</span
                  >
                </div>
                <p class="py-1">John Doe changed his avatar photo</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border-2 border-primary dark:border-accent"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Video Added
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >1 hour ago</span
                  >
                </div>
                <p class="py-1">Mores Clarke added new video</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border-2 border-success"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Design Completed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >3 hours ago</span
                  >
                </div>
                <p class="py-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border-2 border-warning"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    ER Diagram
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">Team completed the ER diagram app</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border-2 border-error"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Weekly Report
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">The weekly report was uploaded</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;timeline line-space max-w-sm&quot;&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border-2 border-slate-300 dark:border-navy-400&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            User Photo Changed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;12 minute ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;John Doe changed his avatar photo&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border-2 border-primary dark:border-accent&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Video Added&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;1 hour ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Mores Clarke added new video&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border-2 border-success&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Design Completed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;3 hours ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;&#13;&#10;          Robert Nolan completed the design of the CRM application&#13;&#10;        &lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border-2 border-warning&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            ER Diagram&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Team completed the ER diagram app&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full border-2 border-error&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Weekly Report&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;The weekly report was uploaded&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Timeline With Ping -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Timeline With Ping
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
          The timeline displays a list of events in chronological order.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="timeline max-w-sm">
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    User Photo Changed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >12 minute ago</span
                  >
                </div>
                <p class="py-1">John Doe changed his avatar photo</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-primary dark:bg-accent"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Video Added
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >1 hour ago</span
                  >
                </div>
                <p class="py-1">Mores Clarke added new video</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-item-point rounded-full bg-success">
                      <span
                          class="inline-flex h-full w-full animate-ping rounded-full bg-success opacity-80"
                      ></span>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Design Completed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >3 hours ago</span
                  >
                </div>
                <p class="py-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-warning"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    ER Diagram
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">Team completed the ER diagram app</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-error"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Weekly Report
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">The weekly report was uploaded</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;timeline max-w-sm&quot;&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            User Photo Changed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;12 minute ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;John Doe changed his avatar photo&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-primary dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Video Added&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;1 hour ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Mores Clarke added new video&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-success&quot;&gt;&#13;&#10;        &lt;span&#13;&#10;          class=&quot;inline-flex h-full w-full animate-ping rounded-full bg-success opacity-80&quot;&#13;&#10;        &gt;&lt;/span&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Design Completed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;3 hours ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;&#13;&#10;          Robert Nolan completed the design of the CRM application&#13;&#10;        &lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            ER Diagram&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Team completed the ER diagram app&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Weekly Report&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;The weekly report was uploaded&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Ping & Linespace -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Ping & Linespace
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
          The timeline displays a list of events in chronological order.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="timeline line-space max-w-sm">
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    User Photo Changed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >12 minute ago</span
                  >
                </div>
                <p class="py-1">John Doe changed his avatar photo</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-accent dark:bg-accent"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Video Added
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >1 hour ago</span
                  >
                </div>
                <p class="py-1">Mores Clarke added new video</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-item-point rounded-full bg-success">
                      <span
                          class="inline-flex h-full w-full animate-ping rounded-full bg-success opacity-80"
                      ></span>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Design Completed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >3 hours ago</span
                  >
                </div>
                <p class="py-1">
                  Robert Nolan completed the design of the CRM application
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-warning"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    ER Diagram
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">Team completed the ER diagram app</p>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full bg-error"
              ></div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Weekly Report
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">The weekly report was uploaded</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;timeline line-space max-w-sm&quot;&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            User Photo Changed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;12 minute ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;John Doe changed his avatar photo&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full bg-primary dark:bg-accent&quot;&#13;&#10;      &gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Video Added&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;1 hour ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Mores Clarke added new video&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-success&quot;&gt;&#13;&#10;        &lt;span&#13;&#10;          class=&quot;inline-flex h-full w-full animate-ping rounded-full bg-success opacity-80&quot;&#13;&#10;        &gt;&lt;/span&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Design Completed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;3 hours ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;&#13;&#10;          Robert Nolan completed the design of the CRM application&#13;&#10;        &lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-warning&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            ER Diagram&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Team completed the ER diagram app&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-point rounded-full bg-error&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Weekly Report&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;The weekly report was uploaded&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Advanced Timeline -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Advanced Timeline
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
          The timeline displays a list of events in chronological order.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="timeline max-w-sm [--size:1.5rem]">
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light"
              >
                <i class="fa fa-user-edit text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    User Photo Changed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >12 minute ago</span
                  >
                </div>
                <p class="py-1">John Doe changed his avatar photo</p>
                <div class="avatar mt-2 size-20">
                  <img
                      class="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent"
              >
                <i class="fa-solid fa-image text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Images Added
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >1 hour ago</span
                  >
                </div>
                <p class="py-1">Mores Clarke added new image gallery</p>
                <div class="mt-4 grid grid-cols-3 gap-3">
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="mt-4">
                        <span
                            class="font-medium text-slate-600 dark:text-navy-100"
                        >
                          Category:
                        </span>

                  <a
                      href="#"
                      class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  >
                    #Tag
                  </a>

                  <a
                      href="#"
                      class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  >
                    #Category
                  </a>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700"
              >
                <i class="fa fa-leaf text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Design Completed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >3 hours ago</span
                  >
                </div>
                <p class="py-1">
                  Robert Nolan completed the design of the CRM application
                </p>
                <a
                    href="#"
                    class="inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent"
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>File_final.fig</span>
                </a>
                <div class="pt-2">
                  <a
                      href="#"
                      class="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                  >
                    UI/UX
                  </a>

                  <a
                      href="#"
                      class="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                  >
                    CRM
                  </a>

                  <a
                      href="#"
                      class="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700"
              >
                <i class="fa fa-project-diagram text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    ER Diagram
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">Team completed the ER diagram app</p>
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Members:
                  </p>
                  <div class="mt-2 flex justify-between">
                    <div class="flex flex-wrap -space-x-2">
                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <div
                            class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                        >
                          jd
                        </div>
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                    </div>
                    <button
                        class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700"
              >
                <i class="fa fa-history text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Weekly Report
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">The weekly report was uploaded</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;timeline max-w-sm [--size:1.5rem]&quot;&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-user-edit text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            User Photo Changed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;12 minute ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;John Doe changed his avatar photo&lt;/p&gt;&#13;&#10;        &lt;div class=&quot;avatar mt-2 size-20&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;mask is-squircle&quot;&#13;&#10;            src=&quot;images/200x200.png&quot;&#13;&#10;            alt=&quot;avatar&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa-solid fa-image text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Images Added&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;1 hour ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Mores Clarke added new image gallery&lt;/p&gt;&#13;&#10;        &lt;div class=&quot;mt-4 grid grid-cols-3 gap-3&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;mt-4&quot;&gt;&#13;&#10;          &lt;span class=&quot;font-medium text-slate-600 dark:text-navy-100&quot;&gt;&#13;&#10;            Category:&#13;&#10;          &lt;/span&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;          &gt;&#13;&#10;            #Tag&#13;&#10;          &lt;/a&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;          &gt;&#13;&#10;            #Category&#13;&#10;          &lt;/a&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-leaf text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Design Completed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;3 hours ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;&#13;&#10;          Robert Nolan completed the design of the CRM application&#13;&#10;        &lt;/p&gt;&#13;&#10;        &lt;a&#13;&#10;          href=&quot;#&quot;&#13;&#10;          class=&quot;inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;svg&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;size-5&quot;&#13;&#10;            fill=&quot;none&quot;&#13;&#10;            viewBox=&quot;0 0 24 24&quot;&#13;&#10;            stroke=&quot;currentColor&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              stroke-linecap=&quot;round&quot;&#13;&#10;              stroke-linejoin=&quot;round&quot;&#13;&#10;              d=&quot;M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;          &lt;span&gt;File_final.fig&lt;/span&gt;&#13;&#10;        &lt;/a&gt;&#13;&#10;        &lt;div class=&quot;pt-2&quot;&gt;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25&quot;&#13;&#10;          &gt;&#13;&#10;            UI/UX&#13;&#10;          &lt;/a&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;          &gt;&#13;&#10;            CRM&#13;&#10;          &lt;/a&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;          &gt;&#13;&#10;            Dashboard&#13;&#10;          &lt;/a&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-project-diagram text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            ER Diagram&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Team completed the ER diagram app&lt;/p&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&gt;Members:&lt;/p&gt;&#13;&#10;          &lt;div class=&quot;mt-2 flex justify-between&quot;&gt;&#13;&#10;            &lt;div class=&quot;flex flex-wrap -space-x-2&quot;&gt;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;div&#13;&#10;                  class=&quot;is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700&quot;&#13;&#10;                &gt;&#13;&#10;                  jd&#13;&#10;                &lt;/div&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;button&#13;&#10;              class=&quot;btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;size-5 rotate-45&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  stroke-width=&quot;2&quot;&#13;&#10;                  d=&quot;M7 11l5-5m0 0l5 5m-5-5v12&quot;&#13;&#10;                &gt;&lt;/path&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;            &lt;/button&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-history text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Weekly Report&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;The weekly report was uploaded&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Advanced & Linespace -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Advanced Timeline
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
          The timeline displays a list of events in chronological order.
          Check out code for detail of usage.
        </p>
        <div class="mt-5">
          <ol class="timeline line-space max-w-sm [--size:1.5rem]">
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light"
              >
                <i class="fa fa-user-edit text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    User Photo Changed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >12 minute ago</span
                  >
                </div>
                <p class="py-1">John Doe changed his avatar photo</p>
                <div class="avatar mt-2 size-20">
                  <img
                      class="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent"
              >
                <i class="fa-solid fa-image text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Images Added
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >1 hour ago</span
                  >
                </div>
                <p class="py-1">Mores Clarke added new image gallery</p>
                <div class="mt-4 grid grid-cols-3 gap-3">
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                  <img
                      class="rounded-lg"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="mt-4">
                        <span
                            class="font-medium text-slate-600 dark:text-navy-100"
                        >
                          Category:
                        </span>

                  <a
                      href="#"
                      class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  >
                    #Tag
                  </a>

                  <a
                      href="#"
                      class="text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  >
                    #Category
                  </a>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700"
              >
                <i class="fa fa-leaf text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Design Completed
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >3 hours ago</span
                  >
                </div>
                <p class="py-1">
                  Robert Nolan completed the design of the CRM application
                </p>
                <a
                    href="#"
                    class="inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent"
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>File_final.fig</span>
                </a>
                <div class="pt-2">
                  <a
                      href="#"
                      class="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25"
                  >
                    UI/UX
                  </a>

                  <a
                      href="#"
                      class="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                  >
                    CRM
                  </a>

                  <a
                      href="#"
                      class="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700"
              >
                <i class="fa fa-project-diagram text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    ER Diagram
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">Team completed the ER diagram app</p>
                <div>
                  <p class="text-xs text-slate-400 dark:text-navy-300">
                    Members:
                  </p>
                  <div class="mt-2 flex justify-between">
                    <div class="flex flex-wrap -space-x-2">
                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <div
                            class="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700"
                        >
                          jd
                        </div>
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>

                      <div class="avatar size-7 hover:z-10">
                        <img
                            class="rounded-full ring ring-white dark:ring-navy-700"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                    </div>
                    <button
                        class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
              </div>
            </li>
            <li class="timeline-item">
              <div
                  class="timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700"
              >
                <i class="fa fa-history text-tiny"></i>
              </div>
              <div class="timeline-item-content flex-1 pl-4 sm:pl-8">
                <div
                    class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0"
                >
                  <p
                      class="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                  >
                    Weekly Report
                  </p>
                  <span class="text-xs text-slate-400 dark:text-navy-300"
                  >a day ago</span
                  >
                </div>
                <p class="py-1">The weekly report was uploaded</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;ol class=&quot;timeline line-space max-w-sm [--size:1.5rem]&quot;&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-user-edit text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            User Photo Changed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;12 minute ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;John Doe changed his avatar photo&lt;/p&gt;&#13;&#10;        &lt;div class=&quot;avatar mt-2 size-20&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;mask is-squircle&quot;&#13;&#10;            src=&quot;images/200x200.png&quot;&#13;&#10;            alt=&quot;avatar&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-primary dark:bg-navy-700 dark:text-accent&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa-solid fa-image text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Images Added&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;1 hour ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Mores Clarke added new image gallery&lt;/p&gt;&#13;&#10;        &lt;div class=&quot;mt-4 grid grid-cols-3 gap-3&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;rounded-lg&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;mt-4&quot;&gt;&#13;&#10;          &lt;span class=&quot;font-medium text-slate-600 dark:text-navy-100&quot;&gt;&#13;&#10;            Category:&#13;&#10;          &lt;/span&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;          &gt;&#13;&#10;            #Tag&#13;&#10;          &lt;/a&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;text-xs text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent&quot;&#13;&#10;          &gt;&#13;&#10;            #Category&#13;&#10;          &lt;/a&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-leaf text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Design Completed&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;3 hours ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;&#13;&#10;          Robert Nolan completed the design of the CRM application&#13;&#10;        &lt;/p&gt;&#13;&#10;        &lt;a&#13;&#10;          href=&quot;#&quot;&#13;&#10;          class=&quot;inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent&quot;&#13;&#10;        &gt;&#13;&#10;          &lt;svg&#13;&#10;            xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;            class=&quot;size-5&quot;&#13;&#10;            fill=&quot;none&quot;&#13;&#10;            viewBox=&quot;0 0 24 24&quot;&#13;&#10;            stroke=&quot;currentColor&quot;&#13;&#10;            stroke-width=&quot;1.5&quot;&#13;&#10;          &gt;&#13;&#10;            &lt;path&#13;&#10;              stroke-linecap=&quot;round&quot;&#13;&#10;              stroke-linejoin=&quot;round&quot;&#13;&#10;              d=&quot;M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot;&#13;&#10;            /&gt;&#13;&#10;          &lt;/svg&gt;&#13;&#10;          &lt;span&gt;File_final.fig&lt;/span&gt;&#13;&#10;        &lt;/a&gt;&#13;&#10;        &lt;div class=&quot;pt-2&quot;&gt;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25&quot;&#13;&#10;          &gt;&#13;&#10;            UI/UX&#13;&#10;          &lt;/a&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25&quot;&#13;&#10;          &gt;&#13;&#10;            CRM&#13;&#10;          &lt;/a&gt;&#13;&#10;&#13;&#10;          &lt;a&#13;&#10;            href=&quot;#&quot;&#13;&#10;            class=&quot;tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25&quot;&#13;&#10;          &gt;&#13;&#10;            Dashboard&#13;&#10;          &lt;/a&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-project-diagram text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            ER Diagram&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;Team completed the ER diagram app&lt;/p&gt;&#13;&#10;        &lt;div&gt;&#13;&#10;          &lt;p class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&gt;Members:&lt;/p&gt;&#13;&#10;          &lt;div class=&quot;mt-2 flex justify-between&quot;&gt;&#13;&#10;            &lt;div class=&quot;flex flex-wrap -space-x-2&quot;&gt;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;div&#13;&#10;                  class=&quot;is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700&quot;&#13;&#10;                &gt;&#13;&#10;                  jd&#13;&#10;                &lt;/div&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;&#13;&#10;              &lt;div class=&quot;avatar size-7 hover:z-10&quot;&gt;&#13;&#10;                &lt;img&#13;&#10;                  class=&quot;rounded-full ring ring-white dark:ring-navy-700&quot;&#13;&#10;                  src=&quot;images/200x200.png&quot;&#13;&#10;                  alt=&quot;avatar&quot;&#13;&#10;                /&gt;&#13;&#10;              &lt;/div&gt;&#13;&#10;            &lt;/div&gt;&#13;&#10;            &lt;button&#13;&#10;              class=&quot;btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&quot;&#13;&#10;            &gt;&#13;&#10;              &lt;svg&#13;&#10;                xmlns=&quot;http://www.w3.org/2000/svg&quot;&#13;&#10;                class=&quot;size-5 rotate-45&quot;&#13;&#10;                fill=&quot;none&quot;&#13;&#10;                viewBox=&quot;0 0 24 24&quot;&#13;&#10;                stroke=&quot;currentColor&quot;&#13;&#10;              &gt;&#13;&#10;                &lt;path&#13;&#10;                  stroke-linecap=&quot;round&quot;&#13;&#10;                  stroke-linejoin=&quot;round&quot;&#13;&#10;                  stroke-width=&quot;2&quot;&#13;&#10;                  d=&quot;M7 11l5-5m0 0l5 5m-5-5v12&quot;&#13;&#10;                &gt;&lt;/path&gt;&#13;&#10;              &lt;/svg&gt;&#13;&#10;            &lt;/button&gt;&#13;&#10;          &lt;/div&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;    &lt;li class=&quot;timeline-item&quot;&gt;&#13;&#10;      &lt;div&#13;&#10;        class=&quot;timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;i class=&quot;fa fa-history text-tiny&quot;&gt;&lt;/i&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;timeline-item-content flex-1 pl-4 sm:pl-8&quot;&gt;&#13;&#10;        &lt;div class=&quot;flex flex-col justify-between pb-2 sm:flex-row sm:pb-0&quot;&gt;&#13;&#10;          &lt;p&#13;&#10;            class=&quot;pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0&quot;&#13;&#10;          &gt;&#13;&#10;            Weekly Report&#13;&#10;          &lt;/p&gt;&#13;&#10;          &lt;span class=&quot;text-xs text-slate-400 dark:text-navy-300&quot;&#13;&#10;            &gt;a day ago&lt;/span&#13;&#10;          &gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;p class=&quot;py-1&quot;&gt;The weekly report was uploaded&lt;/p&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/li&gt;&#13;&#10;  &lt;/ol&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
