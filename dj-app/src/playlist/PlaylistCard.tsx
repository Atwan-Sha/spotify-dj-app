
export default function PlaylistCard({ plData, select }: any) {
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
          select(plData.id)
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
