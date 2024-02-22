<script>
import Types from "@/views/chat/messages/types/Types.vue";

export default {
  name: "Media",
  extends: Types
}
</script>

<template>
  <div class="group relative">
    <img
        class="h-48 rounded-lg object-cover"
        src="/images/800x600.png"
        alt="image"
    />
    <div
        class="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100"
    >
      <button
          class="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
