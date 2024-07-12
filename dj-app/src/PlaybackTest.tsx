import { useState, useEffect } from 'react'
import './css/PlaybackTest.css'

const track = {
  name: '',
  album: {
    images: [{ url: '' }],
  },
  artists: [{ name: '' }],
}

export default function PlaybackTest({ token }) {
  const [player, setPlayer] = useState(undefined)
  const [isPaused, setPaused] = useState(false)
  const [isActive, setActive] = useState(false)
  const [currTrack, setTrack] = useState(track)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(token)
        },
        volume: 0.5,
      })

      setPlayer(player)

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
      })

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          return
        }

        setTrack(state.track_window.current_track)
        setPaused(state.paused)

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true)
        })
      })

      player.connect()
    }
  }, [])

  if (!isActive) {
    return (
      <b>Instance not active. Transfer your playback using your Spotify app </b>
    )
  } else {
    return (
      <>
        <h3>PlaybackTest</h3>

        <div className="playback-info">
          <img
            src={currTrack.album.images[0].url}
            className="now-playing__cover"
            alt=""
            width="300px"
            height="auto"
          />
          <div className="now-playing__name">{currTrack.name}</div>
          <div className="now-playing__artist">{currTrack.artists[0].name}</div>
        </div>

        <button
          className="btn-spotify"
          onClick={() => {
            player.previousTrack()
            console.log('Set to previous track!')
          }}
        >
          &lt;&lt;
        </button>

        <button
          className="btn-spotify"
          onClick={() => {
            player.togglePlay()
            console.log('toggle play')
          }}
        >
          {isPaused ? 'PLAY' : 'PAUSE'}
        </button>

        <button
          className="btn-spotify"
          onClick={() => {
            player.nextTrack()
            console.log('Skipped to next track!')
          }}
        >
          &gt;&gt;
        </button>
      </>
    )
  }
}
