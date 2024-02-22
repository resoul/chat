<script>
import { useThemeStore } from "@/components/theme/theme.js";
import SMSIcon from "@/components/icons/SMSIcon.vue";
import SaleIcon from "@/components/icons/SaleIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import TodoIcon from "@/components/icons/TodoIcon.vue";
import BoardIcon from "@/components/icons/BoardIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
export default {
  name: "App",
  components: {
    'ui-icon-sms': SMSIcon,
    'ui-icon-sale': SaleIcon,
    'ui-icon-mail': MailIcon,
    'ui-icon-todo': TodoIcon,
    'ui-icon-kanban': BoardIcon,
    'ui-icon-cloud': CloudIcon,
  },
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full px-[var(--margin-x)] pb-8')

    return { theme }
  },
  data() {
    return {
      headline: 'Lineone Applications',
      subHeadline: 'List of prebuilt applications of Lineone',
      apps: [
        {
          title: 'Chat App',
          description: 'Lineone prebuilt Messaging UI kit includes designs for social chat.',
          icon: 'ui-icon-sms',
          iconClass: 'bg-info',
          route: '/chat',
        },
        {
          title: 'Kanban Board',
          description: 'The Kanban Board to keep track of your personal and work tasks.',
          icon: 'ui-icon-kanban',
          iconClass: 'bg-warning',
          route: '/kanban',
        },
        {
          title: 'File Manager',
          description: 'Lineone File Manager UI Kit is designed with modern design trends.',
          icon: 'ui-icon-cloud',
          iconClass: 'bg-secondary',
          route: '/file-manager',
        },
        {
          title: 'Todo App',
          description: 'Lineone Todo UI kit is a simple to-do list and an task management app.',
          icon: 'ui-icon-todo',
          iconClass: 'bg-primary dark:bg-accent',
          route: '/todo',
        },
        {
          title: 'Mail App',
          description: 'Lineone prebuilt Mail UI kit includes designs for email system.',
          icon: 'ui-icon-mail',
          iconClass: 'bg-error',
          route: '/mail',
        },
        {
          title: 'NFT Marketplace V1',
          description: 'Lineone NFT Store UI Kit is responsive and high-quality UI design kit for the NFT marketplace.',
          icon: 'ui-icon-sale',
          iconClass: 'bg-success',
          route: '/nft',
        },
        {
          title: 'NFT Marketplace V2',
          description: 'Lineone NFT Store UI Kit is responsive and high-quality UI design kit for the NFT marketplace.',
          icon: 'ui-icon-sale',
          iconClass: 'bg-info',
          route: '/nft-2',
        },
        {
          title: 'Point of Sale',
          description: 'Lineone POS UI Kit is responsive and high-quality UI design kit for the Point of sale system.',
          icon: 'ui-icon-sale',
          iconClass: 'bg-warning',
          route: '/pos',
        },
        {
          title: 'Travel',
          description: 'Lineone Travel UI Kit is responsive and high-quality UI design kit for the travel agancy wesites.',
          icon: 'ui-icon-sale',
          iconClass: 'bg-primary dark:bg-accent',
          route: '/travel',
        }
      ]
    }
  }
}
</script>

<template>
  <div class="mt-12 text-center">
    <div class="avatar size-16">
      <div class="is-initial rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white">
        <i class="fa-solid fa-shapes text-2xl"></i>
      </div>
    </div>
    <h3 class="mt-3 text-xl font-semibold text-slate-600 dark:text-navy-100" v-text="headline"></h3>
    <p class="mt-0.5 text-base" v-text="subHeadline"></p>
  </div>
  <div class="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
    <div class="card p-4 sm:p-5" v-for="app in apps" :key="app.title">
      <div class="avatar size-12">
        <div class="is-initial rounded-full text-white" :class="app.iconClass">
          <component :is="app.icon" />
        </div>
      </div>
      <h2 class="mt-5 text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100" v-text="app.title"></h2>
      <p class="mt-1" v-text="app.description"></p>
      <div class="mt-5 pb-1">
        <router-link :to="app.route" class="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</router-link>
      </div>
    </div>
  </div>
</template>
