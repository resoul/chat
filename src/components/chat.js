import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useChatStore = defineStore({
    id: 'chat',
    state: () => ({
        isProfileWindowOpen: useStorage('is-profile-window-open', true),
        messages: [],
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
        },
        getMessages() {
            var lastDate = false;
            return this.messages.reduce((result, item) => {
                const lastGroup = result[result.length - 1];

                if (!lastGroup || lastGroup.owner_id !== item.owner_id) {
                    var row = {
                        owner_id: item.owner_id,
                        items: [item],
                        lastSend: item.time
                    };
                    if (lastDate !== new Date(item.time).toLocaleDateString()) {
                        row.lastDate = new Date(item.time).toLocaleDateString();
                        lastDate = new Date(item.time).toLocaleDateString();
                    }
                    result.push(row);
                } else {
                    lastGroup.items.push(item);
                    lastGroup.lastSend = item.time;
                    if (lastDate !== new Date(item.time).toLocaleDateString()) {
                        lastGroup.lastDate = new Date(item.time).toLocaleDateString();
                        lastDate = new Date(item.time).toLocaleDateString();
                    }
                }

                return result;
            }, []);
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
        },
        fetchMessages() {
            fetch(`/${import.meta.env.VITE_MESSAGES_PATH}`)
                .then((response) => response.json())
                .then((json) => {
                    this.messages = json.messages
                })
        }
    }
})
