import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useChatStore = defineStore({
    id: 'chat',
    state: () => ({
        isProfileWindowOpen: useStorage('is-profile-window-open', true),
    }),
    getters: {
        hasProfileWindowOpen() {
            return this.isProfileWindowOpen;
        }
    },
    actions: {
        init() {
            if (this.hasProfileWindowOpen) {
                this.open()
            } else {
                this.close()
            }
        },
        close() {
            this.isProfileWindowOpen = false
        },
        open() {
            this.isProfileWindowOpen = true
        },
        toggle() {
            this.isProfileWindowOpen = !this.isProfileWindowOpen
        }
    }
})
