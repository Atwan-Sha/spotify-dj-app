import { useState, useEffect } from 'react'
import add from '../assets/icon-add.png'
import share from '../assets/icon-share.png'

function convertDuration(t: number): string {
  //* millis to min:sec
  t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

export default function TrackMetadata({ track, token, isActive }: TrackMetadata) {
  // console.log('RENDER TRACKINFO')

  const [label, setLabel] = useState('label')
  const [relDate, setRelDate] = useState('release date')

  useEffect(() => {
    async function fetchLabelAndRelDate() {
      let albumData: any
      albumData = await fetch(`https://api.spotify.com/v1/albums/${track.album.uri.substring(14)}`, {
        // substring: extract album id from uri
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })
      albumData = await albumData.json()

      setLabel(albumData.label)
      setRelDate(albumData.release_date)
    }
    isActive && fetchLabelAndRelDate()
  }, [track.id, isActive])

  return (
    <div className="metadata-container">
      <img
        className="cover-art"
        src={track.album.images[0].url}
        alt=""
      />
      <div className="track-info">
        <span>{track.name}</span>
        <span>{track.album.name}</span>
        <span>
          {track.artists
            .reduce((artists: string, artist) => artists + `${artist.name}, `, '')
            .slice(0, -2)}
        </span>
        <span>{label}, {relDate}</span>
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
