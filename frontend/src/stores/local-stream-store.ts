import { defineStore } from 'pinia'

export const useLocaStreamStore = defineStore('localStream', {
  state: () => ({
    localStream: null
  }),
  getters: {
    getLocalStream: (state) => state.localStream
  },
  actions: {
    setLocalStream (mediaStream: any) {
      this.localStream = mediaStream
    }
  }
})
