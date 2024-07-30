import { useState, useEffect } from 'react'
import placeholder from '../assets/cd-cover-placeholder.jpg'

export default function TrackInfo({ track, token, isActive }: Track) {
  console.log('RENDER TRACKINFO')

  const [relDate, setRelDate] = useState('release date')
  const [label, setLabel] = useState('label')

  useEffect(() => {
    async function addRelDateAndLabel(trackID: string, token: string): Promise<any> {
      //* get album ID
      let albumID: string
      let trackData: any
      trackData = await fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })
      trackData = await trackData.json()
      albumID = trackData.album.id

      //* get rel date and label
      let albumData: any
      albumData = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
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
    if (isActive) {
      addRelDateAndLabel(track.id, token)
    }
  }, [track.id, isActive])

  //? change table to flexbox div?
  return (
    <div id="track-info">
      <img className="cover-art" src={isActive ? track.album.images[0].url: placeholder} alt="" />
      <table>
        <tbody>
          <tr>
            <td>{track.name}</td>
            <td>{track.album.name}</td>
            <td>BTN</td>
          </tr>
          <tr>
            <td>{track.artists[0].name}</td>
            <td>
              {relDate}, {label}
            </td>
            <td>BTN</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
