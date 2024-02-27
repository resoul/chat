import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useProfileStore = defineStore({
    id: 'profile',
    state: () => ({
        isFetched: useStorage('isFetched', false),
        currentProfile: useStorage('currentProfile', {
            name: '',
            position: '',
            avatar: '',
        })
    }),
    getters: {
        profile() {
            return this.currentProfile
        }
    },
    actions: {
        init() {
            if (!this.isFetched) {
                fetch('/data/profile.json').then((response) => response.json())
                    .then((json) => {
                        this.currentProfile = json.data
                        this.isFetched = true
                    })
            }
        }
    }
});