const token =
  'BQA7R4N4Q7RTC4-TwEFy1R0MHO2fSQz6FmNQA73gJ1x5aZp4sPRrVJ1egeZQjdtLFh6UGTgO0nVsXCzxrEMv6Z69sm9nXJ4LhQGLSnRWOZmL313BCBOaZcSGRQdiwjnYka8hqMUxGZLuI85MStMEJdL5gyFGbL7Jxg3Wq6PlHd5fFGsk6i-91A6vJTAajmxgmt_aYTnf1iWyu7JE1QwFfuxOSwYtJHSZUcGpkPCbRGYlEhNWDEqT'

async function fetchWebApi(endpoint) {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

//! error undefined img url at #1 tracks playlist track 73
async function getPlaylistItems(playlistID) {
  const res = await fetchWebApi(
    `playlists/${playlistID}/tracks?offset=0&limit=74`
  )
  console.log(res.items)
}

const playlistID = '6tf2tushKR92emtanXaPfy'
getPlaylistItems(playlistID)
