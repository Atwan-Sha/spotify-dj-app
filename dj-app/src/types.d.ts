interface Track {
  id: string
  name: string
  artists: { name: string }[] //[{ name: 'artists' }],
  album: {
    uri: string
    name: string
    images: { url: string }[] // [{ url: 'img' }],
  }
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

interface TrackMetadata {
  track: Track
  token: string
  isActive: boolean
}

interface PlaybackBtns {
  player: any
  isPaused: boolean
  trackChange: boolean
  setTrackChange: function
}

interface ProgressBar {
  track: Track
  player: any
  isActive: boolean
  isPaused: boolean
  trackChange: boolean
  setTrackChange: function
}

