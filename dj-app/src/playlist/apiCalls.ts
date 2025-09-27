//* utils
function convertDuration(t: number): string {
  //* millis to min:sec
  t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

function simplifyPlaylistData(plData: any) {
  let trackArr = plData.items.map((item: any) => {
    return {
      id: item.track.id,
      cover: item.track.album.images[0].url,
      name: item.track.name,
      artists: item.track.artists
        .reduce(
          (artists: string, artist: any) => artists + `${artist.name}, `,
          ''
        )
        .slice(0, -2),
      album: item.track.album.name,
      albumID: item.track.album.id,
      label: '----',
      duration: convertDuration(item.track.duration_ms),
    }
  })
  return trackArr
}

//? generic API call function
async function spotifyApiCall(token: string, endpoint: string) {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })

  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(
      `Spotify API error: ${res.status} ${res.statusText} - ${errorBody}`
    )
  }

  return res.json()
}

//* API calls
export async function fetchPlaylistItems(token: string, playlistID: string) {
  const playlistItems = await spotifyApiCall(token, `playlists/${playlistID}/tracks?offset=0&limit=100`)
  const playlistTracks = simplifyPlaylistData(playlistItems)
  return playlistTracks
}

// export async function fetchPlaylistItems(token: string, playlistID: string) {
//   let playlistItems: any
//   playlistItems = await fetch(
//     `https://api.spotify.com/v1/playlists/${playlistID}/tracks?offset=0&limit=100`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       method: 'GET',
//     }
//   )
//   playlistItems = await playlistItems.json()
//   const playlistTracks = simplifyPlaylistData(playlistItems)
//   return playlistTracks
// }

export async function playTrackFromPlaylist(
  token: string,
  playlistID: string,
  trackID: string
) {
  const reqBody = {
    context_uri: `spotify:playlist:${playlistID}`,
    offset: { uri: `spotify:track:${trackID}` },
    position_ms: 0,
  }
  let res = await fetch(`https://api.spotify.com/v1/me/player/play`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(reqBody),
  })
  console.log(res)
}

export async function fetchLabelOnScroll(token: string, albumID: string) {
  let albumData: any
  albumData = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
  albumData = await albumData.json()
  return albumData.label
}
