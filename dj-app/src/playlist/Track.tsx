import { useState, useEffect, useRef } from 'react'

export default function Track({ data, playTrack, fetchLabel, id }: { data: any, playTrack: Function, fetchLabel: Function, id: number }) {
  // console.log('TRACK STATE', data)
  // const [metadata, setMetadata] = useState(data)
  const [label, setLabel] = useState(data.label)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        console.log(await fetchLabel(data.albumID))
        // setLabel(await fetchLabel(data.albumID))
        if (ref.current) observer.unobserve(ref.current)
      }
      console.log(entry.isIntersecting, id)
    }, { threshold: 1 })

    if (ref.current) observer.observe(ref.current)

    return () => {
      // if (ref.current) observer.unobserve(ref.current)
    }
  }, [])


  return (
    <>
      <div className="track" ref={ref}>
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
          <span>{label}</span>
        </div>
        <span className="duration">
          {data.duration}
        </span>
      </div>
    </>
  )
}