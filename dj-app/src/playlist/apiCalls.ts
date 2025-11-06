//* utils
function convertDuration(t: number): string {
  //* millis to min:sec
  t /= 1000
  const sec = Math.round(t % 60)
  const min = Math.floor(t / 60)
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}
function simplifyPlaylistContainerData(plData: any) {
  let playlistArr = plData.items.map((item: any) => {
    return {
      id: item.id,
      cover: item.images[0].url,
      name: item.name,
      tracks: item.tracks.total,
      owner: item.owner.external_urls.spotify,
      description: item.description,
    }
  })
  return playlistArr
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

//* generic API call functions
//* GET
async function spotifyApiCallGet(token: string, signal: AbortSignal, endpoint: string,) {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  })
  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(
      `Spotify API error: ${res.status} ${res.statusText} - ${errorBody}`
    )
  }
  return res.json()
}
//* PUT
async function spotifyApiCallPut(token: string, endpoint: string, reqBody: Object) {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  })
  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(
      `Spotify API error: ${res.status} ${res.statusText} - ${errorBody}`
    )
  }
  return res
}


//** API calls
export async function fetchUserPlaylists(token: string, signal: AbortSignal) {
  const userPlaylists = await spotifyApiCallGet(token, signal, `me/playlists?limit=10&offset=0`)
  const playlistCardData = simplifyPlaylistContainerData(userPlaylists)
  return playlistCardData
}

export async function fetchPlaylistItems(token: string, signal: AbortSignal, playlistID: string) {
  //! error fetching '#1 tracks' playlist
  const playlistItems = await spotifyApiCallGet(token, signal, `playlists/${playlistID}/tracks?offset=0&limit=100`)
  const playlistTracks = simplifyPlaylistData(playlistItems)
  return playlistTracks
}

export async function fetchLabelOnScroll(token: string, signal: AbortSignal, albumID: string, ) {
  const albumData = await spotifyApiCallGet(token, signal, `albums/${albumID}`)
  return albumData.label
}

export async function playTrackFromPlaylist(token: string, playlistID: string, trackID: string) {
  const reqBody = {
    context_uri: `spotify:playlist:${playlistID}`,
    offset: { uri: `spotify:track:${trackID}` },
    position_ms: 0,
  }
  const statusRes = await spotifyApiCallPut(token, 'me/player/play', reqBody)
  console.log(statusRes)
}
