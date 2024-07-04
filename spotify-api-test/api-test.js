const token =
  "generate new token...";

async function fetchWebApi(endpoint, method) {
  const res = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
  });
  return await res.json();
}

async function getUserPlaylists(id) {
  const res = await fetchWebApi(`/users/${id}/playlists`, "GET");
  //   console.log(res.tracks.items[0].track.artists);
  console.log(res);
}

userID = "comrade_92";
getUserPlaylists(userID);

