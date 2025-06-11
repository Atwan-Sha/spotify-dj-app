// import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Player.sass'
import placeholder from '../assets/cd-cover-placeholder.jpg'

import TrackMetadata from './TrackMetadata.tsx'
import PlaybackBtns from './PlaybackBtns.tsx'
import ProgressBar from './ProgressBar.tsx'

const track_format = {
  id: '----',
  name: 'name',
  artists: [{ name: 'artists' }],
  album: {
    uri: '----',
    name: 'album',
    images: [{ url: placeholder }],
  },
  duration_ms: 0,
}

export default function Player({ token }: { token: string }) {
  
  const [player, setPlayer] = useState(undefined)
  const [isPaused, setPaused] = useState(true)
  const [isActive, setActive] = useState(false)
  const [track, setTrack] = useState(track_format)
  const [trackChange, setTrackChange] = useState(false)

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
      console.log('set player') //! prop ref change

      player.addListener('ready', ({ device_id }: { device_id: string }) => {
        console.log('Ready with Device ID', device_id)
      })

      player.addListener(
        'not_ready',
        ({ device_id }: { device_id: string }) => {
          console.log('Device ID has gone offline', device_id)
        }
      )

      player.addListener('player_state_changed', (state: State) => {
        if (!state) {
          return
        }
        //? track object format incoherent with docs
        setTrack(state.track_window.current_track)
        console.log('set track') //! prop ref change
        // console.log(state)
        setPaused(state.paused)
        // console.log('set paused')
        // console.log('PLAYER STATE CHANGE')
        player.getCurrentState().then((state: Promise<State>) => {
          !state ? setActive(false) : setActive(true)
        })
      })

      player.connect()
      
    }
    return () => {
      // window.Spotify.Player.prototype.disconnect()
      // script.remove()
      // iframe.remove()
      // console.log(iframe)
      // playerRef.current.disconnect()
      // console.log('CLEANUP')
    }
  }, [])

  // if (!isActive) {
  //   return (
  //     <b>Instance not active. Transfer your playback using your Spotify app </b>
  //   )
  // } else {
  return (
    <>
      {/* <React.StrictMode> */}
      <div id="player">
        <TrackMetadata track={track} token={token} isActive={isActive} />

        <PlaybackBtns
          player={player}
          isPaused={isPaused}
          trackChange={trackChange}
          setTrackChange={setTrackChange}
        />

        <ProgressBar
          track={track}
          player={player}
          isActive={isActive}
          isPaused={isPaused}
          trackChange={trackChange}
          setTrackChange={setTrackChange}
        />

      </div>
      {/* </React.StrictMode> */}
    </>
  )
  // }
}
