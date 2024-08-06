interface Track {
  name: string
  artists: { name: string }[] //[{ name: 'artists' }],
  album: {
    name: string
    images: { url: string }[] // [{ url: 'img' }],
  }
  id: string
}

interface State {
  // position: number
  // duration: number
  track_window: {
    current_track: Track
  }
  paused: boolean
}

interface PlaybackBtns {
  player: any
  isPaused: boolean
}

interface TrackInfo {
  track: Track
  token: string
  isActive: boolean
}

interface TrackData {
  track: Track
  player: any
  token: string
  isActive: boolean
}

interface Waveform {
  track: Track
  player: any
  audioData: any
}

