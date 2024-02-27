<script>
import Popper from "@/components/popper.js";
import Swiper from "swiper";
import ApexCharts from "apexcharts";
import Cleave from "cleave.js";
import Accordion from "accordion-js";
import tippy, { roundArrow } from "tippy.js";
export default {
  directives: {
    popper: {
      mounted(el, binding) {
        var ref = '.popper-ref',
            root = '.popper-root',
            config = {
              placement: "bottom-end",
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 4],
                  },
                },
              ],
            }

        if (binding.value && binding.value.ref) {
          ref = binding.value.ref;
        }
        if (binding.value && binding.value.root) {
          root = binding.value.root;
        }
        if (binding.value && binding.value.config) {
          config = binding.value.config;
        }

        new Popper(el, el.querySelector(ref), el.querySelector(root), config);
      }
    },
    tooltip: {
      mounted(el, binding) {
        const tippyPlugins = { roundArrow };
        var config = {
          animation: 'shift-away',
          zIndex: 10003,
          arrow: tippyPlugins.roundArrow,
          content: '',
          placement: 'right',
          plugins: [],
        }

        if (binding.value && binding.value.placement) {
          config.placement = binding.value.placement;
        }

        if (binding.value && binding.value.content) {
          config.content = binding.value.content;
        }

        tippy(el, config);
      }
    },
    accordion: {
      mounted(el, binding) {
        new Accordion(el, binding.value || {});
      }
    },
    swiper: {
      mounted(el, binding) {
        el.swiper = new Swiper(el, binding.value || {})
      }
    },
    'apex-charts': {
      mounted(el, binding) {
        setTimeout(() => {
          el.chart = new ApexCharts(el, binding.value || {})
          el.chart.render();
        });
      }
    },
    'scroll-to-bottom': {
      mounted(el) {
        el.scrollTop = el.scrollHeight;
      },
      updated(el) {
        el.scrollTop = el.scrollHeight;
      }
    },
    cleave: {
      mounted(el, binding) {
        el.cleave = new Cleave(el, binding.value || {})
      },
      updated(el) {
        const event = new Event('input', { bubbles: true });
        setTimeout(function () {
          el.value = el.cleave.properties.result
          el.dispatchEvent(event)
        }, 100);
      }
    }
  }
}
</script>