const token =
  'BQDcwcZ2jt118tpbTIUhLE3_BZlaay-aH93xVlfTAqOlglZRExx2zvVW9aCyDtFXnplPSHxfUPQhCFtPkt_FfLhv6dil690oLLvFLdN7ysIFDmWBR3z-9L5_5Gi1P1Xj3Fgvfx7QyPTwLBUpI7Sc6f8dkFKVbcj5_CoKcIlBvjCWgvy8yT6B4cHQME15XfCWylngoEcLT0DpEQ'
const trackID = '6h8XB17UOsUo83w0NX8Zkq'

async function getTrackData(trackID, token) {
  const newTrackData = { length: 0, bpm: 0, key: '' }
  let response = await fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
  response = await response.json()
  console.log(response)
}

getTrackData(trackID, token)

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
