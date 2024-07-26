import { useState, useEffect } from 'react'
import '../css/Player.css'
import TrackInfo from './TrackInfo.tsx'
import PlaybackBtns from './PlaybackBtns.tsx'
import TrackData from './TrackData.tsx'
import Waveform from './Waveform.tsx'

// ? ts interface
const track_format = {
  name: 'name',
  artists: [{ name: 'artists' }],
  album: {
    name: 'album',
    images: [{ url: 'img' }],
  },
  id: 'xxxx',
}

export default function Player({ token }: { token: string }) {
  const [player, setPlayer] = useState(undefined)
  const [isPaused, setPaused] = useState(true)
  const [isActive, setActive] = useState(false)
  const [currTrack, setTrack] = useState(track_format)

  console.log(currTrack)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true
    document.body.appendChild(script)

    // @ts-expect-error TS2339
    window.onSpotifyWebPlaybackSDKReady = () => {
      // @ts-expect-error TS2339
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb: Function) => {
          cb(token)
        },
        volume: 0.5,
      })

      setPlayer(player)

      player.addListener('ready', ({ device_id }: { device_id: string }) => {
        console.log('Ready with Device ID', device_id)
      })

      player.addListener(
        'not_ready',
        ({ device_id }: { device_id: string }) => {
          console.log('Device ID has gone offline', device_id)
        }
      )

      interface State {
        // position: number
        // duration: number
        track_window: { current_track: Track }
        paused: boolean
      }
      interface Track {
        name: string
        artists: Artists[] //[{ name: 'artists' }],
        album: {
          name: string
          images: Images[] // [{ url: 'img' }],
        }
        id: string
      }
      interface Artists {
        name: string
      }
      interface Images {
        url: string
      }

      player.addListener('player_state_changed', (state: State) => {
        if (!state) {
          return
        }

        setTrack(state.track_window.current_track)
        setPaused(state.paused)

        console.log('PLAYER STATE CHANGE')

        player.getCurrentState().then((state: Promise<State>) => {
          !state ? setActive(false) : setActive(true)
        })
      })

      player.connect()
    }
  }, [])

  // if (!isActive) {
  //   return (
  //     <b>Instance not active. Transfer your playback using your Spotify app </b>
  //   )
  // } else {
  return (
    <>
      <div id="player">
        <TrackInfo track={currTrack} token={token} />
        <PlaybackBtns player={player} isPaused={isPaused} />
        {/* <TrackData track={currTrack} /> */}
        <Waveform />
      </div>
      <div id="state-object">
        {/* <p>{JSON.stringify(currTrack)}</p> */}
        {/* <br />
        <p>{currTrack.name}</p>
        <p>{currTrack.artists[0].name}</p>
        <p>{currTrack.album.name}</p>
        <img src={currTrack.album.images[0].url} alt="" width="200"></img> */}
      </div>
    </>
  )
  // }
}
