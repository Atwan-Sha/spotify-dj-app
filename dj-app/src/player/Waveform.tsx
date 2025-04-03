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
  // audioData,
}: Waveform) {
  console.log('RENDER WAVEFORM')
  // console.table(JSON.stringify(track, null, 2))

  const [range, setRange] = useState(500)
  const [slider, setSlider] = useState(0)
  // const [changed, setChanged] = useState(false)

  //! audioData undefined
  // useEffect(() => {
  //   audioData && setRange(audioData.track.duration)
  // }, [audioData])

  useEffect(() => {
    // console.log('track change: ', track.duration_ms)
    track && setRange(track.duration_ms / 1000)
  }, [track])

  if (isActive) {
    player.getCurrentState().then((state: State) => {
      // setTimeout(() => {
        setSlider(state.position / 1000) //! constant state change and re-renders
        console.log('set slider')
      // }, 1000)
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
          setSlider(Number(e.target.value))
          // setTimeout(() => {
            player.seek(Number(e.target.value) * 1000).then(() => {
              console.log('player seek')
            })
          // }, 1000)
          
          // setChanged(true)
          // console.log('CH ', changed)
          // setTimeout(() => {
          //   setChanged(false)
          //   console.log('CH ', changed)
          // }, 3000)

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
