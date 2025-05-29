const token =
  'BQAJndDl1lsU4UBVnaG087_04BMc-fD1StTyc_rjeaJBM0nuqH5IpDUkGT6uufadkpExAc343MICFvuMbo-8C8AWzqNbBBy14Ivn_aXz3Ubdf8imOoLrwumIB8IVsgJGSNFbM1nXzsvQ8ZMw9L_LEOMKpE8KwdVHPiAyRss3pZIvuqdgVYXXaO8frzQ6yzbWux2O2YerkAAUH7XpAUwB-TsG6IuW5F5mztiE2KcpahQDg2B0'

// const trackID = '6h8XB17UOsUo83w0NX8Zkq'
const playlistID = '1xdi2SUZ0LaH6Al71Gs7nH'

async function getPlaylist(playlistID, token) {
  let res = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
    headers: {  
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
  res = await res.json()
  console.log(res.items[1].track)
}

getPlaylist(playlistID, token)





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
