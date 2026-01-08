
export default function PlaylistCard({ plData, selectThisPlaylist }: any) {
  // console.log('render card')
  return (
    <div className="playlist-card">
      <img
        className="cover-art"
        src={plData.cover}
        alt=""
      />
      <button
        type="button"
        className="btn play"
        onClick={() => {
          selectThisPlaylist(plData.id, plData.tracks)
        }}
      >
        &#9654;
      </button>
      <div className="playlist-info">
        <span>{plData.name}</span>
        <span>{plData.tracks}</span>
        <span className="bio">{plData.description}</span>
      </div>
    </div>
  )
}
