<script>
import IconDashboard from "@/components/icons/IconDashboard.vue";
import IconApps from "@/components/icons/IconApps.vue";
import IconComponents from "@/components/icons/IconComponents.vue";
import IconLayouts from "@/components/icons/IconLayouts.vue";
import IconForms from "@/components/icons/IconForms.vue";
import IconElements from "@/components/icons/IconElements.vue";
import Directives from "@/components/theme/Directives.vue";
export default {
  name: "LinkIconTip",
  extends: Directives,
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
  data() {
    return {
      linkActiveClass: 'bg-primary/10 text-primary dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90',
      linkClass: ''
    }
  },
  watch: {
    $route(to) {
      if (this.route + '/' + to.name === to.fullPath) {
        this.linkClass = this.linkActiveClass;
      } else {
        this.linkClass = 'dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25';
      }
    }
  },
  mounted() {
    if (this.route + '/' + this.$route.name === this.$route.fullPath) {
      this.linkClass = this.linkActiveClass;
    } else {
      this.linkClass = 'dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25';
    }
  }
}
</script>

<template>
<router-link ref="link" v-tooltip="{ placement: this.placement, content: this.tooltip }" :to="route" :class="linkClass" :active-class="linkActiveClass" class="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25">
  <component :is="icon" />
</router-link>
</template>
