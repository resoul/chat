import Vuex from "vuex";
import Vue from "vue";

import moment from "moment";

Vue.use(Vuex);

const user1 = {
    nickname: "User-1",
    email: "user1@grouped-messages"
};

const user2 = {
    nickname: "User-2",
    email: "user2@grouped-messages"
};

export default new Vuex.Store({
    state: {
        receiverProfile: user1,
        senderProfile: user1,
        messages: []
    },
    getters: {
        messages: state => state.messages,
        senderProfile: state => state.senderProfile,
        receiverProfile: state => state.receiverProfile
    },
    mutations: {
        messages(state, messages) {
            state.messages = messages;
        },
        senderProfile(state, senderProfile) {
            state.senderProfile = senderProfile;
        }
    },
    actions: {
        resetTextChat({ commit, state }) {
            commit("messages", []);
            commit("unreadMessages", []);
            commit("showingDiscussion", false);
        },
        addMessage({ state }, { msg, selfHash }) {
            let addAsNewMsg = true;
            const lastMessage = state.messages.slice(-1)[0];
            if (lastMessage && lastMessage.userHash === msg.userHash) {
                const lastMessageTime = moment(lastMessage.time);
                const msgTime = moment(msg.time);
                const diffSeconds = msgTime.diff(lastMessageTime, "seconds");
                console.log(
                    `msgTime=${msgTime} lastMessageTime=${lastMessageTime} seconds=${diffSeconds}`
                );
                if (diffSeconds <= 60) {
                    addAsNewMsg = false;
                    lastMessage.message.push(msg.message);
                    delete msg.message;
                    Object.assign(lastMessage, msg);
                }
            }
            if (addAsNewMsg) {
                state.messages.push(msg);
            }
        },
        switchSenderProfile({ state, commit }, isUser1) {
            if (isUser1) {
                commit("senderProfile", user1);
            } else {
                commit("senderProfile", user2);
            }
        }
    }
});
