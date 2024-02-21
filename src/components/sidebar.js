import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useSidebarStore = defineStore({
    id: 'sidebar',
    state: () => ({
        isSidebarOpen: useStorage('is-sidebar-open', true),
    }),
    getters: {
        hasSidebarOpen() {
            return this.isSidebarOpen;
        }
    },
    actions: {
        init() {
            if (this.hasSidebarOpen) {
                this.open()
            } else {
                this.close()
            }
        },
        close() {
            this.isSidebarOpen = false
            document.body.classList.remove('is-sidebar-open')
        },
        open() {
            this.isSidebarOpen = true
            document.body.classList.add('is-sidebar-open')
        },
        toggle() {
            this.isSidebarOpen = !this.isSidebarOpen
            document.body.classList.toggle('is-sidebar-open')
        }
    }
})
