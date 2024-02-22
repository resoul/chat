<template>
  <div id="app" class="container">
    <p>
      In this example, you can send messages as two users: User-1 & User-2.
      <br />
    </p>

    <h4>Currently sending messages as:</h4>
    <div class="switch">
      <label>
        User-1
        <input
            type="checkbox"
            ref="profileSwitch"
            @change="switchSenderProfile(!$event.target.checked);"
        />
        <span class="lever"></span> User-2
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TextChat from "./components/text-chat";

export default {
  name: "App",
  components: {
    TextChat
  },
  methods: {
    ...mapActions(["switchSenderProfile"])
  }
};
</script>

<style>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-y: hidden;
}

main {
  flex: 1 0 auto;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.lever {
  background-color: #26a69a !important;
}
</style>
