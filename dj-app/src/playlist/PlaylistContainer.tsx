import { useState } from 'react'

import '../styles/PlaylistContainer.sass'

import placeholder from '../assets/cd-cover-placeholder.jpg'
import PlaylistCard from './PlaylistCard.tsx'
import Playlist from './Playlist.tsx'

import { fetchUserPlaylists } from './apiCalls.ts'
import useApiCalls from './useApiCalls.tsx'

//* TEST DATA
const TEST_PLAYLIST_CARDS = [
  { id: 'xxxx', cover: placeholder, name: 'Name 1', tracks: '100', owner: 'User 1', description: 'abcdef' },
  { id: 'xxxx', cover: placeholder, name: 'Name 2', tracks: '50', owner: 'User 2', description: 'abcdef' },
  { id: 'xxxx', cover: placeholder, name: 'Name 3', tracks: '0', owner: 'User 3', description: 'abcdef' },
]
const TEST_PLAYLIST_ID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep

export default function PlaylistContainer() {
  const [view, setView] = useState('PLAYLIST') // 'PLAYLIST' | 'SELECT'
  const [selected, setSelected] = useState(TEST_PLAYLIST_ID)
  const [nrOfTracks, setNrOfTracks] = useState(0)

  const selectPlaylist = (playlistID: string, tracks: number) => {
    // console.log('select playlist:', playlistID)
    setSelected(playlistID)
    setNrOfTracks(tracks)
    setView('PLAYLIST')
  }

  // const { data, loading, error } = useApiCalls(fetchUserPlaylists, [])
  // // console.log('fetch returns: ', data, loading, error)

  // if (loading) {
  //   return (
  //     <div id="playlist-container">
  //       <p>Loading...</p>
  //     </div>
  //   )
  // }

  // if (error) {
  //   // console.log('Error: ', error.message)
  //   return (
  //     <div id="playlist-container">
  //       <p>Error: {error.message}</p>
  //     </div>
  //   )
  // }

  // if (!data) return null

  // return (
  //   <div id="playlist-container">
  //     <button
  //       type="button"
  //       className="btn view"
  //       onClick={() => {
  //         setView(view == 'PLAYLIST' ? 'SELECT' : 'PLAYLIST')
  //       }}
  //     >
  //       {view}
  //     </button>

  //     <div style={{ display: view == 'PLAYLIST' ? 'block' : 'none' }}>
  //       <Playlist playlistID={selected} nrOfTracks={nrOfTracks} />
  //     </div>

  //     <div style={{ display: view == 'SELECT' ? 'block' : 'none' }}>
  //       {data.map((data: any, i: number) => (
  //         <PlaylistCard plData={data} selectThisPlaylist={selectPlaylist} key={i} />
  //       ))}
  //     </div>
  //   </div>
  // )

  //*LAZY LOAD TEST
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
        <Playlist playlistID={selected} nrOfTracks={nrOfTracks} />
      </div>

      <div style={{ display: view == 'SELECT' ? 'block' : 'none' }}>
        {TEST_PLAYLIST_CARDS.map((data: any, i: number) => (
          <PlaylistCard plData={data} selectThisPlaylist={selectPlaylist} key={i} />
        ))}
      </div>
    </div>
  )



}
