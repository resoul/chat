<script>
import Stats from "@/components/drawer/Stats.vue";
export default {
  name: "Drawer",
  components: {
    Stats
  }
}
</script>

<template>
  <div id="right-sidebar" class="drawer drawer-right">
    <div class="drawer-overlay fixed inset-0 z-[150] hidden bg-slate-900/60"></div>
    <div class="drawer-content fixed right-0 top-0 z-[151] hidden h-full w-full sm:w-80">
      <div class="right-sidebar-tab-wrapper w-ful relative flex h-full flex-col bg-white dark:bg-navy-750">
        <Stats />
      </div>
    </div>
  </div>
</template>