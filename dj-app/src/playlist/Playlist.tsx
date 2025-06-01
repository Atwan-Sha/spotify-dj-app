import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import Track from './Track.tsx'

function simplifyPlaylistData(plData: any) {
  let trackArr = plData.items.map((item: any) => item.track.name).slice(0, 10)
  return trackArr
}

export default function Playlist({ token }: { token: string }) {
  console.log('RENDER PLAYLIST')

  // const mockTrackArr = ['Track 1', 'Track 2', 'Track 3', 'Track 4']
  const mockTrackArr = [
    { name: 'Track 1', artist: 'Artist 1', album: 'Album 1', label: 'Label 1', duration: '4:20' },
    { name: 'Track 2', artist: 'Artist 2', album: 'Album 2', label: 'Label 2', duration: '4:22' },
    { name: 'Track 3', artist: 'Artist 3', album: 'Album 3', label: 'Label 3', duration: '4:23' }
  ]

  const playlistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep

  const [tracks, setTracks] = useState(mockTrackArr)

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
      // let playlistTracks = simplifyPlaylistData(playlistData)
      // setTracks(playlistTracks)
    }
    getPlaylistData()

  }, [])

  return (
    <>
      <div id="playlist">
        {tracks.map((data, i) => (<Track data={data} key={i} />))}
      </div>
    </>
  )
}