import { defineStore } from "pinia";

export const useMobileSearchStore = defineStore({
    id: 'mobile-searchbar',
    state: () => ({
        isOpen: false
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