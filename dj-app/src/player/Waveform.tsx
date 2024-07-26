import { useState, useEffect } from 'react'

export default function Waveform() {
  const [slider, setSlider] = useState(100)

  return (
    <div id="waveform">
      <label htmlFor="track-pos">Track Pos</label>
      <input
        type="range"
        id="track-pos"
        name="track-pos"
        min="1"
        max="1000" // track length
        value={slider} // track pos
        onChange={(e) => {
          setSlider(Number(e.target.value))
          console.log('slider move')
        }} // player.seek function
      />
      <p>{slider}</p>
      {/* track pos */}
    </div>
  )
}
