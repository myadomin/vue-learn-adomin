import { getAllMessages, createMessage } from '@/page/example/chat/api/index'
import Vue from 'vue'

export default {
  namespaced: true,

  getters: {
    // 通过当前对话得到当前显示的messages
    currentMessages (state, getters) {
      return getters.currentThread && getters.currentThread.messages.map(id => {
        return state.messages[id]
      }).sort((a, b) => {
        return a.timestamp > b.timestamp
      })
    },
    // 当前选中的对话
    currentThread (state) {
      return state.threads[state.currentThreadID]
    }
  },

  state: {
    currentThreadID: null,
    // 对话
    threads: {
      /* id: {
        id,
        name,
        messages: [...ids],
        lastMessage
      } */
    },
    // 所有消息
    messages: {
      /* id: {
        id,
        threadId,
        threadName,
        authorName,
        text,
        timestamp,
        isRead
      } */
    }
  },

  mutations: {
    // 通过后台请求来的originMessages format出 threads messages
    setMessagesAndThreads (state, originMessages) {
      originMessages.forEach((message) => {
        setThreads(state, message)
        setMessages(state, message)
      })
    },
    // 输入一条消息后 再次 format出 threads messages
    addMessage (state, message) {
      setThreads(state, message)
      setMessages(state, message)
    },
    // 设置当前对话
    setCurrentThread (state, threadID) {
      state.currentThreadID = threadID
    }
  },

  actions: {
    // 请求后台消息
    getAllMessages ({ commit }) {
      getAllMessages(originMessages => {
        commit('setMessagesAndThreads', originMessages)
        // 刷新进来的对话是最后一条消息所在的对话
        commit('setCurrentThread', originMessages[originMessages.length - 1].threadID)
      })
    },
    // 输入一条消息
    addMessage ({ commit, state }, { text }) {
      const thread = state.threads[state.currentThreadID]
      return createMessage({ text, thread }, message => {
        commit('addMessage', message)
      })
    },
    // 切换对话
    changeThread ({ commit }, currentThreadID) {
      commit('setCurrentThread', currentThreadID)
    }
  }
}

const setThreads = (state, message) => {
  // set state.threads
  const thread = state.threads[message.threadID]
  if (!thread) {
    Vue.set(state.threads, message.threadID, {
      id: message.threadID,
      name: message.threadName,
      messages: [message.id],
      lastMessage: message
    })
  } else {
    thread.messages.push(message.id)
    if (message.timestamp > thread.lastMessage.timestamp) {
      thread.lastMessage = message
    }
  }
}

const setMessages = (state, message) => {
  // set state.messages
  Vue.set(state.messages, message.id, message)
}
