import { getAllMessages, createMessage } from '@/view/example/chat/api/index'
import Vue from 'vue'

const setCurrentThread = () => {

}
export default {
  namespaced: true,

  getters: {
    currentMessages (state) {
      return state.threads[state.currentThreadID] && state.threads[state.currentThreadID].messages.map(id => {
        return state.messages[id]
      })
    }
  },

  state: {
    currentThreadID: null,
    allMessages: [],
    threads: {
      /*
      id: {
        id,
        name,
        messages: [...ids],
        lastMessage
      }
      */
    },
    messages: {
      /*
      id: {
        id,
        threadId,
        threadName,
        authorName,
        text,
        timestamp,
        isRead
      }
      */
    }
  },

  mutations: {
    getAllMessages (state, data) {
      state.allMessages = data
    },
    addAllMessages (state, data) {
      state.allMessages.push(data)
    },
    setMessageAndThreadByAllMessages (state) {
      // timestamp从小到大排序 保证后续lastMessage是最近一条消息
      state.allMessages.sort((prev, next) => {
        return prev.timestamp - next.timestamp
      })
      state.threads = {}
      state.messages = {}
      state.allMessages.forEach((obj) => {
        // set state.threads
        if (!state.threads[obj.threadID]) {
          Vue.set(state.threads, obj.threadID, {
            id: obj.threadID,
            name: obj.threadName,
            messages: [obj.id],
            lastMessage: obj.text
          })
        } else {
          state.threads[obj.threadID].messages.push(obj.id)
          state.threads[obj.threadID].lastMessage = obj
        }
        // set state.messages
        Vue.set(state.messages, obj.id, obj)
      })
    },
    setCurrentThread (state, threadID) {
      state.currentThreadID = threadID
    }
  },

  actions: {
    getAllMessages ({ commit }) {
      getAllMessages(data => {
        commit('getAllMessages', data)
        commit('setMessageAndThreadByAllMessages')
        // 刷新进来的对话是最后一条消息所在的对话
        commit('setCurrentThread', data[data.length - 1].threadID)
      })
    },
    changeCurrentThread ({ commit }, currentThreadID) {
      commit('setCurrentThread', currentThreadID)
    },
    addMessage ({ commit, state }, { text }) {
      const thread = state.threads[state.currentThreadID]
      return createMessage({ text, thread }, message => {
        commit('addAllMessages', message)
        commit('setMessageAndThreadByAllMessages')
      })
    }
  }
}
