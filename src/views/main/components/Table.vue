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
      Table
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
      <li>Table</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Basic Table -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Basic Table
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
          Tables display information in a way that's easy to scan, so that
          users can look for patterns and insights. Check out code for
          detail of usage.
        </p>
        <div class="mt-5">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table class="w-full text-left">
              <thead>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <th
                    class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                >
                  Name
                </th>
                <th
                    class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                >
                  Job
                </th>
                <th
                    class="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
                >
                  Favorite Color
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Cy Ganderton
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Quality Control Specialist
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Blue
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Hart Hagerty
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Desktop Support Technician
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Purple
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Brice Swyre
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Tax Accountant
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">Red</td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Marjy Ferencz
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Office Assistant I
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Crimson
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;is-scrollbar-hidden min-w-full overflow-x-auto&quot;&gt;&#13;&#10;    &lt;table class=&quot;w-full text-left&quot;&gt;&#13;&#10;      &lt;thead&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            #&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Name&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Job&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Favorite Color&#13;&#10;          &lt;/th&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/thead&gt;&#13;&#10;      &lt;tbody&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;1&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Cy Ganderton&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Quality Control Specialist&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Blue&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;2&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Hart Hagerty&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Desktop Support Technician&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Purple&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;3&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Brice Swyre&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Tax Accountant&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Red&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;4&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Marjy Ferencz&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Office Assistant I&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Crimson&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/tbody&gt;&#13;&#10;    &lt;/table&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Bordered Table -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Bordered Table
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
          Tables display information in a way that's easy to scan, so that
          users can look for patterns and insights. Check out code for
          detail of usage.
        </p>
        <div class="mt-5">
          <div
              class="is-scrollbar-hidden min-w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-500"
          >
            <table class="w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap border border-t-0 border-l-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5"
                >
                  Name
                </th>
                <th
                    class="whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5"
                >
                  Job
                </th>
                <th
                    class="whitespace-nowrap border border-t-0 border-r-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5"
                >
                  Favorite Color
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td
                    class="whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  1
                </td>
                <td
                    class="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Cy Ganderton
                </td>
                <td
                    class="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Quality Control Specialist
                </td>
                <td
                    class="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Blue
                </td>
              </tr>
              <tr>
                <td
                    class="whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  2
                </td>
                <td
                    class="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Hart Hagerty
                </td>
                <td
                    class="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Desktop Support Technician
                </td>
                <td
                    class="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Purple
                </td>
              </tr>
              <tr>
                <td
                    class="whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  3
                </td>
                <td
                    class="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Brice Swyre
                </td>
                <td
                    class="whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Tax Accountant
                </td>
                <td
                    class="whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Red
                </td>
              </tr>
              <tr>
                <td
                    class="whitespace-nowrap border border-b-0 border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  4
                </td>
                <td
                    class="whitespace-nowrap border border-b-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Marjy Ferencz
                </td>
                <td
                    class="whitespace-nowrap border border-b-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Office Assistant I
                </td>
                <td
                    class="whitespace-nowrap border border-b-0 border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5"
                >
                  Crimson
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&#13;&#10;    class=&quot;is-scrollbar-hidden min-w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-500&quot;&#13;&#10;  &gt;&#13;&#10;    &lt;table class=&quot;w-full text-left&quot;&gt;&#13;&#10;      &lt;thead&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap border border-t-0 border-l-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            #&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Name&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Job&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap border border-t-0 border-r-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Favorite Color&#13;&#10;          &lt;/th&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/thead&gt;&#13;&#10;      &lt;tbody&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            1&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Cy Ganderton&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Quality Control Specialist&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Blue&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            2&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Hart Hagerty&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Desktop Support Technician&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Purple&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            3&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Brice Swyre&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Tax Accountant&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Red&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-b-0 border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            4&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-b-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Marjy Ferencz&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-b-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Office Assistant I&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td&#13;&#10;            class=&quot;whitespace-nowrap border border-b-0 border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Crimson&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/tbody&gt;&#13;&#10;    &lt;/table&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Hoverable Rows -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Hoverable Rows
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
          Tables display information in a way that's easy to scan, so that
          users can look for patterns and insights. Check out code for
          detail of usage.
        </p>
        <div class="mt-5">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table class="is-hoverable w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Name
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Job
                </th>
                <th
                    class="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Favorite Color
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  1
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Cy Ganderton
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Quality Control Specialist
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Blue
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  2
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Hart Hagerty
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Desktop Support Technician
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Purple
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  3
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Brice Swyre
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Tax Accountant
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Red
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  4
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Marjy Ferencz
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Office Assistant I
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Crimson
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;is-scrollbar-hidden min-w-full overflow-x-auto&quot;&gt;&#13;&#10;    &lt;table class=&quot;is-hoverable w-full text-left&quot;&gt;&#13;&#10;      &lt;thead&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            #&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Name&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Job&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Favorite Color&#13;&#10;          &lt;/th&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/thead&gt;&#13;&#10;      &lt;tbody&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;1&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Cy Ganderton&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Quality Control Specialist&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;Blue&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;2&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Hart Hagerty&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Desktop Support Technician&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Purple&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;3&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Brice Swyre&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Tax Accountant&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;Red&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;4&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Marjy Ferencz&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Office Assistant I&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Crimson&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/tbody&gt;&#13;&#10;    &lt;/table&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Zebra Table -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Zebra Table
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
          Tables display information in a way that's easy to scan, so that
          users can look for patterns and insights. Check out code for
          detail of usage.
        </p>
        <div class="mt-5">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table class="is-zebra w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Name
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Job
                </th>
                <th
                    class="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Favorite Color
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  1
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Cy Ganderton
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Quality Control Specialist
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Blue
                </td>
              </tr>
              <tr>
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  2
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Hart Hagerty
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Desktop Support Technician
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Purple
                </td>
              </tr>
              <tr>
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  3
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Brice Swyre
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Tax Accountant
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Red
                </td>
              </tr>
              <tr>
                <td
                    class="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5"
                >
                  4
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Marjy Ferencz
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Office Assistant I
                </td>
                <td
                    class="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5"
                >
                  Crimson
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;is-scrollbar-hidden min-w-full overflow-x-auto&quot;&gt;&#13;&#10;    &lt;table class=&quot;is-zebra w-full text-left&quot;&gt;&#13;&#10;      &lt;thead&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            #&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Name&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Job&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Favorite Color&#13;&#10;          &lt;/th&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/thead&gt;&#13;&#10;      &lt;tbody&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;1&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Cy Ganderton&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Quality Control Specialist&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;Blue&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;2&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Hart Hagerty&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Desktop Support Technician&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Purple&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;3&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Brice Swyre&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Tax Accountant&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;Red&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5&quot;&gt;4&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Marjy Ferencz&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Office Assistant I&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Crimson&#13;&#10;          &lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/tbody&gt;&#13;&#10;    &lt;/table&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Full Width Table -->
    <div class="card pb-4">
      <div
          class="my-3 flex h-8 items-center justify-between px-4 sm:px-5"
      >
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Full Width Table
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
        <p class="max-w-xl px-4 sm:px-5">
          Tables display information in a way that's easy to scan, so that
          users can look for patterns and insights. Check out code for
          detail of usage.
        </p>
        <div class="mt-5">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table class="is-hoverable w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Name
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Job
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Favorite Color
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Cy Ganderton
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Quality Control Specialist
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Blue
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Hart Hagerty
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Desktop Support Technician
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Purple
                </td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Brice Swyre
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Tax Accountant
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">Red</td>
              </tr>
              <tr
                  class="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
              >
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Marjy Ferencz
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Office Assistant I
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Crimson
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden px-4 pt-4 sm:px-5">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;is-scrollbar-hidden min-w-full overflow-x-auto&quot;&gt;&#13;&#10;    &lt;table class=&quot;is-hoverable w-full text-left&quot;&gt;&#13;&#10;      &lt;thead&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            #&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Name&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Job&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Favorite Color&#13;&#10;          &lt;/th&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/thead&gt;&#13;&#10;      &lt;tbody&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;1&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Cy Ganderton&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Quality Control Specialist&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Blue&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;2&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Hart Hagerty&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Desktop Support Technician&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Purple&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;3&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Brice Swyre&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Tax Accountant&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Red&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr class=&quot;border border-transparent border-b-slate-200 dark:border-b-navy-500&quot;&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;4&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Marjy Ferencz&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Office Assistant I&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Crimson&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/tbody&gt;&#13;&#10;    &lt;/table&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>

    <!-- Full Width Zebra Table -->
    <div class="card pb-4">
      <div
          class="my-3 flex h-8 items-center justify-between px-4 sm:px-5"
      >
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Full Width Zebra Table
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
        <p class="max-w-xl px-4 sm:px-5">
          Tables display information in a way that's easy to scan, so that
          users can look for patterns and insights. Check out code for
          detail of usage.
        </p>
        <div class="mt-5">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table class="is-zebra w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Name
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Job
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Favorite Color
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Cy Ganderton
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Quality Control Specialist
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Blue
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Hart Hagerty
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Desktop Support Technician
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Purple
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Brice Swyre
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Tax Accountant
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">Red</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Marjy Ferencz
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Office Assistant I
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Crimson
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden px-4 pt-4 sm:px-5">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;is-scrollbar-hidden min-w-full overflow-x-auto&quot;&gt;&#13;&#10;    &lt;table class=&quot;is-zebra w-full text-left&quot;&gt;&#13;&#10;      &lt;thead&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            #&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Name&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Job&#13;&#10;          &lt;/th&gt;&#13;&#10;          &lt;th&#13;&#10;            class=&quot;whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5&quot;&#13;&#10;          &gt;&#13;&#10;            Favorite Color&#13;&#10;          &lt;/th&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/thead&gt;&#13;&#10;      &lt;tbody&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;1&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Cy Ganderton&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Quality Control Specialist&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Blue&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;2&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Hart Hagerty&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Desktop Support Technician&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Purple&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;3&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Brice Swyre&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Tax Accountant&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Red&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;        &lt;tr&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;4&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Marjy Ferencz&lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;&#13;&#10;            Office Assistant I&#13;&#10;          &lt;/td&gt;&#13;&#10;          &lt;td class=&quot;whitespace-nowrap px-4 py-3 sm:px-5&quot;&gt;Crimson&lt;/td&gt;&#13;&#10;        &lt;/tr&gt;&#13;&#10;      &lt;/tbody&gt;&#13;&#10;    &lt;/table&gt;&#13;&#10;  &lt;/div&gt;</code>
              </pre>
      </div>
    </div>
  </div>
</template>
