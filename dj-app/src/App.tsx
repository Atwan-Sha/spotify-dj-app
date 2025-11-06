import { useState } from 'react'
import { createContext } from 'react';
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
// import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export const UserContext = createContext('')

export default function App() {

  const [token, setToken] = useState(
    'BQCKf9cvTql9bVvmJRKPIi9fxBfLC1eHh7k_v8q-dmw0A0SuWIA7Juw4W5VJ-CkgxAoZDixI4rOu5DiZWWceYScbiGL5-uGMXACzCYUWNbVTAuYGLafPQfJZ_5c_cdlk75JnqPG9ZJsISbKjV7F-eTItm9086dynnMrgNoG7EHCAPxOcZcF40--H9rHbCMwmrrh4R9qaLC-5urh1wh2Y7xaa5QeyP4z3EMLOedkTJKuSTW5j1V8B'
  )

  return (
    <>
      <UserContext.Provider value={token}>
        <PlaylistContainer />
        <Player token={token} />
      </UserContext.Provider>
    </>
  )
}
