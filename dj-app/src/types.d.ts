interface MetaData {
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
    current_track: MetaData
  }
  paused: boolean
}

interface Track {
  track: MetaData
  token: string
  isActive: boolean
}

interface Player {
  player: any
  isPaused: boolean
}
