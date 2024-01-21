import StartLocalCamera from 'src/application/StartLocalCamera'
import ToggleLocalCamera from 'src/application/ToggleLocalCamera'
import ToggleLocalMic from 'src/application/ToggleLocalMic'
import MediaDevicesNavigator from 'src/helpers/media-devices/MediaDevicesNavigator'

export default class ApplicationFectory {
  getStartLocalCamera (): StartLocalCamera {
    return new StartLocalCamera(
      new MediaDevicesNavigator()
    )
  }

  getToggleLocalCamera (): ToggleLocalCamera {
    return new ToggleLocalCamera(
      new MediaDevicesNavigator()
    )
  }

  getToggleLocalMic (): ToggleLocalMic {
    return new ToggleLocalMic(
      new MediaDevicesNavigator()
    )
  }
}
