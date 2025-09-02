import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import Playlist from './Playlist.tsx'

const testPlaylistArr = ['PLAYLIST 0', 'PLAYLIST 1', 'PLAYLIST 2']

export default function PlaylistContainer({ token }: { token: string }) {
  const [view, setView] = useState('PLAYLIST')
  const [playlists, setPlaylists] = useState(testPlaylistArr)

  useEffect(() => {
    async function fetchUserPlaylists() {
      let playlists: any
      playlists = await fetch(`https://api.spotify.com/v1/me/playlists?limit=20&offset=0`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      })
      playlists = await playlists.json()
      // console.log('playlists: ', playlists.items)

      setPlaylists(playlists.items)


    }
    fetchUserPlaylists()
  }, [])



  return (
    <>
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
        {view == 'PLAYLIST' ?
          <Playlist token={token} /> :
          playlists.map((item, i) => (<PlaylistWidget data={item.name} key={i} />))
        }
      </div>
    </>
  )
}

function PlaylistWidget({ data }: any) {
  // console.log(data)
  return (
    <div>
      PL: {data}
    </div>
  )
}