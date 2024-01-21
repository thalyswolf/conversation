import MediaDevicesHelper from 'src/helpers/media-devices/MediaDevicesHelper'

export default class StartLocalCamera {
  mediaDevicesHelper: MediaDevicesHelper
  constructor (mediaDevicesHelper: MediaDevicesHelper) {
    this.mediaDevicesHelper = mediaDevicesHelper
  }

  async execute () {
    const constraints = {
      video: {
        width: { min: 640, ideal: 1920, max: 1920 },
        height: { min: 480, ideal: 1080, max: 1080 }
      },
      audio: false
    }
    await this.mediaDevicesHelper.getUserMedia(constraints)
  }
}
