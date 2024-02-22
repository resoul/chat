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
      Swiper
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >
          Components
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
      <li>Swiper</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <!-- Default Carousel -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Default Carousel
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel1" class="swiper rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-top"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                <code class="language-html">
  &lt;div id=&quot;carousel1&quot; class=&quot;swiper rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-top&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config1 = {&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel1 = document.querySelector(&quot;#carousel1&quot;);&#13;&#10;    carousel1._swiper = new Swiper(carousel1, config1);&#13;&#10;  &lt;/script&gt;&#13;&#10;                </code>
              </pre>
        </div>
      </div>

      <!-- Lazy Loading Images -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Lazy Loading Images
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel2" class="swiper rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide h-full">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      loading="lazy"
                      alt="image"
                  />
                  <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide h-full">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                      loading="lazy"
                  />
                  <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide h-full">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                      loading="lazy"
                  />
                  <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="swiper-slide h-full">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                      loading="lazy"
                  />
                  <div class="swiper-lazy-preloader"></div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel2&quot; class=&quot;swiper rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide h-full&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;        &lt;div class=&quot;swiper-lazy-preloader&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide h-full&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;        &lt;div class=&quot;swiper-lazy-preloader&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide h-full&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;        &lt;div class=&quot;swiper-lazy-preloader&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide h-full&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;        &lt;div class=&quot;swiper-lazy-preloader&quot;&gt;&lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config2 = {&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, type: &quot;progressbar&quot; },&#13;&#10;      lazy: true,&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel2 = document.querySelector(&quot;#carousel2&quot;);&#13;&#10;    carousel2._swiper = new Swiper(carousel2, config2);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Space Between -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Space Between
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel3" class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide !w-10/12">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide !w-10/12">
                  <img
                      class="h-full w-full rounded-lg object-cover object-top"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide !w-10/12">
                  <img
                      class="h-full w-full rounded-lg object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide !w-10/12">
                  <img
                      class="h-full w-full rounded-lg object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel3&quot; class=&quot;swiper&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide !w-10/12&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide !w-10/12&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover object-top&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide !w-10/12&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide !w-10/12&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config3 = {&#13;&#10;      slidesPerView: &quot;auto&quot;,&#13;&#10;      spaceBetween: 30,&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, clickable: true },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel3 = document.querySelector(&quot;#carousel3&quot;);&#13;&#10;    carousel3._swiper = new Swiper(carousel3, config3);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Zoom -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Zoom
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel4" class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel4&quot; class=&quot;swiper&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config4 = {&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, clickable: true },&#13;&#10;      zoom: { maxRatio: 4 },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel4 = document.querySelector(&quot;#carousel4&quot;);&#13;&#10;    carousel4._swiper = new Swiper(carousel4, config4);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Flip Effect -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Flip Effect
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel5" class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-zoom-container">
                    <img
                        class="h-full w-full object-cover"
                        src="images/800x600.png"
                        alt="image"
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel5&quot; class=&quot;swiper&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;div class=&quot;swiper-zoom-container&quot;&gt;&#13;&#10;          &lt;img&#13;&#10;            class=&quot;h-full w-full object-cover&quot;&#13;&#10;            src=&quot;images/800x600.png&quot;&#13;&#10;            alt=&quot;image&quot;&#13;&#10;          /&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config5 = {&#13;&#10;      effect: &quot;flip&quot;,&#13;&#10;      flipEffect: { slideShadows: false },&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, clickable: true },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel5 = document.querySelector(&quot;#carousel5&quot;);&#13;&#10;    carousel5._swiper = new Swiper(carousel5, config5);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Cube Effect -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Cube Effect
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel6" class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel6&quot; class=&quot;swiper&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config6 = {&#13;&#10;      effect: &quot;cube&quot;,&#13;&#10;      cubeEffect: { shadow: false },&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, clickable: true },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel6 = document.querySelector(&quot;#carousel6&quot;);&#13;&#10;    carousel6._swiper = new Swiper(carousel6, config6);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Card Effect -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Card Effect
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mx-auto mt-5 w-10/12">
            <div id="carousel7" class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
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
  &lt;div id=&quot;carousel7&quot; class=&quot;swiper&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config7 = { effect: &quot;cards&quot;, grabCursor: true };&#13;&#10;&#13;&#10;    const carousel7 = document.querySelector(&quot;#carousel7&quot;);&#13;&#10;    carousel7._swiper = new Swiper(carousel7, config7);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>
    </div>

    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <!-- Pagination -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Pagination
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel8" class="swiper rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-top"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel8&quot; class=&quot;swiper rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-top&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config8 = {&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, clickable: true },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel8 = document.querySelector(&quot;#carousel8&quot;);&#13;&#10;    carousel8._swiper = new Swiper(carousel8, config8);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Vertical Slider -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Vertical Slider
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel9" class="swiper h-64 rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel9&quot; class=&quot;swiper h-64 rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config9 = {&#13;&#10;      direction: &quot;vertical&quot;,&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, clickable: true },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel9 = document.querySelector(&quot;#carousel9&quot;);&#13;&#10;    carousel9._swiper = new Swiper(carousel9, config9);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- With Scrollbar -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            With Scrollbar
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel10" class="swiper rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-top"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-scrollbar"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel10&quot; class=&quot;swiper rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-top&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-scrollbar&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config10 = {&#13;&#10;      scrollbar: { el: &quot;.swiper-scrollbar&quot;, draggable: true },&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;      autoplay: { delay: 2000 },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel10 = document.querySelector(&quot;#carousel10&quot;);&#13;&#10;    carousel10._swiper = new Swiper(carousel10, config10);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Fade Effect -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Fade Effect
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel11" class="swiper rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-top"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel11&quot; class=&quot;swiper rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-top&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config11 = {&#13;&#10;      effect: &quot;fade&quot;,&#13;&#10;      pagination: { el: &quot;.swiper-pagination&quot;, clickable: true },&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel11 = document.querySelector(&quot;#carousel11&quot;);&#13;&#10;    carousel11._swiper = new Swiper(carousel11, config11);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Coverflow Effect -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Coverflow Effect
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel12" class="swiper rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-top"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full object-cover object-center"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel12&quot; class=&quot;swiper rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-top&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full object-cover object-center&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config12 = {&#13;&#10;      effect: &quot;coverflow&quot;,&#13;&#10;      coverflowEffect: { rotate: 35, slideShadows: false },&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel12 = document.querySelector(&quot;#carousel12&quot;);&#13;&#10;    carousel12._swiper = new Swiper(carousel12, config12);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Parallax -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Parallax
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div
                id="carousel13"
                class="swiper swiper-parallax h-64 rounded-lg"
            >
              <div
                  class="parallax-bg"
                  style="
                        background-image: url('images/800x600.png');
                      "
                  data-swiper-parallax="-23%"
              ></div>
              <div class="swiper-wrapper">
                <div class="swiper-slide p-6">
                  <div
                      class="title text-3xl font-light text-white"
                      data-swiper-parallax="-300"
                  >
                    Slide 1
                  </div>
                  <div
                      class="subtitle mt-2 text-2xl text-white"
                      data-swiper-parallax="-200"
                  >
                    Subtitle
                  </div>
                  <div
                      class="text mt-4 text-white"
                      data-swiper-parallax="-100"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Ab at, consectetur cupiditate debitis expedita
                      fugit, modi nemo nobis odit perferendis quaerat quia
                      reiciendis repudiandae rerum sed?
                    </p>
                  </div>
                </div>
                <div class="swiper-slide p-6">
                  <div
                      class="title text-3xl font-light text-white"
                      data-swiper-parallax="-300"
                  >
                    Slide 2
                  </div>
                  <div
                      class="subtitle mt-2 text-2xl text-white"
                      data-swiper-parallax="-200"
                  >
                    Subtitle
                  </div>
                  <div
                      class="text mt-4 text-white"
                      data-swiper-parallax="-100"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Ab at, consectetur cupiditate debitis expedita
                      fugit, modi nemo nobis odit perferendis quaerat quia
                      reiciendis repudiandae rerum sed?
                    </p>
                  </div>
                </div>
                <div class="swiper-slide p-6">
                  <div
                      class="title text-3xl font-light text-white"
                      data-swiper-parallax="-300"
                  >
                    Slide 3
                  </div>
                  <div
                      class="subtitle mt-2 text-2xl text-white"
                      data-swiper-parallax="-200"
                  >
                    Subtitle
                  </div>
                  <div
                      class="text mt-4 text-white"
                      data-swiper-parallax="-100"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Ab at, consectetur cupiditate debitis expedita
                      fugit, modi nemo nobis odit perferendis quaerat quia
                      reiciendis repudiandae rerum sed?
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="code-wrapper hidden pt-4">
                <pre
                    class="is-scrollbar-hidden max-h-96 overflow-auto rounded-lg"
                >
                  <code class="language-html">
  &lt;div id=&quot;carousel13&quot; class=&quot;swiper swiper-parallax h-64 rounded-lg&quot;&gt;&#13;&#10;    &lt;div&#13;&#10;      class=&quot;parallax-bg&quot;&#13;&#10;      style=&quot;background-image: url(&apos;images/800x600.png&apos;)&quot;&#13;&#10;      data-swiper-parallax=&quot;-23%&quot;&#13;&#10;    &gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide p-6&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;title text-3xl font-light text-white&quot;&#13;&#10;          data-swiper-parallax=&quot;-300&quot;&#13;&#10;        &gt;&#13;&#10;          Slide 1&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;subtitle mt-2 text-2xl text-white&quot;&#13;&#10;          data-swiper-parallax=&quot;-200&quot;&#13;&#10;        &gt;&#13;&#10;          Subtitle&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;text mt-4 text-white&quot; data-swiper-parallax=&quot;-100&quot;&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at,&#13;&#10;            consectetur cupiditate debitis expedita fugit, modi nemo nobis odit&#13;&#10;            perferendis quaerat quia reiciendis repudiandae rerum sed?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide p-6&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;title text-3xl font-light text-white&quot;&#13;&#10;          data-swiper-parallax=&quot;-300&quot;&#13;&#10;        &gt;&#13;&#10;          Slide 2&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;subtitle mt-2 text-2xl text-white&quot;&#13;&#10;          data-swiper-parallax=&quot;-200&quot;&#13;&#10;        &gt;&#13;&#10;          Subtitle&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;text mt-4 text-white&quot; data-swiper-parallax=&quot;-100&quot;&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at,&#13;&#10;            consectetur cupiditate debitis expedita fugit, modi nemo nobis odit&#13;&#10;            perferendis quaerat quia reiciendis repudiandae rerum sed?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide p-6&quot;&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;title text-3xl font-light text-white&quot;&#13;&#10;          data-swiper-parallax=&quot;-300&quot;&#13;&#10;        &gt;&#13;&#10;          Slide 3&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div&#13;&#10;          class=&quot;subtitle mt-2 text-2xl text-white&quot;&#13;&#10;          data-swiper-parallax=&quot;-200&quot;&#13;&#10;        &gt;&#13;&#10;          Subtitle&#13;&#10;        &lt;/div&gt;&#13;&#10;        &lt;div class=&quot;text mt-4 text-white&quot; data-swiper-parallax=&quot;-100&quot;&gt;&#13;&#10;          &lt;p&gt;&#13;&#10;            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at,&#13;&#10;            consectetur cupiditate debitis expedita fugit, modi nemo nobis odit&#13;&#10;            perferendis quaerat quia reiciendis repudiandae rerum sed?&#13;&#10;          &lt;/p&gt;&#13;&#10;        &lt;/div&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-next&quot;&gt;&lt;/div&gt;&#13;&#10;    &lt;div class=&quot;swiper-button-prev&quot;&gt;&lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config13 = {&#13;&#10;      parallax: true,&#13;&#10;      navigation: {&#13;&#10;        prevEl: &quot;.swiper-button-prev&quot;,&#13;&#10;        nextEl: &quot;.swiper-button-next&quot;,&#13;&#10;      },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel13 = document.querySelector(&quot;#carousel13&quot;);&#13;&#10;    carousel13._swiper = new Swiper(carousel13, config13);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>

      <!-- Creative Effect -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
              class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Creative Effect
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
            <a
                href="https://github.com/nolimits4web/swiper"
                class="font-normal text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            >Swiper</a
            >
            is the free and most modern mobile touch slider with hardware
            accelerated transitions and amazing native behavior. Check out
            code for detail of usage.
          </p>
          <div class="mt-5">
            <div id="carousel14" class="swiper rounded-lg">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                      class="h-full w-full rounded-lg object-cover"
                      src="images/800x600.png"
                      alt="image"
                  />
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
  &lt;div id=&quot;carousel14&quot; class=&quot;swiper rounded-lg&quot;&gt;&#13;&#10;    &lt;div class=&quot;swiper-wrapper&quot;&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;      &lt;div class=&quot;swiper-slide&quot;&gt;&#13;&#10;        &lt;img&#13;&#10;          class=&quot;h-full w-full rounded-lg object-cover&quot;&#13;&#10;          src=&quot;images/800x600.png&quot;&#13;&#10;          alt=&quot;image&quot;&#13;&#10;        /&gt;&#13;&#10;      &lt;/div&gt;&#13;&#10;    &lt;/div&gt;&#13;&#10;  &lt;/div&gt;&#13;&#10;&#13;&#10;  &lt;!-- Javascript --&gt;&#13;&#10;&#13;&#10;  &lt;script&gt;&#13;&#10;    const config14 = {&#13;&#10;      grabCursor: true,&#13;&#10;      effect: &quot;creative&quot;,&#13;&#10;      creativeEffect: {&#13;&#10;        prev: {&#13;&#10;          shadow: true,&#13;&#10;          translate: [&quot;-125%&quot;, 0, -800],&#13;&#10;          rotate: [0, 0, -90],&#13;&#10;        },&#13;&#10;        next: {&#13;&#10;          shadow: true,&#13;&#10;          translate: [&quot;125%&quot;, 0, -800],&#13;&#10;          rotate: [0, 0, 90],&#13;&#10;        },&#13;&#10;      },&#13;&#10;    };&#13;&#10;&#13;&#10;    const carousel14 = document.querySelector(&quot;#carousel14&quot;);&#13;&#10;    carousel14._swiper = new Swiper(carousel14, config14);&#13;&#10;  &lt;/script&gt;&#13;&#10;                  </code>
                </pre>
        </div>
      </div>
    </div>
  </div>
</template>
