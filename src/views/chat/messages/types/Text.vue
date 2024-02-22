<script>
import Types from "@/views/chat/messages/types/Types.vue";

export default {
  name: "Text",
  extends: Types
}
</script>

<template>
  <div :class="group_owner_id === owner_id ? 'rounded-tr-none bg-info/10 dark:bg-accent dark:text-white': 'rounded-tl-none bg-white dark:bg-navy-700 dark:text-navy-100'" class="shadow-sm p-3 text-slate-700 rounded-2xl" v-text="item.message"></div>
</template>
