import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import placeholder from '../assets/cd-cover-placeholder.jpg'
import Track from './Track.tsx'
import { fetchPlaylistItems } from './apiCalls.ts'

//* TEST DATA
const testTrackArr = [
  { id: 'xxxx', cover: placeholder, name: 'Track 1', artists: 'Artist 1', album: 'Album 1', albumID: null, label: 'Label X', duration: '4:20' },
  { id: 'xxxx', cover: placeholder, name: 'Track 2', artists: 'Artist 2', album: 'Album 2', albumID: '----', label: 'Label 2', duration: '4:22' },
  { id: 'xxxx', cover: placeholder, name: 'Track 3', artists: 'Artist 3', album: 'Album 3', albumID: '----', label: 'Label 3', duration: '4:23' },
]
const largeTestTrackArr = Array(50).fill(testTrackArr[0])
const testPlaylistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep


export default function Playlist({ token, playlistID }: { token: string, playlistID: string }) {
  const [tracks, setTracks] = useState(largeTestTrackArr)
  console.log('render playlist: ', playlistID)

  useEffect(() => {
    async function apiCall() {
      setTracks(await fetchPlaylistItems(token, playlistID))
    }
    apiCall()
  }, [playlistID])


  return (
    <>
      <div className="playlist">
        {/* <Track data={tracks[0]} playTrack={playTrackFromPlaylist} /> */}
        {tracks.map((data, i) => (
          <Track
            token={token}
            data={data}
            playlistID={playlistID}
            key={i}
            id={i}
          />))}
      </div>
    </>
  )
}