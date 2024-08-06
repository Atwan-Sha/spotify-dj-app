import { useState, useEffect, useRef } from 'react'
import '../styles/Player.sass'

import TrackInfo from './TrackInfo.tsx'
import TrackData from './TrackData.tsx'
import PlaybackBtns from './PlaybackBtns.tsx'
import Waveform from './Waveform.tsx'

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
  const [track, setTrack] = useState(track_format)

  useEffect(() => {
    // console.log('useEffect RUN')

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
    return () => {
      // window.Spotify.Player.prototype.disconnect()
      // script.remove()
      // iframe.remove()
      // console.log(iframe)
      // playerRef.current.disconnect()
      console.log('CLEANUP')
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
        <TrackInfo track={track} token={token} isActive={isActive} />
        <PlaybackBtns player={player} isPaused={isPaused} />
        <TrackData track={track} player={player} token={token} isActive={isActive} />
        {/* <Waveform /> */}
      </div>
      <div id="state-object">
        {/* <p>{JSON.stringify(track)}</p> */}
        {/* <br />
        <p>{track.name}</p>
        <p>{track.artists[0].name}</p>
        <p>{track.album.name}</p>
        <img src={track.album.images[0].url} alt="" width="200"></img> */}
      </div>
    </>
  )
  // }
}
