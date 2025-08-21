import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import placeholder from '../assets/cd-cover-placeholder.jpg'
import Track from './Track.tsx'

//* TEST DATA
const testTrackArr = [
  { id: 'xxxx', cover: placeholder, name: 'Track 1', artists: 'Artist 1', album: 'Album 1', albumID: null, label: 'Label X', duration: '4:20' },
  { id: 'xxxx', cover: placeholder, name: 'Track 2', artists: 'Artist 2', album: 'Album 2', albumID: '----', label: 'Label 2', duration: '4:22' },
  { id: 'xxxx', cover: placeholder, name: 'Track 3', artists: 'Artist 3', album: 'Album 3', albumID: '----', label: 'Label 3', duration: '4:23' },
]
const largeTestTrackArr = Array(50).fill(testTrackArr[0])

const playlistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep

//* utils 
function convertDuration(t: number): string {
  //* millis to min:sec
  t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

function simplifyPlaylistData(plData: any) {
  let trackArr = plData.items.map((item: any) => {
    // ? fix text-wrap animation
    // ? custom separate hook/component for data fetching
    return {
      id: item.track.id,
      cover: item.track.album.images[0].url,
      name: item.track.name,
      artists:
        item.track.artists
          .reduce((artists: string, artist: any) => artists + `${artist.name}, `, '')
          .slice(0, -2),
      album: item.track.album.name,
      albumID: item.track.album.id,
      label: '----',
      duration: convertDuration(item.track.duration_ms)
    }
  })
  // .slice(0, 14)
  // console.log(trackArr)
  return trackArr
}


export default function Playlist({ token }: { token: string }) {
  // console.log('RENDER PLAYLIST')

  const [tracks, setTracks] = useState(largeTestTrackArr)
  // const [scroll, setScroll] = useState(false)

  useEffect(() => {
    async function fetchPlaylistItems() {
      let playlistItems: any
      playlistItems = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })
      playlistItems = await playlistItems.json()
      const playlistTracks = simplifyPlaylistData(playlistItems)
      // console.log(playlistTracks)

      //* fetch label for all tracks 
      // ? use immutable state?

      // ? lazy-load tracks fixed
      // ? create loading cache instead?
      // ? review chat-GPT solution

      // const tracksWithLabels = await Promise.all(
      //   playlistTracks.map(async (track: any) => {
      //     let albumData: any
      //     albumData = await fetch(`https://api.spotify.com/v1/albums/${track.albumID}`, {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //       method: 'GET',
      //     })
      //     albumData = await albumData.json()
      //     return { ...track, label: albumData.label }
      //   })
      // )

      setTracks(playlistTracks)
      // setTracks(tracksWithLabels)
    }

    fetchPlaylistItems()
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

  async function fetchLabelOnScroll(albumID: string) {
    let albumData: any
    albumData = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    })
    albumData = await albumData.json()
    return albumData.label
  }

  return (
    <>
      <div id="playlist">
        {/* <Track data={tracks[0]} playTrack={playTrackFromPlaylist} /> */}
        {tracks.map((data, i) => (<Track data={data} playTrack={playTrackFromPlaylist} fetchLabel={fetchLabelOnScroll} key={i} id={i} />))}
      </div>
    </>
  )
}