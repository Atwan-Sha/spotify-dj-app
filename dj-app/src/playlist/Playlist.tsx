import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import placeholder from '../assets/cd-cover-placeholder.jpg'
import Track from './Track.tsx'

//* TEST DATA
const mockTrackArr = [
  { id: 'xxxx', cover: placeholder, name: 'Track 1', artist: 'Artist 1', album: 'Album 1', label: 'Label 1', duration: '4:20' },
  { id: 'xxxx', cover: placeholder, name: 'Track 2', artist: 'Artist 2', album: 'Album 2', label: 'Label 2', duration: '4:22' },
  { id: 'xxxx', cover: placeholder, name: 'Track 3', artist: 'Artist 3', album: 'Album 3', label: 'Label 3', duration: '4:23' }
]
const playlistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep

//* utils 
function convertDuration(t: number): string {
  // millis to min:sec
  t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

function simplifyPlaylistData(plData: any) {
  let trackArr = plData.items.map((item: any) => {
    // ! fix if several artists
    // ! fix get label
    // ! fix text-wrap
    // ? custom separate hook/component for data fetching
    return {
      id: item.track.id,
      cover: item.track.album.images[0].url,
      name: item.track.name,
      artist: item.track.artists[0].name,
      album: item.track.album.name,
      label: '*label name*',
      duration: convertDuration(item.track.duration_ms)
    }
  })
  // .slice(0, 14)
  // console.log(trackArr)
  return trackArr
}


export default function Playlist({ token }: { token: string }) {
  console.log('RENDER PLAYLIST')

  const playlistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep

  const [tracks, setTracks] = useState(mockTrackArr)
  // const [playTrack, setPlayTrack] = useState(false)
  // const [playTrackID, setPlayTrackID] = useState('')

  useEffect(() => {
    async function getPlaylistData() {
      let playlistData: any
      playlistData = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })
      playlistData = await playlistData.json()
      // console.log(playlistData.items)
      const playlistTracks = simplifyPlaylistData(playlistData)
      setTracks(playlistTracks)

    }
    getPlaylistData()
  }, [])

  async function playTrackFromPlaylist(id: string) {
    const reqBody = {
      context_uri: `spotify:playlist:${playlistID}`,
      offset: { uri: `spotify:track:${id}` },
      position_ms: 0
    }
    let res = await fetch(`https://api.spotify.com/v1/me/player/play`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(reqBody)
    })
    console.log(res)
  }

  return (
    <>
      <div id="playlist">
        {tracks.map((data, i) => (<Track data={data} playTrack={playTrackFromPlaylist} key={i} />))}
      </div>
    </>
  )
}