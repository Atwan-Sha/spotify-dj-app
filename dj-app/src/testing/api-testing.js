
const token = 'BQD_p9HlvskiEjwEvlk2aIEkjcvoaLKGRyiLlIqBBzNagUrkb4eUZC7KlNZ9qWQfluYv19e-B0k2Fod5IH7svfZoWiBQCpNxdp9MArEiJCH8y8libQ3vmJ8_e3PHRnQXJJ7rrh9HCwXtPf6BRnnnVSR0guPRi1HusKbmojNBd18OHk6oSGWD7Ay4mkNK9-eMqKgfsr8ESWjsuQ'
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
  relDate = albumData.release_date
  label = albumData.label

  return {'rel_date': relDate, 'label': label}
}

const res = await getAlbumData(trackID, token)
console.log(res)

