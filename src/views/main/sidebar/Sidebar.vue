<script>
import simplebar from 'simplebar-vue';
import { useSidebarStore } from "@/components/sidebar.js";
export default {
  name: "Sidebar",
  components: {
    simplebar
  },
  setup() {
    const sidebar = useSidebarStore();

    return { sidebar }
  },
  data() {
    return {
      headline: '',
      items: []
    }
  },
  mounted() {
    this.fetch(this.$route.path.split('/')[1])
  },
  watch: {
    $route(to) {
      this.fetch(to.path.split('/')[1])
    }
  },
  methods: {
    fetch(section) {
      fetch('/data/sidebar.json').then((response) => response.json())
          .then((json) => {
            this.headline = json[section].headline
            this.items = json[section].items
          })
    }
  }
}
</script>

<template>
  <div class="sidebar-panel">
    <div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
      <div class="flex h-18 w-full items-center justify-between pl-4 pr-1">
        <p class="text-base tracking-wider text-slate-800 dark:text-navy-100" v-text="headline"></p>
        <button @click="sidebar.close()" class="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <simplebar class="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6">
        <template v-for="(item, index) in items" :key="index">
          <ul class="flex flex-1 flex-col px-4 font-inter">
            <li v-for="element in item" :key="element.name">
              <router-link :to="element.route" :class="{'text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50' : $route.path !== element.route }" class="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out" active-class="font-medium text-primary dark:text-accent-light" v-text="element.name"></router-link>
            </li>
          </ul>
          <div class="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500" v-if="index % 2 === 0"></div>
        </template>
      </simplebar>
    </div>
  </div>
</template>
