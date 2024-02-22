<template>
  <div class="row" style="padding-bottom: 0; margin-bottom: 0;">
    <div class="col m12" style="padding-right: 0;">
      <div class="right chat-container" style="">
        <section id="chat-section" class="module">
          <header
              v-if="showHeader"
              class="top-bar"
              @click="toggleDiscussion"
              :class="[
              !showingDiscussion && unreadMessages.length > 0
                ? 'unread-message'
                : ''
            ]"
          >
            <div>
              <span>
                <i class="material-icons icon discussion-icon">chat_bubble</i>
              </span>
              <h1>Messages</h1>
            </div>
            <div class="right">
              <span class="right">
                <i id="chat-minimize" class="material-icons icon material-icons"
                >minimize</i
                >
              </span>
              <div
                  id="unread-messages-badge-div"
                  class="right"
                  style="padding: 0; margin-right: 1.2em; padding-top: 0.3em;"
              >
                <span
                    id="unread-messages-badge"
                    v-show="unreadMessages.length > 0"
                    class="new badge silver"
                >{{ unreadMessages.length }}</span
                >
              </div>
            </div>
          </header>

          <div class="discussion-div" v-show="showingDiscussion">
            <discussion class="scroll" ref="discussion" />
            <type-box ref="typeBox" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Discussion from "./discussion";
import TypeBox from "./type-box";

export default {
  name: "text-chat",
  components: {
    Discussion,
    TypeBox
  },
  props: {
    showHeader: {
      default: true,
      type: Boolean
    }
  },
  computed: {},
  data: function() {
    return {
      unreadMessages: [],
      showingDiscussion: true
    };
  },
  methods: {
    toggleDiscussion() {
      this.showingDiscussion = !this.showingDiscussion;
    }
  },
  mounted: function() {}
};
</script>

<style lang="scss">
.chat-container {
  position: relative;

  .module {
    // border-width: 1px;
    // border-style: solid;
    // border-color: #000;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    margin: 20px 0 0 20px;
    z-index: 999;
    @media only screen and (max-width: 800px) {
      width: 250px;
    }
  }

  .discussion-icon {
    font-size: 0.9rem;
    vertical-align: bottom;
    margin-bottom: 2px;
    transform: scale(-1, 1);
  }

  #chat-minimize {
    font-size: 24px;
    line-height: 18px;
  }

  .discussion-div {
    min-height: 18em;
    background-color: #f5f5f5;
  }

  .top-bar {
    background: #404040;
    color: white;
    padding: 0.5rem;
    position: relative;
    overflow: hidden;
    height: 44px;
    cursor: pointer;
    > div {
      display: inline-block;
      height: calc(100%);
    }
    h1 {
      display: inline;
      font-size: 1.1rem;
      vertical-align: bottom;
      margin-left: 8px;
    }
    > * {
      position: relative;
    }
  }
}
</style>

<style>
.unread-message::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  bottom: -100%;
  opacity: 0.25;
  background: radial-gradient(white, black);
  animation: pulse 1s ease alternate infinite;
}
</style>
