import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useChatStore = defineStore({
    id: 'chat',
    state: () => ({
        isProfileWindowOpen: useStorage('is-profile-window-open', true),
        chatList: [],
        currentStories: []
    }),
    getters: {
        hasProfileWindowOpen() {
            return this.isProfileWindowOpen;
        },
        getStories() {
            return this.currentStories
        },
        getChatList() {
            return this.chatList
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
            fetch(`/${import.meta.env.VITE_STORIES_PATH}`)
                .then((response) => response.json())
                .then((json) => {
                    this.currentStories = json.stories
                })
        },
        fetchChatList() {
            fetch(`/${import.meta.env.VITE_CHAT_LIST_PATH}`)
                .then((response) => response.json())
                .then((json) => {
                    this.chatList = json.list
                })
        }
    }
})
