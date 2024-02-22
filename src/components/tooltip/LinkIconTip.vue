<script>
import IconDashboard from "@/components/icons/IconDashboard.vue";
import IconApps from "@/components/icons/IconApps.vue";
import IconComponents from "@/components/icons/IconComponents.vue";
import IconLayouts from "@/components/icons/IconLayouts.vue";
import IconForms from "@/components/icons/IconForms.vue";
import IconElements from "@/components/icons/IconElements.vue";
import tippy, { roundArrow } from "tippy.js";
export default {
  name: "LinkIconTip",
  components: {
    'ui-icon-dashboard': IconDashboard,
    'ui-icon-forms': IconForms,
    'ui-icon-layouts': IconLayouts,
    'ui-icon-components': IconComponents,
    'ui-icon-elements': IconElements,
    'ui-icon-apps': IconApps
  },
  props: {
    tooltip: String,
    placement: String,
    route: String,
    icon: String
  },
  mounted() {
    const tippyPlugins = { roundArrow };
    tippy(this.$refs.link.$el, {
      animation: 'shift-away',
      zIndex: 10003,
      arrow: tippyPlugins.roundArrow,
      content: this.tooltip,
      placement: this.placement,
      plugins: [],
    });
  }
}
</script>

<template>
<router-link ref="link" :to="route" :class="{'dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25' : $route.path !== route }" active-class="bg-primary/10 text-primary dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" class="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25">
  <component :is="icon" />
</router-link>
</template>
