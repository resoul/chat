<script>
import { useThemeStore } from "@/components/theme/theme.js";
import Cleave from 'cleave.js';
import Swiper from "swiper/bundle";
import ApexCharts from "apexcharts";
import Accordion from "accordion-js";
import TomSelect from "tom-select";
import Popper from "@/components/popper.js";
export default {
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')
  },
  mounted() {
    console.log('mounted-dashboard')
  },
  directives: {
    popper: {
      mounted(el, binding) {
        if (binding.value && binding.value.ref && binding.value.root) {
          new Popper(el, el.querySelector(binding.value.ref), el.querySelector(binding.value.root), binding.value.config || {});
        }
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
