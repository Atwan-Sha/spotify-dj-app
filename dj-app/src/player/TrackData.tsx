import { useState, useEffect } from 'react'
import Waveform from './Waveform'

const track_data = {
  length: '0:00',
  bpm: '0',
  key: 'Key',
}

const audio_data = {}

function convertTime(t: number): string {
  t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

function convertKey(i: number): string {
  const pitch_class = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ]
  if (i == -1) {
    return 'N/A'
  } else {
    return pitch_class[i]
  }
}

export default function TrackData({
  track,
  player,
  token,
  isActive,
}: TrackData) {
  console.log('RENDER TRACKDATA')

  const [trackData, setTrackData] = useState(track_data)
  const [audioData, setAudioData] = useState(undefined)

  //! get audio-analysis deprecated!
  useEffect(() => {
    // async function getTrackData(): Promise<any> {
    //   let newTrackData: any
    //   newTrackData = await fetch(
    //     `https://api.spotify.com/v1/audio-analysis/${track.id}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //       method: 'GET',
    //     }
    //   )
    //   newTrackData = await newTrackData.json()
    //   console.log(newTrackData)
    //   setTrackData({
    //     length: convertTime(newTrackData.track.duration),
    //     bpm: Math.round(newTrackData.track.tempo).toString(),
    //     key: convertKey(newTrackData.track.key),
    //   })
    //   setAudioData(newTrackData)
    // }
    // isActive && getTrackData()

    setTrackData({
      // length: convertTime(100),
      length: convertTime(track.duration_ms),
      bpm: ' ',
      key: 'Key',
    })
  
  }, [track.id, isActive])

  return (
    <>
      <div id="track-data">
        <ul>
          <li>{trackData.length}</li>
          <li>{trackData.bpm} BPM</li>
          <li>{trackData.key}</li>
        </ul>
      </div>
      <Waveform
        track={track}
        player={player}
        isActive={isActive}
        // audioData={audioData}
      />
    </>
  )
}
