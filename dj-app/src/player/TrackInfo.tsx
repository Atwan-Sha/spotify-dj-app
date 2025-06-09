import { useState, useEffect } from 'react'
import placeholder from '../assets/cd-cover-placeholder.jpg'
import add from '../assets/icon-add.png'
import share from '../assets/icon-share.png'

function convertDuration(t: number): string {
  //* millis to min:sec
  t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

export default function TrackInfo({ track, token, isActive }: TrackInfo) {
  console.log('RENDER TRACKINFO')

  const [relDate, setRelDate] = useState('release date')
  const [label, setLabel] = useState('label')
  // const [duration, setDuration] = useState('0:00')

  useEffect(() => {
    async function getRelDateAndLabel(): Promise<any> {
      //* get album ID
      let trackData: any
      trackData = await fetch(`https://api.spotify.com/v1/tracks/${track.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })
      trackData = await trackData.json()

      //* get rel date and label
      let albumData: any
      albumData = await fetch(`https://api.spotify.com/v1/albums/${trackData.album.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })

      albumData = await albumData.json()
      // console.log(albumData)
      setRelDate(albumData.release_date)
      setLabel(albumData.label)
    }
    isActive && getRelDateAndLabel()
  }, [track.id, isActive])

  return (
    <div className="metadata-container">
      <img
        className="cover-art"
        src={isActive ? track.album.images[0].url : placeholder}
        alt=""
      />
      <div className="track-info">
        <span>{track.name}</span>
        <span>{track.album.name}</span>
        <span>{track.artists[0].name}</span>
        <span>{relDate}, {label}</span>
      </div>
      <span className="duration">
        {convertDuration(track.duration_ms)}
      </span>
      <div className="add-share-container">
        <img
          width="30px"
          height="auto"
          className="icon add"
          src={add}
          alt=""
        />
        <img
          width="27px"
          height="auto"
          className="icon share"
          src={share}
          alt=""
        />
      </div>
    </div>
  )
}
