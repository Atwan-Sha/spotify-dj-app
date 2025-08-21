import { useState, useEffect } from 'react'
import '../styles/Playlist.sass'
import Playlist from './Playlist.tsx'

export default function PlaylistContainer({ token }: { token: string }) {
  const [view, setView] = useState(false)






  return (
    <div id="playlist-container">
      <button
        type="button"
        className="btn view"
        onClick={() => {
          console.log('button clicked!')
        }}
      >
        SELECT VIEW
      </button>

      <Playlist token={token} />
    </div>
  )
}