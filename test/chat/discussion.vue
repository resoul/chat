<template>
  <ol id="discussion" class="discussion">
    <chat-message
        v-for="msg in messages"
        :owner="msg.owner"
        :user-hash="msg.userHash"
        :message="msg.message"
        :time="msg.time"
        :nickname="msg.nickname"
        :key="'' + msg.time + msg.userHash + msg.msg"
        @added-message="onNewMessage"
    />
  </ol>
</template>

<script>
import { mapGetters } from "vuex";
import md5 from "md5";

import ChatMessage from "./chat-message";

export default {
  name: "text-chat",
  components: {
    "chat-message": ChatMessage
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["receiverProfile", "messages"])
  },
  methods: {
    onNewMessage: function() {
      var discussion = this.$el;
      discussion.scrollTop = discussion.scrollHeight;
    }
  },
  beforeDestroy() {},
  mounted: function() {}
};
</script>

<style lang="scss">
.discussion {
  list-style: none;
  margin: 0;
  padding: 0 0 0px 0; // finality
  min-height: 15em;
  max-height: 18em;
  overflow-y: auto;
  li {
    padding: 0.15rem 0.15rem 0.15rem 0.15rem;
    overflow: hidden;
    display: flex;
  }
  .avatar {
    // could set height, but gonna bottom-align instead
    position: relative; // for triangle
    img {
      display: block; // triangle position
      width: 100%;
    }
  }
}
</style>
