interface Track {
  name: string
  artists: { name: string }[] //[{ name: 'artists' }],
  album: {
    name: string
    images: { url: string }[] // [{ url: 'img' }],
  }
  id: string
  duration_ms: number
}

interface State {
  position: number
  track_window: {
    current_track: Track
  }
  paused: boolean
  disallows: Object
}

interface PlaybackBtns {
  player: any
  isPaused: boolean
  trackChange: boolean
  setTrackChange: function
}

interface TrackInfo {
  track: Track
  token: string
  isActive: boolean
}

interface TrackData {
  track: Track
  isActive: boolean
}

interface ProgressBar {
  track: Track
  player: any
  isActive: boolean
  isPaused: boolean
  trackChange: boolean
  setTrackChange: function
}

