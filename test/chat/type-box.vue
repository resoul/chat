<template>
  <div class="type-box-div input-field">
    <textarea
        rows="3"
        class="chat-type-box materialize-textarea"
        placeholder="Send message to all users in room"
        @keydown.enter.exact.stop.prevent="sendChatMessage"
        v-model="message"
    >
    </textarea>
    <!-- <label for="type-box">Send message to all users in room</label> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import md5 from "md5";
import moment from "moment";

export default {
  name: "text-chat",
  data: function() {
    return {
      message: ""
    };
  },
  computed: {
    ...mapGetters(["senderProfile", "receiverProfile"]),
    ...mapActions(["addMessage"])
  },
  methods: {
    sendChatMessage: function() {
      var msg = this.message.trim();
      if (msg === "") {
        return;
      }

      const { senderProfile, receiverProfile } = this;
      const selfHash = md5(receiverProfile.email);
      const senderHash = md5(senderProfile.email);
      var owner = "other";
      if (senderHash === selfHash) {
        owner = "self";
      }
      msg = {
        owner: owner,
        userHash: senderHash,
        message: [msg],
        nickname: senderProfile.nickname,
        time: moment().valueOf()
      };
      this.$store.dispatch("addMessage", {
        msg,
        selfHash
      });
      this.message = "";
    }
  },
  mounted: function() {}
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .type-box-div {
    margin-top: 2%;
  }
}

.chat-type-box {
  background-color: white;
  width: 100%;
  padding: 0.4em 0 0 0;
  margin: 0;
  border-top-color: rgba(220, 220, 220, 0.6);
  border-top-style: solid;
  border-top-width: 1px;
  max-height: 5em;
  height: 1em;
  overflow-y: auto;
  min-height: 2em !important;
  /*
  position: absolute;    /* Stops box from moving down on new message */
}

.type-box-div {
  margin-top: 0em;
}
</style>
