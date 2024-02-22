import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        isHeaderBlur: useStorage('header-blur', 'is-header-blur'),
        isMonochromeMode: useStorage('monochrome', 'is-monochrome'),
        isCurrentMonochromeMode: useStorage('monochrome-mode', false),
        darkMode: useStorage('dark-mode', 'light'),
        mainClass: 'main-content w-full px-[var(--margin-x)] pb-8',
    }),
    getters: {
        hasHeaderBlur() {
            return this.isHeaderBlur === 'is-header-blur';
        },
        hasMonochromeMode() {
            return this.isCurrentMonochromeMode;
        },
        hasDarkMode() {
            return this.darkMode === 'dark';
        },
        getMainClass() {
            return this.mainClass
        }
    },
    actions: {
        init() {
            if (this.hasHeaderBlur) {
                this.addHeaderBlur()
            } else {
                this.removeHeaderBlur()
            }

            if (this.hasMonochromeMode) {
                this.addMonochromeMode()
            } else {
                this.removeMonochromeMode()
            }

            if (this.hasDarkMode) {
                this.setDarkMode()
            } else {
                this.setLightMode()
            }
        },
        toggleHeaderBlur() {
            document.body.classList.toggle(this.isHeaderBlur)
        },
        removeHeaderBlur() {
            document.body.classList.remove(this.isHeaderBlur)
        },
        addHeaderBlur() {
            document.body.classList.add(this.isHeaderBlur)
        },
        toggleMonochromeMode() {
            this.currentMonochromeMode = !this.currentMonochromeMode
            document.body.classList.toggle(this.isMonochromeMode)
        },
        removeMonochromeMode() {
            this.currentMonochromeMode = false
            document.body.classList.remove(this.isMonochromeMode)
            window.dispatchEvent(
                new CustomEvent("change:monochrome", {
                    detail: { currentMode: "" },
                })
            );
        },
        addMonochromeMode() {
            this.currentMonochromeMode = true
            document.body.classList.add(this.isMonochromeMode)
            window.dispatchEvent(
                new CustomEvent("change:monochrome", {
                    detail: { currentMode: "monochrome" },
                })
            );
        },
        setDarkMode() {
            this.darkMode = 'dark'
            document.documentElement.classList.add('dark');
            window.dispatchEvent(
                new CustomEvent("change:darkmode", {
                    detail: { currentMode: "dark" },
                })
            );
        },
        setLightMode() {
            this.darkMode = 'light'
            document.documentElement.classList.remove('dark');
            window.dispatchEvent(
                new CustomEvent("change:darkmode", {
                    detail: { currentMode: "light" },
                })
            );
        },
        toggleThemeMode() {
            this.darkMode === "light" ? this.setDarkMode() : this.setLightMode();
        },
        setMainClass(className) {
            this.mainClass = className
        }
    }
})
