
//! delete after test
const client_id = ''
const client_secret = ''

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64'),
    },
  })
  const token = await response.json()
  return token.access_token
}

//* test run
const token = await getToken()
console.log(token)

const trackID = '6h8XB17UOsUo83w0NX8Zkq'
const playlistID = '1xdi2SUZ0LaH6Al71Gs7nH'
// getPlaylist(playlistID, token)
// getUsersPlaylists(token)




async function getUsersPlaylists(token) {
  let res = await fetch(
    `https://api.spotify.com/v1/me/playlists`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    },
  )
  res = await res.json()
  console.log(res)
}

async function getPlaylist(playlistID, token) {
  let res = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistID}/items`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    },
  )
  res = await res.json()
  console.log(res)
}

async function getTrack(trackID, token) {
  let response = await fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
  response = await response.json()
  console.log(response)
}
// getTrack(trackID, token)

// async function getTrackData(trackID, token) {
//   //* get track data
//   const newTrackData = { length: 0, bpm: 0, key: '' }
//   let response = await fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: 'GET',
//   })
//   response = await response.json()
//   console.log(response)
// }

// getTrackData(trackID, token)

// async function getAlbumData(trackID, token) {
//   //* get album ID
//   let albumID
//   let trackData = await fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: 'GET',
//   }).catch((e) => console.log('Failed to get Album ID'))

//   trackData = await trackData.json()
//   if(Object.keys(trackData)[0] == 'error') {
//     console.log('Failed to get Album ID', trackData)
//     throw new Error
//   }
//   albumID = trackData.album.id
//   // albumID = 'xxxx'

//   //* get rel date and label
//   let relDate
//   let label
//   let albumData = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: 'GET',
//   }).catch((e) => console.log('Failed to get Rel Date and Label'))

//   albumData = await albumData.json()
//   if(Object.keys(albumData)[0] == 'error') {
//     console.log('Failed to get Rel Date and Label', albumData)
//     throw new Error
//   }
//   relDate = albumData.release_date
//   label = albumData.label

//   return { rel_date: relDate, label: label }
// }

// const res = getAlbumData(trackID, token)
//   .then((data) => console.log(data))
//   .catch((e) => console.log('Something went wrong :('))
// // console.log(res)
