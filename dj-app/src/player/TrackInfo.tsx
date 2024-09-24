import { useState, useEffect } from 'react'
import placeholder from '../assets/cd-cover-placeholder.jpg'
import add from '../assets/icon-add.png'
import share from '../assets/icon-share.png'

export default function TrackInfo({ track, token, isActive }: TrackInfo) {
  // console.log('RENDER TRACKINFO')

  const [relDate, setRelDate] = useState('release date')
  const [label, setLabel] = useState('label')

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

  //? change table to flexbox div?
  return (
    <div id="track-info">
      <img
        className="cover-art"
        src={isActive ? track.album.images[0].url : placeholder}
        alt=""
      />
      <table>
        <tbody>
          <tr>
            <td>{track.name}</td>
            <td>{track.album.name}</td>
            <td>
              <img
                width="30px"
                height="auto"
                className="icon add"
                src={add}
                alt=""
              />
            </td>
          </tr>
          <tr>
            <td>{track.artists[0].name}</td>
            <td>
              {relDate}, {label}
            </td>
            <td>
              <img
                width="27px"
                height="auto" 
                className="icon share"
                src={share}
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
