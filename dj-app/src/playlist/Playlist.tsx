import { useState } from 'react'
import '../styles/Playlist.sass'

import Track from './Track.tsx'

export default function Playlist({ token }: { token: string }) {

  const mockTrackArr = ['Track 1', 'Track 2', 'Track 3', 'Track 4']

  return (
    <>
      <div id="playlist">
        {mockTrackArr.map((name, i) => (<Track name={name} key={i} />))}
      </div>
    </>
  )
}