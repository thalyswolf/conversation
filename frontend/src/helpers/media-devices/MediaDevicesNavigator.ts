import MediaDevicesHelper from './MediaDevicesHelper'
import { useLocaStreamStore } from 'src/stores/local-stream-store'

export default class MediaDevicesNavigator implements MediaDevicesHelper {
  async getUserMedia (constraints: any): Promise<MediaStream> {
    const localStream = await navigator.mediaDevices.getUserMedia(constraints)
    const locaStreamStore = useLocaStreamStore()
    locaStreamStore.setLocalStream(localStream)
    return localStream
  }

  async disableCamera (): void {
    const locaStreamStore = useLocaStreamStore()
    const localStream = await locaStreamStore.getLocalStream
    const videoTrack = localStream.getTracks().find(track => track.kind === 'video')
    videoTrack.enabled = !videoTrack.enabled
  }

  async disableMic (): void {
    const locaStreamStore = useLocaStreamStore()
    const localStream = await locaStreamStore.getLocalStream
    const audioTrack = localStream.getTracks().find(track => track.kind === 'audio')
    audioTrack.enabled = !audioTrack.enabled
  }
}
