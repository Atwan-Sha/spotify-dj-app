
const token = ''

async function getAlbumData(trackID, token) {
  //* get album ID
  const trackData = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
  )

  const albumID = await trackData.json()

  return await res.json()
}

