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
      Input Mask
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
      <li>Input Mask</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Input Mask -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Input Mask
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
          An input mask is a string of characters that indicates the
          format of valid input values. The
          <code class="inline-code">Cleave.js</code> library is used for
          this purpose. See more on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/nosir/cleave.js"
          >Github</a
          >
          and to the code example below.
        </p>
        <div class="mt-5">
          <span>With Prefix:</span>
          <label>
            <input
                id="inputmask1"
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Username"
                type="text"
            />
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&gt;&#13;&#10;    &lt;span&gt;With Prefix:&lt;/span&gt;&#13;&#10;    &lt;label&gt;&#13;&#10;      &lt;input&#13;&#10;        id=&quot;inputmask1&quot;&#13;&#10;        class=&quot;form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;        placeholder=&quot;Username&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config1 = {&#13;&#10;      prefix: &quot;Prefix&quot;,&#13;&#10;      delimiter: &quot;-&quot;,&#13;&#10;      blocks: [6, 4, 4, 7],&#13;&#10;    };&#13;&#10;&#13;&#10;    const inputmask1 = document.querySelector(&quot;#inputmask1&quot;);&#13;&#10;    inputmask1._mask = new Cleave(inputmask1, config1);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Delimiters Formatting-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Delimiters Formatting
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
          An input mask is a string of characters that indicates the
          format of valid input values. The
          <code class="inline-code">Cleave.js</code> library is used for
          this purpose. See more on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/nosir/cleave.js"
          >Github</a
          >
          and to the code example below.
        </p>
        <div class="mt-5">
          <span>With Delimiters Formatting:</span>
          <label>
            <input
                id="inputmask2"
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="xxx.xx_xxx-xxx"
                type="text"
            />
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&gt;&#13;&#10;    &lt;span&gt;With Delimiters Formatting:&lt;/span&gt;&#13;&#10;    &lt;label&gt;&#13;&#10;      &lt;input&#13;&#10;        id=&quot;inputmask2&quot;&#13;&#10;        class=&quot;form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;        placeholder=&quot;xxx.xx_xxx-xxx&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config2 = {&#13;&#10;      delimiters: [&quot;.&quot;, &quot;_&quot;, &quot;-&quot;],&#13;&#10;      blocks: [3, 2, 3, 3],&#13;&#10;      uppercase: true,&#13;&#10;    };&#13;&#10;&#13;&#10;    const inputmask2 = document.querySelector(&quot;#inputmask2&quot;);&#13;&#10;    inputmask2._mask = new Cleave(inputmask2, config2);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Credit Card Formatting-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Credit Card
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
          An input mask is a string of characters that indicates the
          format of valid input values. The
          <code class="inline-code">Cleave.js</code> library is used for
          this purpose. See more on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/nosir/cleave.js"
          >Github</a
          >
          and to the code example below.
        </p>
        <div class="mt-5">
          <span>Enter Credit Card:</span>
          <label>
            <input
                id="inputmask3"
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="xxxx xxxx xxxx xxxx"
                type="text"
            />
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&gt;&#13;&#10;    &lt;span&gt;Enter Credit Card:&lt;/span&gt;&#13;&#10;    &lt;label&gt;&#13;&#10;      &lt;input&#13;&#10;        id=&quot;inputmask3&quot;&#13;&#10;        class=&quot;form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;        placeholder=&quot;xxxx xxxx xxxx xxxx&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config3 = {&#13;&#10;      creditCard: true,&#13;&#10;    };&#13;&#10;&#13;&#10;    const inputmask3 = document.querySelector(&quot;#inputmask3&quot;);&#13;&#10;    inputmask3._mask = new Cleave(inputmask3, config3);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- DateTime Formatting -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          DateTime Formatting
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
          An input mask is a string of characters that indicates the
          format of valid input values. The
          <code class="inline-code">Cleave.js</code> library is used for
          this purpose. See more on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/nosir/cleave.js"
          >Github</a
          >
          and to the code example below.
        </p>
        <div class="mt-5 space-y-4">
          <div>
            <span>Date:</span>
            <label>
              <input
                  id="inputmask4"
                  class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Date"
                  type="text"
              />
            </label>
          </div>
          <div>
            <span>Time:</span>
            <label>
              <input
                  id="inputmask5"
                  class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Time"
                  type="text"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;space-y-4&quot;&gt;&#13;&#10;    &lt;div&gt;&#13;&#10;      &lt;span&gt;Date:&lt;/span&gt;&#13;&#10;      &lt;label&gt;&#13;&#10;        &lt;input&#13;&#10;          id=&quot;inputmask4&quot;&#13;&#10;          class=&quot;form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;          placeholder=&quot;Enter Date&quot;&#13;&#10;          type=&quot;text&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/label&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div&gt;&#13;&#10;      &lt;span&gt;Time:&lt;/span&gt;&#13;&#10;      &lt;label&gt;&#13;&#10;        &lt;input&#13;&#10;          id=&quot;inputmask5&quot;&#13;&#10;          class=&quot;form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;          placeholder=&quot;Enter Time&quot;&#13;&#10;          type=&quot;text&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/label&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config4 = {&#13;&#10;      date: true,&#13;&#10;      delimiter: &quot;-&quot;,&#13;&#10;      datePattern: [&quot;m&quot;, &quot;d&quot;, &quot;Y&quot;],&#13;&#10;    };&#13;&#10;&#13;&#10;    const inputmask4 = document.querySelector(&quot;#inputmask4&quot;);&#13;&#10;    inputmask4._mask = new Cleave(inputmask4, config4);&#13;&#10;&#13;&#10;    const config5 = {&#13;&#10;      time: true,&#13;&#10;      timePattern: [&quot;h&quot;, &quot;m&quot;, &quot;s&quot;],&#13;&#10;    };&#13;&#10;&#13;&#10;    const inputmask5 = document.querySelector(&quot;#inputmask5&quot;);&#13;&#10;    inputmask5._mask = new Cleave(inputmask5, config5);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Phone Formatting-->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Phone Formatting
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
          An input mask is a string of characters that indicates the
          format of valid input values. The
          <code class="inline-code">Cleave.js</code> library is used for
          this purpose. See more on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/nosir/cleave.js"
          >Github</a
          >
          and to the code example below.
        </p>
        <div class="mt-5">
          <span>Phone Number:</span>
          <label class="mt-1.5 flex -space-x-px">
                  <span
                      class="flex shrink-0 items-center justify-center rounded-l-lg border border-slate-300 px-3.5 font-inter dark:border-navy-450"
                  >
                    <span>US (+1)</span>
                  </span>
            <input
                id="inputmask6"
                class="form-input w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter Phone"
                type="text"
            />
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div&gt;&#13;&#10;    &lt;span&gt;Phone Number:&lt;/span&gt;&#13;&#10;    &lt;label class=&quot;mt-1.5 flex -space-x-px&quot;&gt;&#13;&#10;      &lt;span&#13;&#10;        class=&quot;flex shrink-0 items-center justify-center rounded-l-lg border border-slate-300 px-3.5 font-inter dark:border-navy-450&quot;&#13;&#10;      &gt;&#13;&#10;        &lt;span&gt;US (+1)&lt;/span&gt;&#13;&#10;      &lt;/span&gt;&#13;&#10;      &lt;input&#13;&#10;        id=&quot;inputmask6&quot;&#13;&#10;        class=&quot;form-input w-full rounded-r-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;        placeholder=&quot;Enter Phone&quot;&#13;&#10;        type=&quot;text&quot;&#13;&#10;      /&gt;&#13;&#10;    &lt;/label&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config6 = {&#13;&#10;      phone: true,&#13;&#10;      phoneRegionCode: &quot;US&quot;,&#13;&#10;    };&#13;&#10;&#13;&#10;    const inputmask6 = document.querySelector(&quot;#inputmask6&quot;);&#13;&#10;    inputmask6._mask = new Cleave(inputmask6, config6);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Numeral Formatting -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Numeral Formatting
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
          An input mask is a string of characters that indicates the
          format of valid input values. The
          <code class="inline-code">Cleave.js</code> library is used for
          this purpose. See more on
          <a
              class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="https://github.com/nosir/cleave.js"
          >Github</a
          >
          and to the code example below.
        </p>
        <div class="mt-5">
          <div class="flex -space-x-px">
            <select
                class="form-select rounded-l-full border border-slate-300 bg-white px-3 py-2 pr-9 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                id="maskUpdate"
            >
              <option value="thousand">Thousands</option>
              <option value="lakh">Indian lakh</option>
              <option value="wan">Chinese wan</option>
            </select>

            <input
                id="inputmask7"
                class="form-input w-full rounded-r-full border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter Phone"
                type="text"
            />
          </div>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;div class=&quot;flex -space-x-px&quot;&gt;&#13;&#10;    &lt;select&#13;&#10;      class=&quot;form-select rounded-l-full border border-slate-300 bg-white px-3 py-2 pr-9 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      id=&quot;maskUpdate&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;option value=&quot;thousand&quot;&gt;Thousands&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;lakh&quot;&gt;Indian lakh&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;wan&quot;&gt;Chinese wan&lt;/option&gt;&#13;&#10;    &lt;/select&gt;&#13;&#10;&#13;&#10;    &lt;input&#13;&#10;      id=&quot;inputmask7&quot;&#13;&#10;      class=&quot;form-input w-full rounded-r-full border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent&quot;&#13;&#10;      placeholder=&quot;Enter Phone&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config7 = {&#13;&#10;      numeral: true,&#13;&#10;      numeralThousandsGroupStyle: &quot;thousand&quot;,&#13;&#10;    };&#13;&#10;&#13;&#10;    const inputmask7 = document.querySelector(&quot;#inputmask7&quot;);&#13;&#10;    const maskUpdate = document.querySelector(&quot;#maskUpdate&quot;);&#13;&#10;&#13;&#10;    maskUpdate.addEventListener(&quot;change&quot;, (evt) =&gt; {&#13;&#10;      config7.numeralThousandsGroupStyle = evt.target.value;&#13;&#10;      inputmask7._mask.destroy();&#13;&#10;      inputmask7._mask = new Cleave(inputmask7, config7);&#13;&#10;    });&#13;&#10;&#13;&#10;    inputmask7._mask = new Cleave(inputmask7, config7);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>
  </div>
</template>