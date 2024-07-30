// import { useState, useEffect } from 'react'

export default function PlaybackBtns({ player, isPaused }: Player) {

  return (
    <div id="playback-btns">
      {/* <button type="button" id="cue">
        CUE
      </button> */}

      <button
        type="button"
        className="btn"
        onClick={() => {
          player.previousTrack()
          console.log('Set to previous track!')
        }}
      >
        &lt;&lt;
      </button>

      <button
        type="button"
        className="btn"
        onClick={() => {
          player.togglePlay()
          console.log('toggle play')
        }}
      >
        {isPaused ? 'PLAY' : 'PAUSE'}
        {/* &#10074; &#10074; / &#9654; */}
        {/* {isPaused ? '&#9654' : '&#10074 &#10074'} */}
      </button>

      <button
        type="button"
        className="btn"
        onClick={() => {
          player.nextTrack()
          console.log('Skipped to next track!')
        }}
      >
        &gt;&gt;
      </button>
    </div>
  )
}
