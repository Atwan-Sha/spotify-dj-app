import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import placeholder from '../assets/cd-cover-placeholder.jpg'
import Playlist from './Playlist.tsx'

// const testPlaylistArr = ['PLAYLIST 0', 'PLAYLIST 1', 'PLAYLIST 2'

//* TEST DATA
const testPlaylistArr = [
  { id: 'xxxx', cover: placeholder, name: 'Name 1', tracks: '0', owner: 'User 1', description: 'abcdef' },
  { id: 'xxxx', cover: placeholder, name: 'Name 2', tracks: '0', owner: 'User 2', description: 'abcdef' },
  { id: 'xxxx', cover: placeholder, name: 'Name 3', tracks: '0', owner: 'User 3', description: 'abcdef' },
]
const testPlaylistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep

function simplifyPlaylistContainerData(plData: any) {
  let playlistArr = plData.items.map((item: any) => {
    return {
      id: item.id,
      cover: item.images[0].url,
      name: item.name,
      tracks: item.tracks.total,
      owner: item.owner.external_urls.spotify,
      description: item.description,
    }
  })
  return playlistArr
}


export default function PlaylistContainer({ token }: { token: string }) {
  const [view, setView] = useState('SELECT')
  const [playlists, setPlaylists] = useState(testPlaylistArr)
  const [selected, setSelected] = useState(testPlaylistID)

  useEffect(() => {
    async function fetchUserPlaylists() {
      let userPlaylists: any
      userPlaylists = await fetch(`https://api.spotify.com/v1/me/playlists?limit=10&offset=0`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })
      userPlaylists = await userPlaylists.json()
      const playlistCardData = simplifyPlaylistContainerData(userPlaylists)
      setPlaylists(playlistCardData)
      // console.log(playlistCardData)
    }
    fetchUserPlaylists()
  }, [])

  function selectPlaylist(playlistID: string) {
    console.log('select playlist:', playlistID)
    setSelected(playlistID)
    setView('PLAYLIST')
  }

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
        <Playlist token={token} playlistID={selected} />
      </div>

      <div style={{ display: view == 'SELECT' ? 'block' : 'none' }}>
        {playlists.map((data, i) => (
          <PlaylistCard data={data} select={selectPlaylist} key={i} />
        ))}
      </div>
    </div>
  )
}


function PlaylistCard({ data, select }: any) {
  console.log('render card')
  return (
    <div className="playlist-card">
      <img
        className="cover-art"
        src={data.cover}
        alt=""
      />
      <button
        type="button"
        className="btn play"
        onClick={() => {
          select(data.id)
        }}
      >
        &#9654;
      </button>
      <div className="playlist-info">
        <span>{data.name}</span>
        <span>{data.tracks}</span>
        <span>{data.description}</span>
      </div>
    </div>
  )
}