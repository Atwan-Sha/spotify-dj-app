import { useState, useEffect } from 'react'

interface Track {
  track: {
    name: string
    artists: Artists[] //[{ name: 'artists' }],
    album: {
      name: string
      images: Images[] // [{ url: 'img' }],
    }
    id: string
  }
  token: string
}
interface Artists {
  name: string
}
interface Images {
  url: string
}

export default function TrackInfo({ track, token }: Track) {
  const [relDate, setRelDate] = useState('Rel Date')
  const [label, setLabel] = useState('Label')

  // useEffect(() => {}, [])
  //? change table to flexbox div?
  return (
    <div id="track-info">
      <img className="cover-art" src={track.album.images[0].url} alt="" />
      <table>
        <tbody>
          <tr>
            <td>{track.name}</td>
            <td>{track.album.name}</td>
            <td>BTN</td>
          </tr>
          <tr>
            <td>{track.artists[0].name}</td>
            <td>Release Date, Label</td>
            <td>BTN</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
