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
      Tom Select
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
      <li>Tom Select</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- Input Tags -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Input Tags
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="inline-space mt-5">
          <label class="block">
            <span>Enter Tags:</span>
            <input
                id="tom1"
                class="mt-1.5 w-full"
                placeholder="Enter tags"
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
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Enter Tags:&lt;/span&gt;&#13;&#10;    &lt;input&#13;&#10;      id=&quot;tom1&quot;&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      placeholder=&quot;Enter tags&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config1 = {&#13;&#10;      create: true,&#13;&#10;      plugins: [&quot;caret_position&quot;, &quot;input_autogrow&quot;],&#13;&#10;    };&#13;&#10;&#13;&#10;    const tom1 = document.querySelector(&quot;#tom1&quot;);&#13;&#10;    tom1._tom = new Tom(tom1, config1);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Remove Button -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Remove Button
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="mt-5">
          <label class="block">
            <span>Enter Tags:</span>
            <input
                id="tom2"
                class="mt-1.5 w-full"
                placeholder="Enter tags"
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
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Enter Tags:&lt;/span&gt;&#13;&#10;    &lt;input&#13;&#10;      id=&quot;tom2&quot;&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      placeholder=&quot;Enter tags&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config2 = {&#13;&#10;      plugins: [&quot;remove_button&quot;],&#13;&#10;      create: true,&#13;&#10;      onItemRemove: function (val) {&#13;&#10;        $notification({ text: `${val} removed` });&#13;&#10;      },&#13;&#10;    };&#13;&#10;&#13;&#10;    const tom2 = document.querySelector(&quot;#tom2&quot;);&#13;&#10;    tom2._tom = new Tom(tom2, config2);&#13;&#10;  &lt;/script&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>

    <!-- Restore on Backspace -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Restore on Backspace
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="inline-space mt-5">
          <label class="block">
            <span>Enter Tags:</span>
            <input
                class="mt-1.5 w-full"
                id="tom3"
                placeholder="Enter tags"
                value="awesome,neat"
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
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Enter Tags:&lt;/span&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      id=&quot;tom3&quot;&#13;&#10;      placeholder=&quot;Enter tags&quot;&#13;&#10;      value=&quot;awesome,neat&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config3 = { plugins: [&quot;restore_on_backspace&quot;], create: true };&#13;&#10;&#13;&#10;    const tom3 = document.querySelector(&quot;#tom3&quot;);&#13;&#10;    tom3._tom = new Tom(tom3, config3);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Clear Button -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Clear Button
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="inline-space mt-5">
          <label class="block">
            <span>Enter Tags:</span>
            <input
                class="mt-1.5 w-full"
                id="tom4"
                placeholder="Enter tags"
                value="clear,items"
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
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Enter Tags:&lt;/span&gt;&#13;&#10;    &lt;input&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      id=&quot;tom4&quot;&#13;&#10;      placeholder=&quot;Enter tags&quot;&#13;&#10;      value=&quot;clear,items&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config4 = {&#13;&#10;      plugins: {&#13;&#10;        clear_button: {&#13;&#10;          title: &quot;Remove all selected options&quot;,&#13;&#10;        },&#13;&#10;      },&#13;&#10;      persist: false,&#13;&#10;      create: true,&#13;&#10;    };&#13;&#10;&#13;&#10;    const tom4 = document.querySelector(&quot;#tom4&quot;);&#13;&#10;    tom4._tom = new Tom(tom4, config4);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Single Select -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Single Select
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="inline-space mt-5">
          <label class="block">
            <span>What type of event is it?</span>
            <select id="tom5" class="mt-1.5 w-full">
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;What type of event is it?&lt;/span&gt;&#13;&#10;    &lt;select id=&quot;tom5&quot; class=&quot;mt-1.5 w-full&quot;&gt;&#13;&#10;      &lt;option&gt;Corporate event&lt;/option&gt;&#13;&#10;      &lt;option&gt;Wedding&lt;/option&gt;&#13;&#10;      &lt;option&gt;Birthday&lt;/option&gt;&#13;&#10;      &lt;option&gt;Other&lt;/option&gt;&#13;&#10;    &lt;/select&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config5 = {&#13;&#10;      create: true,&#13;&#10;      sortField: { field: &quot;text&quot;, direction: &quot;asc&quot; },&#13;&#10;    };&#13;&#10;&#13;&#10;    const tom5 = document.querySelector(&quot;#tom5&quot;);&#13;&#10;    tom5._tom = new Tom(tom5, config5);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Select Multiple -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Select Multiple
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="inline-space mt-5">
          <label class="block">
            <span>Select Countries</span>
            <select
                id="tom6"
                class="mt-1.5 w-full"
                multiple
                placeholder="Select a state..."
                autocomplete="off"
            >
              <option value="">Select a state...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA" selected>California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY" selected>Wyoming</option>
            </select>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Select Countries&lt;/span&gt;&#13;&#10;    &lt;select&#13;&#10;      id=&quot;tom6&quot;&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      multiple&#13;&#10;      placeholder=&quot;Select a state...&quot;&#13;&#10;      autocomplete=&quot;off&quot;&#13;&#10;    &gt;&#13;&#10;      &lt;option value=&quot;&quot;&gt;Select a state...&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AL&quot;&gt;Alabama&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AK&quot;&gt;Alaska&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AZ&quot;&gt;Arizona&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;AR&quot;&gt;Arkansas&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;CA&quot; selected&gt;California&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;CO&quot;&gt;Colorado&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;CT&quot;&gt;Connecticut&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;DE&quot;&gt;Delaware&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;DC&quot;&gt;District of Columbia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;FL&quot;&gt;Florida&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;GA&quot;&gt;Georgia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;HI&quot;&gt;Hawaii&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;ID&quot;&gt;Idaho&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;IL&quot;&gt;Illinois&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;IN&quot;&gt;Indiana&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;IA&quot;&gt;Iowa&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;KS&quot;&gt;Kansas&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;KY&quot;&gt;Kentucky&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;LA&quot;&gt;Louisiana&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;ME&quot;&gt;Maine&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MD&quot;&gt;Maryland&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MA&quot;&gt;Massachusetts&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MI&quot;&gt;Michigan&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MN&quot;&gt;Minnesota&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MS&quot;&gt;Mississippi&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MO&quot;&gt;Missouri&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;MT&quot;&gt;Montana&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NE&quot;&gt;Nebraska&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NV&quot;&gt;Nevada&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NH&quot;&gt;New Hampshire&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NJ&quot;&gt;New Jersey&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NM&quot;&gt;New Mexico&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NY&quot;&gt;New York&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;NC&quot;&gt;North Carolina&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;ND&quot;&gt;North Dakota&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;OH&quot;&gt;Ohio&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;OK&quot;&gt;Oklahoma&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;OR&quot;&gt;Oregon&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;PA&quot;&gt;Pennsylvania&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;RI&quot;&gt;Rhode Island&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;SC&quot;&gt;South Carolina&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;SD&quot;&gt;South Dakota&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;TN&quot;&gt;Tennessee&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;TX&quot;&gt;Texas&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;UT&quot;&gt;Utah&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;VT&quot;&gt;Vermont&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;VA&quot;&gt;Virginia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WA&quot;&gt;Washington&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WV&quot;&gt;West Virginia&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WI&quot;&gt;Wisconsin&lt;/option&gt;&#13;&#10;      &lt;option value=&quot;WY&quot; selected&gt;Wyoming&lt;/option&gt;&#13;&#10;    &lt;/select&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;  &lt;script&gt;&#13;&#10;    const tom6 = document.querySelector(&quot;#tom6&quot;);&#13;&#10;    tom6._tom = new Tom(tom6);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Custom HTML -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Custom HTML
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="inline-space mt-5">
          <label class="block">
            <span>Select Authors</span>
            <select
                class="mt-1.5 w-full"
                id="tom7"
                multiple
                placeholder="Select Authors..."
            ></select>
          </label>
        </div>
      </div>
      <div class="code-wrapper hidden pt-4">
              <pre
                  class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
              >
                <code class="language-html">
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Select Authors&lt;/span&gt;&#13;&#10;    &lt;select&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      id=&quot;tom7&quot;&#13;&#10;      multiple&#13;&#10;      placeholder=&quot;Select Authors...&quot;&#13;&#10;    &gt;&lt;/select&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config7 = {&#13;&#10;      valueField: &quot;id&quot;,&#13;&#10;      searchField: &quot;title&quot;,&#13;&#10;      options: [&#13;&#10;        {&#13;&#10;          id: 1,&#13;&#10;          name: &quot;John Doe&quot;,&#13;&#10;          job: &quot;Web designer&quot;,&#13;&#10;          src: &quot;images/200x200.png&quot;,&#13;&#10;        },&#13;&#10;        {&#13;&#10;          id: 2,&#13;&#10;          name: &quot;Emilie Watson&quot;,&#13;&#10;          job: &quot;Developer&quot;,&#13;&#10;          src: &quot;images/200x200.png&quot;,&#13;&#10;        },&#13;&#10;        {&#13;&#10;          id: 3,&#13;&#10;          name: &quot;Nancy Clarke&quot;,&#13;&#10;          job: &quot;Software Engineer&quot;,&#13;&#10;          src: &quot;images/200x200.png&quot;,&#13;&#10;        },&#13;&#10;      ],&#13;&#10;      placeholder: &quot;Select the author&quot;,&#13;&#10;      render: {&#13;&#10;        option: function (data, escape) {&#13;&#10;          return `&lt;div class=&quot;flex space-x-3&quot;&gt;&#13;&#10;                      &lt;div class=&quot;avatar w-8 h-8&quot;&gt;&#13;&#10;                        &lt;img class=&quot;rounded-full&quot; src=&quot;${escape(&#13;&#10;                          data.src&#13;&#10;                        )}&quot; alt=&quot;avatar&quot;/&gt;&#13;&#10;                      &lt;/div&gt;&#13;&#10;                      &lt;div class=&quot;flex flex-col&quot;&gt;&#13;&#10;                        &lt;span&gt; ${escape(data.name)}&lt;/span&gt;&#13;&#10;                        &lt;span class=&quot;text-xs opacity-80&quot;&gt; ${escape(&#13;&#10;                          data.job&#13;&#10;                        )}&lt;/span&gt;&#13;&#10;                      &lt;/div&gt;&#13;&#10;                    &lt;/div&gt;`;&#13;&#10;        },&#13;&#10;        item: function (data, escape) {&#13;&#10;          return `&lt;span class=&quot;badge rounded-full bg-primary dark:bg-accent text-white p-px mr-2&quot;&gt;&#13;&#10;                      &lt;span class=&quot;avatar w-6 h-6&quot;&gt;&#13;&#10;                        &lt;img class=&quot;rounded-full&quot; src=&quot;${escape(&#13;&#10;                          data.src&#13;&#10;                        )}&quot; alt=&quot;avatar&quot;&gt;&#13;&#10;                      &lt;/span&gt;&#13;&#10;                      &lt;span class=&quot;mx-2&quot;&gt;${escape(data.name)}&lt;/span&gt;&#13;&#10;                    &lt;/span&gt;`;&#13;&#10;        },&#13;&#10;      },&#13;&#10;    };&#13;&#10;&#13;&#10;    const tom7 = document.querySelector(&quot;#tom7&quot;);&#13;&#10;    tom7._tom = new Tom(tom7, config7);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
      </div>
    </div>

    <!-- Disable Persist -->
    <div class="card px-4 pb-4 sm:px-5">
      <div class="my-3 flex h-8 items-center justify-between">
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Disable Persist
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
          <a
              href="https://tom-select.js.org/"
              class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
          >Tom Select</a
          >
          is a versatile and dynamic &lt;select&gt; UI control. With
          autocomplete and native-feeling keyboard navigation, it's useful
          for tagging, contact lists, country selectors, and so on.
        </p>
        <div class="inline-space mt-5">
          <label class="block">
            <span>Enter Tags:</span>
            <input
                id="tom8"
                class="mt-1.5 w-full"
                placeholder="Enter tags"
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
  &lt;label class=&quot;block&quot;&gt;&#13;&#10;    &lt;span&gt;Enter Tags:&lt;/span&gt;&#13;&#10;    &lt;input&#13;&#10;      id=&quot;tom8&quot;&#13;&#10;      class=&quot;mt-1.5 w-full&quot;&#13;&#10;      placeholder=&quot;Enter tags&quot;&#13;&#10;      type=&quot;text&quot;&#13;&#10;    /&gt;&#13;&#10;  &lt;/label&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config8 = { create: true, persist: false };&#13;&#10;&#13;&#10;    const tom8 = document.querySelector(&quot;#tom8&quot;);&#13;&#10;    tom8._tom = new Tom(tom8, config8);&#13;&#10;  &lt;/script&gt;&#13;&#10;
                </code>
              </pre>
      </div>
    </div>
  </div>
</template>
