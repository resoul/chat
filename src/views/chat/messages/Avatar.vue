<script>
export default {
  name: "Avatar",
  props: {
    src: String,
    alt: String
  }
}
</script>

<template>
  <div class="avatar">
    <img class="rounded-full" :src="src" :alt="alt" />
  </div>
</template>