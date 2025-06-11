import { useState } from 'react'

export default function Track({ data, playTrack }: { data: any, playTrack: Function }) {
  // console.log('TRACK STATE', data)
  // ! label display bug - failing to reload on render?
  
  // const [metadata, setMetadata] = useState(data)

  return (
    <>
      <div className="track">
        <img
          className="cover-art"
          src={data.cover}
          alt=""
        />
        <button
          type="button"
          className="btn play"
          onClick={() => {
            console.log('play track id:', data.id)
            playTrack(data.id)
          }}
        >
          &#9654;
        </button>
        <div className="track-info">
          <span>{data.name}</span>
          <span>{data.album}</span>
          <span>{data.artists}</span>
          <span>{data.label}</span>
        </div>
        <span className="duration">
          {data.duration}
        </span>
      </div>
    </>
  )
}