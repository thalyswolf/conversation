<template>
  <q-page>
    <div class="video__area">
      <video class="video__player" id="user-1" autoplay playsinline></video>
      <video class="video__player small__video__player" id="user-2" autoplay playsinline></video>
      <!-- <video class="video-player" id="user-2" autoplay playsinline></video> -->
    </div>
    <div id="controls">
      <div class="control__container" id="camera__btn" @click="toggleCamera">
        <img src="../assets/icons/camera.png">
      </div>
      <div class="control__container" id="mic__btn" @click="toggleMic">
        <img src="../assets/icons/mic.png">
      </div>
      <div class="control__container" id="leave-btn">
        <img src="../assets/icons/phone.png">
      </div>
    </div>
    <div class="chat__area" style="display: none">
      <q-chat-message
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
      <q-input outlined class="input__message" label="Escreva algo" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ApplicationFactory from '../factories/ApplicationFactory'
import { useLocaStreamStore } from 'src/stores/local-stream-store'

export default defineComponent({
  name: 'ChatPage',
  components: { },
  setup () {
    const applicationFactory = new ApplicationFactory()
    const toggleLocalCamera = applicationFactory.getToggleLocalCamera()
    const toggleLocalMic = applicationFactory.getToggleLocalMic()

    onMounted(async () => {
      const startLocalCamera = applicationFactory.getStartLocalCamera()
      await startLocalCamera.execute()
      const locaStreamStore = useLocaStreamStore()

      document.getElementById('user-1').srcObject = locaStreamStore.getLocalStream
      document.getElementById('user-2').srcObject = locaStreamStore.getLocalStream
    })

    const toggleCamera = () => {
      toggleLocalCamera.execute()
      if (!document.getElementById('camera__btn').classList.contains('media__disabled')) {
        document.getElementById('camera__btn').classList.add('media__disabled')
      } else {
        document.getElementById('camera__btn').classList.remove('media__disabled')
      }
    }

    const toggleMic = () => {
      toggleLocalMic.execute()
      if (!document.getElementById('mic__btn').classList.contains('media__disabled')) {
        document.getElementById('mic__btn').classList.add('media__disabled')
      } else {
        document.getElementById('mic__btn').classList.remove('media__disabled')
      }
    }

    return {
      toggleCamera,
      toggleMic
    }
  }
})
</script>
