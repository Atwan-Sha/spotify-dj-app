
const token = 'BQCU80ne48giWoFjkzb_8P0vp-zk8NGIhc4sd7OWWjpXdfnBk93MQ1kMhMWPfQj_LL9UruvYzfesJnaH4L3o-ikEQ3GvP_1W_4gCm3_XzrUGtzDGLKxDyFFKncRd7xiPxDons1hYbUm211mS9WOfjtKtJ50e-wwdryvF5-8erfqiJ6_6uXNB17AdbW4eq6toNOaC_RZkejjLjQ'
const trackID = '5iu4J9Ea1K13vFk8yQe60K'

async function getAlbumData(trackID, token) {
  //* get album ID
  let albumID
  let trackData = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
  )
  trackData = await trackData.json()
  albumID = trackData.album.id

  //* get rel date and label
  let relDate
  let label
  let albumData = await fetch(
    `https://api.spotify.com/v1/albums/${albumID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
  )

  albumData = await albumData.json()
  relDate = await albumData.release_date
  label = await albumData.label

  return {'rel_date': relDate, 'label': label}
}

console.log(await getAlbumData(trackID, token))
