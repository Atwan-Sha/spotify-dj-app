import { useState } from 'react'
import '../styles/Playlist.sass'
import placeholder from '../assets/cd-cover-placeholder.jpg'
import PlaylistCard from './PlaylistCard.tsx'
import Playlist from './Playlist.tsx'

import { fetchUserPlaylists } from './apiCalls.ts'
import useApiCalls from './useApiCalls.tsx'

//* TEST DATA
const testPlaylistArr = [
  { id: 'xxxx', cover: placeholder, name: 'Name 1', tracks: '0', owner: 'User 1', description: 'abcdef' },
  { id: 'xxxx', cover: placeholder, name: 'Name 2', tracks: '0', owner: 'User 2', description: 'abcdef' },
  { id: 'xxxx', cover: placeholder, name: 'Name 3', tracks: '0', owner: 'User 3', description: 'abcdef' },
]
const testPlaylistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep



export default function PlaylistContainer() {
  const [view, setView] = useState('SELECT')
  const [selected, setSelected] = useState(testPlaylistID)

  const selectPlaylist = (playlistID: string) => {
    console.log('select playlist:', playlistID)
    setSelected(playlistID)
    setView('PLAYLIST')
  }

  const { data, loading, error } = useApiCalls(fetchUserPlaylists, [])
  // console.log('fetch returns: ', data, loading, error)

  if (loading) {
    return (
      <div id="playlist-container">
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    console.log('Error: ', error.message)
    return (
      <div id="playlist-container">
        {/* <p>Error: {error.message}</p> */}
        <button
          type="button"
          className="btn view"
          onClick={() => {
            setView(view == 'PLAYLIST' ? 'SELECT' : 'PLAYLIST')
          }}
        >
          {view}
        </button>

        <div style={{ display: view == 'PLAYLIST' ? 'block' : 'none' }}>
          <Playlist playlistID={selected} />
        </div>

        <div style={{ display: view == 'SELECT' ? 'block' : 'none' }}>
          {testPlaylistArr.map((data: any, i: number) => (
            <PlaylistCard plData={data} select={selectPlaylist} key={i} />
          ))}
        </div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div id="playlist-container">
      <button
        type="button"
        className="btn view"
        onClick={() => {
          setView(view == 'PLAYLIST' ? 'SELECT' : 'PLAYLIST')
        }}
      >
        {view}
      </button>

      <div style={{ display: view == 'PLAYLIST' ? 'block' : 'none' }}>
        <Playlist playlistID={selected} />
      </div>

      <div style={{ display: view == 'SELECT' ? 'block' : 'none' }}>
        {data.map((data: any, i: number) => (
          <PlaylistCard plData={data} select={selectPlaylist} key={i} />
        ))}
      </div>
    </div>
  )
}
