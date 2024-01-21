import MediaDevicesHelper from 'src/helpers/media-devices/MediaDevicesHelper'

export default class ToggleLocalMic {
  mediaDevicesHelper: MediaDevicesHelper
  constructor (mediaDevicesHelper: MediaDevicesHelper) {
    this.mediaDevicesHelper = mediaDevicesHelper
  }

  execute () {
    this.mediaDevicesHelper.disableMic()
  }
}
