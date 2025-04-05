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
}: Waveform) {
  console.log('RENDER WAVEFORM')
  // console.table(JSON.stringify(track, null, 2))

  const [range, setRange] = useState(500)
  const [slider, setSlider] = useState(0)
  const [intervalID, setIntervalID] = useState(0)

  const getCurrentState = () => {
    if (isActive) {
      player.getCurrentState().then((state: State) => {
        setSlider(state.position / 1000) //! constant state change and re-renders
        console.log('set slider')
      })
    }
  }

  useEffect(() => {
    track && setRange(track.duration_ms / 1000)
    const id = setInterval(getCurrentState, 1000)
    // setIntervalID(id)
    return () => {
      clearInterval(id)
      console.log('CLEANUP')
    }
  }, [track])


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
