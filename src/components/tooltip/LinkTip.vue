<script>
import tippy, { followCursor, roundArrow } from "tippy.js";
export default {
  name: "LinkTip"
}
</script>

<template>

  <a
      href="apps-list.html"
      data-tooltip="Applications"
      data-placement="right"
      class="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
  >
    <svg
        class="size-7"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
          fill="currentColor"
          fill-opacity="0.3"
      />
      <path
          d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
          stroke="currentColor"
          stroke-linecap="round"
      />
      <path
          d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
          stroke="currentColor"
          stroke-linecap="round"
      />
      <rect
          x="4"
          y="8"
          width="16"
          height="3"
          rx="1"
          fill="currentColor"
      />
      <path
          d="M12 11V15"
          stroke="currentColor"
          stroke-linecap="round"
      />
    </svg>
  </a>
</template>
