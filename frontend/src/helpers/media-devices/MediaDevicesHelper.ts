export default interface MediaDevicesHelper {
  getUserMedia (constraints: any): Promise<MediaStream>
  disableCamera (): void
  disableMic (): void
}
