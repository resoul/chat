import { defineStore } from "pinia";

export const useRightSidebarStore = defineStore({
    id: 'right-sidebar',
    state: () => ({
        isOpen: false,
    }),
    getters: {
        hasOpen() {
            return this.isOpen;
        }
    },
    actions: {
        close() {
            this.isOpen = false
        },
        open() {
            this.isOpen = true
        },
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
})
