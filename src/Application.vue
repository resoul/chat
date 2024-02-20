<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Drawer from "@/components/drawer/Drawer.vue";
import tippy, { followCursor, roundArrow } from "tippy.js";
import {tippyPlugins} from "@/components/tooltip.js";
export default {
  name: "Application",
  components: {
    'ui-sidebar': Sidebar,
    'ui-drawer': Drawer
  },
  mounted() {
    document.body.classList.add('is-header-blur')
    //document.body.classList.add('is-sidebar-open')
    document.body.classList.add('has-min-sidebar')
    const tippyPlugins = { followCursor, roundArrow };
    const TOOLTIP_SELECTOR = "[data-tooltip]";
    const InitTooltips = () => {
      const tooltips = document.querySelectorAll(TOOLTIP_SELECTOR);

      if (!tooltips) return;

      const options = (data) => {
        const config = {
          plugins: [],
          content: data.tooltip,
          arrow: tippyPlugins.roundArrow,
          animation: "shift-away",
          zIndex: 10003,
        };

        if (data.placement) config.placement = data.placement;
        if (data.tooltipTheme) config.theme = data.tooltipTheme;
        if (data.tooltipDelay) config.delay = parseInt(data.tooltipDelay);
        if (data.tooltipDuration) config.duration = parseInt(data.tooltipDuration);
        if (data.tooltipTrigger) config.trigger = data.tooltipTrigger;

        if (data.tooltipFollowCursor !== undefined) {
          config.plugins.push(followCursor);

          if (["x", "y", "initial"].includes(data.tooltipFollowCursor)) {
            if (data.tooltipFollowCursor === "x")
              config.followCursor = "horizontal";
            if (data.tooltipFollowCursor === "y") config.followCursor = "vertical";
            if (data.tooltipFollowCursor === "initial")
              config.followCursor = "initial";
          } else {
            config.followCursor = true;
          }
        }

        if (data.contentHtml !== undefined) {
          config.content = document
              .querySelector(data.tooltip)
              .content.cloneNode(true);
          config.allowHTML = true;
          config.interactive = true;
          config.theme = "content";
        }

        return config;
      };

      tooltips.forEach((node) => {
        tippy(node, options(node.dataset));
      });
    };
    InitTooltips();
  }
}
</script>

<template>
  <ui-sidebar />
  <ui-drawer />
  <main class="main-content h-100vh chat-app mt-0 flex w-full flex-col">
    <router-view />
  </main>
</template>