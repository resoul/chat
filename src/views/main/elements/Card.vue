<script>
import Elements from "@/views/main/elements/Elements.vue";

export default {
  name: "Card",
  extends: Elements
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Card
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
      <li>Card</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
    <div class="card px-4 py-4 sm:px-5">
      <div>
        <h2
            class="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Simple Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div class="card rounded-2xl px-4 py-4 sm:px-5">
      <div>
        <h2
            class="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Rounded Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="card border border-slate-150 px-4 py-4 shadow-none dark:border-navy-600 sm:px-5"
    >
      <div>
        <h2
            class="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
        >
          Bordered Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="rounded-lg bg-primary px-4 py-4 text-white dark:bg-accent sm:px-5"
    >
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Primary Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div class="rounded-lg bg-secondary px-4 py-4 text-white sm:px-5">
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Secondary Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div class="rounded-lg bg-info px-4 py-4 text-white sm:px-5">
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Info Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div class="rounded-lg bg-success px-4 py-4 text-white sm:px-5">
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Success Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div class="rounded-lg bg-warning px-4 py-4 text-white sm:px-5">
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Warning Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div class="rounded-lg bg-error px-4 py-4 text-white sm:px-5">
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Error Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="rounded-lg bg-primary px-4 py-4 text-white shadow-lg shadow-primary/50 dark:bg-accent dark:shadow-accent/50 sm:px-5"
    >
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Glow Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="rounded-lg bg-warning px-4 py-4 text-white shadow-lg shadow-warning/50 sm:px-5"
    >
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Glow Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="rounded-lg bg-info px-4 py-4 text-white shadow-lg shadow-info/50 sm:px-5"
    >
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Glow Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 px-4 py-4 text-white sm:px-5"
    >
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Gradient Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-4 text-white sm:px-5"
    >
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Gradient Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div
        class="rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 px-4 py-4 text-white sm:px-5"
    >
      <div>
        <h2 class="text-lg font-medium tracking-wide line-clamp-1">
          Gradient Card
        </h2>
      </div>
      <div class="pt-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laboriosam praesentium adipisci iure doloribus accusamus animi
          quos.
        </p>
      </div>
    </div>
    <div class="rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 p-1">
      <div
          class="rounded-lg bg-slate-50 px-4 py-4 dark:bg-navy-900 sm:px-5"
      >
        <div>
          <h2
              class="text-lg font-medium tracking-wide text-slate-600 line-clamp-1 dark:text-navy-100"
          >
            Outlined Gradient
          </h2>
        </div>
        <div class="pt-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            laboriosam praesentium adipisci iure doloribus accusamus animi
            quos.
          </p>
        </div>
      </div>
    </div>
    <div
        class="rounded-lg bg-gradient-to-r from-green-400 to-fuchsia-400 p-1"
    >
      <div
          class="rounded-lg bg-slate-50 px-4 py-4 dark:bg-navy-900 sm:px-5"
      >
        <div>
          <h2
              class="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Outlined Gradient
          </h2>
        </div>
        <div class="pt-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            laboriosam praesentium adipisci iure doloribus accusamus animi
            quos.
          </p>
        </div>
      </div>
    </div>
    <div
        class="rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 p-1"
    >
      <div
          class="rounded-lg bg-slate-50 px-4 py-4 dark:bg-navy-900 sm:px-5"
      >
        <div>
          <h2
              class="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"
          >
            Outlined Gradient
          </h2>
        </div>
        <div class="pt-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            laboriosam praesentium adipisci iure doloribus accusamus animi
            quos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>