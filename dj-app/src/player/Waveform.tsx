import { useState, useEffect } from 'react'

function convertTime(t: number): string {
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

export default function Waveform({
  track,
  player,
  isActive,
  audioData,
}: Waveform) {
  console.log('RENDER WAVEFORM')

  const [range, setRange] = useState(500)
  const [slider, setSlider] = useState(0)
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    audioData && setRange(audioData.track.duration)
  }, [audioData])

  if (isActive && !changed) {
    player.getCurrentState().then((state: State) => {
      setTimeout(() => {
        setSlider(state.position / 1000)
      }, 1000)
    })
    // setChanged(false)
  }

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
          setChanged(true)
          // player.getCurrentState().then((state: State) => {
          //   setSlider(state.position / 1000)
          // })
          // setSlider(Number(e.target.value))
        }}
      />
      <p>{convertTime(slider)}</p>
      <p>-{convertTime(range - slider)}</p>
    </div>
  )
}
