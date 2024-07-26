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
  isActive: boolean
}
interface Artists {
  name: string
}
interface Images {
  url: string
}

// async function fetchAlbumID(trackID: string, token: string): Promise<any> {
//   let albumID: string
//   let trackData: any
//   trackData = await fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: 'GET',
//   })
//   trackData = await trackData.json()
//   albumID = trackData.album.id
//   return albumID
// }

// async function fetchRelDateAndLabel(albumID: string, token: string): Promise<any> {
//   let relDate: string
//   let label: string
//   let albumData: any
//   albumData = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: 'GET',
//   })

//   albumData = await albumData.json()
//   relDate = await albumData.release_date
//   label = await albumData.label

//   return { rel_date: relDate, label: label }
// }

// async function getAlbumData(trackID: string, token: string) {
//   const albumID = await fetchAlbumID(trackID, token)
//   const albumData = await fetchRelDateAndLabel(albumID, token)
//   return await albumData
// }


async function getAlbumData(trackID: string, token: string) {
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
  let relDate: string
  let label: string
  let albumData: any
  albumData = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })

  albumData = await albumData.json()
  relDate = await albumData.release_date
  label = await albumData.label

  return await { rel_date: relDate, label: label }
}



export default function TrackInfo({ track, token, isActive }: Track) {
  const [relDate, setRelDate] = useState('Rel Date')
  const [label, setLabel] = useState('Label')

  let addAlbumData = { rel_date: 'rel date', label: 'label' }
  if(isActive) {
    addAlbumData = getAlbumData(track.id, token)
  }

  // useEffect(() => {
  //   const addAlbumData = getAlbumData(track.id, token)
  //   console.log(addAlbumData)
  //   // setRelDate(addAlbumData.rel_date)
  //   // setLabel(addAlbumData.label)
  // }, [track.id])

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
            <td>{addAlbumData.rel_date}, {addAlbumData.label}</td>
            <td>BTN</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
