import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQACTKOGh9EfdxScpZRe_cG0-HdsUMFE22OzhtqM3KyU5zKYrMvu3BZ-NReeFX6t0ggH5ADCiCiYWKtBuNlgasFSTjlu7SGW5D5fYrRZtlgipAHamU97lLCc5H1R6v6-xVQHjXV-mZlZcW0RFRhZZK2zOkrTrPcd9GGFIHeQY0fig6dPPoj7oD8NPgVzegbsk6iSMWL5GqIah5HI'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
