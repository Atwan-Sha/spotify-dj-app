import { useState, useEffect } from 'react'
import '../css/Player.css'
import TrackInfo from './TrackInfo.tsx'
import TrackData from './TrackData.tsx'
import Waveform from './Waveform.tsx'

const track = {
  name: '',
  album: {
    images: [{ url: '' }],
  },
  artists: [{ name: '' }],
}

export default function Player() {
  return (
    <div id="player">
      <button type="button" id="cue">
        CUE
      </button>
      <button type="button" id="play">
        PLAY
      </button>
    </div>
  )
}
