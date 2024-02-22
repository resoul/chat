<script>
import { useThemeStore } from "@/components/theme/theme.js";
export default {
  name: "Onboarding",
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full place-items-center px-[var(--margin-x)] pb-6')

    return { theme }
  }
}
</script>

<template>
  <div class="py-5 text-center lg:py-6">
    <p class="text-sm uppercase">Are you new here?</p>
    <h3
        class="mt-1 text-xl font-semibold text-slate-600 dark:text-navy-100"
    >
      Welcome. Where do you like to Start?
    </h3>
  </div>
  <div
      class="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6"
  >
    <div
        class="rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 py-6 px-5 text-center"
    >
      <h4 class="text-xl font-semibold text-white">Creative Design</h4>
      <p class="pt-2 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
        iste.
      </p>
      <div class="px-5 py-8">
        <img
            class="w-full"
            src="/images/illustrations/creativedesign-amber.svg"
            alt="image"
        />
      </div>
      <button
          class="btn w-full border border-white/10 bg-white/20 text-white hover:bg-white/30 focus:bg-white/30"
      >
        Start Design
      </button>
    </div>
    <div
        class="rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 py-6 px-5 text-center"
    >
      <h4 class="text-xl font-semibold text-white">Fully Responsive</h4>
      <p class="pt-2 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam
        odio totam?
      </p>
      <div class="px-5 py-8">
        <img
            class="w-full"
            src="/images/illustrations/responsive-rose.svg"
            alt="image"
        />
      </div>
      <button
          class="btn w-full border border-white/10 bg-white/20 text-white hover:bg-white/30 focus:bg-white/30"
      >
        Start Design
      </button>
    </div>
    <div
        class="rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 py-6 px-5 text-center"
    >
      <h4 class="text-xl font-semibold text-white">Performance</h4>
      <p class="pt-2 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
        iste.
      </p>
      <div class="px-5 py-8">
        <img
            class="w-full"
            src="/images/illustrations/performance-indigo.svg"
            alt="image"
        />
      </div>
      <button
          class="btn w-full border border-white/10 bg-white/20 text-white hover:bg-white/30 focus:bg-white/30"
      >
        Start Design
      </button>
    </div>
  </div>
</template>