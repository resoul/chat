<template>
  <li :class="owner">
    <div class="avatar"><img class="avatar-img" :src="avatarSrc" /></div>
    <div class="chat-message-div">
      <div>
        <p class="from">{{ from }}</p>
        <vue-markdown
            class="content"
            v-for="(msg, $index) in message"
            :key="$index"
        >{{ safeMessage(msg) }}</vue-markdown
        >
      </div>
      <timeago
          class="right"
          :datetime="time"
          :auto-update="15"
          :max-time="24 * 60 * 60"
          :format="formatTime"
      />
    </div>
  </li>
</template>

<script>
import moment from "moment";
import Vue from "vue";
import VueTimeago from "vue-timeago";
import VueMarkdown from "vue-markdown";

Vue.use(VueTimeago, {
  name: "timeago", // component name, `timeago` by default
  locale: "en"
});

export default {
  name: "chat-message",
  components: {
    "vue-markdown": VueMarkdown
  },
  props: ["owner", "userHash", "message", "time", "nickname"],
  computed: {
    from: function() {
      return decodeURIComponent(this.nickname);
    },
    avatarSrc: function() {
      return `https://www.gravatar.com/avatar/${
          this.userHash
      }.png?s=64&d=retro`;
    }
  },
  methods: {
    safeMessage: function(msg) {
      return decodeURIComponent(msg);
    },
    formatTime: function(t) {
      var localTime = moment.utc(t).local();
      var timeStr = localTime.format("MM/DD HH:mm");
      return timeStr;
    }
  },
  mounted: function() {
    this.$emit("added-message", this);
  }
};
</script>

<style lang="scss">
.other {
  .avatar {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border: 5px solid white;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }
  }
}

.self {
  justify-content: flex-end;
  align-items: flex-end;
  .chat-message-div {
    order: 1;
    border-bottom-right-radius: 0; // weird shadow fix
  }
  .avatar {
    order: 2;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;
      border: 5px solid white;
      border-right-color: transparent;
      border-top-color: transparent;
      box-shadow: 1px 1px 2px rgba(black, 0.2); // not quite perfect but close
    }
  }
}

.chat-message-div {
  background: white;
  padding: 5px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(black, 0.2);
  min-width: 30%;

  p {
    display: block;
    font-size: 0.8rem;
    margin: 0;
  }
  .content {
    // white-space: pre-wrap; /* Treat whitespace as you would in a textarea */
  }
  time {
    font-size: 0.7rem;
    color: #ccc;
  }

  .from {
    font-size: 0.8rem;
    font-weight: bold;
  }
}

// We override avatar to always be fixed size
.avatar-img {
  width: 2.8rem !important;
  height: 2.8rem !important;
}

@keyframes pulse {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
</style>
