import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQAS0VkqVmaeGuZfC9AmaIY0C059pM2QbrmrahpKT4ChA7afRY0kPkKKWU9T2CQNXSH7M7h5rB2F8-itjIqYcJHbo3Aht4XqOrBGGKwCRdhfNZG3599QRaXh6wQK8JoPqNvas9X-HPlr4cAbHmMrqSGI4_xi55MtQP2yLdXL5U6hhBcT3M_IqJ2HTNte3JkfLAITJBElVeSE-nHqA07WECp817PkMex6z8vhBj9udJWulODU'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
