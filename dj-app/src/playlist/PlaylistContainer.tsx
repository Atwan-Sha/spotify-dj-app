import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import Playlist from './Playlist.tsx'

const testPlaylistArr = ['PLAYLIST 0', 'PLAYLIST 1', 'PLAYLIST 2']

export default function PlaylistContainer({ token }: { token: string }) {
  const [view, setView] = useState('PLAYLIST')



  
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
        {view == 'PLAYLIST' ? <Playlist token={token} /> : testPlaylistArr.map((data, i) => (<PlaylistWidget data={data} key={i} />))}
      </div>
    </>
  )
}

function PlaylistWidget({data}: any) {




  return (
    <div>
      PLAYLIST WIDGET, {data}
    </div>
  )
}