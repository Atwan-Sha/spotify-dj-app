import { useState, useEffect } from 'react'

export default function Waveform({
  track,
  player,
  isActive,
  audioData,
}: Waveform) {
  const [slider, setSlider] = useState(0)
  const [range, setRange] = useState(500)

  useEffect(() => {
    audioData && setRange(audioData.track.duration)
  }, [audioData])

  if (isActive) {
    player.getCurrentState().then((state: State) => {
      setSlider(state.position / 1000)
    })
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
          player.seek(Number(e.target.value) * 1000).then(() => {
            console.log('player seek')
          })
          setSlider(Number(e.target.value))
          console.log('slider move')
        }}
      />
      <p>{slider}</p>
      <p>{range}</p>
    </div>
  )
}
