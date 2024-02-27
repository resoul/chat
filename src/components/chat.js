import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useChatStore = defineStore({
    id: 'chat',
    state: () => ({
        isProfileWindowOpen: useStorage('is-profile-window-open', true),
        currentStories: []
    }),
    getters: {
        hasProfileWindowOpen() {
            return this.isProfileWindowOpen;
        },
        getStories() {
            return this.currentStories
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
        },
        fetchStories() {
            fetch('/data/stories.json')
                .then((response) => response.json())
                .then((json) => {
                    this.currentStories = json.stories
                })
        }
    }
})
