<script>
import { useThemeStore } from "@/components/theme/theme.js";
import { mapStores } from "pinia";
import { useSidebarStore } from "@/components/sidebar.js";
import TomSelect from "tom-select";
import Directives from "@/components/theme/Directives.vue";
export default {
  extends: Directives,
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')
  },
  computed: {
    ...mapStores(useSidebarStore)
  },
  mounted() {
    this.sidebarStore.close()
  }
}
</script>
