const token =
  'BQCihEKAdLpo3_SbqF4vxXQloZ05G9tAG6Biy57M5hp03T0rc3aAT01uYipN4YBeY2Zne0MrrID2uffErrMYW7fRa5Mfz5ov1bH0akJaLTcSY_FQB_4H9k2NpSLjOxqggrFdnYzdZP6GkOOGoTFKX-em7GF1DExxtV5thg5GrvOmLZMrSZcZDwEFmsO1Mym_j6FXhtXFvDqhWA'
const trackID = '6h8XB17UOsUo83w0NX8Zkq'

async function getAlbumData(trackID, token) {
  //* get album ID
  let albumID
  let trackData = await fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  }).catch((e) => console.log('Failed to get Album ID'))

  trackData = await trackData.json()
  if(Object.keys(trackData)[0] == 'error') {
    console.log('Failed to get Album ID', trackData)
    throw new Error
  }
  albumID = trackData.album.id
  // albumID = 'xxxx'

  //* get rel date and label
  let relDate
  let label
  let albumData = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  }).catch((e) => console.log('Failed to get Rel Date and Label'))

  albumData = await albumData.json()
  if(Object.keys(albumData)[0] == 'error') {
    console.log('Failed to get Rel Date and Label', albumData)
    throw new Error
  }
  relDate = albumData.release_date
  label = albumData.label

  return { rel_date: relDate, label: label }
}

const res = getAlbumData(trackID, token)
  .then((data) => console.log(data))
  .catch((e) => console.log('Something went wrong :('))
// console.log(res)
