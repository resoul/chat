<script>
export default {
  name: "ChatList",
  props: {
    mini: Boolean,
    items: Object
  }
}
</script>

<template>
  <div v-for="item in items" :key="item.uuid" class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600">
    <div class="avatar size-10">
      <img :alt="item.name" :src="item.avatar" class="rounded-full" />
      <div v-if="item.isOnline" class="absolute right-0 size-3 rounded-full border-2 border-white dark:border-navy-700" :class="item.isGroup ? 'bg-slate-300' : 'bg-primary dark:bg-accent'">
        <span v-if="!item.isGroup" class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"></span>
      </div>
    </div>
    <div class="flex flex-1 flex-col" v-if="!mini">
      <div class="flex items-baseline justify-between space-x-1.5">
        <p class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100" v-text="item.name"></p>
        <span class="text-tiny+ text-slate-400 dark:text-navy-300" v-text="item.time"></span>
      </div>
      <div class="mt-1 flex items-center justify-between space-x-1">
        <p v-text="item.msg" class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300"></p>
        <div class="text-tiny+ font-medium leading-none px-1.5 flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full" :class="item.isGroup ? 'bg-slate-200 text-slate-800 dark:bg-navy-450 dark:text-white' : 'bg-primary text-white dark:bg-accent'" v-if="item.count" v-text="item.count"></div>
      </div>
    </div>
  </div>
</template>
