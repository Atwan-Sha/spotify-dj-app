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

//* generic API call function
async function spotifyApiCall<T>(
  token: string,
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  })

  let method = ''
  if (options.method) {
    method = options.method
  } else {
    method = 'GET'
  }
  console.log('method: ', method)

  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(
      `Spotify API error: ${res.status} ${res.statusText} - ${errorBody}`
    )
  }

  if (method == 'PUT') {
    return res as any
  }
  return res.json() as Promise<T>
}

//** API calls

// export const apiCalls = {

//   fetchPlaylistItems: async (token: string, playlistID: string) => {
//     const playlistItems = await spotifyApiCall(
//       token,
//       `playlists/${playlistID}/tracks?offset=0&limit=100`
//     )
//     const playlistTracks = simplifyPlaylistData(playlistItems)
//     return playlistTracks
//   },

//   fetchLabelOnScroll: async (token: string, playlistID: string) => {
//     const playlistItems = await spotifyApiCall(
//       token,
//       `playlists/${playlistID}/tracks?offset=0&limit=100`
//     )
//     const playlistTracks = simplifyPlaylistData(playlistItems)
//     return playlistTracks
//   },

// }


//! error fetching '#1 tracks' playlist
export async function fetchPlaylistItems(token: string, playlistID: string) {
  const playlistItems = await spotifyApiCall(
    token,
    `playlists/${playlistID}/tracks?offset=0&limit=100`
  )
  const playlistTracks = simplifyPlaylistData(playlistItems)
  return playlistTracks
}

export async function fetchLabelOnScroll(token: string, albumID: string) {
  const albumData = await spotifyApiCall<{ label: string }>(
    token,
    `albums/${albumID}`
  )
  return albumData.label
}

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
  const statusRes = await spotifyApiCall(token, 'me/player/play', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  })
  console.log(statusRes)
}
