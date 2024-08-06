import { useState, useEffect } from 'react'

export default function Waveform({ track, player, audioData }: Waveform) {
  const [slider, setSlider] = useState(100)
  const [range, setRange] = useState(1000)
  // console.log(audioData.track.duration)
  // player ? setRange(audioData.track.duration) : setRange(1000)

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
          console.log('slider move')
        }} // player.seek function
      />
      <p>{slider}</p>
      {/* track pos */}
      {/* <p>{audioData}</p> */}
    </div>
  )
}
