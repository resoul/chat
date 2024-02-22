<script>
import { useThemeStore } from "@/components/theme/theme.js";
export default {
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')
  }
}
</script>
