// import { useState, useEffect } from 'react'

export default function PlaybackBtns({ player, isPaused }: PlaybackBtns) {
  return (
    <div id="playback-btns">
      {/* <button type="button" id="cue">
        CUE
      </button> */}

      {isPaused ? (
        <button
          type="button"
          className="btn play"
          onClick={() => {
            player.togglePlay()
            console.log('toggle play')
          }}
        >
          &#9654;
        </button>
      ) : (
        <button
          type="button"
          className="btn play"
          onClick={() => {
            player.togglePlay()
            console.log('toggle play')
          }}
        >
          &#10074; &#10074;
        </button>
      )}

      <button
        type="button"
        className="btn prev"
        onClick={() => {
          player.previousTrack()
          console.log('Set to previous track!')
        }}
      >
        {/* &lt;&lt; */}
        &#10074;&#9664;
      </button>

      <button
        type="button"
        className="btn next"
        onClick={() => {
          player.nextTrack()
          console.log('Skipped to next track!')
        }}
      >
        {/* &gt;&gt; */}
        &#9654;&#10074;
      </button>
    </div>
  )
}
