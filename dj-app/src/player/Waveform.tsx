import { useState, useEffect } from 'react'

function convertTime(t: number): string {
  // t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

export default function Waveform({
  track,
  player,
  isActive,
  isPaused,
  trackChange,
  setTrackChange
}: Waveform) {
  console.log('RENDER WAVEFORM')
  // console.table(JSON.stringify(track, null, 2))

  const [range, setRange] = useState(500)
  const [slider, setSlider] = useState(0)

  const getPlayerState = () => {
    player.getCurrentState().then((state: State) => {
      setSlider(state.position / 1000)
      console.log('set slider')
      // console.log(state.disallows)
    })
  }

  useEffect(() => {
    let id = 0
    if (track && isActive && !isPaused && !trackChange) {
      setRange(track.duration_ms / 1000)
      id = setInterval(getPlayerState, 1000)
    }
    return () => {
      clearInterval(id)
      trackChange && setSlider(0)
      trackChange && setTrackChange(false)
      console.log('CLEANUP')
    }
  }, [track, isPaused, trackChange])


  return (
    <div id="waveform">
      <label htmlFor="track-pos">Track Pos</label>
      <input
        type="range"
        id="track-pos"
        name="track-pos"
        min="0"
        max={range} // track length
        value={slider} // track pos
        onChange={(e) => {
          setSlider(Number(e.target.value))
          player.seek(Number(e.target.value) * 1000).then(() => {
            console.log('player seek')
          })
        }}
      />
      <p>{convertTime(slider)}</p>
      <p>-{convertTime(range - slider)}</p>
    </div>
  )
}
